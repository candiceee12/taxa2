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
  const transactionId = q.transactionId || b.transactionId || q.transaction_id || b.transaction_id;

  if (!transactionId) {
    return res.status(400).json({ success: false, error: 'transactionId é obrigatório' });
  }

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.furiapayapp.com',
      path: `/v1/payment-transaction/info/${encodeURIComponent(transactionId)}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': AUTH_HEADER
      }
    };

    const reqFuria = https.request(options, (r) => {
      let data = '';
      r.on('data', (c) => data += c);
      r.on('end', () => {
        let dat;
        try { dat = JSON.parse(data); } catch (e) { dat = null; }

        if (r.statusCode >= 200 && r.statusCode < 300 && dat) {
          const status = String(dat?.status || dat?.data?.status || 'unknown').toLowerCase();
          const isPaid = ['paid', 'approved', 'succeeded', 'success', 'completed'].includes(status);
          const id = dat?.id || dat?.data?.id || transactionId;

          res.status(200).json({
            success: true,
            status,
            paid: isPaid,
            transaction_id: id,
            transactionId: id,
            gateway: 'furiapay',
            data: dat
          });
          return resolve();
        }

        res.status(r.statusCode || 500).json({
          success: false,
          error: 'Erro ao verificar status do pagamento',
          http_code: r.statusCode,
          response: dat || data
        });
        resolve();
      });
    });

    reqFuria.on('error', (err) => {
      res.status(500).json({ success: false, error: 'Erro na comunicação com a FuriaPay', message: err.message });
      resolve();
    });

    reqFuria.end();
  });
};
