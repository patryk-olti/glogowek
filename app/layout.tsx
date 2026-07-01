import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./animations.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const libraryBgUrl = `url("${basePath}/bg-library.svg")`;

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Zaginiona Kronika — Gra miejska Głogówek",
  description:
    "Odnajdź siedem fragmentów Zaginionej Kroniki ukrytych w Głogówku.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${sourceSerif.variable} h-dvh overflow-hidden antialiased`}
    >
      <body
        className="h-dvh overflow-hidden"
        style={{ "--library-bg-url": libraryBgUrl } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
