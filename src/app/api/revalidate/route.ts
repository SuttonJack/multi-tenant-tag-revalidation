import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export function GET(req: NextRequest) {
  const subdomain = req.headers.get('host')?.split?.('.')?.[0]
  try {
    revalidateTag(subdomain)
    return NextResponse.json({
      message: `Revalidated ${subdomain}.mmnt.li`,
      now: Date.now(),
    })
  } catch (e) {
    return NextResponse.json(e, { status: 500 })
  }
}
