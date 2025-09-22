import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EB_Garamond, Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "700"],
});

const inter = Ubuntu({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const windsol = localFont({
  src: "./Windsol-Regular.ttf",
  variable: "--font-windsol",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parthenon Portal",
  description: "Welcome to Parthenon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${windsol.className} ${ebGaramond.variable} ${inter.variable} font-bold antialiased bg-[#3B5435]`}
      >
        {children}
      </body>
    </html>
  );
}
