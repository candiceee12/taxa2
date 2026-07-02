export default async function handler(req, res) {
  const { pathname } = new URL(req.url);

  if (pathname === '/api/generate-pix') {
    const customerName = req.query.customer_name || 'Cliente';
    const customerCpf = (req.query.customer_cpf || '').replace(/\D/g, '');
    const amount = parseInt(req.query.amount || '16932');

    const pixCode = `00020126360014br.gov.bcb.pix0136${Math.random().toString(36).substring(2, 10)}-${Date.now().toString().substring(0, 4)}-${Date.now().toString().substring(4, 8)}-${Date.now().toString().substring(8, 12)}-${Math.random().toString(36).substring(2, 10)}52040000530398653039865802BR5913${customerName}6009SAO PAULO62070503***6304`;

    return res.json({
      success: true,
      pixCode: pixCode,
      transaction_id: Math.floor(Math.random() * 10000000),
      amount: amount / 100,
      status: 'pending',
      customer: { name: customerName, cpf: customerCpf }
    });
  }

  res.status(404).json({ error: 'Not found' });
}
