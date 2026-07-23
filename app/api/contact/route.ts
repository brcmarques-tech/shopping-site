import { NextResponse } from "next/server";

// KAN-220: recebe o formulário de contato e encaminha para o webhook do n8n.
// Roda no servidor: a URL/secret do webhook nunca vão para o browser e não há
// problema de CORS. O n8n decide o roteamento (email, WhatsApp, planilha, CRM).
//
// Configurar no ambiente do site (ex.: .env.local / Vercel):
//   CONTACT_WEBHOOK_URL     -> URL do Webhook node do n8n (obrigatório)
//   CONTACT_WEBHOOK_SECRET  -> opcional; enviado no header X-Webhook-Secret
//                              para o n8n validar que a chamada veio daqui.

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }
  // Guarda simples contra abuso/spam de mensagens gigantes.
  if (name.length > 200 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "too_long" }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    // Sem webhook configurado ainda: não finge sucesso (o bug do KAN-220 era
    // justamente fingir). Loga e retorna erro para ficar evidente no setup.
    console.error("[contact] CONTACT_WEBHOOK_URL não configurada");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_SECRET
          ? { "X-Webhook-Secret": process.env.CONTACT_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify({
        source: "site-contato",
        name,
        email,
        subject: subject || "(sem assunto)",
        message,
      }),
    });

    if (!res.ok) {
      console.error("[contact] webhook respondeu", res.status);
      return NextResponse.json({ error: "webhook_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] falha ao chamar webhook:", err);
    return NextResponse.json({ error: "webhook_unreachable" }, { status: 502 });
  }
}
