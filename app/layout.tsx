import type { Metadata } from "next";
import { EB_Garamond, Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "700"],
  subsets: ['latin'], 
  display: 'swap',
});

const inter = Ubuntu({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const windsol = localFont({
  src: "./fonts/Windsol-Regular.ttf",
  variable: "--font-windsol",
  weight: "400",
});

const augustus = localFont({
  src: "./fonts/AUGUSTUS.ttf",
  variable: "--font-augustus",
  weight: "400",
});

const greek = localFont({
  src: "./fonts/Greek-Freak.ttf",
  variable: "--font-greek",
  weight: "400",
});

const romanica = localFont({
  src: "./fonts/Romanica.ttf",
  variable: "--font-romanica",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Parthenon",
  description:
    "The world's largest hackathon for high school aged girls and nonbinary teens",
  openGraph: {
    title: "Parthenon",
    description:
      "The world's largest hackathon for high school aged girls and nonbinary teens",
    url: "https://parthenon-seven.vercel.app/",
    siteName: "Parthenon",
    images: [
      {
        url: "https://parthenon-seven.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Parthenon Hackathon",
      },
    ],
    type: "website",
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
        className={`${windsol.variable} ${ebGaramond.variable} ${inter.variable} ${augustus.variable} ${greek.variable} ${romanica.variable} font-bold antialiased bg-[#3B5435]`}
      >
        {children}
      </body>
    </html>
  );
}
