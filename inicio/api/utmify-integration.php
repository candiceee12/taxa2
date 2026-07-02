<?php
/**
 * Integração com Utmify
 * Gerencia o envio de eventos de vendas para rastreamento
 */

// Configurações da Utmify
define('UTMIFY_API_URL', 'https://api.utmify.com.br/api-credentials/orders');
define('UTMIFY_API_TOKEN', 'HVSEg7uuIKivqaFzF0KqKnfkZqLdObocN8l4');
define('UTMIFY_PLATFORM_NAME', 'HurapayIntegration');

/**
 * Envia evento para Utmify
 */
function enviarEventoUtmify($payload) {
    try {
        $ch = curl_init(UTMIFY_API_URL);
        
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'x-api-token: ' . UTMIFY_API_TOKEN
            ],
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_TIMEOUT => 30,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_SSL_VERIFYPEER => true
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        
        curl_close($ch);
        
        // Log do resultado
        $logMessage = date('Y-m-d H:i:s') . " - Utmify Response (HTTP $httpCode): $response\n";
        file_put_contents('utmify_log.log', $logMessage, FILE_APPEND);
        
        if ($error) {
            throw new Exception('Erro na requisição Utmify: ' . $error);
        }
        
        $result = json_decode($response, true);
        
        if ($httpCode >= 200 && $httpCode < 300) {
            return [
                'success' => true,
                'data' => $result
            ];
        } else {
            return [
                'success' => false,
                'error' => 'Erro Utmify (HTTP ' . $httpCode . ')',
                'details' => $result
            ];
        }
        
    } catch (Exception $e) {
        file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Erro: " . $e->getMessage() . "\n", FILE_APPEND);
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}

/**
 * Formata payload para Utmify - PIX Gerado (waiting_payment)
 */
function formatarPayloadPixGerado($transactionData, $utmParams = null) {
    $orderId = $transactionData['id'];
    $amount = (float)$transactionData['amount'];
    $customerData = $transactionData['customer'];
    $createdAt = $transactionData['created_at'] ?? date('Y-m-d H:i:s');
    
    // Converte para UTC se necessário
    $createdAtUTC = converterParaUTC($createdAt);
    
    // Extrai CPF
    $document = null;
    if (isset($customerData['document']['number'])) {
        $document = preg_replace('/[^0-9]/', '', $customerData['document']['number']);
    }
    
    // Extrai telefone
    $phone = null;
    if (isset($customerData['phone'])) {
        $phone = preg_replace('/[^0-9]/', '', $customerData['phone']);
    }
    
    // Calcula comissão (exemplo: 3% de taxa do gateway)
    $totalInCents = (int)($amount * 100);
    $gatewayFee = (int)($totalInCents * 0.03); // 3% de taxa
    $userCommission = $totalInCents - $gatewayFee;
    
    // Monta payload Utmify
    $payload = [
        'orderId' => $orderId,
        'platform' => UTMIFY_PLATFORM_NAME,
        'paymentMethod' => 'pix',
        'status' => 'waiting_payment',
        'createdAt' => $createdAtUTC,
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
                'id' => 'product_' . $orderId,
                'name' => 'Pagamento DETRAN - Taxas CNH',
                'planId' => null,
                'planName' => null,
                'quantity' => 1,
                'priceInCents' => $totalInCents
            ]
        ],
        'trackingParameters' => formatarUTMParameters($utmParams),
        'commission' => [
            'totalPriceInCents' => $totalInCents,
            'gatewayFeeInCents' => $gatewayFee,
            'userCommissionInCents' => $userCommission
        ],
        'isTest' => false
    ];
    
    return $payload;
}

/**
 * Formata payload para Utmify - PIX Pago (paid)
 */
function formatarPayloadPixPago($transactionData, $utmParams = null) {
    $payload = formatarPayloadPixGerado($transactionData, $utmParams);
    
    // Atualiza status e data de aprovação
    $payload['status'] = 'paid';
    $payload['approvedDate'] = converterParaUTC(date('Y-m-d H:i:s'));
    
    return $payload;
}

/**
 * Formata payload para Utmify - PIX Reembolsado (refunded)
 */
function formatarPayloadPixReembolsado($transactionData, $utmParams = null) {
    $payload = formatarPayloadPixPago($transactionData, $utmParams);
    
    // Atualiza status e data de reembolso
    $payload['status'] = 'refunded';
    $payload['refundedAt'] = converterParaUTC(date('Y-m-d H:i:s'));
    
    return $payload;
}

/**
 * Formata parâmetros UTM para Utmify
 */
function formatarUTMParameters($utmParams) {
    if (!$utmParams || !is_array($utmParams)) {
        return [
            'src' => null,
            'sck' => null,
            'utm_source' => null,
            'utm_campaign' => null,
            'utm_medium' => null,
            'utm_content' => null,
            'utm_term' => null
        ];
    }
    
    return [
        'src' => $utmParams['src'] ?? null,
        'sck' => $utmParams['sck'] ?? null,
        'utm_source' => $utmParams['utm_source'] ?? null,
        'utm_campaign' => $utmParams['utm_campaign'] ?? null,
        'utm_medium' => $utmParams['utm_medium'] ?? null,
        'utm_content' => $utmParams['utm_content'] ?? null,
        'utm_term' => $utmParams['utm_term'] ?? null
    ];
}

/**
 * Converte data para UTC
 */
function converterParaUTC($dataLocal) {
    try {
        // Se já está no formato correto, retorna
        if (preg_match('/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/', $dataLocal)) {
            return $dataLocal;
        }
        
        // Tenta converter
        $dt = new DateTime($dataLocal, new DateTimeZone('America/Sao_Paulo'));
        $dt->setTimezone(new DateTimeZone('UTC'));
        return $dt->format('Y-m-d H:i:s');
    } catch (Exception $e) {
        return date('Y-m-d H:i:s');
    }
}

/**
 * Envia evento de PIX gerado para Utmify
 */
function notificarPixGerado($transactionData, $utmParams = null) {
    $payload = formatarPayloadPixGerado($transactionData, $utmParams);
    
    file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Enviando PIX GERADO: " . json_encode($payload) . "\n", FILE_APPEND);
    
    return enviarEventoUtmify($payload);
}

/**
 * Envia evento de PIX pago para Utmify
 */
function notificarPixPago($transactionData, $utmParams = null) {
    $payload = formatarPayloadPixPago($transactionData, $utmParams);
    
    file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Enviando PIX PAGO: " . json_encode($payload) . "\n", FILE_APPEND);
    
    return enviarEventoUtmify($payload);
}

/**
 * Envia evento de PIX reembolsado para Utmify
 */
function notificarPixReembolsado($transactionData, $utmParams = null) {
    $payload = formatarPayloadPixReembolsado($transactionData, $utmParams);
    
    file_put_contents('utmify_log.log', date('Y-m-d H:i:s') . " - Enviando PIX REEMBOLSADO: " . json_encode($payload) . "\n", FILE_APPEND);
    
    return enviarEventoUtmify($payload);
}
?>