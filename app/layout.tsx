import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CA Rushabh Jamdade — Chartered Accountant × AI Product Builder",
  description:
    "I build AI-powered products for finance, tax, and accounting. Chartered Accountant and AI Product Builder — creator of LockedPDFs, Money Smart Kids, TaxPilot, SplitEasy and more.",
  openGraph: {
    title: "CA Rushabh Jamdade — AI Product Builder for Finance",
    description:
      "Chartered Accountant turned AI Product Builder. Building tools for finance.",
    type: "website",
    url: "https://carushabhjamdade.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
