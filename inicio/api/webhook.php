<?php
/**
 * Webhook Hurapay
 * Recebe notificações de mudança de status da Hurapay
 * e envia eventos para Utmify automaticamente
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Trata requisições OPTIONS (preflight CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Importa integração Utmify
require_once 'utmify-integration.php';

// Configurações
define('WEBHOOK_LOG', 'webhook_log.log');
define('STATUS_FILE', 'transaction_status.json');

/**
 * Carrega status anterior de uma transação
 */
function carregarStatusAnterior($transactionId) {
    if (!file_exists(STATUS_FILE)) {
        return null;
    }
    
    $data = json_decode(file_get_contents(STATUS_FILE), true);
    return $data[$transactionId] ?? null;
}

/**
 * Salva status atual de uma transação
 */
function salvarStatusAtual($transactionId, $status) {
    $data = [];
    if (file_exists(STATUS_FILE)) {
        $data = json_decode(file_get_contents(STATUS_FILE), true) ?? [];
    }
    
    $data[$transactionId] = $status;
    file_put_contents(STATUS_FILE, json_encode($data, JSON_PRETTY_PRINT));
}

/**
 * Processa webhook da Hurapay
 */
function processarWebhook($payload) {
    // Log do webhook recebido
    $logMsg = date('Y-m-d H:i:s') . " - Webhook recebido: " . json_encode($payload) . "\n";
    file_put_contents(WEBHOOK_LOG, $logMsg, FILE_APPEND);
    
    // Extrai dados do payload
    $transactionId = $payload['data']['id'] ?? null;
    $status = $payload['data']['status'] ?? null;
    
    if (!$transactionId || !$status) {
        return [
            'success' => false,
            'error' => 'Dados inválidos no webhook'
        ];
    }
    
    // Verifica status anterior
    $statusAnterior = carregarStatusAnterior($transactionId);
    
    // Log da mudança de status
    $logMsg = date('Y-m-d H:i:s') . " - Transação $transactionId: $statusAnterior -> $status\n";
    file_put_contents(WEBHOOK_LOG, $logMsg, FILE_APPEND);
    
    // Extrai parâmetros UTM do metadata
    $utmParams = null;
    if (isset($payload['data']['metadata'])) {
        $meta = $payload['data']['metadata'];
        $utmParams = [
            'utm_source' => $meta['utm_source'] ?? null,
            'utm_medium' => $meta['utm_medium'] ?? null,
            'utm_campaign' => $meta['utm_campaign'] ?? null,
            'utm_content' => $meta['utm_content'] ?? null,
            'utm_term' => $meta['utm_term'] ?? null
        ];
    }
    
    // Prepara dados da transação
    $transactionData = [
        'id' => $transactionId,
        'amount' => $payload['data']['amount'] ?? 0,
        'customer' => $payload['data']['customer'] ?? [],
        'created_at' => $payload['data']['created_at'] ?? date('Y-m-d H:i:s')
    ];
    
    // Processa baseado no status
    try {
        // Se mudou de PENDING para PAID
        if ($statusAnterior === 'PENDING' && $status === 'PAID') {
            file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Enviando evento PAID para Utmify\n", FILE_APPEND);
            $resultado = notificarPixPago($transactionData, $utmParams);
            
            if ($resultado['success']) {
                file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Utmify notificado com sucesso (PAID)\n", FILE_APPEND);
            } else {
                file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Erro ao notificar Utmify: " . json_encode($resultado) . "\n", FILE_APPEND);
            }
        }
        
        // Se mudou para REFUNDED
        if ($status === 'REFUNDED' && $statusAnterior !== 'REFUNDED') {
            file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Enviando evento REFUNDED para Utmify\n", FILE_APPEND);
            $resultado = notificarPixReembolsado($transactionData, $utmParams);
            
            if ($resultado['success']) {
                file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Utmify notificado com sucesso (REFUNDED)\n", FILE_APPEND);
            } else {
                file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Erro ao notificar Utmify: " . json_encode($resultado) . "\n", FILE_APPEND);
            }
        }
        
        // Salva o novo status
        salvarStatusAtual($transactionId, $status);
        
        return [
            'success' => true,
            'transaction_id' => $transactionId,
            'status' => $status
        ];
        
    } catch (Exception $e) {
        file_put_contents(WEBHOOK_LOG, date('Y-m-d H:i:s') . " - Erro: " . $e->getMessage() . "\n", FILE_APPEND);
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}

// Recebe payload do webhook
$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);

if (!$payload) {
    $response = [
        'success' => false,
        'error' => 'Payload inválido'
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    http_response_code(400);
    exit;
}

// Processa webhook
$resultado = processarWebhook($payload);

// Retorna resposta
echo json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
http_response_code($resultado['success'] ? 200 : 400);
exit;
?>