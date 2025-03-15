"use client";
import { supabase } from "@/lib/supabaseClient";
import CardsService from "../Components/CardsService";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function ServicePrice() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function inportationService() {
      try {
        const { data, error } = await supabase.from("services").select("*");
        if (error) throw error;
        setServices(data);
      } catch (err) {
        console.error("Erreur lors du chargement des services :", err);
      }
    }
    inportationService();
  }, []);

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
            description:
              "Partnerhoroskop, Geburtshoroskop, Chakra-Heilung & Vedische Astrologie in Zürich.",
            provider: {
              "@type": "Organization",
              name: "IndischeAstro",
              url: "https://www.indischeastro.fr",
            },
            areaServed: {
              "@type": "Place",
              name: "Zürich, Schweiz",
            },
          })}
        </script>
      </Head>

      {/* 🌟 Contenu principal */}
      <div className="flex flex-col items-center w-full">
        {/* ✅ Titre principal pour SEO */}
        <h1 className="mt-7 text-4xl font-bold text-black text-center">
          Astrologische Dienstleistungen in Zürich
        </h1>

        {/* ✅ Introduction pour améliorer l’engagement */}
        <p className="text-center text-lg text-gray-700 mb-6 max-w-2xl">
          Entdecken Sie unsere umfangreichen astrologischen Dienstleistungen in
          Zürich. Von Geburtshoroskopen bis zur Chakra-Heilung – wir helfen
          Ihnen, Ihr Schicksal zu verstehen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg">
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
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}
