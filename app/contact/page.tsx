"use client";
import React, { useRef, useState } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Head from "next/head";

function contact() {
  const email = useRef(null);
  const [envoyer, setEnvoyer] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm("service_blgkk7j", "template_ggmc9cl", email.current, {
        publicKey: "tgMeer_rTMdbimil1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEnvoyer(false);
          setIsSubmitting(false);
          
          // Tracking de la conversion
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              'send_to': 'AW-YOUR_CONVERSION_ID',
              'event_category': 'Contact',
              'event_label': 'Form_Submission'
            });
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  }

  return (
    <>
      <Head>
        <title>Kontakt & Terminvereinbarung | Vedische Astrologie Beratung Zürich</title>
        <meta 
          name="description" 
          content="Kontaktieren Sie Suthakar Parameswaran für Vedische Astrologie Beratung in Zürich. Partner Horoskop, Karma Analyse & Energiearbeit. Schnelle Antwort innerhalb von 4 Stunden." 
        />
        <meta 
          name="keywords" 
          content="Vedische Astrologie Kontakt, Astrologe Zürich Termin, Partner Horoskop Beratung, Karma Analyse, Energiearbeit Schweiz, Chakra Heilung, spirituelle Beratung, Termin vereinbaren" 
        />
        <meta name="author" content="Suthakar Parameswaran - Vedischer Astrologe" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kontakt & Terminvereinbarung | Vedische Astrologie Zürich" />
        <meta property="og:description" content="Vereinbaren Sie Ihren Termin für Vedische Astrologie Beratung. Partner Horoskop, Karma Analyse & Energiearbeit in Zürich." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indischeastro.ch/contact" />
        <meta property="og:image" content="https://www.indischeastro.ch/og-contact.jpg" />
        <meta property="og:site_name" content="IndischeAstro - Vedische Astrologie" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.indischeastro.ch/contact" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Kontakt & Terminvereinbarung",
              "description": "Kontaktieren Sie Suthakar Parameswaran für professionelle Vedische Astrologie Beratung in Zürich",
              "url": "https://www.indischeastro.ch/contact",
              "mainEntity": {
                "@type": "ContactPoint",
                "telephone": "+41-76-123-45-67",
                "email": "sutha.eatham@gmail.com",
                "contactType": "customer service",
                "areaServed": "CH",
                "availableLanguage": ["German", "English", "French"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              "publisher": {
                "@type": "Person",
                "name": "Suthakar Parameswaran",
                "jobTitle": "Vedischer Astrologe und Heiler",
                "description": "Experte für Vedische Astrologie, Karma Analyse und spirituelle Heilung"
              }
            }),
          }}
        />
      </Head>

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://www.indischeastro.ch"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Kontakt & Termin",
                "item": "https://www.indischeastro.ch/contact"
              }
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt & Terminvereinbarung
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Starten Sie Ihre Reise zu mehr Klarheit und innerem Frieden. 
              <strong> Vereinbaren Sie jetzt Ihre Vedische Astrologie Beratung</strong> in Zürich oder online.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-[#260C56] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff6e54] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MdPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefon</p>
                      <p className="text-lg text-[#260C56] font-bold">+41 76 123 45 67</p>
                      <p className="text-sm text-gray-600">Kostenloser Rückruf auf Wunsch</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MdEmail className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">E-Mail</p>
                      <p className="text-lg text-[#260C56] font-bold">sutha.eatham@gmail.com</p>
                      <p className="text-sm text-gray-600">Antwort innerhalb von 4 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MdAccessTime className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Öffnungszeiten</p>
                      <p className="text-lg text-[#260C56] font-bold">Mo-Fr: 9:00 - 18:00 Uhr</p>
                      <p className="text-sm text-gray-600">Sa: 9:00 - 14:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MdLocationOn className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Standort</p>
                      <p className="text-lg text-[#260C56] font-bold">Zürich Zentrum</p>
                      <p className="text-sm text-gray-600">Zwinglistrasse 37, 8004 Zürich</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="Facebook besuchen"
                    >
                      <FaFacebookSquare size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/cittarastro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="Instagram besuchen"
                    >
                      <FaSquareInstagram size={20} />
                    </a>
                    <a 
                      href="https://www.youtube.com/@1000suthakar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="YouTube Kanal besuchen"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ihre Vorteile</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">✅</span>
                    <span>Kostenlose Erstberatung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">⚡</span>
                    <span>Schnelle Antwort innerhalb von 4 Stunden</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🎯</span>
                    <span>Professionelle Vedische Astrologie Expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">💫</span>
                    <span>Persönliche Betreuung & Diskretion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-[#260C56] mb-2">
                Termin anfragen
              </h2>
              <p className="text-gray-600 mb-6">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 4 Stunden bei Ihnen.
              </p>

              {envoyer ? (
                <form
                  ref={email}
                  className="space-y-6"
                  onSubmit={sendEmail}
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-medium text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                        required
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="prenom" className="font-medium text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                        required
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="gender" className="font-medium text-gray-700 mb-2">
                      Sie sind ein: *
                    </label>
                    <select 
                      id="gender"
                      name="gender"
                      className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">-- Bitte wählen Sie --</option>
                      <option value="mann">Mann</option>
                      <option value="frau">Frau</option>
                      <option value="divers">Divers</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-medium text-gray-700 mb-2">
                        E-Mail Adresse *
                      </label>
                      <input
                        id="email"
                        name="emailchamps"
                        type="email"
                        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                        required
                        placeholder="ihre.email@beispiel.ch"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-medium text-gray-700 mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        id="phone"
                        name="numeros"
                        type="tel"
                        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                        required
                        placeholder="+41 76 123 45 67"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="service" className="font-medium text-gray-700 mb-2">
                      Gewünschte Dienstleistung
                    </label>
                    <select 
                      id="service"
                      name="service"
                      className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">-- Dienstleistung wählen --</option>
                      <option value="partner-horoskop">Partner Horoskop Analyse</option>
                      <option value="geburts-horoskop">Geburts Horoskop</option>
                      <option value="karma-analyse">Karma Analyse</option>
                      <option value="chakra-heilung">Chakra Heilung</option>
                      <option value="energiearbeit">Energiearbeit</option>
                      <option value="andere">Andere</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-medium text-gray-700 mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300 resize-none"
                      required
                      placeholder="Beschreiben Sie Ihr Anliegen für die Vedische Astrologie Beratung..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <BsFillSendCheckFill size={20} />
                        Jetzt Termin anfragen
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Durch das Absenden des Formulars stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-50 rounded-2xl p-8 max-w-md mx-auto">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsFillSendCheckFill className="text-green-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 4 Stunden bei Ihnen.
                    </p>
                    <button
                      onClick={() => setEnvoyer(true)}
                      className="bg-[#260C56] text-white px-6 py-2 rounded-lg hover:bg-[#3a1a7a] transition-colors"
                    >
                      Neue Nachricht senden
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für Ihre Vedische Astrologie Beratung?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Vereinbaren Sie noch heute Ihren Termin und starten Sie Ihre Reise zu mehr Klarheit und innerem Frieden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+41761234567" 
                className="bg-[#ff6e54] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ff5a40] transition-colors flex items-center justify-center gap-2"
              >
                <MdPhone size={20} />
                Jetzt anrufen
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#260C56] transition-colors"
              >
                Formular ausfüllen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Tracking de la page de contact
            window.addEventListener('load', function() {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'page_view', {
                  'page_title': 'Kontakt & Terminvereinbarung',
                  'page_location': window.location.href
                });
              }
              
              // Tracking des clic sur le téléphone
              const phoneLink = document.querySelector('a[href^="tel:"]');
              if (phoneLink) {
                phoneLink.addEventListener('click', function() {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                      'event_category': 'Contact',
                      'event_label': 'Phone_Click'
                    });
                  }
                });
              }
            });
          `,
        }}
      />
    </>
  );
}

export default contact;