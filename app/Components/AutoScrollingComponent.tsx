"use client";
import { useEffect, useRef, useState } from "react";
import CardsAvisGoogls from "./CardsAvisGoogle";
import { FaStar, FaQuoteLeft, FaGoogle } from "react-icons/fa";

function AutoScrollingComponent() {
  const contenaireRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  // Données en dur pour les commentaires
  const comment = [
    {
      id: 1,
      nom: "Maria Schmidt",
      explication: "Eine außergewöhnliche Beratung! Suthakar hat mir geholfen, meine beruflichen Blockaden zu lösen. Sehr empfehlenswert!",
      image: "/image/avatars/avatar1.jpg",
      rating: 5,
      date: "Vor 2 Wochen"
    },
    {
      id: 2,
      nom: "Thomas Weber",
      explication: "Die vedische Astrologie-Beratung war lebensverändernd. Präzise Analysen und praktische Ratschläge. Vielen Dank!",
      image: "/image/avatars/avatar2.jpg",
      rating: 4,
      date: "Vor 1 Monat"
    },
    {
      id: 3,
      nom: "Sarah Müller",
      explication: "Professionell und einfühlsam. Die Partnerhoroskop-Analyse hat mir neue Perspektiven in meiner Beziehung eröffnet.",
      image: "/image/avatars/avatar3.jpg",
      rating: 5,
      date: "Vor 3 Wochen"
    },
    {
      id: 4,
      nom: "David Fischer",
      explication: "Die Chakra-Energie-Arbeit war transformierend. Ich fühle mich ausgeglichener und voller positiver Energie.",
      image: "/image/avatars/avatar4.jpg",
      rating: 4,
      date: "Vor 2 Monaten"
    },
    {
      id: 5,
      nom: "Laura Chen",
      explication: "Exzellenter Service! Die karmische Blockaden-Lösung hat mir geholfen, alte Muster zu durchbrechen. Sehr dankbar!",
      image: "/image/avatars/avatar5.jpg",
      rating: 5,
      date: "Vor 1 Woche"
    },
    {
      id: 6,
      nom: "Robert Bauer",
      explication: "Authentisch und tiefgründig. Die Familienaufstellung hat unserem Familiensystem neue Harmonie gebracht.",
      image: "/image/avatars/avatar6.jpg",
      rating: 5,
      date: "Vor 3 Monaten"
    },
    {
      id: 7,
      nom: "Anna Kowalski",
      explication: "Die Marmapunkt-Behandlung war wunderbar. Sofortige Entspannung und spürbare Energiefluss-Verbesserung.",
      image: "/image/avatars/avatar7.jpg",
      rating: 5,
      date: "Vor 2 Wochen"
    },
    {
      id: 8,
      nom: "Michael Huber",
      explication: "Outstanding service! The Reiki treatment brought immediate relief from chronic pain. Highly recommended!",
      image: "/image/avatars/avatar8.jpg",
      rating: 4,
      date: "Vor 1 Monat"
    }
  ];

  useEffect(() => {
    const contenaire = contenaireRef.current;
    let animationFrameId: number;
    let scrollDirection = 1; // 1 pour droite, -1 pour gauche

    if (contenaire && !isPaused) {
      const scroll = () => {
        const maxScroll = contenaire.scrollWidth - contenaire.clientWidth;
        const currentScroll = contenaire.scrollLeft;

        // Changer de direction si on atteint un bord
        if (currentScroll >= maxScroll - 1) {
          scrollDirection = -1; // Aller vers la gauche
          setIsScrollingRight(false);
        } else if (currentScroll <= 1) {
          scrollDirection = 1; // Aller vers la droite
          setIsScrollingRight(true);
        }

        // Défiler dans la direction actuelle
        contenaire.scrollBy({ 
          left: scrollDirection * 2, 
          behavior: 'auto' 
        });

        animationFrameId = requestAnimationFrame(scroll);
      };

      // Démarrer avec un petit délai pour une meilleure UX
      const startScrolling = () => {
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(scroll);
        }, 1000);
      };

      startScrolling();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff6e54]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#260C56]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-6">
            <FaGoogle className="text-2xl text-[#4285F4]" />
            <span className="text-lg font-semibold text-gray-700">Google Bewertungen</span>
            <div className="flex items-center gap-1">
              <FaStar className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-bold text-gray-800">4.8</span>
              <span className="text-gray-500">/ 5.0</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entdecken Sie authentische Erfahrungsberichte von zufriedenen Kunden
          </p>
        </div>

        {/* Scrolling Container */}
        <div
          ref={contenaireRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          aria-label="Liste der Kundenbewertungen"
          role="list"
          className="w-full overflow-x-auto whitespace-nowrap scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Conteneur principal avec display inline-flex pour l'alignement horizontal */}
          <div className="inline-flex gap-8 py-4">
            {comment.map((review, index) => (
              <div 
                role="listitem" 
                key={review.id}
                className="inline-flex flex-shrink-0 w-80 md:w-96 transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Enhanced Card Design */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group w-full">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#ff6e54] to-[#ff8e54] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                            {review.nom.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <FaGoogle className="w-2 h-2 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{review.nom}</h3>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>
                      <FaQuoteLeft className="w-6 h-6 text-[#ff6e54]/20 group-hover:text-[#ff6e54]/40 transition-colors" />
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-normal line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {review.explication}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Verifizierte Bewertung</span>
                      <div className="flex items-center gap-1 text-[#4285F4]">
                        <FaGoogle className="w-4 h-4" />
                        <span className="text-sm font-medium">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots avec indicateur de direction */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            <span className={`text-sm text-gray-500 transition-all duration-300 ${
              isScrollingRight ? 'text-[#ff6e54] font-medium' : ''
            }`}>
              ←
            </span>
            {comment.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === 0 ? "bg-[#ff6e54] w-4" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Zur Bewertung ${index + 1} springen`}
              />
            ))}
            <span className={`text-sm text-gray-500 transition-all duration-300 ${
              !isScrollingRight ? 'text-[#ff6e54] font-medium' : ''
            }`}>
              →
            </span>
          </div>
        </div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}

export default AutoScrollingComponent;