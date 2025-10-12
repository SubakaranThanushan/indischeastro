"use client";
import React, { useRef, useState } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Head from "next/head";

// Données structurées JSON-LD pour le SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Indische Astrologie - Suthakar Parameswaran", 
  "description": "Professionelle Vedische Astrologie Beratung in Zürich. Indische Astrologie, Karma-Analyse, Partner-Horoskop und spirituelle Lebensberatung.",
  "url": "https://indischeastro.ch/contact", 
  "email": "sutha.eatham@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zwinglistrasse 37",
    "addressLocality": "Zürich",
    "postalCode": "8004",
    "addressRegion": "Zürich",
    "addressCountry": "Switzerland"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.3744",
    "longitude": "8.5225"
  },
  "openingHours": [
    "Mo-Fr 14:00-20:00",
    "Sa 09:00-14:00"
  ],
  "serviceType": [
    "Vedische Astrologie Beratung",
    "Indische Astrologie Beratung",
    "Partner Horoskop Analyse",
    "Karma Beratung",
    "Chakra Energie Arbeit",
    "Lebensberatung",
    "Zukunftsberatung"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "47.3744",
      "longitude": "8.5225"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vedische Astrologie Dienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vedische Astrologie Beratung",
          "description": "Professionelle Beratung basierend auf vedischer Astrologie und Jyotish"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partner Horoskop Analyse", 
          "description": "Karmische Kompatibilitätsanalyse für Beziehungen und Partnerschaften"
        }
      }
    ]
  }
};

// Meta keywords optimisés
const metaKeywords = [
  "Vedische Astrologie Beratung Kontakt",
  "Indische Astrologie Termin Zürich", 
  "Astrologe Zürich Kontakt",
  "Partner Horoskop Beratung Termin",
  "Karma Beratung Schweiz",
  "Chakra Heilung Terminvereinbarung",
  "Lebensberatung Zürich Kontakt",
  "Telefonische Astrologie Beratung",
  "Online Beratung Vedische Astrologie",
  "Suthakar Parameswaran Kontakt",
  "Astrologie Beratung Termin",
  "Zürich Astrologe Telefon",
  "Schweiz Vedische Astrologie",
  "Indischeastro Kontakt",
  "Terminvereinbarung Astrologie"
];

