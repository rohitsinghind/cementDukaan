import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
    <nav className="bg-white shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 sm:py-2 py-2.5">
          <Link href="/">
            <Image
              className="w-32 md:w-full sm:mr-0 mr-4"
              src="/logo.png"
              height={50}
              width={170}
            />
          </Link>
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/admin/orders" className='font-semibold text-base text-gray-800 hover:text-gray-600'>Orders</Link>
          </div>
          </div>
          </nav>
    </>
  )
}
