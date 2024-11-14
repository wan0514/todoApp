import localFont from 'next/font/local'
import Header from './_components/Header'

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
        <Header />
        <main className="w-[343px] sm:w-[696px] lg:w-[1200px] t-5">
          {children}
        </main>
      </body>
    </html>
  )
}
