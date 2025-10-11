"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/logo_nav/cita-logo.png";

import { useState } from "react";

function Navigation() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="z-50 flex flex-wrap justify-between items-center sticky top-0 w-full bg-zinc-100 text-black shadow-lg rounded-b-lg">
      <Image
        className="h-15 w-auto ml-6"
        src={Logo}
        alt="Logo Indische Astrologie Beratung Zürich - Suthakar Parameswaran"
        title="Indische Astrologie Beratung & Vedische Horoskop Zürich"
        width={500}
        height={300}
        loading="lazy"
        placeholder="blur"
      />
      <button
        aria-label="Menü öffnen"
        className="lg:hidden p-4"
        onClick={() => setVisible(!visible)}
      >
        ☰
      </button>
      <nav
        role="navigation"
        className={`menu menu-3 pr-10 ${visible ? "block" : "hidden"} lg:flex`}
      >
        <ul className="flex gap-5 flex-wrap">
          <li>
            <Link href="/" title="Zur Startseite - Astrologie Beratung Zürich">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/blog" title="Videos über Astrologie & Beratung">
              Article
            </Link>
          </li>
          <li>
            <Link
              href="/ServicePrice"
              title="Preise unserer astrologischen Dienstleistungen"
            >
              PREISE
            </Link>
          </li>
          <li>
            <Link
              href="/Contacte"
              title="Kontaktieren Sie uns für astrologische Beratung"
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
