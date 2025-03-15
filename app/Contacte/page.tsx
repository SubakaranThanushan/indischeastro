"use client";
import React, { useRef, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Head from "next/head";

function Contacte() {
  const email = useRef(null);
  const [envoyer, setEnvoyer] = useState(true);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_blgkk7j", "template_ggmc9cl", email.current, {
        publicKey: "tgMeer_rTMdbimil1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEnvoyer(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <>
      {/* 🚀 SEO optimisé */}
      <Head>
        <title>
          Kontaktieren Sie uns | Astrologische Beratung & Energiearbeit in
          Zürich
        </title>
        <meta
          name="description"
          content="Kontaktieren Sie uns per Formular. Wir antworten innerhalb von 4 Stunden. Professionelle astrologische Beratung in Zürich & der Schweiz."
        />
        <meta
          name="keywords"
          content="Kontakt, Astrologische Beratung, Energiearbeit, Horoskop, Partnerhoroskop, Geburtshoroskop, Zürich, Schweiz"
        />
        <meta name="author" content="indischeastro, Suthakar Parameswaran" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Kontaktieren Sie uns | Astrologische Beratung & Energiearbeit in Zürich"
        />
        <meta
          property="og:description"
          content="Kontaktieren Sie uns per Formular. Wir antworten innerhalb von 4 Stunden. Professionelle astrologische Beratung in Zürich & der Schweiz."
        />

        <meta
          property="og:url"
          content="https://www.indischeastro.fr/Contacte"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.indischeastro.fr/Contacte" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt",
            description:
              "Kontaktieren Sie uns für eine astrologische Beratung in Zürich.",
            url: "https://www.indischeastro.fr/Contacte",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+41 123 456 789",
              contactType: "customer support",
              areaServed: ["CH"],
              availableLanguage: ["German", "French", "English"],
            },
          })}
        </script>
      </Head>

      <div className="h-screen overflow-hidden flex flex-col">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center bg-[#260C56] text-white">
            <div>
              <h1 className="font-bold text-center text-3xl mb-4">
                Kontaktieren Sie uns
              </h1>
              <h4 className="font-bold text-center">Per Formular</h4>
              <p>Der effektivste Weg, um unser Team zu erreichen.</p>
              <p>Sie erhalten innerhalb von 4 Stunden eine Antwort.</p>
            </div>
            <div>
              <h4>Soziale Netzwerke</h4>
              <div className="flex justify-center items-center gap-4 text-5xl">
                <FaFacebookSquare />
                <FaSquareInstagram />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sind Sie bereit, uns zu kontaktieren?
            </h2>
            {envoyer ? (
              <form
                ref={email}
                className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md space-y-6"
                onSubmit={(e) => sendEmail(e)}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">
                      Vorname:
                    </label>
                    <input
                      name="name"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">
                      Nachname:
                    </label>
                    <input
                      name="prenom"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    Sie sind ein:
                  </label>
                  <select className="border rounded-lg p-2 w-full mt-1 focus:ring-2 focus:ring-blue-500">
                    <option value="">--Bitte wählen Sie eine Option--</option>
                    <option value="homme">Mann</option>
                    <option value="femme">Frau</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">E-Mail:</label>
                    <input
                      name="emailchamps"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">
                      Telefonnummer:
                    </label>
                    <input
                      name="numeros"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    Ihre Nachricht:
                  </label>
                  <textarea
                    name="message"
                    className="border rounded-lg p-2 w-full h-32 resize-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Senden
                </button>
              </form>
            ) : (
              <div className="w-full flex justify-center items-center min-h-screen">
                <div className="flex flex-col justify-center items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm">
                  <div className="flex flex-col justify-center items-center gap-30 w-full">
                    <div className="h-5">
                      <BsFillSendCheckFill size={100} />
                    </div>
                    <div className="flex">
                      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg">
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                          />
                        </svg>
                      </div>
                      <div className="ms-3 text-sm font-normal">
                        Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacte;
