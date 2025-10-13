"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Head from "next/head";
import Profil from "../public/image/profile_home/image.png";
import Profil2 from "../public/image/profile_home/prof2.jpg";
import World from "../public/image/header/image.jpg";
import ContacteNotif from "./Components/ContacteNotif";
import AutoScrollingAstro from "./Components/AutoScrollingAstro";
import AutoScrollingComponent from "./Components/AutoScrollingComponent";

import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  const [services, setServices] = useState([]);
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllServices, setShowAllServices] = useState(false);

  // Récupérer les services depuis Supabase
  useEffect(() => {
    console.log("test ca marche ");
    const fetchServices = async () => {
      try {
        console.log("Début du chargement des services...");
      } catch (err) {
        console.error("Erreur inattendue :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fonction pour passer à la prochaine slide
  const nextSlide = useCallback(() => {
    if (api) {
      const totalSlides = api.scrollSnapList().length;
      const currentSlide = api.selectedScrollSnap();

      if (currentSlide === totalSlides - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }
  }, [api]);

  // Définir un intervalle pour changer de slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Données statiques de test avec deux types de prix
// Données statiques de test avec deux types de prix - CORRIGÉ AVEC 10 SERVICES
const staticServices = [
  {
    id: 1,
    nom: "Partner-Horoskop-Analyse",
    description: "Tiefe Einblicke in Ihre Beziehungsdynamiken und astrologische Kompatibilität - Professionelle Partneranalyse für karmische Beziehungen und emotionale Abhängigkeit",
    price_presentiel: "150",
    price_online: "100",
    time: "90",
    images: "/image/services/partner-horoskop.jpg",
    schemaType: "AstrologicalService"
  },
  {
    id: 2,
    nom: "Geburts-Horoskop",
    description: "Detaillierte Analyse Ihrer Lebensaufgabe, Talente und Herausforderungen - Vedische Geburtshoroskop Analyse mit Karma und Schicksalsdeutung",
    price_presentiel: "150",
    price_online: "100",
    time: "60",
    images: "/image/services/geburts-horoskop.jpg",
    schemaType: "AstrologicalService"
  },
  {
    id: 3,
    nom: "Astrologische Partnerberatung",
    description: "Kombination von astrologischem Wissen mit modernen Beziehungsansätzen für tiefgreifende Beziehungslösungen",
    price_presentiel: "150",
    price_online: "100",
    time: "75",
    images: "/image/services/partnerberatung.jpg",
    schemaType: "AstrologicalService"
  },
  {
    id: 4,
    nom: "Karmische Blockaden Lösung",
    description: "Identifikation und Auflösung karmischer Blockaden für emotionalen Befreiung und spirituelles Wachstum",
    price_presentiel: "150",
    price_online: "100",
    time: "90",
    images: "/image/services/karmische-blockaden.jpg",
    schemaType: "TherapeuticProcedure"
  },
  {
    id: 5,
    nom: "Kundalini-Energiearbeit",
    description: "Aktivierung Ihrer ureigenen Lebenskraft für tiefgreifende Transformation und spirituelle Erweckung",
    price_presentiel: "150",
    price_online: "100",
    time: "90",
    images: "/image/services/kundalini.jpg",
    schemaType: "EnergyTherapy"
  },
  {
    id: 6,
    nom: "Marmapunkt-Behandlung",
    description: "Ayurvedische Heilkunst mit 107 vitalen Energiepunkten für ganzheitliche Heilung und Energiefluss",
    price_presentiel: "150",
    price_online: "100",
    time: "60",
    images: "/image/services/marmapunkt.jpg",
    schemaType: "TherapeuticProcedure"
  },
  {
    id: 7,
    nom: "Chakra Energie Arbeit",
    description: "Reinigung und Harmonisierung Ihrer sieben Hauptenergiezentren für Vitalität und spirituelles Wohlbefinden",
    price_presentiel: "150",
    price_online: "100",
    time: "45",
    images: "/image/services/chakra-energie.jpg",
    schemaType: "EnergyTherapy"
  },
  {
    id: 8,
    nom: "Familien Aufstellung",
    description: "Systemische Aufstellung für Familienprobleme, Trennung und karmische Verstrickungen",
    price_presentiel: "150",
    price_online: "100",
    time: "75",
    images: "/image/services/familien-aufstellung.jpg",
    schemaType: "TherapeuticProcedure"
  },
  {
    id: 9,
    nom: "Reiki-Behandlung",
    description: "Japanische Heilenergie für körperliche und emotionale Heilung - Reiki Grand-Master Behandlung",
    price_presentiel: "150",
    price_online: "100",
    time: "45",
    images: "/image/services/reiki.jpg",
    schemaType: "EnergyTherapy"
  },
  {
    id: 10,
    nom: "Kostenloser Chakra-Test",
    description: "Umfassende Analyse Ihrer sieben Hauptenergiezentren - Vedische Energie Diagnose gratis",
    price_presentiel: "0",
    price_online: "0",
    time: "30",
    images: "/image/services/chakra-test.jpg",
    schemaType: "DiagnosticProcedure"
  }
];

  // Utiliser les données statiques si Supabase ne retourne rien
  const displayServices = services.length > 0 ? services : staticServices;

  // Afficher seulement 4 services au début, ou tous si showAllServices est true
  const visibleServices = showAllServices ? displayServices : displayServices.slice(0, 4);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Chargement...</div>;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vedische & Indische Astrologie Beratung Zürich | Partner Horoskop & Karma Analyse Schweiz</title>
        <meta 
          name="description" 
          content="Professionelle Vedische Astrologie Beratung in Zürich & Schweiz. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit, Familien Aufstellung, Lebensberatung. Kostenlose Erstberatung. Telefonische & Online Beratung verfügbar." 
        />
        <meta 
          name="keywords" 
          content="Indische Astrologie Beratung, Vedische Astrologie, Astrologie Beratung, Lebensberatung, Zukunftsberatung, Partner Horoskop, Partner Horoskop Analyse, Geberts Horoskop, Schicksal, Karma, Chakra Energie Arbeit, Heilbehandlung, Kundalini Energie, Marma Punkent, Sexuelle Blockaden, Karmische Blockaden, Sexuelle Unlust, Familie Trennung, Magie, Schwarze Magie, Familien Aufstellung, karmische Beziehung, Unfähigkeit loszulassen, Emotionale Abhängigkeit, karmische Blockaden lösen, Schweiz, Swiss, Zürich, Switzerland, Sternzeichen, Sonne, Mond, Aszendent, Stier, Steinbock, Zwillinge, Skorpion, Löwe, Jungfrau, Waage, Schütze, Wassermann, Fisch, Jahreshoroskop, Monatshoroskop, Vedische Astrologie Ausbildung, telefonische Beratung, Fernberatung, Online Beratung, Telefonberatung" 
        />
        <meta name="author" content="Suthakar Parameswaran" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="DE" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.374448;8.531434" />
        <meta name="ICBM" content="47.374448, 8.531434" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vedische & Indische Astrologie Beratung Zürich | Partner Horoskop & Karma Analyse" />
        <meta property="og:description" content="Professionelle Vedische Astrologie Beratung in Zürich. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit & mehr. Telefonische & Online Beratung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indischeastro.ch" />
        <meta property="og:image" content="https://www.indischeastro.ch/image/og-image.jpg" />
        <meta property="og:site_name" content="IndischeAstro - Vedische Astrologie Zürich" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:latitude" content="47.374448" />
        <meta property="og:longitude" content="8.531434" />
        <meta property="og:street-address" content="Zwinglistrasse 37" />
        <meta property="og:locality" content="Zürich" />
        <meta property="og:postal-code" content="8004" />
        <meta property="og:country-name" content="Switzerland" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedische Astrologie Beratung Zürich | Partner Horoskop & Karma" />
        <meta name="twitter:description" content="Professionelle Vedische Astrologie Beratung. Partner Horoskop, Karma Analyse & spirituelle Heilung. Telefonische Beratung verfügbar." />
        <meta name="twitter:image" content="https://www.indischeastro.ch/image/twitter-image.jpg" />
        <meta name="twitter:label1" content="Standort" />
        <meta name="twitter:data1" content="Zürich, Schweiz" />
        <meta name="twitter:label2" content="Services" />
        <meta name="twitter:data2" content="Astrologie, Energiearbeit, Heilung" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.indischeastro.ch" />
        
        {/* Alternates */}
        <link rel="alternate" hrefLang="de-ch" href="https://www.indischeastro.ch" />
        <link rel="alternate" hrefLang="x-default" href="https://www.indischeastro.ch" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.indischeastro.ch#service",
              "name": "IndischeAstro - Vedische Astrologie Beratung",
              "description": "Professionelle Vedische und Indische Astrologie Beratung in Zürich mit Schwerpunkt auf Partner Horoskop, Karma Analyse und spiritueller Heilung.",
              "url": "https://www.indischeastro.ch",
              "telephone": "+41-76-123-45-67",
              "email": "info@indischeastro.ch",
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
                "Mo-Fr 14:00-20:00"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "14:00",
                  "closes": "20:00"
                }
              ],
              "serviceType": [
                "Vedische Astrologie",
                "Indische Astrologie",
                "Partner Horoskop",
                "Karma Beratung",
                "Chakra Heilung",
                "Energiearbeit",
                "Familien Aufstellung",
                "Lebensberatung",
                "Zukunftsberatung",
                "Karmische Blockaden Lösung",
                "Telefonische Beratung",
                "Online Beratung"
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "47.374448",
                  "longitude": "8.531434"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vedische Astrologie Services",
                "itemListElement": staticServices.map(service => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": service.schemaType,
                    "name": service.nom,
                    "description": service.description
                  },
                  "price": service.price_presentiel !== "0" ? service.price_presentiel : "0",
                  "priceCurrency": "CHF"
                }))
              },
              "provider": {
                "@type": "Person",
                "name": "Suthakar Parameswaran",
                "jobTitle": "Vedischer Astrologe und Heiler",
                "description": "Experte für Vedische Astrologie, Karma Analyse und spirituelle Heilung mit über 30 Jahren Erfahrung.",
                "knowsAbout": [
                  "Vedische Astrologie",
                  "Indische Astrologie", 
                  "Karma Analyse",
                  "Chakra Heilung",
                  "Energiearbeit",
                  "Partner Horoskop",
                  "Familien Aufstellung",
                  "Lebensberatung",
                  "Jyotish",
                  "Reiki",
                  "Kundalini Energie"
                ],
                "hasCredential": [
                  "Jothida Vibooshan",
                  "Reiki Grand-Master",
                  "Vedische Astrologie Ausbildung"
                ]
              },
              "sameAs": [
                "https://www.instagram.com/cittarastro/",
                "https://www.youtube.com/@1000suthakar",
                "https://www.facebook.com/"
              ]
            })
          }}
        />

        {/* Additional LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "IndischeAstro - Vedische Astrologie",
              "image": "https://www.indischeastro.ch/image/og-image.jpg",
              "@id": "https://www.indischeastro.ch#localbusiness",
              "url": "https://www.indischeastro.ch",
              "telephone": "+41-76-123-45-67",
              "priceRange": "CHF 100 - CHF 150",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zwinglistrasse 37",
                "addressLocality": "Zürich",
                "postalCode": "8004",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.374448,
                "longitude": 8.531434
              },
              "openingHoursSpecification": {
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
              "sameAs": [
                "https://www.instagram.com/cittarastro/",
                "https://www.youtube.com/@1000suthakar"
              ]
            })
          }}
        />
      </Head>
      
      <main className="flex flex-col h-auto w-full" itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section avec contenu SEO optimisé */}
        <section aria-label="Vedische Astrologie Beratung in Zürich - Professionelle Lebensberatung und Partner Horoskop Analyse" itemScope itemType="https://schema.org/Service">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {/* PREMIER SLIDE - VEDISCHE ASTROLOGIE */}
              <CarouselItem>
                <div className="grid md:grid-cols-2 min-h-[600px] relative overflow-hidden bg-amber-600">
                  {/* Background animations */}
                  <div className="absolute inset-0 bg-amber-600">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-1 bg-amber-300/50 animate-slide-lines"></div>
                      <div className="absolute top-10 left-0 w-full h-1 bg-amber-200/40 animate-slide-lines" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-20 left-0 w-full h-1 bg-amber-300/30 animate-slide-lines" style={{animationDelay: '2s'}}></div>
                      <div className="absolute top-32 left-0 w-full h-1 bg-amber-200/50 animate-slide-lines" style={{animationDelay: '3s'}}></div>
                    </div>

                    <div className="absolute inset-0 flex justify-between items-end px-10">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 bg-amber-300/30 rounded-t-lg animate-pulse-bars"
                          style={{
                            animationDelay: `${i * 0.5}s`,
                            height: `${20 + (i * 8)}%`
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-amber-500/30 to-transparent animate-wave-move"></div>

                    <div className="absolute top-1/4 left-1/4 w-32 h-2 bg-amber-200/40 rounded-full animate-float-diagonal"></div>
                    <div className="absolute top-3/4 right-1/3 w-24 h-1 bg-amber-300/50 rounded-full animate-float-diagonal" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-3 bg-amber-100/30 rounded-full animate-float-diagonal" style={{animationDelay: '4s'}}></div>
                  </div>

                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Image Column */}
                  <div className="flex justify-center items-center p-4 md:p-8 relative z-10">
                    <div className="relative w-full max-w-md h-[400px] md:h-[500px]" itemProp="image">
                      <Image
                        src={Profil}
                        alt="Suthakar Parameswaran - Vedischer Astrologe und Experte für Partner Horoskop Analyse, Karma Beratung und Vedische Astrologie in Zürich, Schweiz"
                        fill
                        className="rounded-lg transition-all duration-300 hover:grayscale-0 object-cover shadow-2xl hover:scale-105"
                        priority
                        itemProp="image"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex flex-col justify-center p-6 md:p-8 text-white relative z-10">
                    <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6">
                      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-4">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                          <span className="font-semibold text-sm md:text-base">🏠 Persönliche Beratung in Zürich: 150 CHF</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                          <span className="font-semibold text-sm md:text-base">📞 Telefonische & Online Beratung: 100 CHF</span>
                        </div>
                      </div>

                      <h1 className="text-2xl md:text-4xl font-bold leading-tight" itemProp="name">
                        Vedische Astrologie & Indische Astrologie Beratung
                        <span className="block text-amber-200 mt-1 md:mt-2 text-xl md:text-3xl">in Zürich mit Suthakar Parameswaran</span>
                      </h1>
                      
                      <h2 className="text-lg md:text-2xl font-bold text-amber-100" itemProp="description">
                        Professionelle Lebensberatung, Zukunftsberatung und spirituelle Heilung
                      </h2>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 w-full max-w-md hover:bg-white/15 transition-all duration-300">
                        <h3 className="text-base md:text-lg font-semibold mb-3 text-amber-100">Ihre Vorteile:</h3>
                        <div className="space-y-3 text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                              <span className="text-white text-xs md:text-sm">⭐</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm md:text-base">Partner Horoskop Analyse</p>
                              <p className="text-xs md:text-sm text-amber-100">Tiefe Einblicke in Beziehungsdynamiken & karmische Beziehungen</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}>
                              <span className="text-white text-xs md:text-sm">🔮</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm md:text-base">Karmische Blockaden lösen</p>
                              <p className="text-xs md:text-sm text-amber-100">Befreiung von emotionalen Lasten & Sexuelle Blockaden</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mt-4 w-full max-w-md">
                        <button
                          onClick={() => window.location.href = '/contact'}
                          type="button"
                          aria-label="Jetzt Termin für Vedische Astrologie Beratung in Zürich vereinbaren - Persönlich, Telefonisch oder Online"
                          className="cursor-pointer px-6 py-3 md:px-8 md:py-4 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-red-600 hover:to-red-700 rounded-lg md:rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-sm md:text-base"
                          itemProp="mainEntityOfPage"
                        >
                          Kostenlose Erstberatung
                        </button>
                        <button
                          onClick={() => window.location.href = '/ServicePrice'}
                          type="button"
                          aria-label="Alle Dienstleistungen für Vedische Astrologie, Partner Horoskop und Karma Beratung ansehen"
                          className="cursor-pointer px-4 py-2 md:px-6 md:py-3 font-medium text-white border-2 border-white/50 hover:border-white rounded-lg text-center transition-all duration-300 hover:bg-white/10 w-full sm:w-auto text-sm md:text-base"
                        >
                          Dienstleistungen entdecken
                        </button>
                      </div>
                      
                      <p className="text-amber-200 text-xs md:text-sm mt-3 md:mt-4 text-center">
                        ✅ Garantierte Qualität in allen Beratungsformaten - Persönlich, Telefonisch & Online
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* DEUXIÈME SLIDE - SPIRITUELLE HEILUNG */}
              <CarouselItem>
                <div className="grid md:grid-cols-2 min-h-[600px] relative overflow-hidden bg-purple-700">
                  {/* Background animations */}
                  <div className="absolute inset-0 bg-purple-700">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-1 bg-purple-300/50 animate-slide-lines"></div>
                      <div className="absolute top-12 left-0 w-full h-1 bg-purple-200/40 animate-slide-lines" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute top-24 left-0 w-full h-1 bg-purple-300/30 animate-slide-lines" style={{animationDelay: '3s'}}></div>
                      <div className="absolute top-36 left-0 w-full h-1 bg-purple-200/50 animate-slide-lines" style={{animationDelay: '4.5s'}}></div>
                    </div>

                    <div className="absolute inset-0 flex justify-around items-end px-8">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 bg-purple-300/40 rounded-t-lg animate-pulse-bars"
                          style={{
                            animationDelay: `${i * 0.3}s`,
                            height: `${15 + (i * 7)}%`
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-500/40 to-transparent animate-wave-move" style={{animationDelay: '1s'}}></div>

                    <div className="absolute top-1/3 right-1/4 w-28 h-2 bg-purple-200/50 rounded-full animate-float-diagonal"></div>
                    <div className="absolute top-2/3 left-1/4 w-20 h-1 bg-purple-300/60 rounded-full animate-float-diagonal" style={{animationDelay: '3s'}}></div>
                    <div className="absolute top-1/4 right-1/2 w-12 h-3 bg-purple-100/40 rounded-full animate-float-diagonal" style={{animationDelay: '6s'}}></div>
                  </div>

                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Image Column */}
                  <div className="flex justify-center items-center p-4 md:p-8 relative z-10">
                    <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
                      <Image
                        src={World}
                        alt="Vedische Astrologie und spirituelle Heilung in der Schweiz - Professionelle Beratung für Zürich, Bern, Luzern, Basel und ganz Europa"
                        fill
                        className="rounded-lg transition-all duration-300 hover:grayscale-0 object-cover shadow-2xl hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex flex-col justify-center p-6 md:p-8 text-white relative z-10">
                    <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                        <span className="font-bold text-white text-sm md:text-base">✨ Spezialist für karmische Beziehungen & Familien Aufstellung</span>
                      </div>

                      <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                        Spirituelle Heilung & Energiearbeit
                        <span className="block text-purple-200 mt-1 md:mt-2 text-xl md:text-3xl">Für Zürich, Schweiz und Europa</span>
                      </h1>
                      
                      <h2 className="text-lg md:text-2xl font-bold text-purple-100">
                        Lösungen für emotionale Blockaden, Sexuelle Unlust und Lebenskrisen
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                          <div className="text-xl md:text-2xl mb-2 animate-pulse">💞</div>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Beziehungsprobleme & Partner Horoskop</h4>
                          <p className="text-xs md:text-sm text-purple-100">Familien Aufstellung & karmische Beziehungen</p>
                          <ul className="text-xs text-purple-200 mt-2 space-y-1">
                            <li>• Emotionale Abhängigkeit</li>
                            <li>• Karmische Beziehungen</li>
                            <li>• Familie Trennung & Loslassen</li>
                            <li>• Sexuelle Blockaden</li>
                          </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                          <div className="text-xl md:text-2xl mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>⚡</div>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Energie & Heilung</h4>
                          <p className="text-xs md:text-sm text-purple-100">Ganzheitliche Therapieansätze</p>
                          <ul className="text-xs text-purple-200 mt-2 space-y-1">
                            <li>• Chakra Reinigung & Energiearbeit</li>
                            <li>• Karmische Blockaden lösen</li>
                            <li>• Kundalini Energie & Marma Punkent</li>
                            <li>• Spiritualität & Wachstum</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mt-4 w-full max-w-md">
                        <button
                          onClick={() => window.location.href = '/contact'}
                          type="button"
                          aria-label="Jetzt Beratungstermin für spirituelle Heilung und Vedische Astrologie vereinbaren - Telefonische Beratung verfügbar"
                          className="cursor-pointer px-6 py-3 md:px-8 md:py-4 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-red-600 hover:to-red-700 rounded-lg md:rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-sm md:text-base"
                        >
                          📞 Telefonische Beratung buchen
                        </button>
                        <div className="text-center hover:scale-105 transition-all duration-300">
                          <p className="text-purple-200 text-sm md:text-base">📞 +41 79 261 33 31</p>
                          <p className="text-purple-200 text-xs md:text-sm">Mo-Fr: 14:00-20:00 Uhr</p>
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 w-full max-w-md hover:bg-white/10 transition-all duration-300">
                        <p className="text-purple-200 text-xs md:text-sm text-center">
                          🎯 <strong>Erfolg versprochen:</strong> Über 30 Jahre Erfahrung in Vedischer Astrologie, Karma Analyse und Familien Aufstellung
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
        
        {/* Notification de contact */}
        <ContacteNotif />
        <AutoScrollingAstro />

        {/* Section À propos avec microdata enrichi */}
        <section 
          itemScope 
          itemType="https://schema.org/Person"
          className="grid md:grid-cols-2 bg-gradient-to-br from-gray-900 to-black w-auto mt-12 py-16"
          id="ueber-uns"
        >
          <div className="flex flex-col items-center pl-9 pr-6 max-w-screen-lg">
            <h2 className="flex justify-center text-3xl text-[#ff6e54] p-5 font-bold">
              Über <span itemProp="name"> Suthakar Parameswaran</span>
            </h2>
            <p itemProp="description" className="text-white text-lg leading-relaxed mb-6">
              <strong itemProp="jobTitle">Suthakar Parameswaran</strong> ist ein renommierter Experte für 
              <strong> Vedische Astrologie, Indische Astrologie, Karma Analyse und spirituelle Heilung</strong> mit über 30 Jahren Erfahrung. 
              Als zertifizierter <span itemProp="knowsAbout">Vedischer Astrologe (Jothida Vibooshan), Reiki Grand-Master und Heiler</span> 
              vereint er uraltes vedisches Wissen mit modernen therapeutischen Ansätzen.
            </p>

            <ul className="text-[#ff6e54] p-5 space-y-3 text-lg" itemProp="knowsAbout">
              <li itemProp="award">
                🏆 Jothida Vibooshan - Ausgebildet in traditioneller Vedischer Astrologie (Jyotish)
              </li>
              <li itemProp="award">
                📜 Reiki Grand-Master & zertifizierter Energieheiler
              </li>
              <li>
                🔬 Spezialist für karmische Blockaden und Familien Aufstellung
              </li>
              <li>
                💫 Experte für Partner Horoskop und Beziehungsanalyse
              </li>
              <li>
                🌟 Vedische Astrologie Ausbildung für Fortgeschrittene
              </li>
            </ul>

            <p className="text-white text-lg mt-4">
              Seine Mission ist es, Menschen zu helfen, ihre <strong>karmischen Muster</strong> zu verstehen, 
              <strong> emotionale Blockaden und Sexuelle Blockaden</strong> zu lösen und ihr volles <strong>spirituelles Potenzial</strong> zu entfalten. 
              Durch die Kombination von <strong>Vedischer Astrologie, Energiearbeit, Chakra Heilung und ganzheitlicher Heilung</strong> 
              begleitet er Sie auf Ihrem Weg zu mehr Lebensfreude und Erfüllung in <strong>Zürich und der ganzen Schweiz</strong>.
            </p>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative w-80 h-80" itemProp="image">
              <Image
                src={Profil2}
                alt="Suthakar Parameswaran - Vedischer Astrologe und Heiler in Zürich mit Spezialisierung auf Karma Analyse, Partner Horoskop und Vedische Astrologie Ausbildung"
                fill
                className="rounded-full object-cover border-4 border-[#ff6e54] shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section Services avec contenu SEO enrichi */}
        <section id="services" className="flex flex-col items-center w-full py-16 bg-gradient-to-br from-gray-50 to-white" itemScope itemType="https://schema.org/Service">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#260C56] mb-4">
              Vedische Astrologie Dienstleistungen in Zürich
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionelle <strong>Vedische Astrologie Beratung</strong>, <strong>Indische Astrologie</strong>, 
              <strong> Partner Horoskop Analyse</strong> und <strong>spirituelle Heilung</strong> für Ihr Wohlbefinden - 
              Persönlich in Zürich oder telefonische Beratung für die ganze Schweiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
            {visibleServices.map((service) => {
const isOnlineAvailable = [
  "Partner-Horoskop-Analyse",
  "Geburts-Horoskop", 
  "Astrologische Partnerberatung",
].includes(service.nom);

              const presentielTime = "60 Min";
              const onlineTime = isOnlineAvailable ? "30 Min" : "Nicht verfügbar";
              const presentielPrice = "150";
              const onlinePrice = isOnlineAvailable ? "100" : "150";

              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer flex flex-col"
                  itemScope
                  itemType={`https://schema.org/${service.schemaType}`}
                >
                  <div className="relative h-32 bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                      <span className="text-2xl">
                        {service.price_presentiel === "0" ? "🎁" : "✨"}
                      </span>
                    </div>
                    <div className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                      service.price_presentiel === "0" ? "bg-green-500" : "bg-[#ff6e54]"
                    }`}>
                      {service.price_presentiel === "0" ? "KOSTENLOS" : `ab ${onlinePrice} CHF`}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="font-bold text-[#260C56] text-base mb-2 line-clamp-2 group-hover:text-[#ff6e54] transition-colors" itemProp="name">
                      {service.nom}
                    </h2>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3 flex-1 leading-relaxed" itemProp="description">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-3">
                      {/* Ligne Vor Ort */}
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">🏠 Persönlich in Zürich:</span>
                          <span className="text-xs text-gray-500">({presentielTime})</span>
                        </div>
                        <span className="font-semibold text-[#260C56]">
                          {service.price_presentiel === "0" ? "Kostenlos" : `${presentielPrice} CHF`}
                        </span>
                      </div>

                      {/* Ligne Online/Telefonische Beratung */}
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">📞 Telefonische Beratung:</span>
                          <span className="text-xs text-gray-500">
                            {isOnlineAvailable ? `(${onlineTime})` : "(Nicht verfügbar)"}
                          </span>
                        </div>
                        <span className={`font-semibold ${
                          isOnlineAvailable ? "text-[#260C56]" : "text-gray-400"
                        }`}>
                          {!isOnlineAvailable ? "Nicht verfügbar" : 
                          service.price_online === "0" ? "Kostenlos" : `${onlinePrice} CHF`}
                        </span>
                      </div>
                    </div>

                    {/* Badge pour services spéciaux */}
                    {!isOnlineAvailable && (
                      <div className="mb-3">
                        <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full border border-amber-200">
                          🔥 Nur persönlich in Zürich
                        </span>
                      </div>
                    )}

                    {isOnlineAvailable && (
                      <div className="mb-3">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full border border-green-200">
                          💫 Telefonische Beratung verfügbar
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        {isOnlineAvailable ? (
                          <>
                            <span>🏠 {presentielTime}</span>
                            <span>•</span>
                            <span>📞 {onlineTime}</span>
                          </>
                        ) : (
                          <span>⏱️ {presentielTime} (nur in Zürich)</span>
                        )}
                      </div>
                      <button 
                        className="text-[#ff6e54] text-sm font-semibold hover:text-red-700 transition-colors flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `/contact?service=${encodeURIComponent(service.nom)}`;
                        }}
                        aria-label={`Termin für ${service.nom} buchen - Vedische Astrologie Beratung`}
                      >
                        {service.price_presentiel === "0" ? "Jetzt testen" : "Termin buchen"}
                        <span className="text-lg">›</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {displayServices.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="bg-[#260C56] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a1a7a] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                aria-label={showAllServices ? "Weniger Vedische Astrologie Dienstleistungen anzeigen" : "Alle Vedische Astrologie Dienstleistungen anzeigen"}
              >
                {showAllServices ? (
                  <>
                    <span>Weniger anzeigen</span>
                    <span>↑</span>
                  </>
                ) : (
                  <>
                    <span>Alle {displayServices.length} Vedische Dienstleistungen anzeigen</span>
                    <span>↓</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Section d'information sur les formats avec les prix */}
          <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-[#260C56] mb-4 text-center">
              📞 Vedische Astrologie Beratungsformate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#260C56]">Persönliche Beratung in Zürich</h3>
                    <p className="text-sm text-purple-600 font-semibold">150 CHF / 60 Min</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>60 Minuten</strong> intensive Vedische Astrologie Beratung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Persönliche Energiearbeit & Heilbehandlung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Alle Vedische Astrologie Dienstleistungen verfügbar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Direkter persönlicher Kontakt in Zürich</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#260C56]">Telefonische & Online Beratung</h3>
                    <p className="text-sm text-green-600 font-semibold">100 CHF / 30 Min</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>30 Minuten</strong> fokussierte Vedische Astrologie Beratung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Bequem von zu Hause in der ganzen Schweiz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Spezielle Auswahl an Vedischen Dienstleistungen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Flexible Terminvereinbarung & Fernberatung</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Note importante sur les services disponibles */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 text-center">
                <strong>Hinweis:</strong> Telefonische Beratung ist nur für ausgewählte Vedische Astrologie Dienstleistungen verfügbar: 
                Partner-Horoskop-Analyse, Geburts-Horoskop, Karmische Blockaden Lösung und Kundalini-Energiearbeit.
                Perfekt für Kunden aus Bern, Luzern, Basel, Genf und der ganzen Schweiz.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Brauchen Sie persönliche Beratung bei der Auswahl der richtigen Vedischen Astrologie Dienstleistung?
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
              aria-label="Kostenlose Erstberatung für Vedische Astrologie und Indische Astrologie anfordern"
            >
              📞 Kostenlose Telefon-Beratung anfordern
            </button>
          </div>
        </section>

        {/* Section témoignages */}
        <section 
          itemScope 
          itemType="https://schema.org/Review"
          className="w-full mt-20 py-16 bg-gradient-to-br from-gray-50/50 to-white/30 relative overflow-hidden"
        >
          <div className="w-full transform transition-all duration-300 hover:scale-[1.01]">
            <AutoScrollingComponent />
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none"></div>
        </section>

        {/* Section blog/articles avec contenu SEO */}
        <section className="py-20 px-4 bg-gradient-to-br from-transparent via-purple-50/20 to-transparent relative overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff6e54]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#260C56]/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/80 text-gray-700 px-6 py-3 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 bg-[#ff6e54] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium uppercase tracking-wider">Vedisches Wissen & Astrologie</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
                Vedische Astrologie Wissen
                <span className="block text-[#ff6e54] mt-2">Für Lebensberatung & Partnerschaft</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie die tiefe Weisheit der 5.000 Jahre alten vedischen Tradition für 
                <strong> Partnerschaft, Karma Analyse, Familien Aufstellung und spirituelles Wachstum</strong> 
                in Zürich und der Schweiz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="group relative" itemScope itemType="https://schema.org/Article">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ff6e54] to-[#ff8e54] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💑</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight" itemProp="headline">
                    Partner Horoskop & Karmische Beziehungen
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow" itemProp="description">
                    Erfahren Sie, wie die <strong>Vedische Astrologie</strong> tiefe Einblicke in Ihre 
                    <strong> Beziehungsdynamiken und karmische Verbindungen</strong> bietet. Analyse der 
                    <strong> emotionalen Abhängigkeit</strong> und Kompatibilität für eine erfüllende Partnerschaft 
                    in Zürich und der Schweiz.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm text-[#ff6e54] font-semibold">#PartnerHoroskop #KarmischeBeziehung</span>
                  </div>
                </div>
              </article>

              <article className="group relative" itemScope itemType="https://schema.org/Article">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#260C56] to-[#4c1d95] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔄</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight" itemProp="headline">
                    Karma Analyse & Blockaden Lösung
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow" itemProp="description">
                    Verstehen Sie Ihre <strong>karmischen Muster und Blockaden</strong> aus vergangenen Leben. 
                    Die <strong>Vedische Astrologie</strong> hilft bei der Lösung von <strong>sexuellen Blockaden, 
                    emotionalen Abhängigkeiten und Familienproblemen</strong> für bewusste Schicksalsgestaltung.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm text-[#ff6e54] font-semibold">#Karma #BlockadenLösen #VedischeAstrologie</span>
                  </div>
                </div>
              </article>

              <article className="group relative" itemScope itemType="https://schema.org/Article">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight" itemProp="headline">
                    Chakra Energie & Spirituelle Heilung
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow" itemProp="description">
                    Entdecken Sie die Kraft der <strong>Chakra Heilung und Energiearbeit</strong> in Zürich. 
                    Reinigung und Harmonisierung Ihrer <strong>Energiezentren</strong> für mehr Vitalität, 
                    <strong> Kundalini Energie Aktivierung</strong> und spirituelles Wohlbefinden durch 
                    <strong> Vedische Heilmethoden</strong>.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm text-[#ff6e54] font-semibold">#ChakraHeilung #Energiearbeit #Zürich</span>
                  </div>
                </div>
              </article>
            </div>

            {/* <div className="text-center mt-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/80 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[#260C56] mb-4">
                  Vertiefen Sie Ihr Vedisches Wissen in der Schweiz
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Entdecken Sie unsere umfassende Bibliothek an vedischem Wissen für 
                  <strong> Lebensberatung, Partnerschaft, Familien Aufstellung und spirituelles Wachstum</strong> 
                  in Zürich, Bern, Luzern und der ganzen Schweiz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/blog'}
                    className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105"
                    aria-label="Blog über Vedische Astrologie, Karma und Partner Horoskop entdecken"
                  >
                    Vedisches Wissen entdecken
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="border-2 border-[#260C56] text-[#260C56] px-8 py-4 rounded-xl font-semibold hover:bg-[#260C56] hover:text-white transition-all duration-300"
                    aria-label="Persönliche Vedische Astrologie Beratung in Zürich buchen"
                  >
                    📞 Telefonische Beratung
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Section Contact avec LocalBusiness Schema */}
        <section 
          itemScope 
          itemType="https://schema.org/LocalBusiness"
          className="relative w-full mt-8"
          id="kontakt"
        >
          <h1 className="font-bold text-3xl text-center mb-8">Vedische Astrologie Beratung in Zürich - Kontakt & Terminvereinbarung</h1>

          <div className="relative w-full h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.234567890123!2d8.531434!3d47.374448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0b7c5a65a67%3A0x1234567890abcdef!2sZwinglistrasse%2037%2C%208004%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vedische Astrologie Praxis in Zürich - Zwinglistrasse 37, 8004 Zürich, Schweiz - Indische Astrologie Beratung"
              aria-label="Standort unserer Vedischen Astrologie Praxis in Zürich für Partner Horoskop, Karma Beratung und spirituelle Heilung"
            ></iframe>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white">
                <div 
                  itemProp="address" 
                  itemScope 
                  itemType="https://schema.org/PostalAddress"
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">Vedische Astrologie Praxis Zürich</h4>
                  <p itemProp="streetAddress" className="text-lg">Zwinglistrasse 37</p>
                  <p>
                    <span itemProp="postalCode">8004</span>{' '}
                    <span itemProp="addressLocality">Zürich</span>,{' '}
                    <span itemProp="addressCountry">Schweiz</span>
                  </p>
                  <p itemProp="telephone" className="mt-2">📞 +41 79 261 33 31</p>
                  <p className="text-sm mt-1">📞 Telefonische Beratung verfügbar</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Folgen Sie uns für Vedisches Wissen</h4>
                  <div className="flex justify-center gap-4 text-2xl">
                    <Link 
                      href="https://www.instagram.com/cittarastro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Folgen Sie uns auf Instagram für Vedische Astrologie Tipps, Partner Horoskop und Karma Wissen"
                      className="hover:text-pink-400 transition-colors duration-300"
                    >
                      <FaSquareInstagram />
                    </Link>
                    <Link 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Besuchen Sie unsere Facebook Seite für Vedische Astrologie, Lebensberatung und spirituelle Heilung"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaFacebookSquare />
                    </Link>
                    <Link 
                      href="https://www.youtube.com/@1000suthakar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Abonnieren Sie unseren YouTube Kanal für Vedische Astrologie, Karma Analyse und Energiearbeit"
                      className="hover:text-red-400 transition-colors duration-300"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section avec contenu SEO enrichi */}
        <section className="bg-gray-50 py-16 px-4" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen - Vedische Astrologie Zürich</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "Was ist Vedische Astrologie und wie unterscheidet sie sich von westlicher Astrologie?",
                  answer: "Die Vedische Astrologie (Jyotish) ist eine 5.000 Jahre alte indische Wissenschaft, die auf dem siderischen Tierkreis basiert. Im Gegensatz zur westlichen Astrologie legt sie besonderen Wert auf Karma, Spiritualität, Reinkarnation und praktische Lebensführung. Sie bietet präzisere Vorhersagen und konzentriert sich auf die Lösung karmischer Blockaden, Familien Aufstellung und spirituelles Wachstum. In unserer Praxis in Zürich kombinieren wir vedisches Wissen mit moderner Lebensberatung."
                },
                {
                  question: "Kann Vedische Astrologie bei Beziehungsproblemen und Partner Horoskop helfen?",
                  answer: "Absolut. Die Vedische Astrologie bietet tiefe Einblicke in Partnerschaftsdynamiken, karmische Verbindungen und Kompatibilität. Wir analysieren Partner Horoskope, um Kommunikationsmuster zu verbessern, Konflikte zu lösen, emotionale Abhängigkeit zu transformieren und die harmonische Entwicklung der Beziehung zu fördern. Besonders bei karmischen Beziehungen, Familien Trennung und Sexuelle Blockaden bietet die Vedische Astrologie wertvolle Lösungsansätze."
                },
                {
                  question: "Was sind karmische Blockaden und wie können sie gelöst werden?",
                  answer: "Karmische Blockaden sind energetische Muster aus vergangenen Leben, die Ihr gegenwärtiges Leben beeinflussen. Sie können sich als emotionale Abhängigkeit, Sexuelle Blockaden, Beziehungsprobleme oder berufliche Hindernisse zeigen. Durch Vedische Astrologie, Energiearbeit, Chakra Heilung und spezielle Heiltechniken können diese Blockaden identifiziert und aufgelöst werden. In unserer Praxis in Zürich arbeiten wir mit Karma Analyse, Familien Aufstellung und Energiearbeit für tiefgreifende Transformation."
                },{
  question: "Bieten Sie auch telefonische und Online-Beratungen an?",
  answer: "Ja, wir bieten drei Beratungsformate an: Persönliche Beratung in unserer Praxis in Zürich (150 CHF/60 Min), Telefonische Beratung (100 CHF/30 Min) und Online-Video-Beratung (100 CHF/30 Min). Die telefonische Beratung ist ideal für Kunden aus der ganzen Schweiz - Bern, Luzern, Basel, Genf, Lausanne - und bietet die gleiche Qualität wie die persönliche Beratung. Perfekt für Partner Horoskop Analyse, Karma Beratung und Lebensberatung."
},
{
  question: "Welche Probleme können mit Vedischer Astrologie und Energiearbeit gelöst werden?",
  answer: "In unserer Praxis in Zürich behandeln wir vielfältige Themen: Partnerprobleme & karmische Beziehungen, Emotionale Abhängigkeit & Unfähigkeit loszulassen, Sexuelle Blockaden & Unlust, Familienprobleme & Trennung, Karmische Blockaden & Schicksalsfragen, Berufliche Hindernisse & Zukunftsängste, Spirituelle Entwicklung & Chakra Reinigung. Durch die Kombination von Vedischer Astrologie, Energiearbeit und Familien Aufstellung bieten wir ganzheitliche Lösungen."
},
{
  question: "Wie lange dauert eine typische Beratung und was kostet sie?",
  answer: "Persönliche Beratungen in Zürich dauern 60 Minuten und kosten 150 CHF. Telefonische und Online-Beratungen dauern 30 Minuten und kosten 100 CHF. Für komplexe Themen wie Familien Aufstellung oder intensive Energiearbeit können auch längere Sitzungen (90 Minuten) vereinbart werden. Wir bieten auch kostenlose Erstgespräche von 15 Minuten an, um Ihre Situation kennenzulernen."
}
].map((faq, index) => (
<div key={index} className="bg-white rounded-lg shadow-md" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <details className="group">
    <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
      <span itemProp="name">{faq.question}</span>
    </summary>
    <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <p itemProp="text" className="text-gray-700 leading-relaxed">
        {faq.answer}
      </p>
    </div>
  </details>
</div>
))}
</div>


</div>
</section>

{/* Section mots-clés pour SEO avec contenu sémantique */}
<section className="bg-white py-16 px-4">
<div className="max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-[#260C56] mb-4">
      Vedische Astrologie Services in der Schweiz
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Professionelle <strong>Vedische Astrologie Beratung</strong> und <strong>spirituelle Heilung</strong> 
      in <strong>Zürich</strong> und für die ganze <strong>Schweiz</strong> - 
      Persönlich, telefonisch und online verfügbar
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {/* Colonne Astrologie Services */}
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#260C56] mb-4 flex items-center gap-2">
        <span>🔮</span> Vedische Astrologie Services
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Indische Astrologie Beratung</strong> in Zürich</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Vedische Astrologie</strong> für Lebensberatung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Partner Horoskop Analyse</strong> & Kompatibilität</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Geburts Horoskop</strong> & Schicksalsdeutung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Karma Analyse</strong> & Reinkarnation</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Jahreshoroskop</strong> & Monatshoroskop</span>
        </li>
      </ul>
    </div>

    {/* Colonne Energiearbeit & Heilung */}
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#260C56] mb-4 flex items-center gap-2">
        <span>⚡</span> Energiearbeit & Heilung
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Chakra Energie Arbeit</strong> & Reinigung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Kundalini Energie</strong> Aktivierung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Marma Punkent</strong> Behandlung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Karmische Blockaden</strong> lösen</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Sexuelle Blockaden</strong> Behandlung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Heilbehandlung</strong> & Energieheilung</span>
        </li>
      </ul>
    </div>

    {/* Colonne Beziehung & Familie */}
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#260C56] mb-4 flex items-center gap-2">
        <span>💞</span> Beziehung & Familie
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Familien Aufstellung</strong> & Systemarbeit</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Karmische Beziehung</strong> Analyse</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Emotionale Abhängigkeit</strong> lösen</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Familie Trennung</strong> Bewältigung</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Unfähigkeit loszulassen</strong> Therapie</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span><strong>Partnerschaft</strong> & Liebesbeziehung</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Grid des mots-clés de localisation */}
  <div className="bg-gray-50 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-center text-[#260C56] mb-6">
      Vedische Astrologie in der Schweiz - Standorte & Regionen
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
      {[
        "Vedische Astrologie Zürich",
        "Indische Astrologie Zürich", 
        "Partner Horoskop Zürich",
        "Karma Beratung Zürich",
        "Chakra Heilung Zürich",
        "Lebensberatung Zürich",
        
        "Vedische Astrologie Schweiz",
        "Indische Astrologie Schweiz",
        "Partner Horoskop Schweiz", 
        "Karma Beratung Schweiz",
        "Familien Aufstellung Schweiz",
        "Energiearbeit Schweiz",
        
        "Vedische Astrologie Bern",
        "Indische Astrologie Luzern",
        "Partner Horoskop Basel",
        "Karma Beratung Genf", 
        "Chakra Heilung Lausanne",
        "Lebensberatung Winterthur",
        
        "Vedische Astrologie St. Gallen",
        "Indische Astrologie Zug",
        "Partner Horoskop Luzern",
        "Karma Beratung Bern",
        "Familien Aufstellung Basel",
        "Energiearbeit Genf",
        
        "Sternzeichen Analyse Zürich",
        "Geburtshoroskop Schweiz", 
        "Zukunftsberatung Zürich",
        "Spirituelle Heilung Schweiz",
        "Karmische Blockaden lösen",
        "Sexuelle Blockaden Behandlung",
        
        "Vedische Astrologie Ausbildung",
        "Reiki Grand-Master Zürich",
        "Heiltherapeut Schweiz",
        "Telefonische Beratung Astrologie",
        "Online Beratung Vedische Astrologie",
        "Fernberatung Schweiz"
      ].map((keyword, index) => (
        <div key={index} className="bg-white p-3 rounded-lg hover:shadow-md transition-shadow text-center">
          <strong className="text-[#260C56] text-xs">{keyword}</strong>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <p className="text-gray-600 text-lg">
        Professionelle <strong>Vedische Astrologie Beratung</strong> in der ganzen Schweiz: 
        <strong> Zürich, Bern, Luzern, Basel, Genf, Lausanne, Winterthur, St. Gallen</strong> und Umgebung.
        <br />
        <strong>Telefonische Beratung</strong> verfügbar für alle Regionen der Schweiz.
      </p>
    </div>
  </div>
</div>
</section>


</main>
</>
);
}