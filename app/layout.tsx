import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased">
        {children}
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
