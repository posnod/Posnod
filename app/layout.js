import './global.css';

export const metadata = {
  metadataBase: new URL('https://posnod.com'),

  title: {
    default: 'Posnod - Social Learning Platform',
    template: '%s | Posnod'
  },

  description:
    'Platform pembelajaran sosial yang menyediakan pondasi modern untuk belajar, berbagi pengetahuan, dan berkolaborasi dalam skala luas.',

  applicationName: 'Posnod',

  keywords: [
    'Posnod',
    'Learning',
    'Pembelajaran',
    'Platform Edukasi',
    'Belajar Online'
  ],

  icons: {
    icon: [
      { url: '/PosnodIcon.ico', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/PosnodIcon.ico', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/PosnodIcon.ico']
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}