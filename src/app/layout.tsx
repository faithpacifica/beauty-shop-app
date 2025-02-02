import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { ReduxProvider } from './providers/Provider'
// TODO:MOntserrat va Play fair font urnatish

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Beauty Shop',
  description: 'e-commerce website about beauty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider >
          <Header />
          {children}
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  );
}
