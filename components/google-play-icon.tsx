// Google Playの三角マーク（4色のフラット版）。単色アイコンだとApp Storeのボタンと見分けにくいため、ブランドの4色で塗る。
export function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 1.5 L12.5 12 L2 22.5 Z" fill="#00A0FF" />
      <path d="M2 1.5 L11.75 6.75 L12.5 12 Z" fill="#00F076" />
      <path d="M2 22.5 L11.75 17.25 L12.5 12 Z" fill="#FF3A44" />
      <path d="M11.75 6.75 L21.5 12 L11.75 17.25 L12.5 12 Z" fill="#FFD500" />
    </svg>
  )
}
