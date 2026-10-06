/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして書き出す（out/）。Cloudflare Pagesにそのまま載せる。
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
