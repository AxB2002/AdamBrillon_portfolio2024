import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description: "Welcome to my portfolio! As a recent graduate from CDI College’s Developer Analyst program, I've used Node.js and Framer to showcase my web development and UI design projects. Dive into my work, see my journey, and explore my passion for creating sleek, interactive designs. Let’s connect and explore how we can collaborate!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
