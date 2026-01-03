// src/app/test/page.jsx
"use client";

import '../styles/global.css';
import { Button } from '@/src/components/foundations/Button';

export default function TestPage() {
  const handleNavigate = () => {
    window.location.href = 'https://docs.posnod.com';
  };

  return (
    <div className="min-h-screen bg-primary content-p1">
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-d2">Selamat Datang di Project Posnod</h1>
        <p className="text-s3 text-center">
          Ini adalah fondasi pengembangan aplikasi Posnod.<br/>
          Semua komponen, sistem desain, dan eksperimen pembelajaran<br/>
          dibangun, diuji, dan dikembangkan dari sini.
        </p>
        <div>
          <Button
            variant="fill"
            gap="by-size"
            size="lg"
            radius="32"
            onClick={handleNavigate}
          >
            Baca Dokumentasi
          </Button>
        </div>
      </div>
    </div>
  );
}