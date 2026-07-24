import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Hugo Daniel Osorio — Urología de Excelencia",
  description: "Procedimientos quirúrgicos de mínima invasión, salud masculina integral y medicina de longevidad para tu máximo potencial.",
  openGraph: {
    title: "Dr. Hugo Daniel Osorio — Urología de Excelencia",
    description: "Procedimientos quirúrgicos de mínima invasión, salud masculina integral y medicina de longevidad para tu máximo potencial.",
    images: ["https://vibe.filesafe.space/1784812495885019088/assets/73fe1925-d742-4752-8c98-0a5697c7208e.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/ghl-styles.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@300;400;500;600&display=swap" />
        <link rel="stylesheet" href="https://elite-urology-care.vibepreview.com/assets/index-Dgl3MnKy.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
