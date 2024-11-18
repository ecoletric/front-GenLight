import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const kantumruyPro = localFont({
  src: "../font/KantumruyPro.ttf",
  variable : "--primary",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Genlight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${kantumruyPro.variable} flex flex-col font-primary`}>
        {children}
      </body>
    </html>
  );
}
