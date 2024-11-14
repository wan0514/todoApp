import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import headerLogo from '../../../public/logo/logoLarge.svg'

export default function Header() {
  return (
    <header className="flex items-center w-full h-[60px] bg-white stroke-slate-200">
      <Link href="/">
        <Image
          src={headerLogo}
          alt="header logo"
          className="ml-[12px] sm:ml-[24px] lg:ml-[300px]"
        />
      </Link>
    </header>
  )
}
