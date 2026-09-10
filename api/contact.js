import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
  'https://jphonorio.adv.br',
  'https://www.jphonorio.adv.br',
  'https://phlmartins.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;

  if (!apiKey || !from || !to) {
    return res.status(500).json({ error: 'Serviço de e-mail não configurado.' });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Preencha nome, e-mail e mensagem.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'E-mail inválido.' });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = phone?.trim() ? escapeHtml(phone.trim()) : '—';
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email.trim(),
    subject: `Consulta jurídica — ${name.trim()}`,
    html: `
      <h2>Nova mensagem pelo site</h2>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>E-mail:</strong> ${safeEmail}</p>
      <p><strong>Telefone:</strong> ${safePhone}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage}</p>
    `,
    text: [
      'Nova mensagem pelo site',
      `Nome: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      `Telefone: ${phone?.trim() || '—'}`,
      '',
      message.trim(),
    ].join('\n'),
  });

  if (error) {
    console.error(error);
    return res.status(502).json({ error: 'Não foi possível enviar o e-mail.' });
  }

  return res.status(200).json({ ok: true, id: data.id });
}
