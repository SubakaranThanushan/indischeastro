"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Head from "next/head"; // 🚀 Ajout de <Head> pour le SEO

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchService() {
      setLoading(true);
      const { data, error } = await supabase
        .from("services")
        .select("nom, image, descriptionComplet, metaDesc") // ✅ Ajout de metaDesc
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error("Erreur lors de la récupération :", error);
        setError("Le service demandé n'existe pas.");
      } else {
        setService(data);
      }
      setLoading(false);
    }

    fetchService();
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-lg mt-6 text-gray-500">Chargement...</p>
    );
  if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

  // 🔥 Formatage professionnel de la description 🔥
  const formatDescription = (text) => {
    return text.split(/(?<=[?])/g).map((sentence, index) => {
      const trimmed = sentence.trim();
      if (trimmed.endsWith("?")) {
        return (
          <h2 key={index} className="font-semibold text-xl text-gray-900 mt-4">
            {trimmed}
          </h2>
        );
      } else {
        return (
          <p key={index} className="text-lg text-gray-700 mt-2">
            {trimmed}
          </p>
        );
      }
    });
  };

  return (
    <>
      {/* 🚀 Balises META pour SEO */}
      <Head>
        <title>{service.nom} | Astrologische Beratung & Energiearbeit</title>
        <meta
          name="description"
          content={
            service.metaDesc || "Entdecken Sie mehr über diesen Service."
          }
        />
        <meta property="og:title" content={service.nom} />
        <meta
          property="og:description"
          content={
            service.metaDesc || "Entdecken Sie mehr über diesen Service."
          }
        />
        <meta property="og:image" content={service.image} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.indischeastro.fr/service/${id}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.nom,
            description: service.metaDesc,
            category: service.categorie || "Astrologie",
            image: service.image,
            provider: {
              "@type": "Organization",
              name: "IndischeAstro",
              url: "https://www.indischeastro.fr",
            },
          })}
        </script>
      </Head>

      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden p-8">
          {service.image && (
            <div className="w-full mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.nom}
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            {service.nom}
          </h1>

          <div className="text-lg text-gray-800 text-left leading-relaxed">
            {formatDescription(service.descriptionComplet)}
          </div>
        </div>
      </div>
    </>
  );
}
