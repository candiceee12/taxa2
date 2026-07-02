const https = require('https');

const PRODUCT_NAMES = [
    'Ebook Ben 10 Omnitrix',
    'Curso Dragon Ball Z Kamehameha',
    'Ebook Naruto Jutsu Master',
    'Guia Completo Pokémon GO',
    'Ebook Minecraft Building',
    'Curso Fortnite Battle Royale',
    'Ebook Attack on Titan',
    'Guia Roblox Scripts',
    'Curso Animação 3D',
    'Ebook Culinária Japonesa',
    'Guia Fotografia com Smartphone',
    'Curso Produção Musical',
    'Ebook Design Gráfico',
    'Guia Viagem Mochileiro',
    'Curso Programação Python'
];

function getRandomProductName() {
    return PRODUCT_NAMES[Math.floor(Math.random() * PRODUCT_NAMES.length)];
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let customerName = (req.query.customer_name || req.body?.customer_name || '').trim();
  const customerCpf = (req.query.customer_cpf || req.body?.customer_cpf || '').replace(/\D/g, '');
  const customerEmail = req.query.customer_email || req.body?.customer_email || 'cliente@example.com';
  const customerPhone = (req.query.customer_phone || req.body?.customer_phone || '11999999999').replace(/\D/g, '');
  const amount = parseInt(req.query.amount || req.body?.amount || '16932');
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '0.0.0.0';

  if (!customerName) {
    return res.status(400).json({ success: false, error: 'Nome do cliente é obrigatório' });
  }

  const nameParts = customerName.split(' ').filter(part => part.length > 0);
  if (nameParts.length > 3) {
    customerName = nameParts.slice(0, 3).join(' ');
  }

  if (!customerCpf || customerCpf.length !== 11) {
    return res.status(400).json({ success: false, error: 'CPF válido é obrigatório' });
  }

  const productName = getRandomProductName();
  const apiKey = '80be7194-3181-407c-901b-6c172dba4435';
  const apiUrl = 'https://api-gateway.umbrellapag.com/api/user/transactions';

  const payload = {
    amount: parseInt(amount),
    currency: 'BRL',
    paymentMethod: 'PIX',
    installments: 1,
    postbackUrl: 'https://www.resolvacpf.com/api/webhook',
    metadata: JSON.stringify({ productName, customerName, description: `${productName} - Cliente: ${customerName}` }),
    traceable: true,
    ip: clientIp,
    pix: {
      expiresInDays: 1
    },
    customer: {
      name: customerName,
      email: customerEmail,
      document: {
        number: customerCpf,
        type: 'CPF'
      },
      phone: customerPhone,
      externalRef: `${Date.now()}-${customerCpf}`,
      address: {
        street: 'Rua Brasil',
        streetNumber: '1000',
        complement: 'Brasil',
        zipCode: '70000-000',
        neighborhood: 'Centro',
        city: 'Brasília',
        state: 'DF',
        country: 'BR'
      }
    },
    items: [
      {
        title: productName,
        unitPrice: parseInt(amount),
        quantity: 1,
        tangible: false,
        externalRef: `item-${Date.now()}`
      }
    ],
    shipping: {
      fee: 0,
      address: {
        street: 'Rua Brasil',
        streetNumber: '1000',
        complement: 'Brasil',
        zipCode: '70000-000',
        neighborhood: 'Centro',
        city: 'Brasília',
        state: 'DF',
        country: 'BR'
      }
    }
  };

  return new Promise((resolve) => {
    const postData = JSON.stringify(payload);
    const urlObj = new URL(apiUrl);

    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'User-Agent': 'UMBRELLAB2B/1.0',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
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
          console.log('[UMBRELLA] Status:', apiRes.statusCode, 'Response:', JSON.stringify(responseData).substring(0, 300));

          if (apiRes.statusCode >= 200 && apiRes.statusCode < 300 && responseData.status === 200) {
            const transactionData = responseData.data || {};
            const pixCode = transactionData.qrCode || '';

            res.status(200).json({
              success: true,
              pixCode: pixCode,
              pix_code: pixCode,
              transaction_id: transactionData.id,
              transactionId: transactionData.id,
              order_id: transactionData.id,
              orderId: transactionData.id,
              product_name: productName,
              productName: productName,
              description: productName,
              amount: parseInt(amount) / 100,
              status: transactionData.status || 'pending',
              gateway: 'umbrella',
              qr_code_base64: transactionData.qrCode || '',
              customer: {
                name: customerName,
                cpf: customerCpf,
                email: customerEmail,
                phone: customerPhone
              },
              createdAt: transactionData.createdAt || new Date().toISOString(),
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            });
          } else {
            const errorMsg = responseData.message || responseData.error || 'Erro ao gerar PIX';
            console.log('[UMBRELLA] Error:', errorMsg);
            res.status(apiRes.statusCode || 400).json({
              success: false,
              error: errorMsg,
              details: responseData,
              statusCode: apiRes.statusCode
            });
          }
          resolve();
        } catch (error) {
          console.error('[UMBRELLA] Parse error:', error.message, 'Raw data:', data.substring(0, 200));
          res.status(500).json({
            success: false,
            error: 'Erro ao processar resposta: ' + error.message,
            rawData: data.substring(0, 200)
          });
          resolve();
        }
      });
    });

    request.on('error', (error) => {
      console.error('[UMBRELLA] Request error:', error.message);
      res.status(500).json({
        success: false,
        error: 'Erro na requisição à Umbrella: ' + error.message,
        gateway: 'umbrella'
      });
      resolve();
    });

    request.write(postData);
    request.end();
  });
};
