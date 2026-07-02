<?php
ob_start();
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-API-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configurações Paradise Pags
$apiBaseUrl = 'https://multi.paradisepags.com/api/v1';
$apiKey = 'sk_c5e7f172726e1eed9913b459159dcb3fe47d2231ca4485398bd4fa5393e2e1dc';
$productHash = 'prod_0d2ba51f3018db4a';
$accountId = 8094;

function returnError($message, $code = 500, $debug = []) {
    ob_clean();
    http_response_code($code);
    echo json_encode(['success' => false, 'error' => $message, 'debug' => $debug], JSON_UNESCAPED_UNICODE);
    ob_end_flush();
    exit;
}

$customerName = $_GET['customer_name'] ?? $_POST['customer_name'] ?? '';
$customerCpf = $_GET['customer_cpf'] ?? $_POST['customer_cpf'] ?? '';
$customerEmail = $_GET['customer_email'] ?? $_POST['customer_email'] ?? 'cliente@example.com';
$customerPhone = $_GET['customer_phone'] ?? $_POST['customer_phone'] ?? '11999999999';
$amount = $_GET['amount'] ?? $_POST['amount'] ?? '16932';

if (!trim($customerName)) returnError('Nome do cliente é obrigatório', 400);
if (empty($customerCpf)) returnError('CPF é obrigatório', 400);

// Limpar CPF e Telefone
$customerCpf = preg_replace('/\D/', '', $customerCpf);
$customerPhone = preg_replace('/\D/', '', $customerPhone);

// Referência única para a transação
$reference = 'REF-' . strtoupper(substr(md5($customerCpf . time()), 0, 12));

// Payload conforme integração Paradise Pags
$payload = [
    'amount' => (int)$amount,
    'description' => trim($customerName),
    'reference' => $reference,
    'source' => 'api_externa',
    'product_hash' => $productHash,
    'product_id' => $productHash,
    'customer' => [
        'name' => trim($customerName),
        'email' => $customerEmail,
        'phone' => $customerPhone,
        'document' => $customerCpf
    ]
];

$url = $apiBaseUrl . '/transaction.php';
$ch = curl_init($url);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-API-Key: ' . $apiKey,
        'Accept: application/json'
    ],
    CURLOPT_TIMEOUT => 30,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => false
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) returnError('Erro na comunicação com a Paradise Pags', 500, ['message' => $curlError]);

$data = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300 && isset($data['status']) && $data['status'] === 'success') {
    $pixCode = $data['qr_code'] ?? '';
    
    ob_clean();
    echo json_encode([
        'success' => true,
        'pixCode' => $pixCode,
        'pix_code' => $pixCode,
        'transaction_id' => $data['transaction_id'] ?? $reference,
        'transactionId' => $data['transaction_id'] ?? $reference,
        'order_id' => $data['id'] ?? $reference,
        'orderId' => $data['id'] ?? $reference,
        'amount' => ((int)$amount) / 100,
        'status' => 'pending',
        'gateway' => 'paradise',
        'qr_code_base64' => $data['qr_code_base64'] ?? ''
    ], JSON_UNESCAPED_UNICODE);
    ob_end_flush();
    exit;
}

$msg = $data['message'] ?? ($data['error'] ?? 'Erro ao gerar PIX na Paradise Pags');

returnError($msg, $httpCode ?: 400, ['response' => $data, 'payload' => $payload]);
