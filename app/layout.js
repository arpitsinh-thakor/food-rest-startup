import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Rest Startup",
  description: "Food Rest Startup is a Next.js 14 app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="font-sans bg-gray-100 text-gray-900 "
        >
          <div
            className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
            style={{ fontFamily: "var(--font-geist-sans)" }}
            >
            <div>
              <Navbar />
            </div>
            <div className="container mx-auto p-4">
              {children}
            </div>
            {/* <div>
              <Footer />
            </div> */}
          </div>
      </body>
    </html>
  );
}
