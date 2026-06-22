import { MetadataRoute } from 'next'

const base = 'https://challengethat.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                            lastModified: new Date('2025-10-01'), priority: 1.0, changeFrequency: 'monthly' },
    { url: `${base}/loyalty`,                               lastModified: new Date('2025-10-01'), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/analytiq`,                              lastModified: new Date('2025-10-01'), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/work`,                                  lastModified: new Date('2026-06-01'), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/about`,                                 lastModified: new Date('2025-10-01'), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/insights`,                              lastModified: new Date('2026-06-01'), priority: 0.7, changeFrequency: 'weekly'  },
    { url: `${base}/move`,                                  lastModified: new Date('2025-10-01'), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/insights/move-map`,                     lastModified: new Date('2026-06-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/invisible-customers`,          lastModified: new Date('2026-05-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/crm-growth-moment`,            lastModified: new Date('2026-05-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/loyalty-mistakes`,             lastModified: new Date('2025-11-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/crm-stalled`,                  lastModified: new Date('2025-11-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/tier-model`,                   lastModified: new Date('2025-11-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/data-gaps`,                    lastModified: new Date('2025-11-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/privacy`,                               lastModified: new Date('2025-10-01'), priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${base}/terms`,                                 lastModified: new Date('2025-10-01'), priority: 0.3, changeFrequency: 'yearly'  },
  ]
}
