const https = require('https');

const PUBLIC_KEY = 'furiapay_live_JX7dKNWwxx0JYa3EC3GN1qJlfPzZ7LD4';
const SECRET_KEY = 'sk_live_KcL5ohQTzFkVw5H1m04cYzAPHZFtnTGj';
const AUTH_HEADER = 'Basic ' + Buffer.from(`${PUBLIC_KEY}:${SECRET_KEY}`).toString('base64');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const q = req.query || {};
  const b = req.body || {};
  const customerName = String(q.customer_name || b.customer_name || '').trim();
  const customerCpf = String(q.customer_cpf || b.customer_cpf || '').replace(/\D/g, '');
  const customerEmail = q.customer_email || b.customer_email || 'cliente@example.com';
  const customerPhoneRaw = String(q.customer_phone || b.customer_phone || '11999999999').replace(/\D/g, '');
  const amount = parseInt(q.amount || b.amount || '16932', 10);

  if (!customerName) return res.status(400).json({ success: false, error: 'Nome do cliente é obrigatório' });
  if (!customerCpf || customerCpf.length !== 11) return res.status(400).json({ success: false, error: 'CPF válido é obrigatório' });

  const areaCode = customerPhoneRaw.substring(0, 2) || '11';
  const phoneNumber = customerPhoneRaw.substring(2) || '999999999';

  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const postbackUrl = `https://${host}/api/webhook`;

  const payload = {
    amount,
    payment_method: 'pix',
    postback_url: postbackUrl,
    customer: {
      name: customerName,
      email: customerEmail,
      phone: customerPhoneRaw,
      document: { type: 'cpf', number: customerCpf },
      phone_number: { country_code: '55', area_code: areaCode, number: phoneNumber }
    },
    items: [{
      title: 'produto1',
      unit_price: amount,
      quantity: 1,
      tangible: false
    }],
    metadata: { provider_name: 'Receita Federal' }
  };

  console.log('[FURIAPAY REQUEST]', JSON.stringify(payload));

  return new Promise((resolve) => {
    const postData = JSON.stringify(payload);
    const options = {
      hostname: 'api.furiapayapp.com',
      path: '/v1/payment-transaction/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': AUTH_HEADER,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const reqFuria = https.request(options, (r) => {
      let data = '';
      r.on('data', (c) => data += c);
      r.on('end', () => {
        console.log('[FURIAPAY RESPONSE]', r.statusCode, data);
        let dat;
        try { dat = JSON.parse(data); } catch (e) { dat = null; }

        if (r.statusCode >= 200 && r.statusCode < 300 && dat) {
          const pixCode = dat?.pix?.qr_code || dat?.pix?.qrcode || dat?.qr_code || dat?.pix_qr_code || dat?.data?.pix?.qr_code || '';
          const pixBase64 = dat?.pix?.qr_code_base64 || dat?.pix?.qrcode_base64 || dat?.qr_code_base64 || dat?.data?.pix?.qr_code_base64 || '';
          const transactionId = dat?.id || dat?.transaction_id || dat?.data?.id || '';

          if (!pixCode) {
            res.status(500).json({ success: false, error: 'Resposta da FuriaPay sem código PIX ' + JSON.stringify(dat).substring(0, 400), debug: { response: dat } });
            return resolve();
          }

          res.status(200).json({
            success: true,
            pixCode,
            pix_code: pixCode,
            transaction_id: transactionId,
            transactionId,
            order_id: transactionId,
            orderId: transactionId,
            amount: amount / 100,
            status: 'pending',
            gateway: 'furiapay',
            qr_code_base64: pixBase64
          });
          return resolve();
        }

        const baseMsg = dat?.message || dat?.error || 'Erro FuriaPay';
        const detail = (typeof data === 'string' ? data : JSON.stringify(dat)).substring(0, 800);
        const fullMsg = `[HTTP ${r.statusCode}] ${baseMsg} :: ${detail}`;
        res.status(r.statusCode || 400).json({ success: false, error: fullMsg, debug: { httpStatus: r.statusCode, response: dat || data, payload } });
        resolve();
      });
    });

    reqFuria.on('error', (err) => {
      console.error('[FURIAPAY ERROR]', err.message);
      res.status(500).json({ success: false, error: 'Erro comunicação FuriaPay: ' + err.message });
      resolve();
    });

    reqFuria.write(postData);
    reqFuria.end();
  });
};
