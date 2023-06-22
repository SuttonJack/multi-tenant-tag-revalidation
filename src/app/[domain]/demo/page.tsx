import React from 'react'
import { getSiteData } from 'lib/getSiteData'

export default async function DemoPage({
  params,
}: {
  params: { domain: string }
}) {
  const siteData = await getSiteData(params.domain)
  return (
    <div>
      <p>
        Domain: <br />
        <code>{params.domain}</code>
      </p>
      <p>
        The API was last hit at: <br />
        <code>{siteData.timestamp}</code>
      </p>
      <p>
        Your random emoji is: <br />
        <code id="emoji">{siteData.randomEmoji}</code>
      </p>
      <button>Click me to revalidate</button>
    </div>
  )
}
