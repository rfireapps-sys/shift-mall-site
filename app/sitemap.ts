import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const base = "https://shift-mall.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/terms", "/privacy", "/recommended-environment", "/special-thanks"].map((path) => ({
    url: `${base}${path}`,
  }))
}
