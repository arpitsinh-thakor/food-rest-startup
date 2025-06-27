import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Providers from './store/Providers'; // ✅ import the client wrapper
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Food Rest Startup',
  description: 'Food Rest Startup is a Next.js 14 app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-900">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
