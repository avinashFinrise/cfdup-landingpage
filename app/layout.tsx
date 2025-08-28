import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CFDUP - Trade Global Markets with Confidence',
  description: 'Your trusted partner in global CFD trading. Access Forex, Indices, Commodities, and Stocks with ultra-tight spreads and up to 1:500 leverage.',
  keywords: 'CFD trading, Forex, trading platform, global markets, financial trading, MT5, WebTrader',
  authors: [{ name: 'CFDUP' }],
  creator: 'CFDUP',
  publisher: 'CFDUP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cfdup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CFDUP - Trade Global Markets with Confidence',
    description: 'Your trusted partner in global CFD trading. Access Forex, Indices, Commodities, and Stocks with ultra-tight spreads and up to 1:500 leverage.',
    url: '/',
    siteName: 'CFDUP',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CFDUP Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CFDUP - Trade Global Markets with Confidence',
    description: 'Your trusted partner in global CFD trading. Access Forex, Indices, Commodities, and Stocks with ultra-tight spreads and up to 1:500 leverage.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}