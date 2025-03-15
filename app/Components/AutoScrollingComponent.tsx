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
        console.error("Erreur de récuperation de la base de donéne");
      } else {
        setComment(data);
      }
    }
    extractionCommentaire();
  }, []);

  useEffect(() => {
    const contenaire = contenaireRef.current;
    let scrollInterval: NodeJS.Timeout;

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
    <div className="w-full overflow-hidden bg-white">
      <div
        ref={contenaireRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="w-full overflow-x-scroll whitespace-nowrap "
      >
        <div className="inline-block space-x-20">
          {comment.map((i) => (
            <CardsAvisGoogls
              key={i.id}
              urlImage={i.image}
              name={i.nom}
              description={i.explication}
            />
          ))}

          {/* <p className="inline-block w-[300px] mr-5">Contenu 1</p>
          <p className="inline-block w-[300px] mr-5">Contenu 2</p>
          <p className="inline-block w-[300px] mr-5">Contenu 3</p>
          <p className="inline-block w-[300px] mr-5">Contenu 4</p>
          <p className="inline-block w-[300px] mr-5">Contenu 5</p>
          <p className="inline-block w-[300px] mr-5">Contenu 6</p> */}
          {/* <div className="inline-block w-[300px]"></div> */}
        </div>
      </div>
    </div>
  );
}

export default AutoScrollingComponent;
