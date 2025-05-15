'use client'
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommonBg from "@/components/CommonBg";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Navbar/>
        {pathname !== '/' && <CommonBg/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
