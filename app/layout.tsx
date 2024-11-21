import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Daveena Seeneevassen",
  description: "A modern portfolio built with Next.js, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#1e014d] to-[#030014] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
