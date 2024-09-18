import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Cillage India Foundation",
  description: "Transforming Village Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
