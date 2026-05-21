import { MetadataRoute } from 'next'

const base = 'https://www.challengethat.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                        priority: 1.0, changeFrequency: 'monthly' },
    { url: `${base}/loyalty`,                           priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/analytiq`,                          priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/work`,                              priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/about`,                             priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/insights`,                          priority: 0.7, changeFrequency: 'weekly'  },
    { url: `${base}/move`,                              priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/insights/loyalty-mistakes`,         priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/crm-stalled`,              priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/tier-model`,               priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/insights/data-gaps`,                priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/privacy`,                           priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${base}/terms`,                             priority: 0.3, changeFrequency: 'yearly'  },
  ]
}
