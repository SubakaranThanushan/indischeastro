"use client";
import { useEffect, useRef } from "react";
import CardsAvisGoogls from "./CardsAvisGoogle";

function AutoScrollingComponent() {
  const contenaireRef = useRef<HTMLDivElement>(null);

  // Données en dur pour les commentaires
  const comment = [
    {
      id: 1,
      nom: "Maria Schmidt",
      explication: "Eine außergewöhnliche Beratung! Suthakar hat mir geholfen, meine beruflichen Blockaden zu lösen. Sehr empfehlenswert!",
      image: "/image/avatars/avatar1.jpg"
    },
    {
      id: 2,
      nom: "Thomas Weber",
      explication: "Die vedische Astrologie-Beratung war lebensverändernd. Präzise Analysen und praktische Ratschläge. Vielen Dank!",
      image: "/image/avatars/avatar2.jpg"
    },
    {
      id: 3,
      nom: "Sarah Müller",
      explication: "Professionell und einfühlsam. Die Partnerhoroskop-Analyse hat mir neue Perspektiven in meiner Beziehung eröffnet.",
      image: "/image/avatars/avatar3.jpg"
    },
    {
      id: 4,
      nom: "David Fischer",
      explication: "Die Chakra-Energie-Arbeit war transformierend. Ich fühle mich ausgeglichener und voller positiver Energie.",
      image: "/image/avatars/avatar4.jpg"
    },
    {
      id: 5,
      nom: "Laura Chen",
      explication: "Exzellenter Service! Die karmische Blockaden-Lösung hat mir geholfen, alte Muster zu durchbrechen. Sehr dankbar!",
      image: "/image/avatars/avatar5.jpg"
    },
    {
      id: 6,
      nom: "Robert Bauer",
      explication: "Authentisch und tiefgründig. Die Familienaufstellung hat unserem Familiensystem neue Harmonie gebracht.",
      image: "/image/avatars/avatar6.jpg"
    }
  ];

  useEffect(() => {
    const contenaire = contenaireRef.current;
    let scrollInterval;

    if (contenaire) {
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (
            contenaire.scrollLeft >=
            contenaire.scrollWidth - contenaire.clientWidth
          ) {
            contenaire.scrollLeft = 0;
          } else {
            contenaire.scrollLeft += 1;
          }
        }, 40);
      };

      startScrolling();
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-8">
      <h2 className="text-center text-2xl font-bold mb-4">
        Kundenbewertungen bei Google
      </h2>

      <div
        ref={contenaireRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        aria-label="Liste der Kundenbewertungen"
        role="list"
        className="w-full overflow-x-auto whitespace-nowrap"
      >
        {/* Conteneur principal avec display inline-flex pour l'alignement horizontal */}
        <div className="inline-flex gap-6 px-4">
          {comment.map((i) => (
            <div 
              role="listitem" 
              key={i.id}
              className="inline-flex flex-shrink-0"
            >
              <CardsAvisGoogls
                urlImage={i.image}
                name={i.nom}
                description={i.explication}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://www.google.com/maps/place/YourGooglePageLink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Weitere Bewertungen auf Google ansehen
        </a>
      </div>
    </section>
  );
}

export default AutoScrollingComponent;