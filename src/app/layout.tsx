import type { Metadata } from "next";
import { Urbanist as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techbk.dev'),
  title: {
    default: "TechBK - Innovative Software Solutions",
    template: "%s | TechBK"
  },
  description: "We are a dynamic software development company specializing in building scalable and efficient web applications.",
  keywords: ["software development", "web development", "nextjs", "react", "typescript", "techbk"],
  authors: [{ name: "Heritier Kaumbu" }],
  creator: "Heritier Kaumbu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techbk.co.za",
    siteName: "TechBK",
    title: "TechBK - Innovative Software Solutions",
    description: "We are a dynamic software development company specializing in building scalable and efficient web applications.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TechBK - Innovative Software Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBK - Innovative Software Solutions",
    description: "We are a dynamic software development company specializing in building scalable and efficient web applications.",
    images: ["/opengraph-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code here
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
