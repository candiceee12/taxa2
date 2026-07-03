const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const cpf = (req.query.cpf || '').replace(/\D/g, '');

  if (!cpf) {
    return res.status(400).json({ error: 'CPF não informado' });
  }

  if (cpf.length !== 11) {
    return res.status(400).json({ error: 'CPF deve conter 11 dígitos' });
  }

  const token = '0tsht7utxfd4uqgn9jwgun';

  return new Promise((resolve) => {
    const url = `https://back.blackflow.site/consultar-filtrada/cpf?cpf=${cpf}&token=${token}`;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    };

    https.get(url, options, (apiRes) => {
      let data = '';
      apiRes.on('data', (chunk) => { data += chunk; });
      apiRes.on('end', () => {
        try {
          const d = JSON.parse(data);
          if (d && d.NOME) {
            res.status(200).json({
              success: true,
              nome: d.NOME || '',
              NOME: d.NOME || '',
              cpf: cpf,
              CPF: cpf,
              nascimento: d.DT_NASCIMENTO || null,
              NASCIMENTO: d.DT_NASCIMENTO || null,
              mae: d.NOME_MAE || null,
              MAE: d.NOME_MAE || null,
              nome_mae: d.NOME_MAE || null,
              sexo: d.SEXO || null,
              SEXO: d.SEXO || null,
              email: d.EMAIL || null,
              telefone: d.CELULAR1 || null,
              status: d.STATUS_RECEITA_FEDERAL || 'ativo'
            });
          } else if (d && (d.error || d.message)) {
            res.status(200).json({ error: d.error || d.message, code: d.code || 'NOT_FOUND' });
          } else {
            res.status(200).json({ error: 'CPF não encontrado', raw: d });
          }
          resolve();
        } catch (error) {
          res.status(200).json({ error: 'Erro ao processar resposta', details: data });
          resolve();
        }
      });
    }).on('error', (error) => {
      res.status(500).json({ success: false, error: 'Erro na requisição: ' + error.message });
      resolve();
    });
  });
};
