import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://ejservices.ci'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#approach`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/#contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
