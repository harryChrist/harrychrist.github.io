import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
