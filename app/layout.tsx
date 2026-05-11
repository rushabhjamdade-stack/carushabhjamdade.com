import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { CmdKProvider } from "@/components/CmdKProvider";
import { AppBar } from "@/components/AppBar";
import { FormulaBar } from "@/components/FormulaBar";
import { SheetTabs } from "@/components/SheetTabs";
import { CmdK } from "@/components/CmdK";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CA Rushabh Jamdade — Debit. Credit. Deploy.",
  description:
    "Chartered Accountant × AI product builder. Excel toolkits, AI-powered tools, and custom MIS that turn data dumps into decision tools.",
  openGraph: {
    title: "CA Rushabh Jamdade — Debit. Credit. Deploy.",
    description:
      "Excel toolkits, AI-powered tools, and custom MIS that turn data dumps into decision tools.",
    type: "website",
    url: "https://carushabhjamdade.com",
    images: [
      {
        url: "https://carushabhjamdade.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CA Rushabh Jamdade — Debit. Credit. Deploy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Rushabh Jamdade — Debit. Credit. Deploy.",
    description:
      "Excel toolkits, AI-powered tools, and custom MIS that turn data dumps into decision tools.",
    images: ["https://carushabhjamdade.com/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      <body className="font-sans antialiased pb-9">
        <CmdKProvider>
          <AppBar />
          <FormulaBar />
          {children}
          <SheetTabs />
          <CmdK />
        </CmdKProvider>
        <Analytics />
      </body>
    </html>
  );
}
