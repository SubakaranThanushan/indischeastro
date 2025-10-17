"use client";
import { useEffect, useRef } from "react";
import aquarius from "@/public/image/signeAstro/icons8-aquarius-96.png";
import aries from "@/public/image/signeAstro/icons8-aries-96.png";
import cancer from "@/public/image/signeAstro/icons8-cancer-96.png";
import capricorn from "@/public/image/signeAstro/icons8-capricorn-96.png";
import gemini from "@/public/image/signeAstro/icons8-gemini-96.png";
import leo from "@/public/image/signeAstro/icons8-leo-96.png";
import libra from "@/public/image/signeAstro/icons8-libra-96.png";
import pisces from "@/public/image/signeAstro/icons8-pisces-96.png";
import sagittarius from "@/public/image/signeAstro/icons8-sagittarius-96.png";
import scorpio from "@/public/image/signeAstro/icons8-scorpio-96.png";
import taurus from "@/public/image/signeAstro/icons8-taurus-96.png";
import virgo from "@/public/image/signeAstro/icons8-virgo-96.png";
import Image from "next/image";

function AutoScrollingComponent() {
  const contenaireRef = useRef<HTMLDivElement>(null);

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
    <section className="w-full overflow-hidden bg-white py-8">
      <h2 className="text-center text-2xl font-bold mb-4">
        Tierkreiszeichen – Vedische Astrologie
      </h2>

      <div
        ref={contenaireRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        aria-label="Liste der Tierkreiszeichen"
        className="w-full overflow-x-scroll whitespace-nowrap"
      >
        <div className="inline-block space-x-1">
          <Image
            className="inline-block"
            src={aquarius}
            alt="Wassermann - Aquarius Zeichen"
            title="Wassermann - Aquarius Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={aries}
            alt="Widder - Aries Zeichen"
            title="Widder - Aries Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={cancer}
            alt="Krebs - Cancer Zeichen"
            title="Krebs - Cancer Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={capricorn}
            alt="Steinbock - Capricorn Zeichen"
            title="Steinbock - Capricorn Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={gemini}
            alt="Zwillinge - Gemini Zeichen"
            title="Zwillinge - Gemini Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={leo}
            alt="Löwe - Leo Zeichen"
            title="Löwe - Leo Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={libra}
            alt="Waage - Libra Zeichen"
            title="Waage - Libra Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={pisces}
            alt="Fische - Pisces Zeichen"
            title="Fische - Pisces Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={sagittarius}
            alt="Schütze - Sagittarius Zeichen"
            title="Schütze - Sagittarius Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={scorpio}
            alt="Skorpion - Scorpio Zeichen"
            title="Skorpion - Scorpio Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={taurus}
            alt="Stier - Taurus Zeichen"
            title="Stier - Taurus Zeichen"
            loading="lazy"
          />
          <Image
            className="inline-block"
            src={virgo}
            alt="Jungfrau - Virgo Zeichen"
            title="Jungfrau - Virgo Zeichen"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AutoScrollingComponent;
