import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Augusto | Portfolio 2026",
  description:
    "Portfolio de Pedro Augusto: design visual, motion, editorial e 3D.",
  openGraph: {
    title: "Pedro Augusto | Portfolio 2026",
    description:
      "Portfolio de Pedro Augusto: design visual, motion, editorial e 3D.",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 904,
        alt: "Pedro Augusto | Portfolio 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Augusto | Portfolio 2026",
    description:
      "Portfolio de Pedro Augusto: design visual, motion, editorial e 3D.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
