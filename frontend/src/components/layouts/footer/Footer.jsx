"use client";

import { Layout } from "@/components/layouts/Layout";
import { usePathname } from "next/navigation";

export default function Footer({ children, size = "lg" }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) {
    return null;  // Jangan tampilkan footer di luar halaman home
  }

  return (
    <footer className="w-full bg-primary border-t py-6">
      <Layout size={size}>
        {children || (
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <a href="/privacy-policy" className="hover-text-primary">
              Kebijakan Privasi
            </a>
            <a href="/terms-of-service" className="hover-text-primary">
              Syarat & Ketentuan
            </a>
            <p>
              © {new Date().getFullYear()} Posnod. Semua hak dilindungi.
            </p>
          </div>
        )}
      </Layout>
    </footer>
  );
}