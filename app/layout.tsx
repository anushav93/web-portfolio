import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import Navigation from './components/Navigation';
 
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
        
        <Navigation />

        {/* Main content */}
        <main className="pt-20">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
