import './global.css';

export const metadata = {
  metadataBase: new URL('https://posnod.com'),

  title: {
    default: 'Posnod | The System Learning',
    template: '%s | Posnod'
  },

  description:
    'Posnod adalah platform pembelajaran sistem yang modern, cepat, dan mudah digunakan.',

  applicationName: 'Posnod',

  keywords: [
    'Posnod',
    'System Learning',
    'Pembelajaran',
    'Platform Edukasi',
    'Belajar Online'
  ],

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico']
  },

  openGraph: {
    title: 'Posnod | The System Learning',
    description: 'Platform pembelajaran sistem dengan pengalaman modern dan efisien.',
    url: 'https://posnod.com',
    siteName: 'Posnod',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posnod Preview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Posnod | The System Learning',
    description: 'Platform pembelajaran sistem dengan pengalaman modern dan efisien.',
    images: ['/og-image.png'],
    creator: '@posnod'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1
    }
  },

  manifest: '/manifest.json',

  alternates: {
    canonical: 'https://posnod.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}