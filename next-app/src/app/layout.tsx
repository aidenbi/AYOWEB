import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import "../components/NavBar/NavBar.css";
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
  title: "Asian Yummy One",
  description: "Best Chinese food in Angus, Ontario. Order online for pickup or delivery.",
};

const ORDER_PAGE_ENABLED = process.env.SHOW_ORDER_PAGE === 'true'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ayologo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar orderPageEnabled={ORDER_PAGE_ENABLED} />
        {children}
      </body>
    </html>
  );
}
