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
        
        {/* Meta tags SEO supplémentaires */}
        <meta name="author" content="Suthakar Parameswaran" />
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.374448;8.531434" />
        <meta name="ICBM" content="47.374448, 8.531434" />
        <meta name="language" content="DE" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />

        {/* Open Graph */}
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
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Indische Astro" />
        <meta property="og:email" content="contact@indischeastro.fr" />
        <meta property="og:phone_number" content="+41-XX-XXX-XX-XX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedische und Indische Astrologie Beratung in der Schweiz" />
        <meta name="twitter:description" content="Professionelle Vedische und Indische Astrologie Beratung in der Schweiz mit Suthakar Parameswaran" />
        <meta name="twitter:image" content="https://www.indischeastro.fr/image/header/image.jpg" />

        {/* Favicon et manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload des images critiques */}
        <link rel="preload" href="/image/header/image.jpg" as="image" />
        <link rel="preload" href="/image/profile_home/image.png" as="image" />

        {/* Canonicals alternatifs pour les langues */}
        <link rel="alternate" hreflang="de" href="https://www.indischeastro.fr/de" />
        <link rel="alternate" hreflang="fr" href="https://www.indischeastro.fr/fr" />
        <link rel="alternate" hreflang="en" href="https://www.indischeastro.fr/en" />
        <link rel="alternate" hreflang="x-default" href="https://www.indischeastro.fr" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Indische Astro - Vedische Astrologie Beratung",
            "description": "Professionelle Vedische und Indische Astrologie Beratung in der Schweiz mit Suthakar Parameswaran",
            "url": "https://www.indischeastro.fr",
            "telephone": "+41-XX-XXX-XX-XX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zwinglistrasse 37",
              "addressLocality": "Zürich",
              "postalCode": "8004",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.374448",
              "longitude": "8.531434"
            },
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
            "priceRange": "$$",
            "areaServed": ["Schweiz", "Switzerland"],
            "sameAs": [
              "https://www.instagram.com/cittarastro/",
              "https://www.facebook.com/",
              "https://www.youtube.com/@1000suthakar"
            ],
            "serviceType": [
              "Vedische Astrologie",
              "Indische Astrologie",
              "Partner Horoskop",
              "Chakra Energie Arbeit",
              "Karmische Beratung"
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Startseite",
              "item": "https://www.indischeastro.fr"
            }, {
              "@type": "ListItem", 
              "position": 2,
              "name": "Vedische Astrologie",
              "item": "https://www.indischeastro.fr/vedische-astrologie"
            }]
          })}
        </script>
      </Head>
      
      <main className="flex flex-col h-auto w-full">
        {/* Hero Section avec ARIA */}
        <section aria-label="Hauptbereich der Vedischen Astrologie Beratung">
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem>
                <div className="grid md:grid-cols-2 bg-amber-600 h-auto">
                  {/* Conteneur de l'image */}
                  <div className="h-auto flex justify-center items-center p-4">
                    <div className="relative w-full h-[500px]">
                      <Image
                        src={Profil}
                        alt="Vedische Astrologie Beratung mit Suthakar Parameswaran in Zürich - Professionelle Lebensberatung"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-all duration-300 hover:grayscale-0"
                        style={{ objectPosition: "center" }}
                        priority
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
                          aria-label="Termin für Vedische Astrologie Beratung vereinbaren"
                          className="cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center transition-colors duration-300"
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
                        alt="Indische Astrologie Beratung in Zürich - Spirituelle Lebensführung und Zukunftsplanung"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-all duration-300 hover:grayscale-0"
                        style={{ objectPosition: "center" }}
                        priority
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
                          aria-label="Jetzt Termin für Astrologie Beratung buchen"
                          className="cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center transition-colors duration-300"
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

            <div className="flex md:justify-end justify-center pt-6 pr-6">
              <button
                onClick={() => alterte()}
                type="button"
                aria-label="Mehr über Suthakar Parameswaran erfahren"
                className="cursor-pointer mb-3 px-6 py-3.5 text-base font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center transition-colors duration-300"
              >
                Mehr erfahren
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative w-64 h-64">
              <Image
                src={Profil2}
                alt="Suthakar Parameswaran, Experte für Vedische Astrologie in Zürich - Zertifizierter Astrologe"
                itemProp="image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section Services avec structured data */}
        <section 
          itemScope 
          itemType="https://schema.org/Service"
          className="flex flex-col items-center w-full"
        >
          <h2 className="mt-7 text-3xl font-bold text-black text-center">
            Unsere Dienstleistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg">
            {services.map((service) => (
              <article 
                key={service.id} 
                itemScope 
                itemType="https://schema.org/Service"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <CardsService
                  id={service.id}
                  images={service.image}
                  nom={service.nom}
                  description={service.description}
                  alt={service.alt}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Section Témoignages avec Review Schema */}
        <section 
          itemScope 
          itemType="https://schema.org/Review"
          className="w-full mt-12"
        >
          <div className="flex flex-col items-center mt-12">
            <h2 className="text-3xl font-bold text-black text-center mb-8">
              Kundenbewertungen
            </h2>
            <div className="w-full">
              <AutoScrollingComponent />
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Wissenswertes über Vedische Astrologie</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      <article className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Die 12 Häuser im vedischen Horoskop</h3>
        <p className="text-gray-700 mb-4">
          Erfahren Sie, wie jedes der 12 Häuser in der vedischen Astrologie verschiedene Lebensbereiche beeinflusst...
        </p>
        <Link href="/blog/vedische-horoskop-haeuser" className="text-[#ff6e54] font-semibold">
          Mehr lesen →
        </Link>
      </article>

      <article className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Karma und Reinkarnation im Jyotish</h3>
        <p className="text-gray-700 mb-4">
          Wie die vedische Astrologie karmische Muster und vergangene Leben interpretiert...
        </p>
        <Link href="/blog/karma-reinkarnation-jyotish" className="text-[#ff6e54] font-semibold">
          Mehr lesen →
        </Link>
      </article>

      <article className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Planeten und ihre Bedeutung</h3>
        <p className="text-gray-700 mb-4">
          Tiefere Einblicke in die neun Planeten (Grahas) und ihre Einflüsse im vedischen System...
        </p>
        <Link href="/blog/planeten-bedeutung-vedisch" className="text-[#ff6e54] font-semibold">
          Mehr lesen →
        </Link>
      </article>
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
              Eine Erstberatung dauert in der Regel 90 Minuten und kostet CHF 180. Folgeberatungen (60 Minuten) kosten CHF 120. Pakete für umfassende Analysen (Partnerschaft, Karriere, spirituelle Entwicklung) sind ebenfalls verfügbar. Alle Preise inklusive detaillierte Aufzeichnung und schriftliche Zusammenfassung.
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
              Ja, wir bieten sowohl persönliche Beratungen in unserer Praxis in Zürich als auch professionelle Online-Beratungen per Video-Call an. Die Qualität der Online-Beratungen ist identisch mit den Präsenzterminen. Wir beraten Kunden in der ganzen Schweiz und international per Zoom, Skype oder WhatsApp Video.
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
      <button
        onClick={() => alterte()}
        className="bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
      >
        Kostenloses Erstgespräch vereinbaren
      </button>
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