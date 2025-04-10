import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitNotes :- Create Your Important Notes",
  description:
    "This is a website where you can create notes, record your audio, and make a to-do list for free.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-black dark:bg-[#0a0a0a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
          </div>

          <Navbar />
          <main className="relative z-10">
            <Toaster position="top-right" />
            {children}
          </main>
          <Footer />

        </body>
      </html>
    </ClerkProvider>
  );
}
