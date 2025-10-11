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

  // Données statiques de test avec deux types de prix
  const staticServices = [
    {
      id: 1,
      nom: "Partner-Horoskop-Analyse",
      description: "Tiefe Einblicke in Ihre Beziehungsdynamiken und astrologische Kompatibilität",
      price_presentiel: "150",
      price_online: "100",
      time: "90",
      images: "/image/services/partner-horoskop.jpg"
    },
    {
      id: 2,
      nom: "Geburts-Horoskop",
      description: "Detaillierte Analyse Ihrer Lebensaufgabe, Talente und Herausforderungen",
      price_presentiel: "150",
      price_online: "100",
      time: "60",
      images: "/image/services/geburts-horoskop.jpg"
    },
    {
      id: 3,
      nom: "Astrologische Partnerberatung",
      description: "Kombination von astrologischem Wissen mit modernen Beziehungsansätzen",
      price_presentiel: "150",
      price_online: "100",
      time: "75",
      images: "/image/services/partnerberatung.jpg"
    },
    {
      id: 4,
      nom: "Kundalini-Energiearbeit",
      description: "Aktivierung Ihrer ureigenen Lebenskraft für tiefgreifende Transformation",
      price_presentiel: "150",
      price_online: "100",
      time: "90",
      images: "/image/services/kundalini.jpg"
    },
    {
      id: 5,
      nom: "Marmapunkt-Behandlung",
      description: "Ayurvedische Heilkunst mit 107 vitalen Energiepunkten",
      price_presentiel: "150",
      price_online: "100",
      time: "60",
      images: "/image/services/marmapunkt.jpg"
    },
    {
      id: 6,
      nom: "Heilende Energie-Mudras",
      description: "Spezielle Handhaltungen für Energiefluss und Harmonisierung",
      price_presentiel: "150",
      price_online: "100",
      time: "45",
      images: "/image/services/mudras.jpg"
    },
    {
      id: 7,
      nom: "Reiki-Behandlung",
      description: "Japanische Heilenergie für körperliche und emotionale Heilung",
      price_presentiel: "150",
      price_online: "100",
      time: "45",
      images: "/image/services/reiki.jpg"
    },
    {
      id: 8,
      nom: "Kostenloser Chakra-Test",
      description: "Umfassende Analyse Ihrer sieben Hauptenergiezentren",
      price_presentiel: "0",
      price_online: "0",
      time: "30",
      images: "/image/services/chakra-test.jpg"
    },
    {
      id: 9,
      nom: "Aura-Heilung und Reinigung",
      description: "Arbeit mit Ihrem feinstofflichen Energiekörper",
      price_presentiel: "150",
      price_online: "100",
      time: "60",
      images: "/image/services/aura-heilung.jpg"
    },
    {
      id: 10,
      nom: "Vedische Astrologie-Beratung",
      description: "Präzise Wissenschaft der Zeit mit karmischen Mustern",
      price_presentiel: "150",
      price_online: "100",
      time: "75",
      images: "/image/services/vedische-astrologie.jpg"
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
        <title>
          Vedische und Indische Astrologie Beratung in der Schweiz |
          indischeastro
        </title>
        <meta
          name="description"
          content="Professionelle Vedische und Indische Astrologie Beratung in der Schweiz. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit und mehr. Jetzt Termin buchen!"
        />
        {/* ... reste des meta tags inchangés ... */}
      </Head>
      
      <main className="flex flex-col h-auto w-full">
        {/* Hero Section avec ARIA */}
<section aria-label="Hauptbereich der Vedischen Astrologie Beratung">
  <Carousel setApi={setApi}>
    <CarouselContent>
      <CarouselItem>
        <div className="grid md:grid-cols-2 bg-gradient-to-br from-amber-600 to-amber-700 min-h-[600px] relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          
          <div className="flex justify-center items-center p-4 md:p-8 relative z-10">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <Image
                src={Profil}
                alt="Vedische Astrologie Beratung mit Suthakar Parameswaran in Zürich - Professionelle Lebensberatung"
                fill
                className="rounded-lg transition-all duration-300 hover:grayscale-0 object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center p-6 md:p-8 text-white relative z-10">
            <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6">
              {/* Badge des options de consultation */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/30">
                  <span className="font-semibold text-sm md:text-base">🏠 Vor Ort: 100 CHF</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/30">
                  <span className="font-semibold text-sm md:text-base">💻 Online: 150 CHF</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Vedische Astrologie-Beratungen 
                <span className="block text-amber-200 mt-1 md:mt-2 text-xl md:text-3xl">mit Suthakar Parameswaran</span>
              </h1>
              
              <h2 className="text-lg md:text-2xl font-bold text-amber-100">
                Persönliche Begleitung für Ihr Leben
              </h2>

              {/* Section d'information sur les formats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 w-full max-w-md">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-amber-100">Wählen Sie Ihr Format:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm">🏠</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm md:text-base">Vor Ort Beratung</p>
                      <p className="text-xs md:text-sm text-amber-100">100 CHF - Persönliche Betreuung in Zürich</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm">💻</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm md:text-base">Online Beratung</p>
                      <p className="text-xs md:text-sm text-amber-100">150 CHF - Bequem von zu Hause</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mt-4 w-full max-w-md">
                <button
                  onClick={() => window.location.href = '/Contacte'}
                  type="button"
                  aria-label="Termin für Vedische Astrologie Beratung vereinbaren"
                  className="cursor-pointer px-6 py-3 md:px-8 md:py-4 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-red-600 hover:to-red-700 rounded-lg md:rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-sm md:text-base"
                >
                  Jetzt Termin vereinbaren!
                </button>
                <button
                  onClick={() => window.location.href = '/ServicePrice'}
                  type="button"
                  aria-label="Mehr über unsere Dienstleistungen erfahren"
                  className="cursor-pointer px-4 py-2 md:px-6 md:py-3 font-medium text-white border-2 border-white/50 hover:border-white rounded-lg text-center transition-all duration-300 hover:bg-white/10 w-full sm:w-auto text-sm md:text-base"
                >
                  Dienstleistungen entdecken
                </button>
              </div>
              
              {/* Note importante */}
              <p className="text-amber-200 text-xs md:text-sm mt-3 md:mt-4 text-center">
                ✅ Beide Formate bieten dieselbe hohe Qualität der Beratung
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="grid md:grid-cols-2 bg-gradient-to-br from-purple-600 to-purple-800 min-h-[600px] relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="flex justify-center items-center p-4 md:p-8 relative z-10">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <Image
                src={World}
                alt="Indische Astrologie Beratung in Zürich - Spirituelle Lebensführung und Zukunftsplanung"
                fill
                className="rounded-lg transition-all duration-300 hover:grayscale-0 object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center p-6 md:p-8 text-white relative z-10">
            <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6">
              {/* Badge promotionnel */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                <span className="font-bold text-white text-sm md:text-base">✨ Flexible Beratungsformate verfügbar</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Vedische & Indische Astrologie
                <span className="block text-purple-200 mt-1 md:mt-2 text-xl md:text-3xl">in der Schweiz</span>
              </h1>
              
              <h2 className="text-lg md:text-2xl font-bold text-purple-100">
                Traditionelles Wissen meets moderne Technologie
              </h2>

              {/* Avantages des deux formats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                  <div className="text-xl md:text-2xl mb-2">🏠</div>
                  <h4 className="font-semibold mb-2 text-sm md:text-base">Vor Ort in Zürich</h4>
                  <p className="text-xs md:text-sm text-purple-100">100 CHF</p>
                  <ul className="text-xs text-purple-200 mt-2 space-y-1">
                    <li>• Persönliche Atmosphäre</li>
                    <li>• Direkter Energieaustausch</li>
                    <li>• Traditionelle Rituale</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                  <div className="text-xl md:text-2xl mb-2">💻</div>
                  <h4 className="font-semibold mb-2 text-sm md:text-base">Online Beratung</h4>
                  <p className="text-xs md:text-sm text-purple-100">150 CHF</p>
                  <ul className="text-xs text-purple-200 mt-2 space-y-1">
                    <li>• Bequem von überall</li>
                    <li>• Zeitersparnis</li>
                    <li>• Moderne Technologie</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mt-4 w-full max-w-md">
                <button
                  onClick={() => window.location.href = '/Contacte'}
                  type="button"
                  aria-label="Jetzt Termin für Astrologie Beratung buchen"
                  className="cursor-pointer px-6 py-3 md:px-8 md:py-4 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-red-600 hover:to-red-700 rounded-lg md:rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-sm md:text-base"
                >
                  Kostenlose Erstberatung
                </button>
                <div className="text-center">
                  <p className="text-purple-200 text-sm md:text-base">📞 +41 76 123 45 67</p>
                  <p className="text-purple-200 text-xs md:text-sm">Mo-Fr: 9:00-18:00</p>
                </div>
              </div>

              {/* Garantie */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 w-full max-w-md">
                <p className="text-purple-200 text-xs md:text-sm text-center">
                  🎯 <strong>Garantiert:</strong> Dieselbe intensive Beratungsqualität in beiden Formaten
                </p>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</section>
        
        {/* Service */}
        <ContacteNotif />
        <AutoScrollingAstro />

        {/* Section À propos avec microdata */}
        <section 
          itemScope 
          itemType="https://schema.org/Person"
          className="grid md:grid-cols-2 bg-black w-auto mt-12"
        >
          <div className="flex flex-col items-center pl-9 pr-6 max-w-screen-lg">
            <h2 className="flex justify-center text-2xl text-[#ff6e54] p-5">
              Über <span itemProp="name">Suthakar Parameswaran</span>
            </h2>
            <p itemProp="description" className="text-white">
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

            <p> 
                " "
            </p>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative w-64 h-64">
              <Image
                src={Profil2}
                alt="Suthakar Parameswaran, Experte für Vedische Astrologie in Zürich - Zertifizierter Astrologe"
                itemProp="image"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section Services Compacte */}
        <section className="flex flex-col items-center w-full py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#260C56] mb-4">
              Unsere Dienstleistungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {displayServices.length} professionelle Dienstleistungen für Ihr Wohlbefinden
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
            {visibleServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Image miniature */}
                <div className="relative h-32 bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                    <span className="text-2xl">
                      {service.price_presentiel === "0" ? "🎁" : "✨"}
                    </span>
                  </div>
                  <div className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    service.price_presentiel === "0" ? "bg-green-500" : "bg-[#ff6e54]"
                  }`}>
                    {service.price_presentiel === "0" ? "KOSTENLOS" : `ab ${service.price_online} CHF`}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#260C56] text-base mb-2 line-clamp-2 group-hover:text-[#ff6e54] transition-colors">
                    {service.nom}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Prix pour les deux formats */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Vor Ort:</span>
                      <span className="font-semibold text-[#260C56]">
                        {service.price_presentiel === "0" ? "Kostenlos" : `${service.price_presentiel} CHF`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Online (Video-Call):</span>
                      <span className="font-semibold text-[#260C56]">
                        {service.price_online === "0" ? "Kostenlos" : `${service.price_online} CHF`}
                      </span>
                    </div>
                  </div>

                  {/* Informations basiques */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      ⏱️ {service.time} Min
                    </span>
                    <button 
                      className="text-[#ff6e54] text-sm font-semibold hover:text-red-700 transition-colors flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/Contacte?service=${encodeURIComponent(service.nom)}`;
                      }}
                    >
                      {service.price_presentiel === "0" ? "Jetzt testen" : "Termin buchen"}
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton pour afficher/masquer les services supplémentaires */}
          {displayServices.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="bg-[#260C56] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a1a7a] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                {showAllServices ? (
                  <>
                    <span>Weniger anzeigen</span>
                    <span>↑</span>
                  </>
                ) : (
                  <>
                    <span>Alle {displayServices.length} Dienstleistungen anzeigen</span>
                    <span>↓</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Brauchen Sie persönliche Beratung bei der Auswahl?</p>
            <button
              onClick={() => window.location.href = '/Contacte'}
              className="bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Kostenlose Erstberatung anfordern
            </button>
          </div>
        </section>

        {/* Section Témoignages avec Review Schema */}
<section 
  itemScope 
  itemType="https://schema.org/Review"
  className="w-full mt-20 py-16 bg-gradient-to-br from-gray-50/50 to-white/30 relative overflow-hidden"
>
  {/* Éléments décoratifs d'arrière-plan */}
  

    {/* Composant de défilement */}
    <div className="w-full transform transition-all duration-300 hover:scale-[1.01]">
      <AutoScrollingComponent />
    </div>



  {/* Overlays de dégradé pour les bords */}
  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none"></div>
</section>

        {/* Sections restantes inchangées */}
<section className="py-20 px-4 bg-gradient-to-br from-transparent via-purple-50/20 to-transparent relative overflow-hidden">
  {/* Éléments décoratifs d'arrière-plan */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff6e54]/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#260C56]/5 rounded-full blur-3xl"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff8e54]/10 rounded-full blur-3xl"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto">
    {/* En-tête avec design premium */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/80 text-gray-700 px-6 py-3 rounded-full shadow-sm mb-6">
        <div className="w-2 h-2 bg-[#ff6e54] rounded-full animate-pulse"></div>
        <span className="text-sm font-medium uppercase tracking-wider">Vedisches Wissen</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
        Wissenswertes über 
        <span className="block text-[#ff6e54] mt-2">Vedische Astrologie</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Tauchen Sie ein in die tiefe Weisheit der 5.000 Jahre alten vedischen Tradition
      </p>
    </div>

    {/* Grille des articles avec design glassmorphism */}
    <div className="grid md:grid-cols-3 gap-8">
      <article className="group relative">
        {/* Carte avec effet glassmorphism */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
          {/* Icône décorative */}
          <div className="w-14 h-14 bg-gradient-to-br from-[#ff6e54] to-[#ff8e54] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🏛️</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight">
            Die 12 Häuser im vedischen Horoskop
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
            Entdecken Sie die tiefe Symbolik der 12 Häuser und wie sie Ihre Lebensbereiche 
            von Karriere über Beziehungen bis zur Spiritualität beeinflussen. Jedes Haus 
            erzählt eine einzigartige Geschichte Ihres Schicksals.
          </p>
          
          {/* Lien avec animation */}
          
        </div>
        
        {/* Effet de bordure au survol */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
      </article>

      <article className="group relative">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
          <div className="w-14 h-14 bg-gradient-to-br from-[#260C56] to-[#4c1d95] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🔄</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight">
            Karma & Reinkarnation im Jyotish
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
            Erfahren Sie, wie die vedische Astrologie karmische Muster aus vergangenen Leben 
            entschlüsselt und Ihnen hilft, Ihr gegenwärtiges Schicksal zu verstehen und 
            bewusst zu gestalten.
          </p>
          
          
        </div>
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#260C56] to-[#4c1d95] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
      </article>

      <article className="group relative">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col">
          <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🪐</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#260C56] mb-4 leading-tight">
            Planeten & ihre Bedeutung
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
            Tauchen Sie ein in die mystische Welt der 9 Planeten (Grahas) und entdecken Sie 
            ihre tiefgreifenden Einflüsse auf Persönlichkeit, Schicksal und Lebensereignisse 
            im vedischen System.
          </p>
          
         
        </div>
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
      </article>
    </div>

    {/* CTA supplémentaire */}
    <div className="text-center mt-16">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/80 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[#260C56] mb-4">
          Vertiefen Sie Ihr Wissen
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          Entdecken Sie unsere umfassende Bibliothek an vedischem Wissen und spirituellen Einsichten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/blog'}
            className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105"
          >
            Blog entdecken
          </button>
          <button 
            onClick={() => window.location.href = '/Contacte'}
            className="border-2 border-[#260C56] text-[#260C56] px-8 py-4 rounded-xl font-semibold hover:bg-[#260C56] hover:text-white transition-all duration-300"
          >
            Persönliche Beratung
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Section Contact avec LocalBusiness Schema */}
        <section 
          itemScope 
          itemType="https://schema.org/LocalBusiness"
          className="relative w-full mt-8"
        >
          <h1 className="font-bold text-3xl text-center mb-8">Kontakt und Anfahrt</h1>

          <div className="relative w-full h-[600px]">
            {/* Carte Google Maps - Pleine taille */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.234567890123!2d8.531434!3d47.374448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0b7c5a65a67%3A0x1234567890abcdef!2sZwinglistrasse%2037%2C%208004%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort unserer Praxis für Vedische Astrologie in Zürich - Zwinglistrasse 37, 8004 Zürich"
              aria-label="Karte zeigt unseren Standort in Zürich, Zwinglistrasse 37"
            ></iframe>

            {/* Overlay de contenu seulement en partie */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white">
                {/* Adresse */}
                <div 
                  itemProp="address" 
                  itemScope 
                  itemType="https://schema.org/PostalAddress"
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">Unsere Adresse</h4>
                  <p itemProp="streetAddress" className="text-lg">Zwinglistrasse 37</p>
                  <p>
                    <span itemProp="postalCode">8004</span>{' '}
                    <span itemProp="addressLocality">Zürich</span>,{' '}
                    <span itemProp="addressCountry">Switzerland</span>
                  </p>
                </div>

                {/* Réseaux sociaux */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Soziale Medien</h4>
                  <div className="flex justify-center gap-4 text-2xl">
                    <Link 
                      href="https://www.instagram.com/cittarastro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Folgen Sie uns auf Instagram"
                      className="hover:text-pink-400 transition-colors duration-300"
                    >
                      <FaSquareInstagram />
                    </Link>
                    <Link 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Folgen Sie uns auf Facebook"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaFacebookSquare />
                    </Link>
                    <Link 
                      href="https://www.youtube.com/@1000suthakar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Abonnieren Sie unseren YouTube-Kanal"
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



<section className="bg-gray-50 py-16 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen - Vedische Astrologie</h2>
    
    <div className="space-y-4">
      {/* Question 1 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Was ist vedische Astrologie und wie unterscheidet sie sich von westlicher Astrologie?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Die vedische Astrologie (Jyotish) ist eine uralte indische Wissenschaft, die auf dem siderischen Tierkreis basiert und die Präzession der Erdachse berücksichtigt. Im Gegensatz zur westlichen Astrologie legt sie besonderen Wert auf Karma, Spiritualität und praktische Lebensführung. Sie bietet präzisere Vorhersagen und konzentriert sich auf die Lösung karmischer Blockaden.
            </p>
          </div>
        </details>
      </div>

      {/* Question 2 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Wie kann eine vedische Astrologie-Beratung mein Leben verbessern?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Eine vedische Astrologie-Beratung hilft Ihnen, Ihre Lebensaufgabe zu erkennen, Beziehungen zu harmonisieren, berufliche Blockaden zu lösen und spirituell zu wachsen. Sie erhalten Klarheit über Ihre Stärken, Schwächen und die optimalen Zeitpunkte für wichtige Entscheidungen. Viele Kunden berichten von mehr innerem Frieden und besserer Lebensführung nach der Beratung.
            </p>
          </div>
        </details>
      </div>

      {/* Question 3 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Welche Informationen benötigen Sie für eine genaue astrologische Analyse?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Für eine präzise vedische Horoskop-Analyse benötigen wir Ihr exaktes Geburtsdatum, die Geburtszeit (möglichst auf die Minute genau) und den Geburtsort. Je genauer diese Angaben, desto aussagekräftiger ist die Beratung. Falls Sie die genaue Geburtszeit nicht kennen, können wir mit einer Rektifikation arbeiten.
            </p>
          </div>
        </details>
      </div>

      {/* Question 4 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Wie lange dauert eine typische Beratung und was kostet sie?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Eine Beratung dauert in der Regel 60-90 Minuten. Vor Ort in unserer Praxis in Zürich kostet eine Sitzung 100 CHF, Online-Beratungen per Video-Call kosten 150 CHF. Pakete für umfassende Analysen (Partnerschaft, Karriere, spirituelle Entwicklung) sind ebenfalls verfügbar.
            </p>
          </div>
        </details>
      </div>

      {/* Question 5 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Bieten Sie auch Online-Beratungen an?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Ja, wir bieten sowohl persönliche Beratungen in unserer Praxis in Zürich (100 CHF) als auch professionelle Online-Beratungen per Video-Call (150 CHF) an. Die Qualität der Online-Beratungen ist identisch mit den Präsenzterminen. Wir beraten Kunden in der ganzen Schweiz und international per Zoom, Skype oder WhatsApp Video.
            </p>
          </div>
        </details>
      </div>

      {/* Question 6 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Kann vedische Astrologie bei Beziehungsproblemen helfen?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Absolut. Die vedische Astrologie bietet tiefe Einblicke in Partnerschaftsdynamiken, karmische Verbindungen und Kompatibilität. Wir analysieren sowohl Einzelhoroskope als auch Partnervergleiche, um Kommunikationsmuster zu verbessern, Konflikte zu lösen und die harmonische Entwicklung der Beziehung zu fördern.
            </p>
          </div>
        </details>
      </div>

      {/* Question 7 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Was ist der Unterschied zwischen vedischer und indischer Astrologie?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Vedische Astrologie und indische Astrologie sind im Grunde synonym. "Vedisch" bezieht sich auf die Ursprünge in den vedischen Schriften, während "indisch" die geografische Herkunft beschreibt. Beide Begriffe bezeichnen dieselbe astrologische Tradition, die seit Jahrtausenden in Indien praktiziert wird.
            </p>
          </div>
        </details>
      </div>

      {/* Question 8 */}
      <div className="bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
        <details className="group">
          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg">
            <span itemProp="name">Können Sie auch berufliche und finanzielle Fragen beantworten?</span>
          </summary>
          <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-700">
              Ja, die vedische Astrologie bietet ausgezeichnete Werkzeuge für Karriereberatung und finanzielle Planung. Wir analysieren Ihre beruflichen Stärken, identifizieren geeignete Berufsfelder, zeigen günstige Zeitpunkte für berufliche Veränderungen und helfen bei der Optimierung Ihrer finanziellen Entscheidungen.
            </p>
          </div>
        </details>
      </div>
    </div>

    {/* CTA après FAQ */}
    <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Haben Sie weitere Fragen?</h3>
      <p className="text-gray-700 mb-6">Kontaktieren Sie uns für eine persönliche Beratung oder weitere Informationen.</p>

                  <Link
              href="/Contacte"
        className="bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            
            >
            Kostenloses Erstgespräch vereinbaren
            </Link>
    </div>
  </div>
</section>

<section className="bg-white py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-8">Vedische Astrologie in der Schweiz</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Astrologe Zürich</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Vedische Astrologie Schweiz</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Lebensberatung Zürich</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Partnerhoroskop Schweiz</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Karmische Beratung Zürich</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Chakra Heilung Schweiz</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Indische Astrologie Zürich</strong>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <strong>Spirituelle Beratung Schweiz</strong>
      </div>
    </div>

    <div className="mt-8 text-gray-600">
      <p>
        Wir bedienen Kunden aus ganz Zürich und der Schweiz: Zürich, Genf, Basel, Bern, Lausanne, Winterthur, Luzern, St. Gallen und Umgebung.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}