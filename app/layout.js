import './global.css';

export const metadata = {
  title: 'Posnod | The System Learning',
  description: 'Posnod adalah platform pembelajaran sistem yang modern, cepat, dan mudah digunakan.',
  applicationName: 'Posnod',
  icons: {
    icon: [
      { url: '/images/Favicon.png', sizes: '32x32' },
      { url: '/images/Favicon.png', sizes: '64x64' },
      { url: '/images/Favicon.png', sizes: '128x128' },
    ],
    apple: [
      { url: '/images/Favicon.png', sizes: '180x180' },
    ]
  },
  keywords: ['Posnod', 'System Learning', 'Pembelajaran', 'Platform Edukasi'],
  openGraph: {
    title: 'Posnod | The System Learning',
    description: 'Platform pembelajaran sistem dengan pengalaman modern dan efisien.',
    url: 'https://posnod.com',
    siteName: 'Posnod',
    images: [
      {
        url: '/images/Favicon.png',
        width: 1200,
        height: 630,
        alt: 'Posnod Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
