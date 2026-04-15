import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Rushabh Jamdade — Coming Soon",
  description:
    "Something new is brewing. CA Rushabh Jamdade — Chartered Accountant turned AI Product Builder. New site coming soon.",
  openGraph: {
    title: "CA Rushabh Jamdade — Coming Soon",
    description:
      "Something new is brewing. New site coming soon.",
    type: "website",
    url: "https://carushabhjamdade.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: false,
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
