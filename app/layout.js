// app/layout.js or layout.jsx

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Providers from './store/Providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Food Rest Startup',
  description: 'Food Rest Startup is a Next.js 14 app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans text-gray-900 min-h-screen">
        <Providers>
          {/* Full height flex container */}
          <div className="flex flex-col min-h-screen
            lg:ml-4 lg:mr-4
            md:ml-2 md:mr-2
            ">
            <Navbar />

            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: 'bg-gray-800 text-white',
                style: {
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                },
              }}
            />

            {/* Main content that grows */}
            <main className="flex-grow">
              {children}
            </main>
              
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
