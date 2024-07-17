import type { Metadata } from "next";
import { Andada_Pro } from "next/font/google";
import "./globals.css";

const andada_pro = Andada_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aprendiendo Next.js 🚀",
  description: "Generado con amor y Next.js ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={andada_pro.className}>{children}</body>
    </html>
  );
}
