import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Tecno Mart — Premium Technology, Hyderabad",
  description: "Tecno Mart is Hyderabad's premium destination for new & refurbished laptops, smartphones, repairs, and accessories. Certified quality. Expert service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
