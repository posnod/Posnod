'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Layout } from "@/components/layouts/Layout";
import LogoPosnod from '@/components/icons/brand/PosnodIcon';
import Navbar from '@/components/layouts/header/parts/center/Navbar';
import LogoShield from '@/components/icons/system/ShieldIcon';
import DotsVerticalIcon from '@/components/icons/ui/DotsVerticalIcon';
import CloseIcon from '@/components/icons/ui/CloseIcon';

export default function HeaderTemplate({ size = "lg" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary border-b relative z-40">
      <Layout size={size}>
        <div className="header-row">
          <div className="header-left">
            <Link href="/" aria-label="home" className="block">
              <LogoPosnod />
            </Link>
          </div>

          <div className="header-center max-md:hidden">
            <Navbar />
          </div>

          <div className="header-right">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-primary"
              aria-label="Open menu"
            >
              <DotsVerticalIcon className="w-5 h-5" />
            </button>

            <div className="hidden md:block">
              <LogoShield />
            </div>
          </div>
        </div>
      </Layout>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="layout pt-6 pb-4 flex justify-between items-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <LogoPosnod />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 rounded hover:bg-gray-100"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5 block m-auto" />
            </button>
          </div>

          <div className="layout pt-4 pb-8">
            <div className="flex flex-col items-start gap-4">
              <div className="w-full [&>nav]:flex [&>nav]:flex-col [&>nav]:gap-4 [&_a]:block">
                <Navbar />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
              <LogoShield />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}