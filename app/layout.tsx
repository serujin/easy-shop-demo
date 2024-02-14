import NavBar from "@/components/nav-bar/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy shop demo",
  description: "Simple app to showcase and learn skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
