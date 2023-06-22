import 'server-only'

import { cache } from 'react'

export const getSiteData = cache(async (subdomain: string) => {
  const res = await fetch(`https://multi-tenant-api.vercel.app/api/getEmoji`, {
    cache: process.env.VERCEL === '1' ? 'force-cache' : 'no-store',
    next: { tags: [subdomain] },
  })
  return res.json()
})

export default getSiteData
