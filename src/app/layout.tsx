import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://jscdn-jsutton.vercel.app/globals.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
