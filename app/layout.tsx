import type { Metadata } from "next";
import "./design-system.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StickyCTA from "./components/layout/StickyCTA";
import CustomCursor from "./components/layout/CustomCursor";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.majesticmodestudios.com'),
  title: {
    default: "Majestic Mode Studios | AI-Powered Creative & Growth Studio",
    template: "%s | Majestic Mode Studios",
  },
  description: "Majestic Mode Studios builds full-stack growth systems for ambitious global brands — AI video ads, paid media, SEO, and automation that compound results.",
  keywords: ["AI marketing agency", "global growth studio", "AI video ads agency", "performance marketing", "digital transformation", "creative intelligence"],
  authors: [{ name: "Majestic Mode Studios" }],
  creator: "Majestic Mode Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.majesticmodestudios.com",
    siteName: "Majestic Mode Studios",
    title: "Majestic Mode Studios | AI-Powered Creative & Growth Studio",
    description: "We build full-stack growth systems — AI video ads, paid media, SEO, and automation — for brands ready to scale past the noise globally.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Majestic Mode Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Majestic Mode Studios | AI-Powered Creative & Growth Studio",
    description: "Full-stack growth systems for ambitious global brands.",
    images: ["/og-image.jpg"],
    creator: "@majesticmode",
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FBFBFE" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H70LSY9CS5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H70LSY9CS5');
          `}
        </Script>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
