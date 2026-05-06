import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metakent İnşaat | Modern ve Güvenilir Yapılar",
  description:
    "Metakent İnşaat; konut, kamu ve özel sektör projelerinde güvenilir, modern ve kaliteli yapılar üretir."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
