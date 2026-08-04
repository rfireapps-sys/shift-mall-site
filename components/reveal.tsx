"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** 表示アニメーションの遅延（ミリ秒） */
  delay?: number
  /** 出現方向 */
  direction?: "up" | "left" | "right"
  as?: "div" | "li" | "section"
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // モーション低減設定を尊重
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    direction === "left"
      ? "-translate-x-8"
      : direction === "right"
        ? "translate-x-8"
        : "translate-y-8"

  const Tag = as

  return (
    <Tag
      // @ts-expect-error - ref type varies with the chosen tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hiddenTransform}`,
        className,
      )}
    >
      {children}
    </Tag>
  )
}
