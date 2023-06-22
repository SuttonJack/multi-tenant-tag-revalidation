import 'server-only'

import { cache } from 'react'

export const getSiteData = cache(async (site: string) => {
  const res = await fetch(
    `https://multi-tenant-api.vercel.app/api/v1/${site}`,
    {
      next: { tags: [site] },
    }
  )
  return res.json()
})

export default getSiteData
