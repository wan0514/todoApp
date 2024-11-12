import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import headerLogo from '../../public/logo/logoLarge.svg'
import './globals.css'
import './reset.css'

const NanumSquareB = localFont({
  src: './fonts/NanumSquareB.ttf',
  variable: '--font-NanumSquareB',
  display: 'swap',
})

const NanumSquareR = localFont({
  src: './fonts/NanumSquareR.ttf',
  variable: '--font-NanumSquareR',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center flex-col items-center w-full overflow-hidden ${NanumSquareB.variable} ${NanumSquareR.variable}`}
      >
        <header className="flex items-center w-full h-[60px] bg-white stroke-slate-200">
          <Link href="/">
            <Image
              src={headerLogo}
              alt="header logo"
              className="ml-[12px] sm:ml-[24px] lg:ml-[300px]"
            />
          </Link>
        </header>
        <main className="w-[343px] sm:w-[696px] lg:w-[1200px] t-5">
          {children}
        </main>
      </body>
    </html>
  )
}
