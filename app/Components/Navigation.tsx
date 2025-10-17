"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/header/Adobe Express - file.png";
import { useState } from "react";

function Navigation() {
  const [visible, setVisible] = useState(false);
  
  return (
    <header className="z-50 flex flex-wrap justify-between items-center sticky top-0 w-full bg-zinc-100 text-black shadow-lg rounded-b-lg">
      {/* Logo avec optimisation SEO avancée */}
      <Image
        className="h-20 w-auto ml-6"
        src={Logo}
        alt="Indische Astrologie Beratung Zürich - Vedische Astrologie, Partner Horoskop, Karma Analyse, Chakra Energie Arbeit, Familien Aufstellung von Suthakar Parameswaran"
        title="Vedische Astrologie Zürich - Indische Astrologie Beratung, Lebensberatung, Zukunftsberatung, Partner Horoskop Analyse"
        width={500}
        height={300}
        loading="eager"
        priority
        placeholder="blur"
        itemProp="logo"
      />
      
      {/* Bouton menu mobile avec aria-label optimisé */}
      <button
        aria-label="Navigation Menü für Vedische Astrologie Dienstleistungen öffnen oder schließen"
        className="lg:hidden p-4"
        onClick={() => setVisible(!visible)}
      >
        ☰
      </button>
      
      {/* Navigation avec structured data et titres SEO optimisés */}
      <nav
        role="navigation"
        aria-label="Hauptnavigation für Vedische Astrologie, Indische Astrologie und spirituelle Beratung"
        className={`menu menu-3 pr-10 ${visible ? "block" : "hidden"} lg:flex`}
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <ul className="flex gap-5 flex-wrap">
          <li itemProp="name">
            <Link 
              href="/" 
              title="Startseite Vedische Astrologie Zürich - Indische Astrologie Beratung, Partner Horoskop, Karma Analyse, Lebensberatung"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
              HOME
            </Link>
          </li>

          <li itemProp="name">
            <Link 
              href="/Selbsttests" 
              title="Über Suthakar Parameswaran - Vedischer Astrologe, Jothida Vibooshan, Reiki Grand-Master, Heiler in Zürich Schweiz"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
             Kostenlose Selbsttests
            </Link>
          </li>
          
          <li itemProp="name">
            <Link 
              href="/ubermich" 
              title="Über Suthakar Parameswaran - Vedischer Astrologe, Jothida Vibooshan, Reiki Grand-Master, Heiler in Zürich Schweiz"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
              Uber mich
            </Link>
          </li>
          
          <li itemProp="name">
            <Link 
              href="/blog" 
              title="Vedisches Wissen Blog - Artikel über Partner Horoskop, Karmische Blockaden, Chakra Energie, Familien Aufstellung, Sternzeichen"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
              Article
            </Link>
          </li>
          
          <li itemProp="name">
            <Link
              href="/ServicePrice"
              title="Preise Vedische Astrologie Dienstleistungen - Partner Horoskop Analyse, Karma Beratung, Energiearbeit, Heilbehandlung Preise Zürich"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
              PREISE
            </Link>
          </li>
          
          <li itemProp="name">
            <Link
              href="/contact"
              title="Kontakt & Termin Vedische Astrologie Beratung Zürich - Telefonische Beratung, Online Beratung, Persönliche Sitzung buchen"
              onClick={() => setVisible(false)}
              itemProp="url"
            >
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;