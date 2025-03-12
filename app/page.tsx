"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import Head from "next/head";
//importer la base de donnée
import { supabase } from "@/lib/supabaseClient";
// Immages
// import Logo from "../public/image/logo_nav/cita-logo.png";
import Profil from "../public/image/profile_home/image.png";
import World from "../public/image/ilustration/astro.jpg";
import CardsService from "./Components/CardsService";
// import FinisherHeaderComponent from "./Components/FinisherHeaderComponent";
import ContacteNotif from "./Components/ContacteNotif";
import AutoScrollingComponent from "./Components/AutoScrollingComponent";
// interface Services {
//   id: number;
//   images: string;
//   nom: string;
//   description: string;
//   // Ajoutez d'autres champs selon votre table
// }
export default function Home() {
  const [screenSize, setScreenSize] = useState("");
  const [services, setServices] = useState([]);
  // const [fermeture, setFermeture] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from("services") // Nom de la table
        .select("*"); // Récupère toutes les colonnes

      if (error) {
        console.error("Erreur lors de la récupération des services :", error);
      } else {
        setServices(data);
      }
    }

    fetchServices();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    // handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getScreenSize(width: number) {
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  }
  function alterte() {
    alert("toto");
  }

  return (
    <>
      <head>
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
      </head>
      {/* <Script src="/finisher-header.js" strategy="afterInteractive" />
      <FinisherHeaderComponent /> */}

      <div className="flex flex-col h-auto w-full ">
        {/* <div className="flex flex-col gap-4 bg-[#F9F4F1] ">
          <div className="flex justify-center mt-20">
            <Image
              src={Logo}
              alt="Logo Suthakar Parameswaran - Astrologie Védique"
            />
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-6">
            <h1 className="text-4xl font-bold ">
              Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
              Persönliche Begleitung für Ihr Leben
            </h1>
            <h2 className="text-2xl font-bold text-zinc-600">
              Vedische und Indische Astrologie Beratung in der Schweiz
            </h2>
            <div className="flex gap-2 items-center">
              <h3 className="font-bold text-zinc-600"></h3>
              <button
                onClick={() => alterte()}
                type="button"
                className="cursor-pointer p-5  font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
              >
                Vereinbaren Sie noch heute einen Termin!
              </button>
            </div>
            <br />
          </div>
        </div> */}

        {/* Bienvenue de aux utiolistauer Introduction */}

        <div className="grid md:grid-cols-2 bg-black h-auto ">
          <div className="h-auto">
            <Image
              className="h-full w-full object-contain transition-all duration-300 rounded-lg  hover:grayscale-0"
              src={World}
              alt="Astrology"
            />
          </div>
          <div className="flex flex-col justify-center pl-9 pr-6 text-white">
            <div className="flex flex-col justify-center items-center text-center gap-6">
              <h1 className="text-4xl font-bold ">
                Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
                Persönliche Begleitung für Ihr Leben
              </h1>
              <h2 className="text-2xl font-bold text-zinc-600">
                Vedische und Indische Astrologie Beratung in der Schweiz
              </h2>
              <div className="flex gap-2 items-center">
                <h3 className="font-bold text-zinc-600"></h3>
                <button
                  onClick={() => alterte()}
                  type="button"
                  className="cursor-pointer p-5  font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
                >
                  Vereinbaren Sie noch heute einen Termin!
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
        {/* Service */}
        <ContacteNotif />

        <div className="flex flex-col  items-center  ">
          <h2 className=" mt-7 text-3xl font-bold text-black text-center place-content-center">
            SerUnsere Dienstleistungenvice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 ">
            {services.map((service) => (
              <CardsService
                key={service.id}
                images={service.image}
                nom={service.nom}
                description={service.description}
                alt={service.alt}
              />
            ))}
          </div>
        </div>

        {/* Commentaire */}
        <div className="md:flex justify-center  ">
          <h2 className="text-3xl font-bold text-black text-center place-content-center">
            Ce que disent nos clients
          </h2>
          <AutoScrollingComponent />
        </div>

        {/* Presentation Profil */}
        <div className="grid md:grid-cols-2  bg-black  w-auto ">
          <div className="flex flex-col justify-center pl-9 pr-6">
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

            <div className="flex  md:justify-end justify-center pt-6 pr-6 ">
              <button
                onClick={() => alterte()}
                type="button"
                className="cursor-pointer mb-3 px-6 py-3.5 text-base font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
              >
                Savoir plus
              </button>
            </div>
          </div>

          <div className="place-content-center flex items-center">
            <Image
              className="h-50 w-50  rounded-full object-cover"
              src={Profil}
              alt="Suthakar Parameswaran, maître en astrologie védique"
            />
          </div>
        </div>

        <div>
          <h3>Comment contacter ?</h3>
          <div className="grid grid-cols-2 place-items-center gap-4">
            <div>1</div>
            <div>2sdf</div>
          </div>
        </div>

        <div>
          <p className="text-xl">Taille de l écran :</p>
          <p className="text-2xl font-bold text-blue-400">{screenSize}</p>
        </div>
      </div>
    </>
  );
}
