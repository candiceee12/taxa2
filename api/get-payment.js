const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const transactionId = req.query.transactionId || req.query.transaction_id || req.body?.transactionId;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID é obrigatório'
    });
  }

  // Configurações Umbrella
  const apiKey = 'fdc8dbab-0b26-434e-9baf-019c6e154259';
  const apiUrl = `https://api-gateway.umbrellapag.com/api/user/transactions/${transactionId}`;

  return new Promise((resolve) => {
    const options = {
      hostname: 'api-gateway.umbrellapag.com',
      path: `/api/user/transactions/${transactionId}`,
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json',
        'User-Agent': 'UMBRELLAB2B/1.0'
      }
    };

    const request = https.request(options, (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const responseData = JSON.parse(data);
          console.log('[UMBRELLA GET-PAYMENT] Status:', apiRes.statusCode, 'Response:', JSON.stringify(responseData).substring(0, 300));

          if (apiRes.statusCode >= 200 && apiRes.statusCode < 300) {
            const transactionData = responseData.data || responseData;
            const status = transactionData.status || 'pending';
            const isPaid = status === 'APPROVED' || status === 'approved' || status === 'completed' || status === 'COMPLETED';

            res.status(200).json({
              success: true,
              paid: isPaid,
              status: status,
              transaction_id: transactionId,
              transactionId: transactionId,
              amount: transactionData.amount || null,
              created_at: transactionData.createdAt || new Date().toISOString(),
              paid_at: isPaid ? (transactionData.approvedAt || new Date().toISOString()) : null,
              gateway: 'umbrella',
              data: transactionData
            });
          } else {
            const errorMsg = responseData.message || responseData.error || 'Erro ao verificar status';
            console.log('[UMBRELLA GET-PAYMENT] Error:', errorMsg);
            res.status(apiRes.statusCode || 400).json({
              success: false,
              error: errorMsg,
              transaction_id: transactionId,
              statusCode: apiRes.statusCode
            });
          }
          resolve();
        } catch (error) {
          console.error('[UMBRELLA GET-PAYMENT] Parse error:', error.message, 'Raw:', data.substring(0, 200));
          res.status(500).json({
            success: false,
            error: 'Erro ao processar resposta: ' + error.message,
            transaction_id: transactionId,
            rawData: data.substring(0, 200)
          });
          resolve();
        }
      });
    });

    request.on('error', (error) => {
      console.error('[UMBRELLA GET-PAYMENT] Request error:', error.message);
      res.status(500).json({
        success: false,
        error: 'Erro na requisição: ' + error.message,
        transaction_id: transactionId,
        gateway: 'umbrella'
      });
      resolve();
    });

    request.end();
  });
};
