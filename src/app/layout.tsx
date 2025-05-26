import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Henrique Christ",
  description: "Meu Portfólio - Henrique Christ",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "Henrique Christ",
    description: "Meu Portfólio - Henrique Christ",
    images: [
      {
        url: "/me.png", // Caminho para a imagem que você quer usar
        width: 1200,
        height: 630,
        alt: "Henrique Christ - Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Christ",
    description: "Meu Portfólio - Henrique Christ",
    images: ["/me.png"], // Caminho para a imagem que você quer usar
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pré-carregamento de imagens críticas */}
        <link rel="preload" as="image" href="/me2.png" />
        <link rel="preload" as="image" href="/henrique.png" />
        <link rel="preload" as="image" href="/icon.png" />
        
        {/* Pré-carregamento de fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        
        {/* Script para pré-carregamento adicional */}
        <Script id="preload-resources" strategy="beforeInteractive">
          {`
            // Pré-carregamento adicional de recursos críticos
            const criticalImages = ['/me2.png', '/henrique.png', '/icon.png'];
            criticalImages.forEach(src => {
              const img = new Image();
              img.src = src;
            });
          `}
        </Script>
      </body>
    </html>
  );
}
