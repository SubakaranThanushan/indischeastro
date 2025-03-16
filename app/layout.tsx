import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import "./style/nav.css";
import Navigation from "./Components/Navigation";
import Btn_num from "./Components/Btn_num";
import Footer from "./Components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Vedische Astrologie Beratung Zürich | Horoskop & Energiearbeit",
  description:
    "Professionelle vedische Astrologie Beratung in Zürich & der Schweiz. Partnerhoroskop, Geburtshoroskop, Chakra-Heilung & spirituelle Lebensberatung.",
  keywords: [
    "Vedische Astrologie",
    "Astrologische Beratung Zürich",
    "Partnerhoroskop Schweiz",
    "Geburtshoroskop Analyse",
    "Chakra Heilung Zürich",
    "Lebensberatung",
    "Astrologie Dienstleistungen Schweiz",
    "spirituelle Heilung",
    "Zukunftsberatung",
  ],
  openGraph: {
    title: "Vedische Astrologie & Lebensberatung | Zürich & Schweiz",
    description:
      "Entdecken Sie professionelle astrologische Dienstleistungen in Zürich. Partnerhoroskop, Karma Analyse, Chakra Energiearbeit und mehr.",
    url: "https://www.deineseite.ch", // Remplace par ton vrai domaine
    type: "website",
    locale: "de_CH",
    images: [
      {
        url: "https://www.deineseite.ch/astrologie-service.jpg", // Ton image OG
        width: 1200,
        height: 630,
        alt: "Vedische Astrologie Beratung Zürich",
      },
    ],
  },
  alternates: {
    canonical: "https://www.deineseite.ch", // Ton URL principale
  },
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="bg-[#181A1B]">
      <head>
        {/* Balise Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vedische Astrologie Beratung Zürich",
              url: "https://www.deineseite.ch",
              logo: "https://www.deineseite.ch/logo.png", // Remplace par ton logo
              image: "https://www.deineseite.ch/astrologie-service.jpg",
              description:
                "Professionelle astrologische Beratung, Partnerhoroskop, Chakra-Heilung & spirituelle Lebensberatung in Zürich & der Schweiz.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Deine Adresse",
                addressLocality: "Zürich",
                addressRegion: "ZH",
                postalCode: "8000",
                addressCountry: "CH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+41 79 261 33 31",
                contactType: "Kundendienst",
                availableLanguage: ["German", "French", "English"],
              },
              sameAs: [
                "https://www.facebook.com/DeineSeite",
                "https://www.instagram.com/DeineSeite",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navigation />
        </header>

        <main>{children}</main>

        <Btn_num />

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
