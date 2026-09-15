"use client"

import { useState, type FormEvent } from "react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButton } from "@/components/split-button"

type Status = "idle" | "loading" | "success" | "error"

export function PreregisterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/preregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="preregister" className="border-t border-border bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">事前登録</h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            {siteConfig.releaseTiming}リリース予定です。準備が整い次第、登録いただいたメールアドレスへお知らせします。
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {status === "success" ? (
            <p className="rounded-sm border border-border bg-card px-6 py-5 text-foreground shadow-flat-sm">
              登録ありがとうございます。リリース時にお知らせします。
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <label htmlFor="preregister-email" className="sr-only">
                メールアドレス
              </label>
              <input
                id="preregister-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレス"
                className="w-full rounded-sm border border-border bg-card px-4 py-3.5 text-foreground outline-none placeholder:text-foreground/40 focus:border-navy sm:max-w-xs"
              />
              <SplitButton type="submit" disabled={status === "loading"} className="shrink-0 shadow-flat">
                {status === "loading" ? "送信中…" : "登録する"}
              </SplitButton>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-terracotta">送信に失敗しました。時間をおいて再度お試しください。</p>
          )}
          <p className="mt-4 text-xs text-foreground/50">
            ご登録いただいたメールアドレスは、{siteConfig.appName}
            のリリースに関するご連絡にのみ利用します。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
