const https = require('https');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch { reject(new Error('JSON inválido')); }
      });
    }).on('error', reject);
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const cpf = (req.query.cpf || '').replace(/\D/g, '');
  if (!cpf) return res.status(400).json({ error: 'CPF não informado' });
  if (cpf.length !== 11) return res.status(400).json({ error: 'CPF deve conter 11 dígitos' });

  const QUERY_TOKEN = 'c68892007b5d29f379d1cfd11755aa0d76df90fd447b40b87c86b7bab27b8912';
  const BLACK_TOKEN = '0tsht7utxfd4uqgn9jwgun';

  // --- Tenta API 1: QueryBuscas ---
  try {
    const r1 = await fetchJSON(`https://api.querybuscas.com/token/${QUERY_TOKEN}/rotas/cpf/${cpf}`);
    if (r1 && r1.data) {
      const d = r1.data;
      return res.status(200).json({
        success: true, source: 'querybuscas',
        nome: d.nome || d.NOME || '',
        NOME: d.nome || d.NOME || '',
        cpf, CPF: cpf,
        nascimento: d.data_nascimento || d.NASCIMENTO || d.nascimento || null,
        NASCIMENTO: d.data_nascimento || d.NASCIMENTO || d.nascimento || null,
        mae: d.nome_mae || d.MAE || d.mae || null,
        MAE: d.nome_mae || d.MAE || d.mae || null,
        nome_mae: d.nome_mae || d.mae || null,
        sexo: d.sexo || d.SEXO || null,
        SEXO: d.sexo || d.SEXO || null,
        rg: d.rg || d.RG || null,
        nacionalidade: d.nacionalidade || null,
        status: d.status || 'ativo'
      });
    }
  } catch (e) {
    console.log('QueryBuscas falhou:', e.message);
  }

  // --- Fallback API 2: BlackFlow ---
  try {
    const r2 = await fetchJSON(`https://back.blackflow.site/consultar-filtrada/cpf?cpf=${cpf}&token=${BLACK_TOKEN}`);
    if (r2 && !r2.error) {
      return res.status(200).json({
        success: true, source: 'blackflow',
        nome: r2.nome || r2.NOME || '',
        NOME: r2.nome || r2.NOME || '',
        cpf, CPF: cpf,
        nascimento: r2.data_nascimento || r2.NASCIMENTO || r2.nascimento || null,
        NASCIMENTO: r2.data_nascimento || r2.NASCIMENTO || r2.nascimento || null,
        mae: r2.nome_mae || r2.MAE || r2.mae || null,
        MAE: r2.nome_mae || r2.MAE || r2.mae || null,
        nome_mae: r2.nome_mae || r2.mae || null,
        sexo: r2.sexo || r2.SEXO || null,
        SEXO: r2.sexo || r2.SEXO || null,
        rg: r2.rg || r2.RG || null,
        nacionalidade: r2.nacionalidade || null,
        status: r2.status || 'ativo'
      });
    }
  } catch (e) {
    console.log('BlackFlow falhou:', e.message);
  }

  return res.status(404).json({ success: false, error: 'Nenhuma API retornou dados para este CPF' });
};
