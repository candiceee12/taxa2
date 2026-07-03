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
      apiRes.on('data', (chunk) => {
        data += chunk;
      });
      apiRes.on('end', () => {
        try {
          const responseData = JSON.parse(data);

          // Pega os dados — pode vir em .data, .resultado, .dados, ou direto na raiz
          const d = responseData.data || responseData.resultado || responseData.dados || responseData;

          // Se veio algo útil (tem nome ou cpf)
          const nome = d.nome || d.NOME || d.nomeCompleto || d.nome_completo || '';
          if (nome || d.cpf || d.CPF) {
            const mappedData = {
              success: true,
              nome: nome,
              NOME: nome,
              cpf: cpf,
              CPF: cpf,
              nascimento: d.data_nascimento || d.dataNascimento || d.NASCIMENTO || d.nascimento || d.dt_nascimento || d.dtNascimento || null,
              NASCIMENTO: d.data_nascimento || d.dataNascimento || d.NASCIMENTO || d.nascimento || d.dt_nascimento || d.dtNascimento || null,
              mae: d.nome_mae || d.nomeMae || d.MAE || d.mae || d.nome_da_mae || d.filiacao_mae || d.filiacaoMae || null,
              MAE: d.nome_mae || d.nomeMae || d.MAE || d.mae || d.nome_da_mae || d.filiacao_mae || d.filiacaoMae || null,
              nome_mae: d.nome_mae || d.nomeMae || d.mae || d.nome_da_mae || d.filiacao_mae || d.filiacaoMae || null,
              sexo: d.sexo || d.SEXO || null,
              SEXO: d.sexo || d.SEXO || null,
              rg: d.rg || d.RG || null,
              nacionalidade: d.nacionalidade || null,
              status: d.status || d.situacao || 'ativo'
            };
            res.status(200).json(mappedData);
          } else if (responseData.error || responseData.message) {
            res.status(200).json({
              error: responseData.error || responseData.message,
              code: responseData.code || 'NOT_FOUND'
            });
          } else {
            // Retorna tudo cru pra você ver os campos exatos
            res.status(200).json({ success: false, raw: responseData });
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
