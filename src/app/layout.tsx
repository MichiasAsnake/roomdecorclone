import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Flower Bouquet - Luxury Room Decoration Services",
    template: "%s | Flower Bouquet",
  },
  description: "Transform your space with our luxury room decoration services. Choose from various packages including rose arrangements, custom cakes, and VIP experiences.",
  keywords: ["room decoration", "rose arrangements", "romantic setup", "luxury decoration", "hotel room decoration", "special occasions"],
  authors: [{ name: "Flower Bouquet" }],
  creator: "Flower Bouquet",
  metadataBase: new URL('https://flowerboquet.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowerboquet.vercel.app",
    title: "Flower Bouquet - Luxury Room Decoration Services",
    description: "Transform your space with our luxury room decoration services",
    siteName: "Flower Bouquet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Bouquet - Luxury Room Decoration Services",
    description: "Transform your space with our luxury room decoration services",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
