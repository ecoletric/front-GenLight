import type { Metadata } from "next";
import "./globals.css";


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
      <body className="flex flex-col">
        {children}
      </body>
    </html>
  );
}