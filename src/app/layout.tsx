import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chai Reader - AI-powered Book Platform",
  description:
    "Chai Reader is an AI-powered book commerce platform designed to transform how people discover and experience books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ background: "rgba(255, 253, 243, 1)" }}>
        <Sidebar />
        <div
          className="md:ml-[20%]"
          // style={{ background: "rgba(255, 248, 220, 1)" }}
        >
          <Header />
          <main className="animate-fade-in">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
