import React from "react";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";

export const metadata = {
  title: "Fusion Senior Care Homes - Compassionate Care in Kansas",
  description:
    "Providing exceptional senior care across 4 locations in Kansas. Family-owned homes offering personalized care, medical services, and a warm, supportive environment.",
  generator: "v0.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
