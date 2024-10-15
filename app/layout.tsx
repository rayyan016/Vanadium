import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import ErrorBoundary from "@/components/utils/ErrorBoundary"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perseus",
  description: "Perseus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden scrollbar-custom`}
      >
        <ErrorBoundary>
          <StarsCanvas />
          <Navbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
