import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/features/layout";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "스마트뉴비 Careers",
  description: "스마트뉴비 개발팀을 소개합니다!",
  openGraph: {
    title: "스마트뉴비 Careers",
    description: "청년들의 아이디어가 현실이 되는 공간",
    images: [
      {
        url: "/images/og-title.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
