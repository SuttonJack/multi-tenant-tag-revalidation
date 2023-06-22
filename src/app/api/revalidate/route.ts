import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export function GET(req: NextRequest) {
  const subdomain = req.headers.get('host')?.split?.('.')?.[0]
  const key = req.nextUrl.searchParams.get('key')
  try {
    revalidateTag(subdomain)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (e) {
    return NextResponse.json(e, { status: 500 })
  }
}
