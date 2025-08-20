import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
 
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ANUSHA VENTRAPRGADA",
  description: "I love crafting sleek web applications",
  openGraph: {
    title: 'ANUSHA VENTRAPRGADA',
    description: 'I love crafting sleek web applications',
    url: 'https://your-domain.com',
    siteName: 'Anusha Ventrapragada',
    images: [
      {
        url: '/og-image.png', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Anusha Ventrapragada - Web Developer'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANUSHA VENTRAPRGADA',
    description: 'I love crafting sleek web applications',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} min-h-screen antialiased relative overflow-x-hidden`}
      >
        {/* Clean background */}
        <div className="fixed inset-0 bg-gray-50"></div>
        
        {/* Modern Minimal Navigation */}
        <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-xl border-b border-gray-100/50 z-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* Name Logo */}
            <a href="/" className="group transition-all duration-300">
              <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                Anusha Ventrapragada
              </span>
            </a>
            
            {/* Get in Touch Button */}
            <a 
              href="mailto:anushaventrapragada93@gmail.com"
              className="relative text-sm md:text-base md:px-8 px-4 py-3 bg-gray-900 text-white rounded-2xl font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-20">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
