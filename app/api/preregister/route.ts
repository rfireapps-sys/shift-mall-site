import { NextRequest, NextResponse } from "next/server"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === "string" ? body.email.trim() : ""

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 })
  }

  const webhookUrl = process.env.PREREGISTER_WEBHOOK_URL

  if (webhookUrl) {
    const forwarded = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "shift-mall-site", registeredAt: new Date().toISOString() }),
    }).catch(() => null)

    if (!forwarded || !forwarded.ok) {
      return NextResponse.json({ error: "forwarding failed" }, { status: 502 })
    }
  } else {
    // PREREGISTER_WEBHOOK_URL 未設定時はログのみ。
    // 本番運用前に、送信先（例: スプレッドシート連携の Webhook や ESP のAPI）を設定してください。
    console.log("[preregister]", email)
  }

  return NextResponse.json({ ok: true })
}
