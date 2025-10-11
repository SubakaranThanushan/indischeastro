&quot;use client&quot;;
import { useState, useEffect, useCallback } from &quot;react&quot;;
import Image from &quot;next/image&quot;;
import Head from &quot;next/head&quot;;
import Profil from &quot;../public/image/profile_home/image.png&quot;;
import Profil2 from &quot;../public/image/profile_home/prof2.jpg&quot;;
import World from &quot;../public/image/header/image.jpg&quot;;
import ContacteNotif from &quot;./Components/ContacteNotif&quot;;
import AutoScrollingAstro from &quot;./Components/AutoScrollingAstro&quot;;
import AutoScrollingComponent from &quot;./Components/AutoScrollingComponent&quot;;

import Link from &quot;next/link&quot;;
import { FaYoutube } from &quot;react-icons/fa&quot;;
import { FaFacebookSquare } from &quot;react-icons/fa&quot;;
import { FaSquareInstagram } from &quot;react-icons/fa6&quot;;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from &quot;@/components/ui/carousel&quot;;

export default function Home() {
  const [services, setServices] = useState([]);
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllServices, setShowAllServices] = useState(false);

  // Récupérer les services depuis Supabase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log(&quot;Début du chargement des services...&quot;);
      } catch (err) {
        console.error(&quot;Erreur inattendue :&quot;, err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fonction pour afficher une alerte (exemple)
  function alterte() {
    alert(&quot;toto&quot;);
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

  // Données statiques de test
  const staticServices = [
    {
      id: 1,
      nom: &quot;Partner-Horoskop-Analyse&quot;,
      description: &quot;Tiefe Einblicke in Ihre Beziehungsdynamiken und astrologische Kompatibilität&quot;,
      price: &quot;180&quot;,
      time: &quot;90&quot;,
      images: &quot;/image/services/partner-horoskop.jpg&quot;
    },
    {
      id: 2,
      nom: &quot;Geburts-Horoskop&quot;,
      description: &quot;Detaillierte Analyse Ihrer Lebensaufgabe, Talente und Herausforderungen&quot;,
      price: &quot;150&quot;,
      time: &quot;60&quot;,
      images: &quot;/image/services/geburts-horoskop.jpg&quot;
    },
    {
      id: 3,
      nom: &quot;Astrologische Partnerberatung&quot;,
      description: &quot;Kombination von astrologischem Wissen mit modernen Beziehungsansätzen&quot;,
      price: &quot;160&quot;,
      time: &quot;75&quot;,
      images: &quot;/image/services/partnerberatung.jpg&quot;
    },
    {
      id: 4,
      nom: &quot;Kundalini-Energiearbeit&quot;,
      description: &quot;Aktivierung Ihrer ureigenen Lebenskraft für tiefgreifende Transformation&quot;,
      price: &quot;170&quot;,
      time: &quot;90&quot;,
      images: &quot;/image/services/kundalini.jpg&quot;
    },
    {
      id: 5,
      nom: &quot;Marmapunkt-Behandlung&quot;,
      description: &quot;Ayurvedische Heilkunst mit 107 vitalen Energiepunkten&quot;,
      price: &quot;140&quot;,
      time: &quot;60&quot;,
      images: &quot;/image/services/marmapunkt.jpg&quot;
    },
    {
      id: 6,
      nom: &quot;Heilende Energie-Mudras&quot;,
      description: &quot;Spezielle Handhaltungen für Energiefluss und Harmonisierung&quot;,
      price: &quot;120&quot;,
      time: &quot;45&quot;,
      images: &quot;/image/services/mudras.jpg&quot;
    },
    {
      id: 7,
      nom: &quot;Reiki-Behandlung&quot;,
      description: &quot;Japanische Heilenergie für körperliche und emotionale Heilung&quot;,
      price: &quot;110&quot;,
      time: &quot;45&quot;,
      images: &quot;/image/services/reiki.jpg&quot;
    },
    {
      id: 8,
      nom: &quot;Kostenloser Chakra-Test&quot;,
      description: &quot;Umfassende Analyse Ihrer sieben Hauptenergiezentren&quot;,
      price: &quot;0&quot;,
      time: &quot;30&quot;,
      images: &quot;/image/services/chakra-test.jpg&quot;
    },
    {
      id: 9,
      nom: &quot;Ayurveda-Kopfmassage&quot;,
      description: &quot;Traditionelle indische Kopfmassage zur Tiefenentspannung&quot;,
      price: &quot;90&quot;,
      time: &quot;45&quot;,
      images: &quot;/image/services/kopfmassage.jpg&quot;
    },
    {
      id: 10,
      nom: &quot;Öl-Kopfguss (Shirodhara)&quot;,
      description: &quot;Tiefenentspannungstechnik des Ayurveda für meditativen Zustand&quot;,
      price: &quot;130&quot;,
      time: &quot;60&quot;,
      images: &quot;/image/services/shirodhara.jpg&quot;
    },
    {
      id: 11,
      nom: &quot;Ayurveda-Ganzkörpermassage&quot;,
      description: &quot;Umfassende Ölmassage für alle Körpersysteme&quot;,
      price: &quot;190&quot;,
      time: &quot;90&quot;,
      images: &quot;/image/services/ganzkoerpermassage.jpg&quot;
    },
    {
      id: 12,
      nom: &quot;Relax-Massage&quot;,
      description: &quot;Sanfte Berührung für besondere Zuwendung und Entspannung&quot;,
      price: &quot;100&quot;,
      time: &quot;50&quot;,
      images: &quot;/image/services/relax-massage.jpg&quot;
    },
    {
      id: 13,
      nom: &quot;Aura-Heilung und Reinigung&quot;,
      description: &quot;Arbeit mit Ihrem feinstofflichen Energiekörper&quot;,
      price: &quot;150&quot;,
      time: &quot;60&quot;,
      images: &quot;/image/services/aura-heilung.jpg&quot;
    },
    {
      id: 14,
      nom: &quot;Vedische Astrologie-Beratung&quot;,
      description: &quot;Präzise Wissenschaft der Zeit mit karmischen Mustern&quot;,
      price: &quot;160&quot;,
      time: &quot;75&quot;,
      images: &quot;/image/services/vedische-astrologie.jpg&quot;
    }
  ];

  // Utiliser les données statiques si Supabase ne retourne rien
  // const displayServices = services.length > 0 ? services : staticServices;
  const displayServices = services.length > 0 ? services : staticServices;


  // Afficher seulement 4 services au début, ou tous si showAllServices est true
  const visibleServices = showAllServices ? displayServices : displayServices.slice(0, 4);

  if (loading) {
    return <div className=&quot;flex justify-center items-center h-64&quot;>Chargement...</div>;
  }

  return (
    <>
      <Head>
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <title>
          Vedische und Indische Astrologie Beratung in der Schweiz |
          indischeastro
        </title>
        <meta
          name=&quot;description&quot;
          content=&quot;Professionelle Vedische und Indische Astrologie Beratung in der Schweiz. Lösungen für Partner Horoskop, karmische Blockaden, Chakra Energie Arbeit und mehr. Jetzt Termin buchen!&quot;
        />
        {/* ... reste des meta tags inchangés ... */}
      </Head>
      
      <main className=&quot;flex flex-col h-auto w-full&quot;>
        {/* Hero Section avec ARIA */}
        <section aria-label=&quot;Hauptbereich der Vedischen Astrologie Beratung&quot;>
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem>
                <div className=&quot;grid md:grid-cols-2 bg-amber-600 h-auto&quot;>
                  <div className=&quot;h-auto flex justify-center items-center p-4&quot;>
                    <div className=&quot;relative w-full h-[500px]&quot;>
                      <Image
                        src={Profil}
                        alt=&quot;Vedische Astrologie Beratung mit Suthakar Parameswaran in Zürich - Professionelle Lebensberatung&quot;
                        fill
                        className=&quot;rounded-lg transition-all duration-300 hover:grayscale-0 object-cover&quot;
                        priority
                      />
                    </div>
                  </div>
                  <div className=&quot;flex flex-col justify-center pl-9 pr-6 text-white&quot;>
                    <div className=&quot;flex flex-col justify-center items-center text-center gap-6&quot;>
                      <h1 className=&quot;text-4xl font-bold&quot;>
                        Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
                        Persönliche Begleitung für Ihr Leben
                      </h1>
                      <h2 className=&quot;text-2xl font-bold text-zinc-600&quot;>
                        Vedische und Indische Astrologie Beratung in der Schweiz
                      </h2>
                      <div className=&quot;flex gap-2 items-center&quot;>
                        <button
                          onClick={() => alterte()}
                          type=&quot;button&quot;
                          aria-label=&quot;Termin für Vedische Astrologie Beratung vereinbaren&quot;
                          className=&quot;cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center transition-colors duration-300&quot;
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
                <div className=&quot;grid md:grid-cols-2 bg-amber-600 h-auto&quot;>
                  <div className=&quot;h-auto flex justify-center items-center p-4&quot;>
                    <div className=&quot;relative w-full h-[500px]&quot;>
                      <Image
                        src={World}
                        alt=&quot;Indische Astrologie Beratung in Zürich - Spirituelle Lebensführung und Zukunftsplanung&quot;
                        fill
                        className=&quot;rounded-lg transition-all duration-300 hover:grayscale-0 object-cover&quot;
                        priority
                      />
                    </div>
                  </div>
                  <div className=&quot;flex flex-col justify-center pl-9 pr-6 text-white&quot;>
                    <div className=&quot;flex flex-col justify-center items-center text-center gap-6&quot;>
                      <h1 className=&quot;text-4xl font-bold&quot;>
                        Vedische Astrologie-Beratungen mit Suthakar Parameswaran –
                        Persönliche Begleitung für Ihr Leben
                      </h1>
                      <h2 className=&quot;text-2xl font-bold text-zinc-600&quot;>
                        Vedische und Indische Astrologie Beratung in der Schweiz
                      </h2>
                      <div className=&quot;flex gap-2 items-center&quot;>
                        <button
                          onClick={() => alterte()}
                          type=&quot;button&quot;
                          aria-label=&quot;Jetzt Termin für Astrologie Beratung buchen&quot;
                          className=&quot;cursor-pointer p-5 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center transition-colors duration-300&quot;
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
          itemType=&quot;https://schema.org/Person&quot;
          className=&quot;grid md:grid-cols-2 bg-black w-auto mt-12&quot;
        >
          <div className=&quot;flex flex-col items-center pl-9 pr-6 max-w-screen-lg&quot;>
            <h2 className=&quot;flex justify-center text-2xl text-[#ff6e54] p-5&quot;>
              Über <span itemProp=&quot;name&quot;>Suthakar Parameswaran</span>
            </h2>
            <p itemProp=&quot;description&quot; className=&quot;text-white&quot;>
              Suthakar Parameswaran ist nicht nur ein außergewöhnlicher
              Wissenshüter, sondern auch ein herausragender Experte mit einer
              beeindruckenden akademischen Laufbahn. Sein Wissen wurde ihm nicht
              nur durch eine traditionsreiche Weitergabe vermittelt, sondern
              auch durch eine Vielzahl renommierter Diplome und spezialisierten
              Ausbildungen vertieft.{&quot; &quot;}
            </p>

            <ul className=&quot;text-[#ff6e54] p-5&quot;>
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

            <p className=&quot;text-white&quot;>
              Seine Mission? Sie mit außergewöhnlichen Erkenntnissen zu
              bereichern, Ihnen wertvolle Perspektiven zu eröffnen und Sie auf
              Ihrem Weg zu Erfolg und Erfüllung zu begleiten.
            </p>

            <p> 
                &quot; &quot;
            </p>
          </div>

          <div className=&quot;flex items-center justify-center p-4&quot;>
            <div className=&quot;relative w-64 h-64&quot;>
              <Image
                src={Profil2}
                alt=&quot;Suthakar Parameswaran, Experte für Vedische Astrologie in Zürich - Zertifizierter Astrologe&quot;
                itemProp=&quot;image&quot;
                fill
                className=&quot;rounded-full object-cover&quot;
                priority
              />
            </div>
          </div>
        </section>

        {/* Section Services Compacte */}
        <section className=&quot;flex flex-col items-center w-full py-16 bg-gradient-to-br from-gray-50 to-white&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-4xl font-bold text-[#260C56] mb-4&quot;>
              Unsere Dienstleistungen
            </h2>
            <p className=&quot;text-lg text-gray-600 max-w-2xl mx-auto&quot;>
              {displayServices.length} professionelle Dienstleistungen für Ihr Wohlbefinden
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl&quot;>
            {visibleServices.map((service) => (
              <div 
                key={service.id}
                className=&quot;bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer flex flex-col&quot;
              >
                {/* Image miniature */}
                <div className=&quot;relative h-32 bg-gradient-to-r from-purple-50 to-blue-50&quot;>
                  <div className=&quot;w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100&quot;>
                    <span className=&quot;text-2xl&quot;>
                      {service.price === &quot;0&quot; ? &quot;🎁&quot; : &quot;✨&quot;}
                    </span>
                  </div>
                  <div className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    service.price === &quot;0&quot; ? &quot;bg-green-500&quot; : &quot;bg-[#ff6e54]&quot;
                  }`}>
                    {service.price === &quot;0&quot; ? &quot;KOSTENLOS&quot; : `${service.price} CHF`}
                  </div>
                </div>

                {/* Contenu */}
                <div className=&quot;p-4 flex-1 flex flex-col&quot;>
                  <h3 className=&quot;font-bold text-[#260C56] text-base mb-2 line-clamp-2 group-hover:text-[#ff6e54] transition-colors&quot;>
                    {service.nom}
                  </h3>
                  
                  <p className=&quot;text-gray-600 text-sm line-clamp-3 mb-3 flex-1 leading-relaxed&quot;>
                    {service.description}
                  </p>

                  {/* Informations basiques */}
                  <div className=&quot;flex justify-between items-center pt-2 border-t border-gray-100&quot;>
                    <span className=&quot;text-xs text-gray-500 flex items-center gap-1&quot;>
                      ⏱️ {service.time} Min
                    </span>
                    <button 
                      className=&quot;text-[#ff6e54] text-sm font-semibold hover:text-red-700 transition-colors flex items-center gap-1&quot;
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/Contacte?service=${encodeURIComponent(service.nom)}`;
                      }}
                    >
                      {service.price === &quot;0&quot; ? &quot;Jetzt testen&quot; : &quot;Termin buchen&quot;}
                      <span className=&quot;text-lg&quot;>›</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton pour afficher/masquer les services supplémentaires */}
          {displayServices.length > 4 && (
            <div className=&quot;text-center mt-8&quot;>
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className=&quot;bg-[#260C56] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a1a7a] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2&quot;
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
          <div className=&quot;text-center mt-12&quot;>
            <p className=&quot;text-gray-600 mb-6&quot;>Brauchen Sie persönliche Beratung bei der Auswahl?</p>
            <button
              onClick={() => window.location.href = '/Contacte'}
              className=&quot;bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl&quot;
            >
              Kostenlose Erstberatung anfordern
            </button>
          </div>
        </section>

        {/* Section Témoignages avec Review Schema */}
<section 
  itemScope 
  itemType=&quot;https://schema.org/Review&quot;
  className=&quot;w-full mt-20 py-16 bg-gradient-to-br from-gray-50/50 to-white/30 relative overflow-hidden&quot;
>
  {/* Éléments décoratifs d'arrière-plan */}
  

    {/* Composant de défilement */}
    <div className=&quot;w-full transform transition-all duration-300 hover:scale-[1.01]&quot;>
      <AutoScrollingComponent />
    </div>



  {/* Overlays de dégradé pour les bords */}
  <div className=&quot;absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none&quot;></div>
  <div className=&quot;absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none&quot;></div>
</section>

        {/* Sections restantes inchangées */}
<section className=&quot;py-20 px-4 bg-gradient-to-br from-transparent via-purple-50/20 to-transparent relative overflow-hidden&quot;>
  {/* Éléments décoratifs d'arrière-plan */}
  <div className=&quot;absolute top-10 left-10 w-72 h-72 bg-[#ff6e54]/5 rounded-full blur-3xl&quot;></div>
  <div className=&quot;absolute bottom-10 right-10 w-96 h-96 bg-[#260C56]/5 rounded-full blur-3xl&quot;></div>
  <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff8e54]/10 rounded-full blur-3xl&quot;></div>
  
  <div className=&quot;relative z-10 max-w-7xl mx-auto&quot;>
    {/* En-tête avec design premium */}
    <div className=&quot;text-center mb-16&quot;>
      <div className=&quot;inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/80 text-gray-700 px-6 py-3 rounded-full shadow-sm mb-6&quot;>
        <div className=&quot;w-2 h-2 bg-[#ff6e54] rounded-full animate-pulse&quot;></div>
        <span className=&quot;text-sm font-medium uppercase tracking-wider&quot;>Vedisches Wissen</span>
      </div>
      
      <h2 className=&quot;text-4xl md:text-5xl font-bold text-[#260C56] mb-6&quot;>
        Wissenswertes über 
        <span className=&quot;block text-[#ff6e54] mt-2&quot;>Vedische Astrologie</span>
      </h2>
      <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed&quot;>
        Tauchen Sie ein in die tiefe Weisheit der 5.000 Jahre alten vedischen Tradition
      </p>
    </div>

    {/* Grille des articles avec design glassmorphism */}
    <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
      <article className=&quot;group relative&quot;>
        {/* Carte avec effet glassmorphism */}
        <div className=&quot;bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col&quot;>
          {/* Icône décorative */}
          <div className=&quot;w-14 h-14 bg-gradient-to-br from-[#ff6e54] to-[#ff8e54] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
            <span className=&quot;text-2xl&quot;>🏛️</span>
          </div>
          
          <h3 className=&quot;text-2xl font-bold text-[#260C56] mb-4 leading-tight&quot;>
            Die 12 Häuser im vedischen Horoskop
          </h3>
          <p className=&quot;text-gray-700 mb-6 leading-relaxed flex-grow&quot;>
            Entdecken Sie die tiefe Symbolik der 12 Häuser und wie sie Ihre Lebensbereiche 
            von Karriere über Beziehungen bis zur Spiritualität beeinflussen. Jedes Haus 
            erzählt eine einzigartige Geschichte Ihres Schicksals.
          </p>
          
          {/* Lien avec animation */}
          
        </div>
        
        {/* Effet de bordure au survol */}
        <div className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10&quot;></div>
      </article>

      <article className=&quot;group relative&quot;>
        <div className=&quot;bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col&quot;>
          <div className=&quot;w-14 h-14 bg-gradient-to-br from-[#260C56] to-[#4c1d95] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
            <span className=&quot;text-2xl&quot;>🔄</span>
          </div>
          
          <h3 className=&quot;text-2xl font-bold text-[#260C56] mb-4 leading-tight&quot;>
            Karma & Reinkarnation im Jyotish
          </h3>
          <p className=&quot;text-gray-700 mb-6 leading-relaxed flex-grow&quot;>
            Erfahren Sie, wie die vedische Astrologie karmische Muster aus vergangenen Leben 
            entschlüsselt und Ihnen hilft, Ihr gegenwärtiges Schicksal zu verstehen und 
            bewusst zu gestalten.
          </p>
          
          
        </div>
        
        <div className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-r from-[#260C56] to-[#4c1d95] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10&quot;></div>
      </article>

      <article className=&quot;group relative&quot;>
        <div className=&quot;bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/80 transition-all duration-500 hover:scale-105 hover:bg-white/90 h-full flex flex-col&quot;>
          <div className=&quot;w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
            <span className=&quot;text-2xl&quot;>🪐</span>
          </div>
          
          <h3 className=&quot;text-2xl font-bold text-[#260C56] mb-4 leading-tight&quot;>
            Planeten & ihre Bedeutung
          </h3>
          <p className=&quot;text-gray-700 mb-6 leading-relaxed flex-grow&quot;>
            Tauchen Sie ein in die mystische Welt der 9 Planeten (Grahas) und entdecken Sie 
            ihre tiefgreifenden Einflüsse auf Persönlichkeit, Schicksal und Lebensereignisse 
            im vedischen System.
          </p>
          
         
        </div>
        
        <div className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10&quot;></div>
      </article>
    </div>

    {/* CTA supplémentaire */}
    <div className=&quot;text-center mt-16&quot;>
      <div className=&quot;bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/80 max-w-2xl mx-auto&quot;>
        <h3 className=&quot;text-2xl font-bold text-[#260C56] mb-4&quot;>
          Vertiefen Sie Ihr Wissen
        </h3>
        <p className=&quot;text-gray-600 mb-6 text-lg&quot;>
          Entdecken Sie unsere umfassende Bibliothek an vedischem Wissen und spirituellen Einsichten.
        </p>
        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <button 
            onClick={() => window.location.href = '/vlog'}
            className=&quot;bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105&quot;
          >
            Blog entdecken
          </button>
          <button 
            onClick={() => window.location.href = '/Contacte'}
            className=&quot;border-2 border-[#260C56] text-[#260C56] px-8 py-4 rounded-xl font-semibold hover:bg-[#260C56] hover:text-white transition-all duration-300&quot;
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
          itemType=&quot;https://schema.org/LocalBusiness&quot;
          className=&quot;relative w-full mt-8&quot;
        >
          <h1 className=&quot;font-bold text-3xl text-center mb-8&quot;>Kontakt und Anfahrt</h1>

          <div className=&quot;relative w-full h-[600px]&quot;>
            {/* Carte Google Maps - Pleine taille */}
            <iframe
              src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.234567890123!2d8.531434!3d47.374448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0b7c5a65a67%3A0x1234567890abcdef!2sZwinglistrasse%2037%2C%208004%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890&quot;
              width=&quot;100%&quot;
              height=&quot;100%&quot;
              style={{ border: 0 }}
              allowFullScreen
              loading=&quot;lazy&quot;
              referrerPolicy=&quot;no-referrer-when-downgrade&quot;
              title=&quot;Standort unserer Praxis für Vedische Astrologie in Zürich - Zwinglistrasse 37, 8004 Zürich&quot;
              aria-label=&quot;Karte zeigt unseren Standort in Zürich, Zwinglistrasse 37&quot;
            ></iframe>

            {/* Overlay de contenu seulement en partie */}
            <div className=&quot;absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6&quot;>
              <div className=&quot;flex flex-col md:flex-row justify-between items-center gap-6 text-white&quot;>
                {/* Adresse */}
                <div 
                  itemProp=&quot;address&quot; 
                  itemScope 
                  itemType=&quot;https://schema.org/PostalAddress&quot;
                  className=&quot;bg-white/10 backdrop-blur-sm p-4 rounded-lg&quot;
                >
                  <h4 className=&quot;text-xl font-semibold mb-2&quot;>Unsere Adresse</h4>
                  <p itemProp=&quot;streetAddress&quot; className=&quot;text-lg&quot;>Zwinglistrasse 37</p>
                  <p>
                    <span itemProp=&quot;postalCode&quot;>8004</span>{' '}
                    <span itemProp=&quot;addressLocality&quot;>Zürich</span>,{' '}
                    <span itemProp=&quot;addressCountry&quot;>Switzerland</span>
                  </p>
                </div>

                {/* Réseaux sociaux */}
                <div className=&quot;bg-white/10 backdrop-blur-sm p-4 rounded-lg&quot;>
                  <h4 className=&quot;text-xl font-semibold mb-2&quot;>Soziale Medien</h4>
                  <div className=&quot;flex justify-center gap-4 text-2xl&quot;>
                    <Link 
                      href=&quot;https://www.instagram.com/cittarastro/&quot; 
                      target=&quot;_blank&quot; 
                      rel=&quot;noopener noreferrer&quot;
                      aria-label=&quot;Folgen Sie uns auf Instagram&quot;
                      className=&quot;hover:text-pink-400 transition-colors duration-300&quot;
                    >
                      <FaSquareInstagram />
                    </Link>
                    <Link 
                      href=&quot;https://www.facebook.com/&quot; 
                      target=&quot;_blank&quot; 
                      rel=&quot;noopener noreferrer&quot;
                      aria-label=&quot;Folgen Sie uns auf Facebook&quot;
                      className=&quot;hover:text-blue-400 transition-colors duration-300&quot;
                    >
                      <FaFacebookSquare />
                    </Link>
                    <Link 
                      href=&quot;https://www.youtube.com/@1000suthakar&quot; 
                      target=&quot;_blank&quot; 
                      rel=&quot;noopener noreferrer&quot;
                      aria-label=&quot;Abonnieren Sie unseren YouTube-Kanal&quot;
                      className=&quot;hover:text-red-400 transition-colors duration-300&quot;
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



<section className=&quot;bg-gray-50 py-16 px-4&quot;>
  <div className=&quot;max-w-4xl mx-auto&quot;>
    <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Häufig gestellte Fragen - Vedische Astrologie</h2>
    
    <div className=&quot;space-y-4&quot;>
      {/* Question 1 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Was ist vedische Astrologie und wie unterscheidet sie sich von westlicher Astrologie?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Die vedische Astrologie (Jyotish) ist eine uralte indische Wissenschaft, die auf dem siderischen Tierkreis basiert und die Präzession der Erdachse berücksichtigt. Im Gegensatz zur westlichen Astrologie legt sie besonderen Wert auf Karma, Spiritualität und praktische Lebensführung. Sie bietet präzisere Vorhersagen und konzentriert sich auf die Lösung karmischer Blockaden.
            </p>
          </div>
        </details>
      </div>

      {/* Question 2 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Wie kann eine vedische Astrologie-Beratung mein Leben verbessern?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Eine vedische Astrologie-Beratung hilft Ihnen, Ihre Lebensaufgabe zu erkennen, Beziehungen zu harmonisieren, berufliche Blockaden zu lösen und spirituell zu wachsen. Sie erhalten Klarheit über Ihre Stärken, Schwächen und die optimalen Zeitpunkte für wichtige Entscheidungen. Viele Kunden berichten von mehr innerem Frieden und besserer Lebensführung nach der Beratung.
            </p>
          </div>
        </details>
      </div>

      {/* Question 3 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Welche Informationen benötigen Sie für eine genaue astrologische Analyse?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Für eine präzise vedische Horoskop-Analyse benötigen wir Ihr exaktes Geburtsdatum, die Geburtszeit (möglichst auf die Minute genau) und den Geburtsort. Je genauer diese Angaben, desto aussagekräftiger ist die Beratung. Falls Sie die genaue Geburtszeit nicht kennen, können wir mit einer Rektifikation arbeiten.
            </p>
          </div>
        </details>
      </div>

      {/* Question 4 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Wie lange dauert eine typische Beratung und was kostet sie?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Eine Erstberatung dauert in der Regel 90 Minuten und kostet CHF 180. Folgeberatungen (60 Minuten) kosten CHF 120. Pakete für umfassende Analysen (Partnerschaft, Karriere, spirituelle Entwicklung) sind ebenfalls verfügbar. Alle Preise inklusive detaillierte Aufzeichnung und schriftliche Zusammenfassung.
            </p>
          </div>
        </details>
      </div>

      {/* Question 5 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Bieten Sie auch Online-Beratungen an?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Ja, wir bieten sowohl persönliche Beratungen in unserer Praxis in Zürich als auch professionelle Online-Beratungen per Video-Call an. Die Qualität der Online-Beratungen ist identisch mit den Präsenzterminen. Wir beraten Kunden in der ganzen Schweiz und international per Zoom, Skype oder WhatsApp Video.
            </p>
          </div>
        </details>
      </div>

      {/* Question 6 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Kann vedische Astrologie bei Beziehungsproblemen helfen?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Absolut. Die vedische Astrologie bietet tiefe Einblicke in Partnerschaftsdynamiken, karmische Verbindungen und Kompatibilität. Wir analysieren sowohl Einzelhoroskope als auch Partnervergleiche, um Kommunikationsmuster zu verbessern, Konflikte zu lösen und die harmonische Entwicklung der Beziehung zu fördern.
            </p>
          </div>
        </details>
      </div>

      {/* Question 7 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Was ist der Unterschied zwischen vedischer und indischer Astrologie?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Vedische Astrologie und indische Astrologie sind im Grunde synonym. &quot;Vedisch&quot; bezieht sich auf die Ursprünge in den vedischen Schriften, während &quot;indisch&quot; die geografische Herkunft beschreibt. Beide Begriffe bezeichnen dieselbe astrologische Tradition, die seit Jahrtausenden in Indien praktiziert wird.
            </p>
          </div>
        </details>
      </div>

      {/* Question 8 */}
      <div className=&quot;bg-white rounded-lg shadow-md&quot; itemScope itemType=&quot;https://schema.org/Question&quot;>
        <details className=&quot;group&quot;>
          <summary className=&quot;flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg&quot;>
            <span itemProp=&quot;name&quot;>Können Sie auch berufliche und finanzielle Fragen beantworten?</span>
          </summary>
          <div className=&quot;px-6 pb-6&quot; itemScope itemType=&quot;https://schema.org/Answer&quot;>
            <p itemProp=&quot;text&quot; className=&quot;text-gray-700&quot;>
              Ja, die vedische Astrologie bietet ausgezeichnete Werkzeuge für Karriereberatung und finanzielle Planung. Wir analysieren Ihre beruflichen Stärken, identifizieren geeignete Berufsfelder, zeigen günstige Zeitpunkte für berufliche Veränderungen und helfen bei der Optimierung Ihrer finanziellen Entscheidungen.
            </p>
          </div>
        </details>
      </div>
    </div>

    {/* CTA après FAQ */}
    <div className=&quot;text-center mt-12 bg-white p-8 rounded-lg shadow-md&quot;>
      <h3 className=&quot;text-2xl font-bold mb-4&quot;>Haben Sie weitere Fragen?</h3>
      <p className=&quot;text-gray-700 mb-6&quot;>Kontaktieren Sie uns für eine persönliche Beratung oder weitere Informationen.</p>

                  <Link
              href=&quot;/Contacte&quot;
        className=&quot;bg-[#ff6e54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300&quot;
            
            >
            Kostenloses Erstgespräch vereinbaren
            </Link>
    </div>
  </div>
</section>

<section className=&quot;bg-white py-12 px-4&quot;>
  <div className=&quot;max-w-6xl mx-auto text-center&quot;>
    <h2 className=&quot;text-2xl font-bold mb-8&quot;>Vedische Astrologie in der Schweiz</h2>
    
    <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 text-sm&quot;>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Astrologe Zürich</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Vedische Astrologie Schweiz</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Lebensberatung Zürich</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Partnerhoroskop Schweiz</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Karmische Beratung Zürich</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Chakra Heilung Schweiz</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Indische Astrologie Zürich</strong>
      </div>
      <div className=&quot;bg-gray-100 p-4 rounded-lg&quot;>
        <strong>Spirituelle Beratung Schweiz</strong>
      </div>
    </div>

    <div className=&quot;mt-8 text-gray-600&quot;>
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