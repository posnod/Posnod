'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logofead from 'public/iconfeed/logo.svg';
import frame from 'public/iconfeed/frame.svg';
import { Search, MessageCircle, Bell, Bolt, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const link = [
    { name: 'Platform', href: '#' },
    { name: 'Tools', href: '#' },
    { name: 'TUF', href: '#' },
    { name: 'Networks', href: '#' },
    { name: 'Tentang', href: '#' },
  ];

  return (
    <>
      {pathname === '/beranda' && (
        <div className='p-5 w-full bg-[#F8F8F8] hidden md:block'>
          <nav className='flex items-center gap-10 text-lg max-w-max mx-auto'>
            {link.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className='text-gray-700 hover:text-gray-900 font-medium'
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <header className='w-full border-b px-6 md:px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4 md:gap-5'>
          {/* Logo */}
          <Image
            src={logofead}
            alt='Logo'
          />

          {/* Search + Frame (Hidden on mobile) */}
          <div className='hidden md:flex items-center gap-3'>
            <Image
              src={frame}
              alt='Frame'
              width={45}
              height={45}
            />
            <form className='flex gap-2 items-center border-2 px-4 py-2 rounded-full'>
              <label htmlFor='search'>
                <Search />
              </label>
              <input
                type='text'
                placeholder='Apa yang kamu cari?'
                className='outline-none w-48 lg:w-64'
                id='search'
              />
            </form>
          </div>
        </div>

        {/* Action buttons + hamburger */}
        <div className='flex items-center gap-3'>
          <div className='hidden md:flex items-center gap-4'>
            <button className='p-2 rounded-full border-2 relative flex items-center justify-center'>
              <span className='absolute h-3 w-3 rounded-full bg-[#38BE7E] top-1 -right-1'></span>
              <MessageCircle />
            </button>
            <button className='p-2 rounded-full border-2 flex items-center justify-center'>
              <Bell />
            </button>
            <button className='p-2 rounded-full border-2 flex items-center justify-center'>
              <Bolt />
            </button>
            <div className='w-9 h-9 rounded-full bg-gray-300 overflow-hidden'></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 border rounded-lg'
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className='md:hidden px-6 py-4 border-b space-y-4 bg-white animate-slideDown'>
          {pathname === '/beranda' && (
            <nav className='flex flex-col gap-3'>
              {link.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className='text-gray-700 hover:text-gray-900 font-medium'
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Search Mobile */}
          <form className='flex gap-2 items-center border-2 px-4 py-2 rounded-full'>
            <Search />
            <input
              type='text'
              placeholder='Apa yang kamu cari?'
              className='outline-none flex-1 text-sm'
            />
          </form>

          {/* Icons Mobile */}
          <div className='flex items-center justify-center gap-4'>
            <MessageCircle />
            <Bell />
            <Bolt />
            <div className='w-8 h-8 rounded-full bg-gray-300'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
