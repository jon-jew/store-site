import type { Metadata } from "next";

import { Oswald, Funnel_Sans } from 'next/font/google';

import "./globals.css";

const oswald = Oswald({
  subsets: ['latin'],
  variable: "--font-oswald",
  display: 'swap',
});

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  variable: "--font-funnel-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sky Armory | Local NJ Gun Store",
  description: "Sky Armory, NJ Local Gun Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${oswald.variable} antialiased`}
      >
        <div className="body-container">
          {children}
        </div>
      </body>
    </html>
  );
}
