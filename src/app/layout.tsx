import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOLF DEV FULL STACK | Software House & Engenharia de Software",
  description: "Desenvolvimento Full Stack sob medida. Do MVP ao sistema enterprise, entregamos código limpo, arquitetura sólida e alta performance com React, Next.js, Node.js e NestJS.",
  keywords: ["Dev Full Stack", "Software House", "React", "Next.js", "NestJS", "TypeScript", "Node.js", "WOLF DEV"],
  authors: [{ name: "WOLF DEV FULL STACK" }],
  openGraph: {
    title: "WOLF DEV FULL STACK | Software House",
    description: "Transformamos ideias complexas em softwares robustos, escaláveis e de alta performance.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
