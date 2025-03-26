import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from 'next/font/google'
 
const bungee = Cormorant_Garamond({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ANUSHA VENTRAPRGADA",
  description: "I love crafting sleek web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.className} min-h-screen antialiased relative`}
      >
        <div className="fixed inset-0 bg-grid-lines opacity-[0.15] "></div>
        <div className=" mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-screen  ">
          <div className="bg-white/50 backdrop-blur-sm fixed top-0 w-full  ">
          <nav className="max-w-4xl py-4 flex justify-between items-center mx-auto z-50 px-4 lg:!px-0">
            <div className="text-2xl"> 
              <a href="/">AV</a>
            </div>
            <div className="flex gap-6">
              <a href="/about" className="hover:opacity-70 px-3 py-1">About</a>
              <a href="https://www.linkedin.com/in/anusha-v/" target="_blank" className="transition-all duration-300 ease-in-out border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-neutral-50 px-3 py-1">Get in touch</a>
            </div>
          </nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
