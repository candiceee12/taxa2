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

  const token = 'c68892007b5d29f379d1cfd11755aa0d76df90fd447b40b87c86b7bab27b8912';

  return new Promise((resolve) => {
    const url = `https://api.querybuscas.com/token/${token}/rotas/cpf/${cpf}`;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    };

    https.get(url, options, (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const responseData = JSON.parse(data);

          if (responseData && responseData.data) {
            const userData = responseData.data;
            const mappedData = {
              success: true,
              nome: userData.nome || userData.NOME || '',
              NOME: userData.nome || userData.NOME || '',
              cpf: cpf,
              CPF: cpf,
              nascimento: userData.data_nascimento || userData.NASCIMENTO || userData.nascimento || null,
              NASCIMENTO: userData.data_nascimento || userData.NASCIMENTO || userData.nascimento || null,
              mae: userData.nome_mae || userData.MAE || userData.mae || null,
              MAE: userData.nome_mae || userData.MAE || userData.mae || null,
              nome_mae: userData.nome_mae || userData.mae || null,
              sexo: userData.sexo || userData.SEXO || null,
              SEXO: userData.sexo || userData.SEXO || null,
              rg: userData.rg || userData.RG || null,
              nacionalidade: userData.nacionalidade || null,
              status: userData.status || 'ativo'
            };
            res.status(200).json(mappedData);
          } else if (responseData.error || responseData.message) {
            res.status(200).json({
              error: responseData.error || responseData.message,
              code: responseData.code || 'NOT_FOUND'
            });
          } else {
            res.status(200).json(responseData);
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
