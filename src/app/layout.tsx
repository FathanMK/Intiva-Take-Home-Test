import type { Metadata } from "next";
import { Inter } from "next/font/google"

import "./globals.css";
import ProviderQuery from "@/components/ProviderQuery";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "eaternal",
  description: "cool dashboard 👍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ProviderQuery>
          {children}
        </ProviderQuery>
      </body>
    </html>
  );
}
