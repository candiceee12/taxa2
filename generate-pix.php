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

function jerr($m, $c = 500, $d = []) {
    ob_clean();
    http_response_code($c);
    echo json_encode(['success' => false, 'error' => $m, 'debug' => $d], JSON_UNESCAPED_UNICODE);
    ob_end_flush();
    exit;
}

$customerName = $_GET['customer_name'] ?? $_POST['customer_name'] ?? '';
$customerCpf = $_GET['customer_cpf'] ?? $_POST['customer_cpf'] ?? '';
$customerEmail = $_GET['customer_email'] ?? $_POST['customer_email'] ?? 'cliente@example.com';
$customerPhone = $_GET['customer_phone'] ?? $_POST['customer_phone'] ?? '11999999999';
$amount = $_GET['amount'] ?? $_POST['amount'] ?? '16932';

if (!trim($customerName)) jerr('Nome do cliente é obrigatório', 400);
if (!$customerCpf) jerr('CPF é obrigatório', 400);

// Limpar CPF e Telefone
$customerCpf = preg_replace('/\D/', '', $customerCpf);
$customerPhone = preg_replace('/\D/', '', $customerPhone);

// Referência única para a transação
$reference = 'ACC' . $accountId . '-REF-' . strtoupper(substr(md5($customerCpf . time()), 0, 12));

// Payload conforme documentação Paradise Pags
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

$resp = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

if ($err) jerr('Erro na comunicação com a Paradise Pags', 500, ['message' => $err]);

$dat = json_decode($resp, true);

if ($code >= 200 && $code < 300 && isset($dat['status']) && $dat['status'] === 'success') {
    $pixCode = $dat['qr_code'] ?? '';

    ob_clean();
    echo json_encode([
        'success' => true,
        'pixCode' => $pixCode,
        'pix_code' => $pixCode,
        'transaction_id' => $dat['transaction_id'] ?? $reference,
        'transactionId' => $dat['transaction_id'] ?? $reference,
        'order_id' => $dat['id'] ?? $reference,
        'orderId' => $dat['id'] ?? $reference,
        'amount' => ((int)$amount) / 100,
        'status' => 'pending',
        'gateway' => 'paradise',
        'qr_code_base64' => $dat['qr_code_base64'] ?? ''
    ], JSON_UNESCAPED_UNICODE);
    ob_end_flush();
    exit;
}

$msg = $dat['message'] ?? ($dat['error'] ?? 'Erro ao gerar PIX na Paradise Pags');
jerr($msg, $code ?: 400, ['response' => $dat, 'payload' => $payload]);
