import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import ScrollAnim from "@/components/ui/ScrollAnim";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flex",
  description: "I'm flex website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScrollAnim >
          {children}
        </ScrollAnim>
      </body>
    </html>
  );
}
