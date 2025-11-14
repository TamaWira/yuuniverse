import type { Metadata } from "next";
import { Abhaya_Libre, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-wrapper";
import "./globals.css";
import { PostHogProvider } from "./providers";
import LenisProvider from "@/components/providers/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YuuNiverse",
  description: "Welcome to YuuNiverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abhayaLibre.variable} antialiased bg-[#F1F1EE] dark:bg-[#171D17]`}
      >
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LenisProvider>{children}</LenisProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
