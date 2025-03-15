"use client";
import { useEffect, useRef, useState } from "react";
import CardsAvisGoogls from "./CardsAvisGoogle";
import { supabase } from "@/lib/supabaseClient";

function AutoScrollingComponent() {
  const contenaireRef = useRef<HTMLDivElement>(null);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function extractionCommentaire() {
      const { data, error } = await supabase.from("commentaire").select("*");
      if (error) {
        console.error("Erreur de récupération de la base de données");
      } else {
        setComment(data);
      }
    }
    extractionCommentaire();
  }, []);

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
        className="w-full overflow-x-scroll whitespace-nowrap"
      >
        <div className="inline-block space-x-20">
          {comment.map((i) => (
            <div role="listitem" key={i.id}>
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
