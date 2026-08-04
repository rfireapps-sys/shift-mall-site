import { NextRequest, NextResponse } from "next/server"

// 公開前の簡易パスワードゲート。
// Vercel の環境変数 SITE_BASIC_AUTH_USER / SITE_BASIC_AUTH_PASS が
// 両方とも設定されている間だけ有効になる（未設定なら素通し＝保護なし）。
// 一般公開する時は、この2つの環境変数をVercel側から削除するだけでOK。
export function proxy(request: NextRequest) {
  const user = process.env.SITE_BASIC_AUTH_USER
  const pass = process.env.SITE_BASIC_AUTH_PASS

  if (!user || !pass) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get("authorization")

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ")
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8")
      const separatorIndex = decoded.indexOf(":")
      const inputUser = decoded.slice(0, separatorIndex)
      const inputPass = decoded.slice(separatorIndex + 1)

      if (inputUser === user && inputPass === pass) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse("認証が必要です", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area", charset="UTF-8"',
    },
  })
}

// 静的アセット（アイコンなど）は除外して、ページだけを保護対象にする
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|icon-light-32x32.png|icon-dark-32x32.png|apple-icon.png).*)",
  ],
}
