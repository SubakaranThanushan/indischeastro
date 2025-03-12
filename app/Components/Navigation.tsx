"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/logo_nav/logo_seul.png";

import { useState } from "react";
function Navigation() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="z-50 flex flex-wrap justify-between items-center sticky top-0 w-full bg-zinc-100 text-black shadow-lg rounded-b-lg">
      <Image
        className="h-15 w-auto ml-6"
        src={Logo}
        alt="Logo Suthakar Parameswaran - Astrologie Védique"
      />
      <button className=" lg:hidden p-4" onClick={() => setVisible(!visible)}>
        ☰
      </button>
      <nav
        className={`menu menu-3 pr-10 ${visible ? "block" : "hidden"} lg:flex`}
      >
        <ul className="flex gap-5 flex-wrap">
          <li className="">
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/">ÜBER MICH</Link>
          </li>
          <li>
            <Link href="/">BLOGS</Link>
          </li>
          <li>
            <Link href="/">DIENSTLEISTUGEN</Link>
          </li>
          <li>
            <Link href="/">VIDEOS</Link>
          </li>
          <li>
            <Link href="/">PREISE</Link>
          </li>
          <li>
            <Link href="/">F&A</Link>
          </li>
          <li>
            <Link href="/">KONTAKT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
