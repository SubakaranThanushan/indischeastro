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
      time_presentiel: "60 Min",
      time_online: "30 Min",
      popular: true,
      category: "astrologie",
      slug: "partner-horoskop-analyse"
    },
    {
      id: 2,
      nom: "Geburts-Horoskop",
      description: "Detaillierte Analyse Ihres Geburtshoroskops für persönliche Einsichten und Lebensweg-Erkennung.",
      image: "/image/drive-download-20250313T185750Z-001/enfant.jpg",
      alt: "Persönliches Geburtshoroskop Analyse und Schicksalsdeutung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "60 Min",
      time_online: "30 Min",
      category: "astrologie",
      slug: "geburts-horoskop"
    },
    {
      id: 3,
      nom: "Astrologische Partnerberatung",
      description: "Einblicke in die Kraft lebendiger Räume mit der weiblichen und männlichen Energie.",
      image: "/image/drive-download-20250313T185750Z-001/les-essentiels-decoration-pour-un-mariage-sur-le-theme-astrologie.jpeg",
      alt: "Astrologische Partnerberatung und Beziehungscoaching",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "60 Min",
      time_online: "30 Min",
      category: "astrologie",
      slug: "astrologische-partnerberatung"
    },
    {
      id: 4,
      nom: "Kundalini-Energiearbeit",
      description: "Chakren sind unsere Energiezentren. Aktivieren Sie Ihre Kundalini-Energie für mehr Lebenskraft.",
      image: "/image/drive-download-20250313T185750Z-001/700x515.jpg",
      alt: "Kundalini Energiearbeit und Chakren Aktivierung für Transformation",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      category: "energiearbeit",
      slug: "kundalini-energiearbeit"
    },
    {
      id: 5,
      nom: "Marmapunkt-Behandlung",
      description: "Die Marma-Therapie ist das Fundament der Ayurvedischen Lehre für ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/image copy.png",
      alt: "Marmapunkt Behandlung und Ayurveda Therapie für Balance",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      category: "energiearbeit",
      slug: "marmapunkt-behandlung"
    },
    {
      id: 6,
      nom: "Heilende Energie Mudras",
      description: "Entdecken Sie die Kraft der Hand-Mudras für Energiefluss und Harmonisierung.",
      image: "/image/drive-download-20250313T185750Z-001/image.png",
      alt: "Heilende Energie Mudras und Handhaltungen für Harmonie",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      category: "energiearbeit",
      slug: "heilende-energie-mudras"
    },
    {
      id: 7,
      nom: "Reiki Energiebehandlung",
      description: "Erfahren Sie universelle Lebensenergie für Balance und ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/Activation-de-la-Kundalini-1.jpg",
      alt: "Reiki Energiebehandlung und Heilung für Wohlbefinden",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      category: "energiearbeit",
      slug: "reiki-energiebehandlung"
    },
    {
      id: 8,
      nom: "Chakra Test Gratis",
      description: "Kostenloser Test: Wie steht es um Ihre Chakren? Analyse Ihres Energiezustands.",
      image: "/image/drive-download-20250313T185750Z-001/chakra.png",
      alt: "Kostenloser Chakra Test und Energieanalyse für Ihr Wohlbefinden",
      price_presentiel: "Gratis",
      price_online: "Gratis",
      time_presentiel: "30 Min",
      time_online: "30 Min",
      free: true,
      category: "energiearbeit",
      slug: "chakra-test-gratis"
    },
    {
      id: 9,
      nom: "Aura-Heilung und Reinigung",
      description: "Reinigung und Harmonisierung Ihres Energiefeldes für mehr Ausgeglichenheit und Schutz.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Aura Heilung und Reinigung Energiearbeit für Schutz",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      category: "energiearbeit",
      slug: "aura-heilung-reinigung"
    },
    {
      id: 10,
      nom: "Vedische Astrologie-Beratung",
      description: "Umfassende Beratung basierend auf der vedischen Astrologie für Lebensentscheidungen.",
      image: "/image/drive-download-20250313T185750Z-001/pngtree-astrological-zodiac-horoscope-wheel-with-planet-earth-the-power-of-the-image_15731735-2.jpg",
      alt: "Vedische Astrologie Beratung und Lebensführung in Zürich",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time_presentiel: "90 Min",
      time_online: "60 Min",
      popular: true,
      category: "astrologie",
      slug: "vedische-astrologie-beratung"
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
    { id: "energiearbeit", name: "Energiearbeit & Heilung", count: services.filter(s => s.category === "energiearbeit").length }
  ];

  // Mots-clés OPTIMISÉS pour les services
  const metaKeywords = [
    // Vedische Astrologie Services
    "Vedische Astrologie Beratung Preise", "Indische Astrologie Kosten Zürich", "Jyotish Beratung Preise Schweiz",
    "Partner Horoskop Analyse Kosten", "Geburtshoroskop Preis Vedisch", "Karma Analyse Beratung Preise",
    "Astrologische Partnerberatung Tarife", "Vedische Astrologie Dienstleistungen Preise",
    
    // Energiearbeit Services
    "Chakra Heilung Preise Zürich", "Kundalini Energiearbeit Kosten", "Marmapunkt Behandlung Preise",
    "Reiki Energiebehandlung Tarife", "Aura Reinigung Kosten", "Energiearbeit Preise Schweiz",
    "Heilende Energie Mudras Preise", "Energetische Heilung Zürich",
    
    // Formats et durées
    "Online Astrologie Beratung Preise", "Telefonische Beratung Kosten", "Persönliche Beratung Preise",
    "Vedische Astrologie 60 Minuten", "Energiearbeit 90 Minuten", "Kostenlose Erstberatung Astrologie",
    
    // Localisation
    "Astrologe Zürich Preise", "Vedische Astrologie Schweiz Kosten", "Indische Astrologie Deutschland Preise",
    "Partner Horoskop Zürich Preis", "Chakra Heilung Schweiz Tarife",
    
    // Mots-clés spécifiques
    "Suthakar Parameswaran Preise", "Indischeastro Dienstleistungen", "Vedische Astrologie Experte Kosten",
    "Karmische Blockaden lösen Preise", "Spirituelle Heilung Tarife", "Lebensberatung Astrologie Kosten"
  ];

  // Schema ProfessionalService pour la page services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Indische Astrologie - Suthakar Parameswaran",
    "description": "Professionelle Vedische Astrologie Dienstleistungen in Zürich: Partner Horoskop, Karma Analyse, Energiearbeit & spirituelle Heilung zu fairen Preisen.",
    "url": "https://indischeastro.ch/ServicePrice",
    "telephone": "+41792613331",
    "email": "sutha.eatham@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zwinglistrasse 37",
      "addressLocality": "Zürich",
      "postalCode": "8004",
      "addressRegion": "Zürich",
      "addressCountry": "Switzerland"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3744",
      "longitude": "8.5225"
    },
    "openingHours": [
      "Mo-Fr 14:00-20:00",
      "Sa 09:00-14:00"
    ],
    "serviceType": [
      "Vedische Astrologie Beratung",
      "Indische Astrologie Beratung",
      "Partner Horoskop Analyse",
      "Karma Beratung",
      "Chakra Energie Arbeit",
      "Lebensberatung",
      "Zukunftsberatung",
      "Energiearbeit",
      "Spirituelle Heilung"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "47.3744",
        "longitude": "8.5225"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vedische Astrologie Dienstleistungen",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.nom,
          "description": service.description,
          "offers": {
            "@type": "Offer",
            "price": service.price_presentiel === "Gratis" ? "0" : service.price_presentiel.replace(" CHF", ""),
            "priceCurrency": "CHF"
          }
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Vedische Astrologie Preise & Dienstleistungen | Partner Horoskop & Energiearbeit in Zürich</title>
        <meta 
          name="description" 
          content="✅ Vedische Astrologie Beratung: Partner Horoskop 150 CHF (60 Min), Online 100 CHF (30 Min). Energiearbeit 150 CHF (90 Min). Kostenlose Erstberatung in Zürich & online." 
        />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <meta name="author" content="Suthakar Parameswaran" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://indischeastro.ch/ServicePrice" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vedische Astrologie Preise & Dienstleistungen | Fair & Transparent" />
        <meta property="og:description" content="Partner Horoskop 150 CHF, Online-Beratung 100 CHF. Professionelle Vedische Astrologie & Energiearbeit zu fairen Preisen in Zürich." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indischeastro.ch/ServicePrice" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Indische Astrologie - Suthakar Parameswaran" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedische Astrologie Preise - Fair & Transparent" />
        <meta name="twitter:description" content="Professionelle Vedische Astrologie Dienstleistungen zu fairen Preisen. Partner Horoskop, Karma Analyse & Energiearbeit." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        {/* Additional Schema for Service List */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Vedische Astrologie Dienstleistungen Preise",
              "description": "Komplette Preisliste für Vedische Astrologie Beratung und Energiearbeit in Zürich",
              "url": "https://indischeastro.ch/ServicePrice",
              "numberOfItems": services.length,
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.nom,
                  "description": service.description,
                  "image": `https://indischeastro.ch${service.image}`,
                  "offers": {
                    "@type": "Offer",
                    "price": service.price_presentiel === "Gratis" ? "0" : service.price_presentiel.replace(" CHF", ""),
                    "priceCurrency": "CHF",
                    "availability": "https://schema.org/InStock"
                  }
                }
              }))
            })
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
                "item": "https://indischeastro.ch"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Dienstleistungen & Preise",
                "item": "https://indischeastro.ch/ServicePrice"
              }
            ]
          })
        }}
      />

      {/* 🌟 Contenu principal OPTIMISÉ */}
      <div className="flex flex-col items-center w-full min-h-screen py-8 bg-gradient-to-br from-gray-50 to-white">
        
        {/* ✅ En-tête avec titres OPTIMISÉS SEO */}
        <div className="text-center max-w-6xl px-4 mb-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-[#ff6e54] transition-colors">Startseite</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-[#ff6e54] font-semibold">Vedische Astrologie Preise & Dienstleistungen</span>
              </li>
            </ol>
          </nav>

          {/* Badge promotionnel OPTIMISÉ */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Faire Preise • Flexible Formate • Kostenlose Erstberatung</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6 leading-tight">
            Vedische Astrologie Preise 
            <span className="block text-[#ff6e54] mt-2">Dienstleistungen & Beratungskosten</span>
          </h1>

          {/* Section des prix OPTIMISÉE SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Offer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Persönliche Beratung in Zürich</h3>
                  <p className="text-2xl font-bold text-[#260C56]" itemProp="price" content="150">150 CHF</p>
                  <p className="text-sm text-gray-600">(60 Minuten Vedische Astrologie)</p>
                  <meta itemProp="priceCurrency" content="CHF" />
                  <meta itemProp="description" content="Persönliche Vedische Astrologie Beratung in Zürich Zentrum" />
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Persönliche Vedische Astrologie in Zürich</li>
                <li>✓ Direkter Energieaustausch & Rituale</li>
                <li>✓ Individuelle karmische Analyse</li>
                <li>✓ Traditionelle Jyotish Methoden</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Offer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Online Vedische Astrologie</h3>
                  <p className="text-2xl font-bold text-[#260C56]" itemProp="price" content="100">100 CHF</p>
                  <p className="text-sm text-gray-600">(30 Minuten professionelle Beratung)</p>
                  <meta itemProp="priceCurrency" content="CHF" />
                  <meta itemProp="description" content="Online Vedische Astrologie Beratung per Video-Call" />
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Bequeme Vedische Astrologie von zu Hause</li>
                <li>✓ Zeit- und Kostenersparnis</li>
                <li>✓ Moderne Video-Technologie</li>
                <li>✓ Schweizweit & Deutschland verfügbar</li>
              </ul>
            </div>
          </div>


        </div>

        {/* Le reste de votre code reste inchangé... */}
        {/* Filtres par catégorie */}
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

        {/* Grid des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl" 
             itemScope 
             itemType="https://schema.org/ItemList">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="relative" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={(index + 1).toString()} />

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
                time_presentiel={service.time_presentiel}
                time_online={service.time_online}
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
                oder bequemer <strong>Online-Beratung</strong>. Flexible Dauer je nach Service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
                  aria-label="Jetzt Termin für Vedische Astrologie Beratung vereinbaren"
                >
                  <span>📅</span>
                  Jetzt Termin vereinbaren
                </button>
                <div className="text-center sm:text-left">
                  <p className="text-gray-700 font-semibold">📞 +41 79 261 33 31</p>
                  <p className="text-gray-500 text-sm">Mo-Fr: 14:00-20:00 Uhr</p>
                </div>
              </div>
              
              {/* Garantie */}
              <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 max-w-md mx-auto">
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span className="text-green-500">✓</span>
                  <strong>Garantiert:</strong> Optimale Beratungsdauer für jedes Format
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
            <h3 className="font-bold text-gray-800 mb-2">Optimale Dauer</h3>
            <p className="text-gray-600 text-sm">Jede Beratung ist perfekt auf das Format abgestimmt</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Professionelle Qualität</h3>
            <p className="text-gray-600 text-sm">Zertifizierte Vedische Astrologie Expertise mit 30+ Jahren Erfahrung</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Individuelle Betreuung</h3>
            <p className="text-gray-600 text-sm">Maßgeschneidert auf Ihre karmischen Muster</p>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-12 max-w-4xl w-full px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#260C56] mb-6 text-center">Häufige Fragen zu Preisen</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kann ich die Dauer anpassen?</h4>
                <p className="text-gray-600 text-sm">Ja, wir bieten auch längere Intensiv-Beratungen an. Sprechen Sie uns einfach an.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}