export default function Contact() {
  const email = useRef<HTMLFormElement>(null);
  const [envoyer, setEnvoyer] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!email.current) {
      console.error("Form reference is null");
      setIsSubmitting(false);
      return;
    }

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
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-YOUR_CONVERSION_ID',
              'event_category': 'Contact',
              'event_label': 'Contact_Form_Submission'
            });
          }

          // Facebook Pixel Conversion Tracking
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Contact');
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
        <title>Kontakt & Terminvereinbarung - Vedische Astrologie Beratung Zürich | Suthakar Parameswaran</title>
        <meta 
          name="description" 
          content="Vereinbaren Sie Ihre Vedische Astrologie Beratung in Zürich oder online. Professionelle Indische Astrologie, Partner-Horoskop & Karma-Analyse. Telefon: +41 79 261 33 31" 
        />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <meta name="author" content="Suthakar Parameswaran" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://indischeastro.ch/kontakt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kontakt & Terminvereinbarung - Vedische Astrologie Beratung Zürich" />
        <meta property="og:description" content="Vereinbaren Sie Ihre Vedische Astrologie Beratung in Zürich. Professionelle Indische Astrologie, Partner-Horoskop & Karma-Analyse. Jetzt Termin buchen!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indischeastro.ch/kontakt" />
        <meta property="og:image" content="https://indischeastro.ch/image/og-contact.jpg" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Indische Astrologie - Suthakar Parameswaran" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt - Vedische Astrologie Beratung Zürich" />
        <meta name="twitter:description" content="Vereinbaren Sie Ihre Vedische Astrologie Beratung in Zürich. Professionelle Indische Astrologie von Suthakar Parameswaran." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
        
        {/* Breadcrumb Schema */}
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
                  "item": "https://indischeastro.ch"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Kontakt",
                  "item": "https://indischeastro.ch/kontakt"
                }
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header Section optimisée */}
        <div className="bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt & Terminvereinbarung für Vedische Astrologie Beratung
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Starten Sie Ihre Reise zu mehr Klarheit und innerem Frieden. 
              <strong> Vereinbaren Sie jetzt Ihre Vedische Astrologie Beratung</strong> in Zürich oder online.
              <span className="block mt-2 text-lg">✅ Kostenlose Erstberatung | ⚡ Schnelle Antwort | 🎯 Professionelle Expertise</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8" itemScope itemType="https://schema.org/ContactPoint">
                <h2 className="text-2xl font-bold text-[#260C56] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff6e54] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  Kontaktinformationen für Vedische Astrologie Beratung
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MdPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefon für Astrologie Beratung</p>
                      <p className="text-lg text-[#260C56] font-bold" itemProp="telephone">
                        <a href="tel:+41792613331" className="hover:text-[#ff6e54] transition-colors">
                          +41 79 261 33 31
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">Kostenloser Rückruf auf Wunsch - Vedische Astrologie Beratung</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MdEmail className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">E-Mail für Terminanfragen</p>
                      <p className="text-lg text-[#260C56] font-bold" itemProp="email">
                        <a href="mailto:sutha.eatham@gmail.com" className="hover:text-[#ff6e54] transition-colors">
                          sutha.eatham@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">Antwort innerhalb von 4 Stunden - Indische Astrologie</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg" itemProp="hoursAvailable" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MdAccessTime className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Öffnungszeiten für Beratungen</p>
                      <p className="text-lg text-[#260C56] font-bold" itemProp="opens" content="09:00">Mo-Fr: 9:00 - 18:00 Uhr</p>
                      <p className="text-sm text-gray-600" itemProp="closes" content="14:00">Sa: 9:00 - 14:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MdLocationOn className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Standort für persönliche Beratungen</p>
                      <p className="text-lg text-[#260C56] font-bold" itemProp="addressLocality">Zürich Zentrum</p>
                      <p className="text-sm text-gray-600" itemProp="streetAddress">Zwinglistrasse 37, 8004 Zürich</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Folgen Sie uns für mehr Vedisches Wissen</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="Facebook Seite für Vedische Astrologie besuchen"
                    >
                      <FaFacebookSquare size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/cittarastro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="Instagram für Indische Astrologie besuchen"
                    >
                      <FaSquareInstagram size={20} />
                    </a>
                    <a 
                      href="https://www.youtube.com/@1000suthakar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      aria-label="YouTube Kanal für Vedische Astrologie besuchen"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ihre Vorteile bei der Vedischen Astrologie Beratung</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">✅</span>
                    <span>Kostenlose Erstberatung für neue Kunden</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">⚡</span>
                    <span>Schnelle Antwort innerhalb von 4 Stunden garantiert</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🎯</span>
                    <span>Professionelle Vedische Astrologie Expertise seit Jahren</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">💫</span>
                    <span>Persönliche Betreuung & absolute Diskretion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🌍</span>
                    <span>Online Beratung verfügbar für gesamte Schweiz und Deutschland</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <span>Telefonische Beratung: +41 79 261 33 31</span>
                  </li>
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-800 mb-4 text-center">Warum Vedische Astrologie Beratung wählen?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🎯</div>
                    <div className="text-sm font-medium text-gray-700">Präzise Analysen</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">💫</div>
                    <div className="text-sm font-medium text-gray-700">Tiefe Einsichten</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🕒</div>
                    <div className="text-sm font-medium text-gray-700">Schnelle Termine</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">🌟</div>
                    <div className="text-sm font-medium text-gray-700">Erfahrene Beratung</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-[#260C56] mb-2">
                Termin für Vedische Astrologie Beratung anfragen
              </h2>
              <p className="text-gray-600 mb-6">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 4 Stunden bei Ihnen für Ihre persönliche Vedische Astrologie Beratung.
              </p>

              {envoyer ? (
                <form
                  ref={email}
                  className="space-y-6"
                  onSubmit={sendEmail}
                  itemScope
                  itemType="https://schema.org/ContactPage"
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
                        itemProp="givenName"
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
                        itemProp="familyName"
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
                      itemProp="gender"
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
                        itemProp="email"
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
                        itemProp="telephone"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="service" className="font-medium text-gray-700 mb-2">
                      Gewünschte Vedische Astrologie Dienstleistung
                    </label>
                    <select 
                      id="service"
                      name="service"
                      className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300"
                      itemProp="serviceType"
                    >
                      <option value="">-- Vedische Astrologie Dienstleistung wählen --</option>
                      <option value="partner-horoskop">Partner Horoskop Analyse</option>
                      <option value="geburts-horoskop">Geburts Horoskop</option>
                      <option value="karma-analyse">Karma Analyse</option>
                      <option value="chakra-heilung">Chakra Heilung</option>
                      <option value="energiearbeit">Energiearbeit</option>
                      <option value="lebensberatung">Lebensberatung</option>
                      <option value="zukunftsberatung">Zukunftsberatung</option>
                      <option value="andere">Andere Vedische Astrologie Beratung</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-medium text-gray-700 mb-2">
                      Ihr Anliegen für die Vedische Astrologie Beratung *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent transition-all duration-300 resize-none"
                      required
                      placeholder="Beschreiben Sie Ihr Anliegen für die Vedische Astrologie Beratung..."
                      itemProp="description"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    itemProp="potentialAction"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <BsFillSendCheckFill size={20} />
                        Jetzt Vedische Astrologie Beratung anfragen
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Durch das Absenden des Formulars stimmen Sie unserer Datenschutzerklärung zu. 
                    Ihre Daten werden vertraulich behandelt und nur für Ihre Vedische Astrologie Beratung verwendet.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-50 rounded-2xl p-8 max-w-md mx-auto">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BsFillSendCheckFill className="text-green-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Vielen Dank für Ihre Anfrage!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Ihre Nachricht für die Vedische Astrologie Beratung wurde erfolgreich gesendet. 
                      Wir melden uns innerhalb von 4 Stunden bei Ihnen unter der angegebenen Telefonnummer oder E-Mail.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={() => setEnvoyer(true)}
                        className="w-full bg-[#260C56] text-white px-6 py-3 rounded-lg hover:bg-[#3a1a7a] transition-colors font-semibold"
                      >
                        Neue Vedische Astrologie Beratung anfragen
                      </button>
                      <a 
                        href="tel:+41792613331" 
                        className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                      >
                        📞 Jetzt anrufen: +41 79 261 33 31
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section optimisée */}
        <div className="bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für Ihre persönliche Vedische Astrologie Beratung?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Vereinbaren Sie noch heute Ihren Termin und starten Sie Ihre Reise zu mehr Klarheit und innerem Frieden 
              mit professioneller Vedischer Astrologie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+41792613331" 
                className="bg-[#ff6e54] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ff5a40] transition-colors flex items-center justify-center gap-2 text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                      'send_to': 'AW-YOUR_CONVERSION_ID',
                      'event_category': 'Phone_Call',
                      'event_label': 'Contact_Page_Call'
                    });
                  }
                }}
              >
                <MdPhone size={20} />
                Jetzt anrufen: +41 79 261 33 31
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#260C56] transition-colors text-lg"
              >
                📝 Terminformular ausfüllen
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-200">
              <div className="flex items-center justify-center gap-2">
                <span>✅ Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>⚡ Schnelle Terminvergabe</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🎯 Professionelle Vedische Astrologie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}