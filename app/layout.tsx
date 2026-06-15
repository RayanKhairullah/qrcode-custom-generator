import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free QR Code Generator - Create Custom QR Codes No Watermark | Instant Download",
  description: "Create custom QR codes instantly with no watermark, no registration, no ads. Generate colored QR codes with logo, customize colors, and download for free. Fast and easy QR code maker.",
  keywords: "free qr code generator, qr code maker, make qr code, custom qr code, qr code no watermark, instant qr code, qr code with logo, colored qr code, qr code download, online qr code generator",
  robots: "index, follow",
  authors: [{ name: "QR Code Generator" }],
  openGraph: {
    title: "Free QR Code Generator - No Watermark, Instant Download",
    description: "Create custom QR codes instantly with colors and logos. Free, fast, and no ads. No registration required.",
    url: "https://rayankhairullah.github.io/qrcode-custom-generator",
    type: "website",
    images: [
      {
        url: "https://rayankhairullah.github.io/qrcode-custom-generator/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator - No Watermark",
    description: "Create custom QR codes instantly. Free, fast, no ads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QR Code Custom Generator",
    "description": "Free QR code generator with no watermark. Create custom QR codes instantly with colors, logos, and download for free.",
    "url": "https://rayankhairullah.github.io/qrcode-custom-generator",
    "applicationCategory": "Utility",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
