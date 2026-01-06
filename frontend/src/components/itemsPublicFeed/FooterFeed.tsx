"use client";

import React from 'react'
import { usePathname } from 'next/navigation';

const FooterFeed = () => {
  const pathname = usePathname();
  const isFeedPage = pathname === '/feed'

  if (!isFeedPage) {
    return null; // Jangan tampilkan FooterFeed di luar halaman /feed
  }

  return (
    <div className='absolute w-full bottom-0 flex items-center justify-center gap-10 py-6'>
      {/* profile instansi */}
      <div className='flex items-center gap-4'>
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
      </div>

      {/* profile iuser */}
      <div className='flex items-center gap-4'>
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
        <div className='bg-slate-200 h-10 w-10 rounded-full' />
      </div>
    </div>
  )
}

export default FooterFeed