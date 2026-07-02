<?php
/**
 * API PIX - Paradise
 * Verificar Status de Transação
 * Quando status mudar de PENDING para APPROVED envia evento PIX PAGO para Utmify
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Trata requisições OPTIONS (preflight CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configurações
define('API_URL', 'https://multi.paradisepags.com/api/v1/query.php');
define('API_KEY', 'sk_c5e7f172726e1eed9913b459159dcb3fe47d2231ca4485398bd4fa5393e2e1dc');
define('UTMIFY_API_URL', 'https://api.utmify.com.br/api-credentials/orders');
define('UTMIFY_API_TOKEN', '');
define('STATUS_FILE', 'status_pix.json');

// FUNÇÕES
function carregarStatus() {
    if (!file_exists(STATUS_FILE)) return [];
    $content = @file_get_contents(STATUS_FILE);
    return $content ? json_decode($content, true) : [];
}

function salvarStatus($transactionId, $status) {
    $data = carregarStatus();
    $data[$transactionId] = $status;
    file_put_contents(STATUS_FILE, json_encode($data, JSON_PRETTY_PRINT));
}

function logMsg($msg) {
    file_put_contents('pix_log.txt', date('Y-m-d H:i:s') . " - $msg\n", FILE_APPEND);
}

function consultarParadise($transactionId) {
    $url = API_URL . '?action=get_transaction&id=' . urlencode($transactionId);
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'X-API-Key: ' . API_KEY
        ],
        CURLOPT_TIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2
    ]);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    logMsg("Paradise HTTP $httpCode para $transactionId");
    
    if ($httpCode !== 200) {
        return ['success' => false, 'error' => "HTTP $httpCode"];
    }
    
    $data = json_decode($response, true);
    return $data;
}

function enviarParaUtmify($transactionId, $transacao) {
    logMsg("ENVIANDO para Utmify: $transactionId");
    
    try {
        // Decodifica customer_data que vem como JSON string
        $customerData = $transacao['customer_data'] ?? [];
        if (is_string($customerData)) {
            $customerData = json_decode($customerData, true);
        }
        
        // Extrai dados do cliente
        $customer = $customerData['customer'] ?? [];
        $document = $customer['document'] ?? '';
        $phone = $customer['phone'] ?? '';
        
        // Limpa números
        $document = preg_replace('/[^0-9]/', '', $document);
        $phone = preg_replace('/[^0-9]/', '', $phone);
        
        // Valor em centavos - Paradise retorna amount já em centavos
        $amountInCents = (int)($transacao['amount'] ?? 0);
        
        // Extrai tracking parameters do customer_data
        $trackingParams = $customerData['tracking'] ?? [];
        
        // Converte data para UTC
        $createdAt = $transacao['created_at'] ?? date('Y-m-d H:i:s');
        try {
            $createdAtUTC = gmdate('Y-m-d H:i:s', strtotime($createdAt));
        } catch (Exception $e) {
            $createdAtUTC = gmdate('Y-m-d H:i:s');
        }
        
        // Payload para Utmify - APENAS RASTREAMENTO
        $payload = [
            'orderId' => $transactionId,
            'platform' => 'ParadiseIntegration',
            'paymentMethod' => 'pix',
            'status' => 'paid',
            'createdAt' => $createdAtUTC,
            'approvedDate' => gmdate('Y-m-d H:i:s'),
            'refundedAt' => null,
            'customer' => [
                'name' => $customer['name'] ?? 'Cliente',
                'email' => $customer['email'] ?? 'email@exemplo.com',
                'phone' => $phone,
                'document' => $document,
                'country' => 'BR',
                'ip' => $_SERVER['REMOTE_ADDR'] ?? null
            ],
            'products' => [[
                'id' => 'product_' . $transactionId,
                'name' => 'Pagamento DETRAN - Taxas CNH',
                'planId' => null,
                'planName' => null,
                'quantity' => 1,
                'priceInCents' => $amountInCents
            ]],
            'trackingParameters' => [
                'src' => $trackingParams['src'] ?? null,
                'sck' => $trackingParams['sck'] ?? null,
                'utm_source' => $trackingParams['utm_source'] ?? null,
                'utm_campaign' => $trackingParams['utm_campaign'] ?? null,
                'utm_medium' => $trackingParams['utm_medium'] ?? null,
                'utm_content' => $trackingParams['utm_content'] ?? null,
                'utm_term' => $trackingParams['utm_term'] ?? null
            ],
            'commission' => [
                'totalPriceInCents' => $amountInCents,
                'gatewayFeeInCents' => 0,
                'userCommissionInCents' => $amountInCents
            ]
        ];
        
        logMsg("Payload Utmify: " . json_encode($payload));
        
        // Envia para Utmify
        $ch = curl_init(UTMIFY_API_URL);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'x-api-token: ' . UTMIFY_API_TOKEN
            ],
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_TIMEOUT => 10,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_SSL_VERIFYHOST => 2
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        
        logMsg("Utmify HTTP $httpCode - Resposta: " . $response);
        
        if ($error) {
            logMsg("Erro cURL: " . $error);
        }
        
        return $httpCode >= 200 && $httpCode < 300;
        
    } catch (Exception $e) {
        logMsg("ERRO Utmify: " . $e->getMessage());
        return false;
    }
}

// INÍCIO DO PROCESSAMENTO

// Pega ID da transação
$transactionId = null;
if (isset($_GET['id'])) {
    $transactionId = $_GET['id'];
} elseif (isset($_SERVER['PATH_INFO'])) {
    $transactionId = trim($_SERVER['PATH_INFO'], '/');
}

if (!$transactionId) {
    echo json_encode(['success' => false, 'error' => 'ID da transação não informado']);
    exit;
}

logMsg("=== INICIANDO CONSULTA: $transactionId ===");

// Consulta API Paradise
$apiResponse = consultarParadise($transactionId);

if (!$apiResponse || (isset($apiResponse['success']) && !$apiResponse['success'])) {
    echo json_encode(['success' => false, 'error' => 'Erro na API Paradise']);
    exit;
}

// Paradise retorna diretamente os dados da transação
$transacao = $apiResponse;
$statusAtual = strtoupper($transacao['status'] ?? 'UNKNOWN');

logMsg("Status atual: $statusAtual");

// Carrega status anterior
$statusAnterior = null;
$statusData = carregarStatus();
if (isset($statusData[$transactionId])) {
    $statusAnterior = $statusData[$transactionId];
}

logMsg("Status anterior: " . ($statusAnterior ?? 'NÃO ENCONTRADO'));

// VERIFICA SE MUDOU DE PENDING PARA APPROVED
if ($statusAnterior === 'PENDING' && $statusAtual === 'APPROVED') {
    logMsg("✅ DETECTADO: PENDING -> APPROVED! Enviando para Utmify...");
    
    $enviado = enviarParaUtmify($transactionId, $transacao);
    
    if ($enviado) {
        logMsg("✅ ENVIADO com sucesso para Utmify!");
    } else {
        logMsg("❌ FALHA ao enviar para Utmify!");
    }
} else {
    logMsg("ℹ️ Não houve mudança PENDING->APPROVED (Anterior: $statusAnterior, Atual: $statusAtual)");
}

// Salva o status atual
salvarStatus($transactionId, $statusAtual);

// Prepara resposta
$resposta = [
    'success' => true,
    'transaction' => [
        'id' => $transacao['id'] ?? $transactionId,
        'external_id' => $transacao['external_id'] ?? null,
        'status' => $statusAtual,
        'amount' => $transacao['amount'] ?? 0,
        'amount_formatted' => $transacao['amount_in_reais'] ?? 'R$ 0,00',
        'created_at' => $transacao['created_at'] ?? null,
        'updated_at' => $transacao['updated_at'] ?? null
    ]
];

// Adiciona dados extras
if (isset($transacao['customer_data'])) {
    $resposta['transaction']['customer_data'] = $transacao['customer_data'];
}
if (isset($transacao['attempts_data'])) {
    $resposta['transaction']['attempts_data'] = $transacao['attempts_data'];
}

echo json_encode($resposta, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
logMsg("=== CONSULTA FINALIZADA ===");
?>
