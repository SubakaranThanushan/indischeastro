"use client";
import CardsService from "../Components/CardsService";
import Head from "next/head";

export default function ServicePrice() {
  // Données locales pour les services avec deux types de prix
  const services = [
    {
      id: 1,
      nom: "Partner-Horoskop",
      description: "Heirat und Zusammensessen als Kernbegriffe gefasst. Tiefgehende Analyse Ihrer Partnerschaft und Kompatibilität.",
      image: "/image/drive-download-20250313T185750Z-001/parte.png",
      alt: "Partner Horoskop Analyse für Beziehungen",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "90 Min",
      popular: true
    },
    {
      id: 2,
      nom: "Geburts-Horoskop",
      description: "Detaillierte Analyse Ihres Geburtshoroskops für persönliche Einsichten und Lebensweg-Erkennung.",
      image: "/image/drive-download-20250313T185750Z-001/enfant.jpg",
      alt: "Persönliches Geburtshoroskop Analyse",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min"
    },
    {
      id: 3,
      nom: "Astrologische Partnerberatung",
      description: "Einblicke in die Kraft lebendiger Räume mit der weiblichen und männlichen Energie.",
      image: "/image/drive-download-20250313T185750Z-001/les-essentiels-decoration-pour-un-mariage-sur-le-theme-astrologie.jpeg",
      alt: "Astrologische Partnerberatung und Beziehungscoaching",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "75 Min"
    },
    {
      id: 4,
      nom: "Kundalini-Energiearbeit",
      description: "Chakren sind unsere Energiezentren. Aktivieren Sie Ihre Kundalini-Energie für mehr Lebenskraft.",
      image: "/image/drive-download-20250313T185750Z-001/700x515.jpg",
      alt: "Kundalini Energiearbeit und Chakren Aktivierung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "90 Min"
    },
    {
      id: 5,
      nom: "Marmapunkt-Behandlung",
      description: "Die Marma-Therapie ist das Fundament der Ayurvedischen Lehre für ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/image copy.png",
      alt: "Marmapunkt Behandlung und Ayurveda Therapie",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min"
    },
    {
      id: 6,
      nom: "Heilende Energie Mudras",
      description: "Entdecken Sie die Kraft der Hand-Mudras für Energiefluss und Harmonisierung.",
      image: "/image/drive-download-20250313T185750Z-001/image.png",
      alt: "Heilende Energie Mudras und Handhaltungen",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "45 Min"
    },
    {
      id: 7,
      nom: "Reiki Energiebehandlung",
      description: "Erfahren Sie universelle Lebensenergie für Balance und ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/Activation-de-la-Kundalini-1.jpg",
      alt: "Reiki Energiebehandlung und Heilung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min"
    },
    {
      id: 8,
      nom: "Chakra Test Gratis",
      description: "Kostenloser Test: Wie steht es um Ihre Chakren? Analyse Ihres Energiezustands.",
      image: "/image/drive-download-20250313T185750Z-001/chakra.png",
      alt: "Kostenloser Chakra Test und Energieanalyse",
      price_presentiel: "Gratis",
      price_online: "Gratis",
      time: "30 Min",
      free: true
    },
    {
      id: 9,
      nom: "Aura-Heilung und Reinigung",
      description: "Reinigung und Harmonisierung Ihres Energiefeldes für mehr Ausgeglichenheit und Schutz.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Aura Heilung und Reinigung Energiearbeit",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min"
    },
    {
      id: 10,
      nom: "Vedische Astrologie-Beratung",
      description: "Umfassende Beratung basierend auf der vedischen Astrologie für Lebensentscheidungen.",
      image: "/image/drive-download-20250313T185750Z-001/pngtree-astrological-zodiac-horoscope-wheel-with-planet-earth-the-power-of-the-image_15731735-2.jpg",
      alt: "Vedische Astrologie Beratung und Lebensführung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "75 Min",
      popular: true
    },
    {
      id: 11,
      nom: "Ayurveda-Kopfmassage",
      description: "Traditionelle indische Kopfmassage zur Tiefenentspannung und Energieaktivierung.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Ayurveda Kopfmassage Entspannung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "45 Min"
    },
    {
      id: 12,
      nom: "Spirituelle Lebensberatung",
      description: "Ganzheitliche Beratung für persönliche Entwicklung und spirituelles Wachstum.",
      image: "/image/drive-download-20250313T185750Z-001/parte.png",
      alt: "Spirituelle Lebensberatung Entwicklung",
      price_presentiel: "150 CHF",
      price_online: "100 CHF",
      time: "60 Min"
    }
  ];

  return (
    <>
      {/* 🔥 SEO optimisé */}
      <Head>
        <title>
          Astrologische Dienstleistungen | Horoskop, Energiearbeit &
          Chakra-Heilung in Zürich
        </title>
        <meta
          name="description"
          content="Entdecken Sie unsere astrologischen Dienstleistungen in Zürich: Partnerhoroskop, Geburtshoroskop, Chakra-Heilung, Vedische Astrologie & mehr. Jetzt Beratung buchen!"
        />
        <meta
          name="keywords"
          content="Astrologische Dienstleistungen, Partnerhoroskop, Geburtshoroskop, Vedische Astrologie, Chakra-Heilung, Energiearbeit, Zürich, Schweiz, spirituelle Beratung, Zukunftsdeutung"
        />
        <meta name="author" content="indischeastro, Suthakar Parameswaran" />

        {/* 🔗 Open Graph Tags pour le partage sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="Astrologische Dienstleistungen | Horoskop, Energiearbeit & Chakra-Heilung in Zürich"
        />
        <meta
          property="og:description"
          content="Entdecken Sie unsere astrologischen Dienstleistungen: Partnerhoroskop, Geburtshoroskop, Chakra-Heilung & mehr. Jetzt Beratung buchen!"
        />

        <meta
          property="og:url"
          content="https://www.indischeastro.fr/ServicePrice"
        />
        <meta property="og:type" content="website" />

        {/* 🔗 Canonical URL pour éviter le contenu dupliqué */}
        <link
          rel="canonical"
          href="https://www.indischeastro.fr/ServicePrice"
        />

        {/* 🔥 Schema.org JSON-LD pour Google Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Astrologische Dienstleistungen",
            description: "Partnerhoroskop, Geburtshoroskop, Chakra-Heilung & Vedische Astrologie in Zürich.",
            provider: {
              "@type": "Organization",
              name: "IndischeAstro",
              url: "https://www.indischeastro.fr",
            },
            areaServed: {
              "@type": "Place",
              name: "Zürich, Schweiz",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Astrologie & Energie Dienstleistungen",
              itemListElement: services.map(service => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.nom,
                  description: service.description,
                  offers: {
                    "@type": "Offer",
                    price: service.price_presentiel === "Gratis" ? "0" : service.price_presentiel.replace(" CHF", ""),
                    priceCurrency: "CHF"
                  }
                }
              }))
            }
          })}
        </script>
      </Head>

      {/* 🌟 Contenu principal */}
      <div className="flex flex-col items-center w-full min-h-screen py-8 bg-gradient-to-br from-gray-50 to-white">
        
        {/* ✅ En-tête avec design premium */}
        <div className="text-center max-w-6xl px-4 mb-12">
          {/* Badge promotionnel */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Flexible Beratungsformate</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6 leading-tight">
            Unsere 
            <span className="block text-[#ff6e54] mt-2">Dienstleistungen</span>
          </h1>

          {/* Section des prix avec design moderne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Vor Ort Beratung</h3>
                  <p className="text-2xl font-bold text-[#260C56]">150 CHF</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Persönliche Atmosphäre in Zürich</li>
                <li>✓ Direkter Energieaustausch</li>
                <li>✓ Traditionelle Rituale möglich</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Online Beratung</h3>
                  <p className="text-2xl font-bold text-[#260C56]">100 CHF</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Bequem von zu Hause</li>
                <li>✓ Zeit- und Kostenersparnis</li>
                <li>✓ Moderne Video-Technologie</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere umfangreichen astrologischen und energetischen Dienstleistungen. 
            <span className="block text-[#ff6e54] font-semibold mt-2">
              Garantierte gleiche Qualität in beiden Formaten!
            </span>
          </p>
        </div>

        {/* ✅ Grid des services avec design amélioré */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
          {services.map((service) => (
            <div key={service.id} className="relative">
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
                Wählen Sie zwischen persönlicher Beratung in Zürich oder bequemer Online-Beratung. 
                Starten Sie noch heute Ihre Reise zu mehr Klarheit und innerem Frieden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.location.href = '/Contacte'}
                  className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <span>📅</span>
                  Jetzt Termin vereinbaren
                </button>
                <div className="text-center sm:text-left">
                  <p className="text-gray-700 font-semibold">📞 +41 76 123 45 67</p>
                  <p className="text-gray-500 text-sm">Mo-Fr: 9:00-18:00</p>
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
            <p className="text-gray-600 text-sm">Täglich verfügbare Termine für Ihre Planung</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Professionelle Qualität</h3>
            <p className="text-gray-600 text-sm">Zertifizierte Expertise mit jahrelanger Erfahrung</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Persönliche Betreuung</h3>
            <p className="text-gray-600 text-sm">Individuell auf Ihre Bedürfnisse abgestimmt</p>
          </div>
        </div>
      </div>
    </>
  );
}