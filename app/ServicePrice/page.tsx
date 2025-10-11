"use client";
import CardsService from "../Components/CardsService";
import Head from "next/head";

export default function ServicePrice() {
  // Données locales pour les services
  const services = [
    {
      id: 1,
      nom: "Partner-Horoskop",
      description: "Heirat und Zusammensessen als Kernbegriffe gefasst. Tiefgehende Analyse Ihrer Partnerschaft und Kompatibilität.",
      image: "/image/drive-download-20250313T185750Z-001/parte.png",
      alt: "Partner Horoskop Analyse für Beziehungen",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 2,
      nom: "Geburts-Horoskop",
      description: "Detaillierte Analyse Ihres Geburtshoroskops für persönliche Einsichten und Lebensweg-Erkennung.",
      image: "/image/drive-download-20250313T185750Z-001/enfant.jpg",
      alt: "Persönliches Geburtshoroskop Analyse",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 3,
      nom: "Astrologische Partnerberatung",
      description: "Einblicke in die Kraft lebendiger Räume mit der weiblichen und männlichen Energie.",
      image: "/image/drive-download-20250313T185750Z-001/les-essentiels-decoration-pour-un-mariage-sur-le-theme-astrologie.jpeg",
      alt: "Astrologische Partnerberatung und Beziehungscoaching",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 4,
      nom: "Kundalini-Energiearbeit",
      description: "Chakren sind unsere Energiezentren. Aktivieren Sie Ihre Kundalini-Energie für mehr Lebenskraft.",
      image: "/image/drive-download-20250313T185750Z-001/700x515.jpg",
      alt: "Kundalini Energiearbeit und Chakren Aktivierung",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 5,
      nom: "Marmapunkt-Behandlung",
      description: "Die Marma-Therapie ist das Fundament der Ayurvedischen Lehre für ganzheitliche Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/image copy.png",
      alt: "Marmapunkt Behandlung und Ayurveda Therapie",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 6,
      nom: "Heilende Energie Mudras",
      description: "Kostenloser Test: Wie steht es um Ihre Chakren? Entdecken Sie die Kraft der Hand-Mudras.",
      image: "/image/drive-download-20250313T185750Z-001/image.png",
      alt: "Heilende Energie Mudras und Handhaltungen",
      price: "150 CHF",
      time: "60 Min"
    },
    {
      id: 7,
      nom: "Reiki",
      description: "Für jeden ist Reiki etwas anderes. Erfahren Sie universelle Lebensenergie für Balance und Heilung.",
      image: "/image/drive-download-20250313T185750Z-001/Activation-de-la-Kundalini-1.jpg",
      alt: "Reiki Energiebehandlung und Heilung",
      price: "100 CHF",
      time: "60 Min"
    },
    {
      id: 8,
      nom: "Chakra Test Gratis",
      description: "Kostenloser Test: Wie steht es um Ihre Chakren? Analyse Ihres Energiezustands.",
      image: "/image/drive-download-20250313T185750Z-001/chakra.png",
      alt: "Kostenloser Chakra Test und Energieanalyse",
      price: "Gratis",
      time: "30 Min"
    },
    {
      id: 9,
      nom: "Aura-Heilung und Aura-Reinigung",
      description: "Reinigung und Harmonisierung Ihres Energiefeldes für mehr Ausgeglichenheit und Schutz.",
      image: "/image/drive-download-20250313T185750Z-001/marma.webp",
      alt: "Aura Heilung und Reinigung Energiearbeit",
      price: "150 CHF",
      time: "90 Min"
    },
    {
      id: 10,
      nom: "Vedische Astrologie-Beratung",
      description: "Umfassende Beratung basierend auf der vedischen Astrologie für Lebensentscheidungen.",
      image: "/image/drive-download-20250313T185750Z-001/pngtree-astrological-zodiac-horoscope-wheel-with-planet-earth-the-power-of-the-image_15731735-2.jpg",
      alt: "Vedische Astrologie Beratung und Lebensführung",
      price: "100-150 CHF",
      time: "30-60 Min"
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
                    price: service.price,
                    priceCurrency: "CHF"
                  }
                }
              }))
            }
          })}
        </script>
      </Head>

      {/* 🌟 Contenu principal */}
      <div className="flex flex-col items-center w-full min-h-screen py-8">
        {/* ✅ Titre principal pour SEO */}
        <h1 className="mt-7 text-4xl font-bold text-black text-center mb-4">
          Astrologische Dienstleistungen in Zürich
        </h1>

        {/* ✅ Introduction pour améliorer l'engagement */}
        <div className="text-center max-w-4xl mb-12 px-4">
          <p className="text-lg text-gray-700 mb-4">
            Entdecken Sie unsere umfangreichen astrologischen Dienstleistungen in Zürich. 
            Von Geburtshoroskopen bis zur Chakra-Heilung – wir helfen Ihnen, Ihr Schicksal zu verstehen 
            und Ihr volles Potenzial zu entfalten.
          </p>
          <p className="text-gray-600">
            Professionelle Beratung in einer ruhigen und respektvollen Atmosphäre. 
            Persönliche Termine in Zürich oder Online-Beratung verfügbar.
          </p>
        </div>

        {/* ✅ Grid des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
          {services.map((service) => (
            <CardsService
              key={service.id}
              id={service.id}
              images={service.image}
              nom={service.nom}
              description={service.description}
              alt={service.alt}
              price={service.price}
              time={service.time}
              pricetime={true}
            />
          ))}
        </div>

        {/* ✅ Call-to-action section */}
        <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bereit für Ihre persönliche Beratung?
          </h2>
          <p className="text-gray-600 mb-6">
            Vereinbaren Sie noch heute einen Termin und beginnen Sie Ihre Reise zur Selbstentdeckung.
          </p>
          <button className="bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </>
  );
}