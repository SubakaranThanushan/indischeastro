"use client";
import CardsService from "../Components/CardsService";
import Head from "next/head";
import { useState } from "react";

export default function ServicePrice() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Données locales pour les services avec deux types de prix
  const services = [
    {
      id: 1,
      nom: "Partner-Horoskop",
      description: "Heirat und Zusammensessen als Kernbegriffe gefasst. Tiefgehende Analyse Ihrer Partnerschaft und Kompatibilität.",
      image: "/image/drive-download-20250313T185750Z-001/parte.png",
      alt: "Partner Horoskop Analyse für Beziehungen und karmische Verbindungen",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "90 Min",
      popular: true,
      category: "astrologie"
    },
    {
      id: 2,
      nom: "Geburts-Horoskop",
      description: "Detaillierte Analyse Ihres Geburtshoroskops für persönliche Einsichten und Lebensweg-Erkennung.",
      image: "/image/drive-download-20250313T185750Z-001/enfant.jpg",
      alt: "Persönliches Geburtshoroskop Analyse und Schicksalsdeutung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min",
      category: "astrologie"
    },
    {
      id: 3,
      nom: "Astrologische Partnerberatung",
      description: "Einblicke in die Kraft lebendiger Räume mit der weiblichen und männlichen Energie.",
      image: "/image/drive-download-20250313T185750Z-001/les-essentiels-decoration-pour-un-mariage-sur-le-theme-astrologie.jpeg",
      alt: "Astrologische Partnerberatung und Beziehungscoaching",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "75 Min",
      category: "astrologie"
    },
    {
      id: 4,
      nom: "Kundalini-Energiearbeit",
      description: "Chakren sind unsere Energiezentren. Aktivieren Sie Ihre Kundalini-Energie für mehr Lebenskraft.",
      image: "/image/drive-download-20250313T185750Z-001/700x515.jpg",
      alt: "Kundalini Energiearbeit und Chakren Aktivierung für Transformation",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "90 Min",
      category: "energiearbeit"
    },
    {
      id: 5,
      nom: "Marmapunkt-Behandlung",
      description: "Die Marma-Therapie ist das Fundament der Ayurvedischen Lehre für ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/image copy.png",
      alt: "Marmapunkt Behandlung und Ayurveda Therapie für Balance",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min",
      category: "energiearbeit"
    },
    {
      id: 6,
      nom: "Heilende Energie Mudras",
      description: "Entdecken Sie die Kraft der Hand-Mudras für Energiefluss und Harmonisierung.",
      image: "/image/drive-download-20250313T185750Z-001/image.png",
      alt: "Heilende Energie Mudras und Handhaltungen für Harmonie",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "45 Min",
      category: "energiearbeit"
    },
    {
      id: 7,
      nom: "Reiki Energiebehandlung",
      description: "Erfahren Sie universelle Lebensenergie für Balance und ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/Activation-de-la-Kundalini-1.jpg",
      alt: "Reiki Energiebehandlung und Heilung für Wohlbefinden",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min",
      category: "energiearbeit"
    },
    {
      id: 8,
      nom: "Chakra Test Gratis",
      description: "Kostenloser Test: Wie steht es um Ihre Chakren? Analyse Ihres Energiezustands.",
      image: "/image/drive-download-20250313T185750Z-001/chakra.png",
      alt: "Kostenloser Chakra Test und Energieanalyse für Ihr Wohlbefinden",
      price_presentiel: "Gratis",
      price_online: "Gratis",
      time: "30 Min",
      free: true,
      category: "energiearbeit"
    },
    {
      id: 9,
      nom: "Aura-Heilung und Reinigung",
      description: "Reinigung und Harmonisierung Ihres Energiefeldes für mehr Ausgeglichenheit und Schutz.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Aura Heilung und Reinigung Energiearbeit für Schutz",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min",
      category: "energiearbeit"
    },
    {
      id: 10,
      nom: "Vedische Astrologie-Beratung",
      description: "Umfassende Beratung basierend auf der vedischen Astrologie für Lebensentscheidungen.",
      image: "/image/drive-download-20250313T185750Z-001/pngtree-astrological-zodiac-horoscope-wheel-with-planet-earth-the-power-of-the-image_15731735-2.jpg",
      alt: "Vedische Astrologie Beratung und Lebensführung in Zürich",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "75 Min",
      popular: true,
      category: "astrologie"
    },
    {
      id: 11,
      nom: "Ayurveda-Kopfmassage",
      description: "Traditionelle indische Kopfmassage zur Tiefenentspannung und Energieaktivierung.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Ayurveda Kopfmassage Entspannung und Energiearbeit",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "45 Min",
      category: "wellness"
    },
    {
      id: 12,
      nom: "Spirituelle Lebensberatung",
      description: "Ganzheitliche Beratung für persönliche Entwicklung und spirituelles Wachstum.",
      image: "/image/drive-download-20250313T185750Z-001/parte.png",
      alt: "Spirituelle Lebensberatung Entwicklung und Persönlichkeitswachstum",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min",
      category: "beratung"
    }
  ];

  // Filtrer les services par catégorie
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  // Catégories pour le filtrage
  const categories = [
    { id: "all", name: "Alle Dienstleistungen", count: services.length },
    { id: "astrologie", name: "Vedische Astrologie", count: services.filter(s => s.category === "astrologie").length },
    { id: "energiearbeit", name: "Energiearbeit & Heilung", count: services.filter(s => s.category === "energiearbeit").length },
    { id: "beratung", name: "Lebensberatung", count: services.filter(s => s.category === "beratung").length },
    { id: "wellness", name: "Ayurveda & Wellness", count: services.filter(s => s.category === "wellness").length }
  ];

  return (
    <>
      <Head>
        <title>Vedische Astrologie Dienstleistungen & Preise | Partner Horoskop & Energiearbeit in Zürich</title>
        <meta 
          name="description" 
          content="Professionelle Vedische Astrologie Dienstleistungen in Zürich: Partner Horoskop 150 CHF, Online-Beratung 100 CHF, Chakra Heilung, Karma Analyse. Kostenlose Erstberatung." 
        />
        <meta 
          name="keywords" 
          content="Vedische Astrologie Preise, Partner Horoskop Kosten, Astrologie Beratung Zürich, Chakra Heilung Preise, Energiearbeit Schweiz, Karma Analyse Preis, Online Beratung Astrologie, Vedische Astrologie Dienstleistungen" 
        />
        <meta name="author" content="Suthakar Parameswaran - Vedischer Astrologe" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vedische Astrologie Dienstleistungen & Preise | Zürich" />
        <meta property="og:description" content="Partner Horoskop 150 CHF, Online-Beratung 100 CHF. Professionelle Vedische Astrologie & Energiearbeit in Zürich." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indischeastro.ch/serviceprice" />
        <meta property="og:image" content="https://www.indischeastro.ch/og-serviceprice.jpg" />
        <meta property="og:site_name" content="IndischeAstro - Vedische Astrologie" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.indischeastro.ch/serviceprice" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Vedische Astrologie Dienstleistungen",
              "description": "Professionelle Vedische Astrologie Beratung, Partner Horoskop Analyse und Energiearbeit in Zürich",
              "url": "https://www.indischeastro.ch/serviceprice",
              "numberOfItems": services.length,
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.nom,
                  "description": service.description,
                  "image": `https://www.indischeastro.ch${service.image}`,
                  "offers": {
                    "@type": "Offer",
                    "price": service.price_presentiel === "Gratis" ? "0" : service.price_presentiel.replace(" CHF", ""),
                    "priceCurrency": "CHF",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01"
                  },
                  "provider": {
                    "@type": "Person",
                    "name": "Suthakar Parameswaran",
                    "jobTitle": "Vedischer Astrologe und Heiler"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Zürich"
                  }
                }
              }))
            }),
          }}
        />
        
        {/* Additional Schema for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Vedische Astrologie Beratung",
              "provider": {
                "@type": "Person",
                "name": "Suthakar Parameswaran",
                "description": "Experte für Vedische Astrologie, Karma Analyse und spirituelle Heilung mit über 20 Jahren Erfahrung.",
                "url": "https://www.indischeastro.ch"
              },
              "areaServed": {
                "@type": "City",
                "name": "Zürich"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vedische Astrologie Dienstleistungen",
                "itemListElement": services.map(service => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.nom,
                    "description": service.description
                  }
                }))
              }
            }),
          }}
        />
      </Head>

      {/* Structured Data Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://www.indischeastro.ch"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Dienstleistungen & Preise",
                "item": "https://www.indischeastro.ch/serviceprice"
              }
            ]
          }),
        }}
      />

      {/* 🌟 Contenu principal */}
      <div className="flex flex-col items-center w-full min-h-screen py-8 bg-gradient-to-br from-gray-50 to-white">
        
        {/* ✅ En-tête avec design premium */}
        <div className="text-center max-w-6xl px-4 mb-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-[#ff6e54] transition-colors">Startseite</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-[#ff6e54] font-semibold">Dienstleistungen & Preise</span>
              </li>
            </ol>
          </nav>

          {/* Badge promotionnel */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Flexible Beratungsformate</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6 leading-tight">
            Vedische Astrologie 
            <span className="block text-[#ff6e54] mt-2">Dienstleistungen & Preise</span>
          </h1>

          {/* Section des prix avec design moderne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Offer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Vor Ort Beratung</h3>
                  <p className="text-2xl font-bold text-[#260C56]" itemProp="price" content="150">150 CHF</p>
                  <meta itemProp="priceCurrency" content="CHF" />
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Persönliche Atmosphäre in Zürich</li>
                <li>✓ Direkter Energieaustausch</li>
                <li>✓ Traditionelle Rituale möglich</li>
                <li>✓ Individuelle Betreuung</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Offer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Online Beratung</h3>
                  <p className="text-2xl font-bold text-[#260C56]" itemProp="price" content="100">100 CHF</p>
                  <meta itemProp="priceCurrency" content="CHF" />
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Bequem von zu Hause</li>
                <li>✓ Zeit- und Kostenersparnis</li>
                <li>✓ Moderne Video-Technologie</li>
                <li>✓ Schweizweit verfügbar</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere umfangreichen <strong>Vedischen Astrologie Dienstleistungen</strong> und 
            <strong> Energiearbeit</strong> in Zürich. 
            <span className="block text-[#ff6e54] font-semibold mt-2">
              Garantierte gleiche Qualität in beiden Beratungsformaten!
            </span>
          </p>
        </div>

        {/* ✅ Filtres par catégorie */}
        <div className="w-full max-w-7xl px-4 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#260C56] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#260C56] hover:text-[#260C56]'
                }`}
                aria-label={`${category.name} anzeigen`}
                aria-pressed={selectedCategory === category.id}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Grid des services avec design amélioré */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl" 
             itemScope 
             itemType="https://schema.org/ItemList">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="relative" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={index + 1} />
              {service.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🔥 Beliebt
                  </div>
                </div>
              )}
              {service.free && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🎁 Kostenlos
                  </div>
                </div>
              )}
              <CardsService
                id={service.id}
                images={service.image}
                nom={service.nom}
                description={service.description}
                alt={service.alt}
                price_presentiel={service.price_presentiel}
                price_online={service.price_online}
                time={service.time}
                pricetime={true}
              />
            </div>
          ))}
        </div>

        {/* Message si aucun service trouvé */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Keine Dienstleistungen gefunden</h3>
            <p className="text-gray-600">Bitte wählen Sie eine andere Kategorie aus.</p>
          </div>
        )}

        {/* ✅ Section CTA avec design premium */}
        <div className="mt-16 text-center max-w-4xl w-full px-4">
          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6e54]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#260C56]/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#260C56] mb-4">
                Bereit für Ihre Transformation?
              </h2>
              <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                Wählen Sie zwischen persönlicher <strong>Vedischer Astrologie Beratung</strong> in Zürich 
                oder bequemer <strong>Online-Beratung</strong>. Starten Sie noch heute Ihre Reise zu mehr 
                Klarheit und innerem Frieden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    window.location.href = '/Contacte';
                    // Tracking
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'conversion', {
                        'send_to': 'AW-YOUR_CONVERSION_ID',
                        'event_category': 'Servicepage',
                        'event_label': 'CTA_Klick'
                      });
                    }
                  }}
                  className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
                  aria-label="Jetzt Termin für Vedische Astrologie Beratung vereinbaren"
                >
                  <span>📅</span>
                  Jetzt Termin vereinbaren
                </button>
                <div className="text-center sm:text-left">
                  <p className="text-gray-700 font-semibold">📞 +41 76 123 45 67</p>
                  <p className="text-gray-500 text-sm">Mo-Fr: 9:00-18:00 Uhr</p>
                </div>
              </div>
              
              {/* Garantie */}
              <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 max-w-md mx-auto">
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span className="text-green-500">✓</span>
                  <strong>Garantiert:</strong> Dieselbe intensive Beratungsqualität in beiden Formaten
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Section informations supplémentaires */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Flexible Termine</h3>
            <p className="text-gray-600 text-sm">Täglich verfügbare Termine für Ihre Vedische Astrologie Beratung</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Professionelle Qualität</h3>
            <p className="text-gray-600 text-sm">Zertifizierte Vedische Astrologie Expertise mit 20+ Jahren Erfahrung</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Persönliche Betreuung</h3>
            <p className="text-gray-600 text-sm">Individuell auf Ihre karmischen Muster abgestimmt</p>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-12 max-w-4xl w-full px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#260C56] mb-6 text-center">Häufige Fragen zu Preisen</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kann ich auch Pakete buchen?</h4>
                <p className="text-gray-600 text-sm">Ja, wir bieten maßgeschneiderte Pakete für wiederholte Beratungen an.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Gibt es Ermäßigungen?</h4>
                <p className="text-gray-600 text-sm">Studenten und Rentier erhalten 10% Ermäßigung auf alle Dienstleistungen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script de tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Tracking de la page des services
            window.addEventListener('load', function() {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'page_view', {
                  'page_title': 'Dienstleistungen & Preise',
                  'page_location': window.location.href
                });
              }
              
              // Tracking des filtrage
              const categoryButtons = document.querySelectorAll('button[aria-label*="anzeigen"]');
              categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                  const category = this.textContent.split(' (')[0];
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'category_filter', {
                      'event_category': 'Servicepage',
                      'event_label': category,
                      'value': 1
                    });
                  }
                });
              });
            });
          `,
        }}
      />
    </>
  );
}