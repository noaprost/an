import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Jua({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "AN",
  description: "AI video editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        <section className="h-full">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
