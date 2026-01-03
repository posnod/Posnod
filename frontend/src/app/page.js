"use client";

import { Button } from '@/components/foundations/Button';
import Pages from '@/components/layouts/page/Pages';

export default function Page() {
    const openNewTab = () => {
      window.open("https://docs.posnod.com", "_blank", "noopener,noreferrer");
    };

  return (
    <Pages size="lg">
      <div className="page-p-hero w-full flex flex-col gap-6 items-center justify-start">
        <h1 className="text-d2 text-center">
          Selamat Datang di Project Posnod
        </h1>
        <p className="text-s3 text-center max-w-2xl">
          Ini adalah pondasi pengembangan aplikasi Posnod.<br />
          Semua komponen, sistem desain, dan eksperimen pembelajaran<br />
          dibangun, diuji, dan dikembangkan dari sini.
        </p>
        <div>
          <Button
            variant="fill"
            gap="by-size"
            size="lg"
            radius="32"
            onClick={openNewTab}
          >
            Baca Dokumentasi
          </Button>
        </div>
      </div>
    </Pages>
  );
}