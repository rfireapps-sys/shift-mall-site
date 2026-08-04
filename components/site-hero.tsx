"use client"

import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

const badges = [
  { label: "NEW", style: "bg-white text-foreground" },
  { label: "人気", style: "bg-gold text-gold-foreground" },
  { label: "SALE", style: "bg-primary text-primary-foreground" },
]

export function SiteHero() {
  const title = Array.from(siteConfig.appName)

  return (
    <section className="relative flex min-h-[92svh] w-full items-end overflow-hidden">
      {/* ヒーロー背景画像（ウォレット / コインのビジュアル） */}
      <Image
        src={siteConfig.heroPoster || "/placeholder.svg"}
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />

      {/* 文字が読めるよう薄いオーバーレイ */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10"
        aria-hidden="true"
      />

      {/* 買い物タブのバッジをあしらった装飾要素（シグネチャー） */}
      <div
        className="hero-fade pointer-events-none absolute right-6 top-24 hidden flex-col items-end gap-3 sm:flex md:right-12"
        aria-hidden="true"
        style={{ animationDelay: "0.5s" }}
      >
        {badges.map((badge, i) => (
          <span
            key={badge.label}
            className={`rounded-full px-4 py-1.5 text-xs font-bold shadow-lg ${badge.style}`}
            style={{ transform: `translateX(${i * 14}px)` }}
          >
            {badge.label}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-32 md:pb-32">
        <p className="hero-fade mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/80">
          給料日が、いちばん楽しいアプリ
        </p>

        {/* アプリ名を1文字ずつ表示 */}
        <h1
          className="font-heading text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          aria-label={siteConfig.appName}
        >
          {title.map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="hero-char inline-block"
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>

        <p
          className="hero-fade mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg"
          style={{ animationDelay: `${0.2 + title.length * 0.09}s` }}
        >
          {siteConfig.tagline}
        </p>

        <div
          className="hero-fade mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: `${0.35 + title.length * 0.09}s` }}
        >
          <a
            href={siteConfig.playUrl}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            アプリを入手
          </a>
          <p className="text-xs text-white/70">{siteConfig.paidNote}</p>
        </div>
      </div>
    </section>
  )
}
