import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Providers from './store/Providers'; // ✅ import the client wrapper
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

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
      <body className=" font-sans  text-gray-900">
        <Providers>
          <div className="flex flex-col ">
            <Navbar />

            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                className: 'bg-gray-800 text-white',
                style: {
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem',
                },
              }}/>
              
            <main>
              <div
                className='lg:ml-10 lg-mr-10
                          md:ml-5 md:mr-5
                          sm:ml-2 sm:mr-2'
                >
                {
                  children
                }
              </div>
            </main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
