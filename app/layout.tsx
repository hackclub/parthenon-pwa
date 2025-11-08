import type { Metadata } from "next";
import { EB_Garamond, Ubuntu } from "next/font/google";
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
        alt: "Parthenon Hackathon ",
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
        className={`${ebGaramond.variable} font-bold antialiased bg-[#3B5435]`}
      >
        {children}
      </body>
    </html>
  );
}