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
          <Image className="inline-block " src={aquarius} alt="teste" />
          <Image className="inline-block " src={aries} alt="teste" />
          <Image className="inline-block " src={cancer} alt="teste" />
          <Image className="inline-block " src={capricorn} alt="teste" />
          <Image className="inline-block " src={gemini} alt="teste" />
          <Image className="inline-block " src={leo} alt="teste" />
          <Image className="inline-block " src={pisces} alt="teste" />
          <Image className="inline-block " src={libra} alt="teste" />
          <Image className="inline-block" src={sagittarius} alt="teste" />
          <Image className="inline-block " src={scorpio} alt="teste" />
          <Image className="inline-block " src={taurus} alt="teste" />
          <Image className="inline-block " src={virgo} alt="teste" />
        </div>
      </div>
    </div>
  );
}

export default AutoScrollingComponent;
