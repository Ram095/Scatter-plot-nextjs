import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google"; // Import Source Sans Pro from next/font
import Header from "./component/Header";
import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "WoW Dashboard",
  description: "Dashboard to visualise WoW data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
