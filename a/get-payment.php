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
$accountId = 8094;

$transactionId = $_GET['transactionId'] ?? $_POST['transactionId'] ?? $_GET['transaction_id'] ?? $_POST['transaction_id'] ?? null;

if (empty($transactionId)) {
    ob_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'transactionId é obrigatório']);
    ob_end_flush();
    exit;
}

$url = $apiBaseUrl . '/query.php?action=get_transaction&id=' . urlencode($transactionId);
$ch = curl_init($url);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'X-API-Key: ' . $apiKey,
        'Accept: application/json'
    ],
    CURLOPT_TIMEOUT => 30,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => true
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    ob_clean();
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro na comunicação com a API', 'message' => $curlError]);
    ob_end_flush();
    exit;
}

$data = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300 && is_array($data)) {
    $status = strtolower($data['status'] ?? 'unknown');
    $isPaid = ($status === 'approved');

    ob_clean();
    echo json_encode([
        'success' => true,
        'status' => $status,
        'paid' => $isPaid,
        'transaction_id' => $data['id'] ?? $transactionId,
        'transactionId' => $data['id'] ?? $transactionId,
        'data' => $data
    ], JSON_UNESCAPED_UNICODE);
    ob_end_flush();
    exit;
}

ob_clean();
http_response_code($httpCode ?: 500);
echo json_encode([
    'success' => false, 
    'error' => 'Erro ao verificar status do pagamento', 
    'http_code' => $httpCode, 
    'response' => $data ?: $response
], JSON_UNESCAPED_UNICODE);
ob_end_flush();
?>
