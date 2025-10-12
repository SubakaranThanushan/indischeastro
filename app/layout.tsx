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
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
});

// SEO Metadata optimisée
export const metadata: Metadata = {
  title: {
    default: "Vedische & Indische Astrologie Beratung Zürich | Partner Horoskop & Karma Analyse",
    template: "%s | IndischeAstro - Vedische Astrologie"
  },
  description: "Professionelle Vedische Astrologie Beratung in Zürich. Partner Horoskop Analyse, karmische Blockaden lösen, Chakra Energie Arbeit, Familien Aufstellung & spirituelle Heilung. Kostenlose Erstberatung.",
  keywords: [
    // Mots-clés principaux
    "Vedische Astrologie", "Indische Astrologie", "Astrologie Beratung", 
    "Partner Horoskop", "Partner Horoskop Analyse", "Geburts Horoskop",
    "Lebensberatung", "Zukunftsberatung", "Schicksal", "Karma",
    
    // Services spécifiques
    "Chakra Energie Arbeit", "Heilbehandlung", "Kundalini Energie",
    "Marmapunkt", "Sexuelle Blockaden", "Karmische Blockaden", 
    "Sexuelle Unlust", "Familie Trennung", "Familien Aufstellung",
    "karmische Beziehung", "Unfähigkeit loszulassen", "Emotionale Abhängigkeit",
    "karmische Blockaden lösen",
    
    // Localisation
    "Schweiz", "Swiss", "Zürich", "Switzerland", "Bern", "Luzern", "Basel",
    "Deutschland", "München", "Konstanz", "Stuttgart", "Singen", "Baden-Württemberg",
    
    // Termes astrologiques
    "Sternzeichen", "Sonne", "Mond", "Aszendent", "Stier", "Steinbock", 
    "Zwillinge", "Skorpion", "Löwe", "Jungfrau", "Waage", "Schütze", 
    "Wassermann", "Fisch", "Jahreshoroskop", "Monatshoroskop",
    
    // Termes techniques vediques
    "Jyotish", "Vedisches Horoskop", "siderische Astrologie", "Lagna",
    "Janma Lagna", "Jenma natchathira", "Rasi", "Jathagam", "Nakshatra",
    "Vastu Shastra", "Palmistry", "Numerologie", "Navagraha",
    
    // Spiritualité et culture
    "Hinduismus", "Sanatana Dharma", "Shiva", "Shakthi", "Mantra", "Yantra",
    "spirituelle Heilung", "Energiearbeit", "Reiki", "Heiltherapeut"
  ],
  authors: [{ name: "Suthakar Parameswaran" }],
  creator: "Suthakar Parameswaran",
  publisher: "IndischeAstro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.indischeastro.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'de-CH': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://www.indischeastro.ch',
    siteName: 'IndischeAstro - Vedische Astrologie Beratung',
    title: 'Vedische & Indische Astrologie Beratung Zürich | Partner Horoskop & Karma Analyse',
    description: 'Professionelle Vedische Astrologie Beratung in Zürich. Partner Horoskop Analyse, karmische Blockaden lösen, Chakra Energie Arbeit & spirituelle Heilung.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vedische Astrologie Beratung mit Suthakar Parameswaran in Zürich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedische & Indische Astrologie Beratung Zürich',
    description: 'Professionelle Vedische Astrologie Beratung. Partner Horoskop, Karma Analyse & spirituelle Heilung.',
    creator: '@indischeastro',
    images: ['/twitter-image.jpg'],
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
    // À remplacer avec vos codes de vérification réels
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification',
    // yahoo: 'your-yahoo-verification',
  },
  category: 'spirituality',
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
        {/* Balise Schema.org JSON-LD détaillée */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.indischeastro.ch",
                  "name": "IndischeAstro - Vedische Astrologie Beratung",
                  "url": "https://www.indischeastro.ch",
                  "telephone": "+41-76-123-45-67",
                  "email": "info@indischeastro.ch",
                  "description": "Professionelle Vedische und Indische Astrologie Beratung in Zürich mit Schwerpunkt auf Partner Horoskop, Karma Analyse, Chakra Energie Arbeit und spiritueller Heilung.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Zwinglistrasse 37",
                    "addressLocality": "Zürich",
                    "postalCode": "8004",
                    "addressCountry": "CH",
                    "addressRegion": "ZH"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "47.374448",
                    "longitude": "8.531434"
                  },
                  "openingHours": [
                    "Mo-Fr 09:00-18:00",
                    "Sa 09:00-14:00"
                  ],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "09:00",
                      "closes": "14:00"
                    }
                  ],
                  "priceRange": "CHF 100 - 150",
                  "serviceType": [
                    "Vedische Astrologie Beratung",
                    "Partner Horoskop Analyse",
                    "Karma Beratung",
                    "Chakra Heilung",
                    "Energiearbeit",
                    "Familien Aufstellung",
                    "spirituelle Heilung",
                    "karmische Blockaden lösen"
                  ],
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Zürich"
                    },
                    {
                      "@type": "City",
                      "name": "Bern"
                    },
                    {
                      "@type": "City",
                      "name": "Luzern"
                    },
                    {
                      "@type": "City",
                      "name": "Basel"
                    },
                    {
                      "@type": "Country",
                      "name": "Schweiz"
                    },
                    {
                      "@type": "Country",
                      "name": "Deutschland"
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Vedische Astrologie Dienstleistungen",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Partner Horoskop Analyse",
                          "description": "Tiefgehende Analyse der Beziehungsdynamiken und karmischen Verbindungen"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Karmische Blockaden lösen",
                          "description": "Identifikation und Auflösung von karmischen Mustern aus vergangenen Leben"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.indischeastro.ch",
                  "name": "Suthakar Parameswaran",
                  "url": "https://www.indischeastro.ch",
                  "jobTitle": "Vedischer Astrologe und Heiler",
                  "description": "Experte für Vedische Astrologie, Karma Analyse, Partner Horoskop und spirituelle Heilung mit über 20 Jahren Erfahrung.",
                  "knowsAbout": [
                    "Vedische Astrologie",
                    "Jyotish",
                    "Karma Analyse",
                    "Chakra Heilung",
                    "Energiearbeit",
                    "Familien Aufstellung",
                    "spirituelle Heilung",
                    "Partner Horoskop"
                  ],
                  "hasCredential": [
                    "Jothida Vibooshan",
                    "Reiki Grand-Master",
                    "Vedische Astrologie Ausbildung"
                  ],
                  "memberOf": {
                    "@type": "Organization",
                    "name": "IndischeAstro"
                  },
                  "worksFor": {
                    "@id": "https://www.indischeastro.ch"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.indischeastro.ch",
                  "url": "https://www.indischeastro.ch",
                  "name": "IndischeAstro - Vedische Astrologie",
                  "description": "Professionelle Vedische Astrologie Beratung in Zürich für Partner Horoskop, Karma Analyse und spirituelle Heilung.",
                  "publisher": {
                    "@id": "https://www.indischeastro.ch"
                  },
                  "inLanguage": "de-CH"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.indischeastro.ch",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Startseite",
                      "item": "https://www.indischeastro.ch"
                    }
                  ]
                }
              ]
            }),
          }}
        />
        
        {/* Balises supplémentaires pour le référencement local */}
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.374448;8.531434" />
        <meta name="ICBM" content="47.374448, 8.531434" />
        
        {/* Balises pour les réseaux sociaux */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta name="twitter:site" content="@indischeastro" />
        <meta name="twitter:creator" content="@indischeastro" />
        
        {/* Balises de performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Structured Data pour la page */}
        <div itemScope itemType="https://schema.org/WebPage" className="flex flex-col min-h-screen">
          <header itemScope itemType="https://schema.org/WPHeader">
            <Navigation />
          </header>

          <main itemScope itemType="https://schema.org/mainContentOfPage" className="flex-grow">
            {children}
          </main>

          {/* Bouton de contact flottant */}
          <Btn_num />

          <footer itemScope itemType="https://schema.org/WPFooter">
            <Footer />
          </footer>
        </div>

        {/* Script de performance simplifié sans Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring simple
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const perfData = window.performance.timing;
                  const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                  console.log('Page load time:', loadTime + 'ms');
                  
                  // Google Analytics 4 - à décommenter quand vous aurez votre ID
                  // gtag('config', 'GA_MEASUREMENT_ID', {
                  //   page_title: document.title,
                  //   page_location: window.location.href
                  // });
                }
              });
              
              // Gestion des erreurs pour le monitoring
              window.addEventListener('error', function(e) {
                console.error('JavaScript Error:', e.error);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}