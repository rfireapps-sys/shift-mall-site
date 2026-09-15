import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"

const labelBase = "flex items-center bg-gold font-bold text-navy"
const sizeClass = {
  default: "px-7 py-3.5 text-sm",
  compact: "px-5 py-3 text-sm",
} as const

function Tail({ compact }: { compact?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`btn-split-tail block shrink-0 ${compact ? "w-3.5" : "w-4 sm:w-5"}`}
    />
  )
}

type SplitButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  compact?: boolean
}

export function SplitButtonLink({ children, className = "", compact, ...props }: SplitButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-stretch overflow-hidden rounded-sm ${className}`}
      {...props}
    >
      <span className={`${labelBase} ${sizeClass[compact ? "compact" : "default"]}`}>{children}</span>
      <Tail compact={compact} />
    </a>
  )
}

type SplitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  compact?: boolean
}

export function SplitButton({ children, className = "", compact, ...props }: SplitButtonProps) {
  return (
    <button
      className={`inline-flex items-stretch overflow-hidden rounded-sm disabled:opacity-60 ${className}`}
      {...props}
    >
      <span className={`${labelBase} ${sizeClass[compact ? "compact" : "default"]}`}>{children}</span>
      <Tail compact={compact} />
    </button>
  )
}
