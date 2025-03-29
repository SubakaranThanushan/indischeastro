"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Head from "next/head";
import { supabase } from "@/lib/supabaseClient";
import Profil from "../public/image/profile_home/image.png";
import Profil2 from "../public/image/profile_home/prof2.jpg";
import World from "../public/image/header/image.jpg";
import CardsService from "./Components/CardsService";
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

  // Récupérer les services depuis Supabase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase.from("services").select("*");

        if (error) {
          console.error("Erreur lors de la récupération des services :", error);
          return;
        }

        setServices(data || []);
      } catch (err) {
        console.error("Erreur inattendue :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fonction pour afficher une alerte (exemple)
  function alterte() {
    alert("toto");
  }

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

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Vedische und Indische Astrologie Beratung in der Schweiz |
          indischeastro
        </title>
        <meta
          name="description"
          content="Professionelle Vedische und Indische Astrologie Beratung in der Schweiz. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit und mehr. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Indische Astrologie Beratung, Vedische Astrologie Beratung, Astrologie, Lebensberatung, Zukunftsberatung, Partner Horoskop, Partner Horoskop Analyse, Geberts Horoskop, Schicksal, Karma, Chakra Energie Arbeit, Heilbehandlung, Kundalini Energie, Marma Punkent, Sexuelle Blockaden, Karmische Blockaden, Sexuelle Unlust, Familie Trennung, Magie, Schwarze Magie, Familien Aufstellung, karmische Beziehung, Unfähigkeit loszulassen, Emotionale Abhängigkeit, karmische Blockaden lösen, Schweiz, Swiss, Zürich, Switzerland, Sternzeichen, Sonne, Mond, Aszendent, Stier, Steinbock, Zwillinge, Skorpion, Löwe, Jungfrau, Waage, Schütze, Wassermann, Fisch, Jahreshoroskop, Monatshoroskop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.indischeastro.fr" />
        <meta
          property="og:title"
          content="Vedische und Indische Astrologie Beratung in der Schweiz | indischeastro"
        />
        <meta
          property="og:description"
          content="Professionelle Vedische und Indische Astrologie Beratung in der Schweiz. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit und mehr. Jetzt Termin buchen!"
        />
        <meta
          property="og:image"
          content="https://www.indischeastro.fr/image/header/image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indischeastro.fr" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Indische Astro",
            url: "https://www.indischeastro.fr",
            description:
              "Professionelle Vedische und Indische Astrologie Beratung in der Schweiz.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.indischeastro.fr/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>
      {/* Le reste de votre JSX reste inchangé */}
      <div className="flex flex-col h-auto w-full">
        {/* Carrousel avec défilement automatique */}
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="grid md:grid-cols-2 bg-amber-600 h-auto">
                {/* Conteneur de l'image */}
                <div className="h-auto flex justify-center items-center p-4">
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={Profil}
                      alt="Astrology"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-all duration-300 hover:grayscale-0"
                      style={{ objectPosition: "center" }}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Contenu texte */}
                <div className="flex flex-col justify-center pl-9 pr-6 text-white">
                  <div className="flex flex-col justify-center items-center text-center gap-6">
                    <h1 className="text-4xl font-bold">
                      Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
                      Persönliche Begleitung für Ihr Leben
                    </h1>
                    <h2 className="text-2xl font-bold text-zinc-600">
                      Vedische und Indische Astrologie Beratung in der Schweiz
                    </h2>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => alterte()}
                        type="button"
                        className="cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
                      >
                        Vereinbaren Sie noch heute einen Termin!
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="grid md:grid-cols-2 bg-amber-600 h-auto">
                {/* Conteneur de l'image */}
                <div className="h-auto flex justify-center items-center p-4">
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={World}
                      alt="Astrology"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-all duration-300 hover:grayscale-0"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </div>
                {/* Contenu texte */}
                <div className="flex flex-col justify-center pl-9 pr-6 text-white">
                  <div className="flex flex-col justify-center items-center text-center gap-6">
                    <h1 className="text-4xl font-bold">
                      Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
                      Persönliche Begleitung für Ihr Leben
                    </h1>
                    <h2 className="text-2xl font-bold text-zinc-600">
                      Vedische und Indische Astrologie Beratung in der Schweiz
                    </h2>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => alterte()}
                        type="button"
                        className="cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
                      >
                        Vereinbaren Sie noch heute einen Termin!
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* Service */}
        <ContacteNotif />
        <AutoScrollingAstro />

        <div className="grid md:grid-cols-2 bg-black w-auto mt-12">
          <div className="flex flex-col items-center pl-9 pr-6 max-w-screen-lg">
            <h2 className="flex justify-center text-2xl text-[#ff6e54] p-5">
              Qui est Suthakar Parameswaran ?
            </h2>
            <p className="text-white">
              Suthakar Parameswaran ist nicht nur ein außergewöhnlicher
              Wissenshüter, sondern auch ein herausragender Experte mit einer
              beeindruckenden akademischen Laufbahn. Sein Wissen wurde ihm nicht
              nur durch eine traditionsreiche Weitergabe vermittelt, sondern
              auch durch eine Vielzahl renommierter Diplome und spezialisierten
              Ausbildungen vertieft.{" "}
            </p>

            <ul className="text-[#ff6e54] p-5">
              <li>
                🏆 Eine einzigartige Kombination aus überliefertem Wissen und
                moderner Expertise
              </li>
              <li>
                📜 Zertifiziert durch zahlreiche renommierte Institutionen
              </li>
              <li>
                🔬 Präzise Analyse und tiefgehendes Verständnis seiner Disziplin
              </li>
            </ul>

            <p className="text-white">
              Seine Mission? Sie mit außergewöhnlichen Erkenntnissen zu
              bereichern, Ihnen wertvolle Perspektiven zu eröffnen und Sie auf
              Ihrem Weg zu Erfolg und Erfüllung zu begleiten.
            </p>

            <div className="flex md:justify-end justify-center pt-6 pr-6">
              <button
                onClick={() => alterte()}
                type="button"
                className="cursor-pointer mb-3 px-6 py-3.5 text-base font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
              >
                Savoir plus
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative w-64 h-64">
              <Image
                src={Profil2}
                alt="Suthakar Parameswaran, maître en astrologie védique"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <h2 className="mt-7 text-3xl font-bold text-black text-center">
            Unsere Dienstleistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg">
            {services.map((service) => (
              <CardsService
                key={service.id}
                id={service.id}
                images={service.image}
                nom={service.nom}
                description={service.description}
                alt={service.alt}
              />
            ))}
          </div>
        </div>

        {/* Presentation Profil */}
        {/* Commentaire */}
        <div className="md:flex justify-center mt-12">
          <h2 className="text-3xl font-bold text-black text-center">
            Ce que disent nos clients
          </h2>
          <AutoScrollingComponent />
        </div>
        {/* Contact */}
        <div>
          <h1 className="font-boldn text-3xl mt-4">Ou nous voir et comment </h1>
          <div className="bg-black text-white relative min-h-[400px]">
            <div className="relative z-10 p-6">
              <h3 className="text-3xl font-bold text-center">
                Comment contacter ?
              </h3>
              <div className="flex justify-center items-center gap-8 mt-6">
                <div className="text-center bg-black bg-opacity-75 p-4 rounded-lg">
                  <h4 className="text-xl">Réseaux sociaux</h4>
                  <p>Suivez-nous sur :</p>
                  <div className="flex justify-center items-center gap-4 text-5xl mt-4">
                    <Link href="https://www.instagram.com/cittarastro/">
                      <FaSquareInstagram />
                    </Link>
                    <FaFacebookSquare />
                    <Link href="https://www.youtube.com/@1000suthakar">
                      <FaYoutube />
                    </Link>
                  </div>
                </div>

                <div className="bg-black bg-opacity-75 p-4 rounded-lg">
                  <p className="font-bold text-center">
                    <strong>Zwinglistrasse 37, 8004 Zürich, Switzerland</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
