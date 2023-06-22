import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const { pathname } = req.nextUrl
  const hostname = req.headers.get('host')

  let currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
          .replace(`.worlddev.boston`, '')
          .replace(`.worlddev.miami`, '')
          .replace(`.worlddev.london`, '')
      : hostname
          .replace(`.app.localhost:3000`, '')
          .replace(`.app.localhost:3001`, '')
          .replace(`.app.localhost:3002`, '')

  return NextResponse.rewrite(new URL(`/${currentHost}${pathname}`, req.url))
}

export const config = {
  matcher: ['/((?!api/|_next/|_static/|_vercel|examples/|[\\w-]+\\.\\w+).*)'],
}

export default middleware
