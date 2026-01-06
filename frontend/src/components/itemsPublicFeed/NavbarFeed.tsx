'use client';

import React, { useState } from 'react';
import PosnodIcon from '../icons/brand/PosnodIcon';
import { Search, ArrowLeft } from 'lucide-react';
import Note from '../icons/system/Note';
import Message from '../icons/system/Message';
import Notification from '../icons/system/Notification';
import Setting from '../icons/system/Setting';
import Image from 'next/image';

const NavbarFeed = () => {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <header className='border-b bg-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-2 py-3'>
        {/* ================= MOBILE ================= */}
        <div className='sm:hidden'>
          {searchMode ? (
            /* MOBILE - SEARCH MODE */
            <div className='flex items-center gap-3'>
              <button onClick={() => setSearchMode(false)}>
                <ArrowLeft className='w-5 h-5' />
              </button>

              <div className='flex items-center gap-2 flex-1 bg-gray-100 rounded-full px-4 py-2'>
                <Search className='w-4 h-4 text-gray-500' />
                <input
                  autoFocus
                  type='text'
                  placeholder='Telusuri'
                  className='w-full bg-transparent outline-none text-sm'
                />
              </div>
            </div>
          ) : (
            /* MOBILE - NORMAL */
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <PosnodIcon />
                <Note />
              </div>

              <div className='flex items-center gap-4'>
                <button onClick={() => setSearchMode(true)}>
                  <Search className='w-5 h-5' />
                </button>

                <Message />
                <Notification />

                <Image
                  src='/profile/profile.png'
                  alt='profile'
                  width={36}
                  height={36}
                  className='rounded-full'
                />
              </div>
            </div>
          )}
        </div>

        {/* ================= TABLET & DESKTOP ================= */}
        <div className='hidden sm:flex items-center justify-between gap-4'>
          {/* LEFT */}
          <div className='flex items-center gap-5'>
            <PosnodIcon />
            <Note />

            {/* Search selalu tampil */}
            <div className='flex items-center gap-3 w-64 md:w-80 rounded-full bg-gray-100 px-4 py-3'>
              <Search className='w-4 h-4 text-gray-500' />
              <input
                type='text'
                placeholder='Apa yang anda cari?'
                className='w-full bg-transparent outline-none text-sm'
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-6'>
            <Message />
            <Notification />
            <Setting />
            <Image
              src='/profile/profile.png'
              alt='profile'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarFeed;
