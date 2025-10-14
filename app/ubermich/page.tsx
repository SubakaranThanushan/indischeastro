// app/ueber-mich/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Remplace par le chemin vers ta photo
import SuthakarPhoto from "@/public/image/ilustration/image.png";
// Ajoute le logo de Schweiz 5
import Schweiz5Logo from "@/public/image/logos/schweiz5-logo.png"; // Crée ce fichier dans ton dossier public

// Données structurées JSON-LD pour le SEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Suthakar Parameswaran",
  "description": "Vedischer Astrologe, spiritueller Berater und Heiler mit über 30 Jahren Erfahrung in Zürich. Experte für Jyotish, Karma-Analyse und energetische Heilung.",
  "url": "https://indischeastro.ch/ubermich",
  "telephone": "+41792613331",
  "email": "sutha.eatham@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zwinglistrasse 37",
    "addressLocality": "Zürich",
    "postalCode": "8004",
    "addressRegion": "Zürich",
    "addressCountry": "Switzerland"
  },
  "jobTitle": "Vedischer Astrologe und spiritueller Berater",
  "knowsAbout": [
    "Vedische Astrologie",
    "Jyotish",
    "Karma Analyse",
    "Chakra Heilung",
    "Reiki",
    "Ayurveda",
    "Spirituelle Beratung",
    "Energiearbeit",
    "Marmapunkt Behandlung"
  ],
  "hasCredential": [
    "Jothida Thilagam",
    "Jothida Vibooshan", 
    "Reiki Grand Master",
    "Ayurveda Wellness Ausbilder",
    "Doctor of Letters Honoris Causa"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Traditionelle Vedische Astrologie Schule"
  },
  "workLocation": {
    "@type": "Place",
    "name": "Indische Astrologie Praxis Zürich"
  }
};

// Mots-clés optimisés pour la page Über Mich
const metaKeywords = [
  // Nom et Titre
  "Suthakar Parameswaran", "Vedischer Astrologe Zürich", "Indische Astrologie Experte",
  "Spiritueller Berater Schweiz", "Jyotish Meister Deutschland",
  
  // Expérience und Qualifikationen
  "30 Jahre Erfahrung Astrologie", "Vedische Astrologie seit 1991", "Jothida Thilagam Ausbildung",
  "Reiki Grand Master Zürich", "Ayurveda Experte Schweiz", "Doctor of Letters Auszeichnung",
  
  // Dienstleistungen und Spezialisierungen
  "Karma Analyse Experte", "Chakra Heilung Zürich", "Partner Horoskop Spezialist",
  "Energiearbeit Meister", "Marmapunkt Behandlung", "Spirituelle Lebensberatung",
  
  // Standort und Verfügbarkeit
  "Astrologe Zürich Zentrum", "Vedische Astrologie Schweiz", "Online Beratung Astrologie",
  "Persönliche Beratung Zürich", "Telefonische Astrologie Beratung",
  
  // Tradition und Hintergrund
  "Familientradition Astrologie", "Mehrgenerationen Priester", "Spirituelle Einweihung 1999",
  "Tamilische Astrologie Tradition", "Guru Ramanaden Sathyamuurti",
  
  // Medien und Anerkennung
  "TV Experte Astrologie", "Schweiz 5 TV Astrologe", "Doctor of Letters Social Service",
  "University of New Jerusalem", "Auszeichnungen Vedische Astrologie",
  
  // NEUF: Mots-clés TV et médias
  "TV Sender Schweiz 5", "Schweiz 5 Fernsehen", "TV Auftritte Astrologie",
  "Medienpräsenz Astrologe", "TV Experte Vedische Astrologie", "Schweiz 5 Sendungen",
  "Fernseh Astrologe Schweiz", "TV Berater Astrologie"
];

export default function UberMich() {
  const [activeTimeline, setActiveTimeline] = useState('spiritual');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { id: 1, emoji: '⭐', size: 'w-6 h-6', position: 'top-1/4 left-10', delay: '0s' },
    { id: 2, emoji: '🔮', size: 'w-8 h-8', position: 'top-1/3 right-20', delay: '2s' },
    { id: 3, emoji: '🌙', size: 'w-5 h-5', position: 'bottom-1/4 left-20', delay: '4s' },
    { id: 4, emoji: '✨', size: 'w-7 h-7', position: 'bottom-1/3 right-10', delay: '1s' },
    { id: 5, emoji: '💫', size: 'w-6 h-6', position: 'top-10 left-1/4', delay: '3s' },
  ];

  return (
    <>
      <Head>
        <title>Suthakar Parameswaran - Vedischer Astrologe & TV-Experte Schweiz 5 | 30+ Jahre Erfahrung</title>
        <meta 
          name="description" 
          content="Suthakar Parameswaran - Vedischer Astrologe mit 30+ Jahren Erfahrung und TV-Experte bei Schweiz 5. Jothida Thilagam Meister, Reiki Grand Master & spiritueller Berater in Zürich." 
        />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <meta name="author" content="Suthakar Parameswaran" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://indischeastro.ch/ubermich" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Suthakar Parameswaran - Vedischer Astrologe & TV-Experte Schweiz 5 | Zürich" />
        <meta property="og:description" content="Vedischer Astrologe mit 30+ Jahren Erfahrung und TV-Experte bei Schweiz 5. Jothida Thilagam Meister, Reiki Grand Master & Experte für Karma-Analyse in Zürich." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://indischeastro.ch/ubermich" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Indische Astrologie - Suthakar Parameswaran" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suthakar Parameswaran - Vedischer Astrologe & TV-Experte | Zürich" />
        <meta name="twitter:description" content="Vedischer Astrologe mit 30+ Jahren Erfahrung und TV-Experte bei Schweiz 5. Jothida Thilagam Meister & spiritueller Berater in Zürich." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
                  "name": "Über Mich",
                  "item": "https://indischeastro.ch/ubermich"
                }
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className={`absolute ${element.size} ${element.position} animate-float-3d`}
              style={{ animationDelay: element.delay }}
            >
              <span className="text-2xl opacity-20">{element.emoji}</span>
            </div>
          ))}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Header Hero Section avec Parallax */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-[#260C56] to-purple-800 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Online & Vor Ort Beratung verfügbar</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Suthakar{' '}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Parameswaran
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
                  Vedischer Astrologe & TV-Experte mit 30+ Jahren Erfahrung
                </p>
                
                <p className="text-lg text-purple-100 max-w-2xl leading-relaxed">
                  <strong className="text-amber-300">Meister der Vedischen Astrologie (Jothida Thilagam)</strong> und 
                  erfahrener spiritueller Berater in Zürich. <strong>TV-Experte bei Schweiz 5</strong> für Vedische Astrologie.
                  Seit 1991 begleite ich Menschen auf ihrem Weg zu innerer Klarheit und Lebenserfüllung durch uraltes vedisches Wissen.
                </p>

                {/* TV Badge */}
                <div className="flex items-center gap-3 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 max-w-md">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">TV</span>
                  </div>
                  <div>
                    <p className="text-amber-300 font-semibold">TV-Experte bei Schweiz 5</p>
                    <p className="text-purple-200 text-sm">Regelmäßige Auftritte in TV-Sendungen</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    href="/contact"
                    className="group bg-gradient-to-r from-[#ff6e54] to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      Mehr Informationen
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                  <Link 
                    href="#tv-appearances"
                    className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Meine TV-Auftritte
                  </Link>
                </div>
              </div>
              
              <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-2xl transform rotate-6 scale-105 animate-gradient-rotate"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl transform group hover:scale-105 transition-transform duration-500">
                    <div className="w-80 h-80 md:w-96 md:h-96 relative">
                      <Image
                        src={SuthakarPhoto}
                        alt="Suthakar Parameswaran - Vedischer Astrologe und TV-Experte bei Schweiz 5 mit über 30 Jahren Erfahrung in Vedischer Astrologie und Jyotish"
                        fill
                        className="rounded-2xl object-cover p-2"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="font-bold">Vedische Astrologie seit 1991</span>
                      </div>
                    </div>

                    {/* TV Badge */}
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">TV-Experte Schweiz 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section OPTIMISÉE */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.id}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#260C56] mb-2 group-hover:text-[#ff6e54] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION : TV Auftritte Schweiz 5 */}
<section id="tv-appearances" className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-red-200 shadow-lg mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-600 font-semibold">📺 TV-Experte Schweiz 5 - Seit 2009</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
          TV-Experte bei <span className="text-red-600">Schweiz 5</span> seit 2009
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Als erster Vedischer Astrologe im Schweizer Fernsehen startete ich 2009 meine TV-Karriere bei Schweiz 5. 
          Seitdem teile ich regelmäßig mein Wissen über Vedische Astrologie und Jyotish mit einem breiten Publikum.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Logo und Hauptinformationen */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-red-100 transform hover:-translate-y-2 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            {/* Logo Schweiz 5 */}
            <div className="w-48 h-24 mb-6 relative bg-white rounded-xl p-4 shadow-lg border border-red-200">
              <div className="flex items-center justify-center h-full">
                <span className="text-2xl font-bold text-red-600">SCHWEIZ 5</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-[#260C56] mb-4">
              Meine TV-Emissionen bei Schweiz 5
            </h2>
            
            {/* Émission 2009 en évidence */}
            <div className="w-full mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl mb-2">🎬</div>
                <h3 className="text-xl font-bold mb-2">Start der TV-Karriere 2009</h3>
                <p className="text-sm opacity-90">
                  Erste TV-Emission als Vedischer Astrologe im Schweizer Fernsehen
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-left w-full">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pionier der Vedischen Astrologie im TV</h4>
                  <p className="text-gray-600 text-sm">Erster Vedischer Astrologe im Schweizer Fernsehen seit 2009</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Regelmäßige TV-Auftritte</h4>
                  <p className="text-gray-600 text-sm">Experte für Vedische Astrologie in verschiedenen Sendungen bei Schweiz 5</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Wissenschaftliche Astrologie</h4>
                  <p className="text-gray-600 text-sm">Vermittlung von Vedischer Astrologie als ernstzunehmende Wissenschaft seit 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TV Sendungen und Themen */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Themen in meinen TV-Emissionen</h2>
            <div className="grid gap-4">
              {tvTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-xl">{topic.emoji}</span>
                  <span className="font-semibold">{topic.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TV Expert Badge avec année 2009 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎬</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">TV-Experte seit 2009</h3>
            <p className="text-gray-600 text-sm mb-3">
              Pionier der Vedischen Astrologie im Schweizer Fernsehen
            </p>
            <div className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full inline-block">
              Schweiz 5 TV Sender
            </div>
          </div>
        </div>
      </div>

      {/* Timeline détaillée avec émission 2009 */}
      <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-[#260C56] mb-8 text-center">
          Meine TV-Karriere bei Schweiz 5 im Überblick
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl">🎬</span>
            </div>
            <div className="text-sm font-semibold text-red-600 mb-2">2009</div>
            <h3 className="font-bold text-gray-800 mb-2">Erste TV-Emission</h3>
            <p className="text-gray-600 text-sm">
              Start meiner TV-Karriere als Vedischer Astrologe bei Schweiz 5
            </p>
            <div className="mt-3 bg-red-50 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
              Pionierarbeit
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl">📡</span>
            </div>
            <div className="text-sm font-semibold text-red-600 mb-2">2010-2015</div>
            <h3 className="font-bold text-gray-800 mb-2">Regelmäßige Sendungen</h3>
            <p className="text-gray-600 text-sm">
              Experte in verschiedenen TV-Formaten bei Schweiz 5
            </p>
            <div className="mt-3 bg-red-50 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
              Etablierter Experte
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <div className="text-sm font-semibold text-red-600 mb-2">Heute</div>
            <h3 className="font-bold text-gray-800 mb-2">Anerkannter TV-Experte</h3>
            <p className="text-gray-600 text-sm">
              Etablierter Astrologie-Experte im Schweizer Fernsehen
            </p>
            <div className="mt-3 bg-red-50 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
              Medienpräsenz
            </div>
          </div>
        </div>
        
        {/* Section SEO optimisée pour 2009 */}
        <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">⭐</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#260C56] mb-2">
                Vedische Astrologie im Schweizer Fernsehen seit 2009
              </h3>
              <p className="text-gray-700">
                Als <strong>erster Vedischer Astrologe im Schweizer TV</strong> startete ich 2009 meine Medienkarriere 
                bei <strong>Schweiz 5</strong>. Meine TV-Emissionen machen die uralte Weisheit des Jyotish 
                einem breiten Publikum zugänglich und zeigen die praktische Anwendung der Vedischen Astrologie 
                im modernen Leben.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-white text-red-600 text-sm font-medium px-3 py-1 rounded-full border border-red-200">
                  TV-Experte seit 2009
                </span>
                <span className="bg-white text-red-600 text-sm font-medium px-3 py-1 rounded-full border border-red-200">
                  Schweiz 5 TV Sender
                </span>
                <span className="bg-white text-red-600 text-sm font-medium px-3 py-1 rounded-full border border-red-200">
                  Vedische Astrologie im Fernsehen
                </span>
                <span className="bg-white text-red-600 text-sm font-medium px-3 py-1 rounded-full border border-red-200">
                  Erste TV-Emission 2009
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action pour référencement */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 inline-block">
          <h3 className="text-lg font-bold text-[#260C56] mb-2">
            🎬 TV-Experte für Vedische Astrologie
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Seit meiner ersten TV-Emission 2009 bei Schweiz 5 teile ich Vedische Astrologie mit Schweizer Haushalten
          </p>
          <Link 
            href="/contact"
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors inline-flex items-center gap-2"
          >
            Kontakt aufnehmen
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Spirituelle Berufung avec Animation OPTIMISÉE */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-amber-50/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200 shadow-lg mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-600 font-semibold">✨ Spirituelle Berufung & Familientradition</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
                  Vedische Astrologie - <span className="text-purple-600">Meine Lebensberufung</span>
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-purple-100 transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-4xl mb-4">🌌</div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      <strong className="text-purple-600">Die Gabe der Vedischen Astrologie wurde mir in die Wiege gelegt</strong> 
                      als Erbe meiner Vorfahren, die seit Generationen als Priester und Astrologen tätig sind.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Als <strong>Jothida Thilagam Meister</strong> und erfahrener Vedischer Astrologe verbinde ich 
                      uraltes vedisches Wissen mit moderner Lebensberatung. Meine Einweihung durch 
                      <strong> Guru Ramanaden Sathyamuurti im Jahr 1999</strong> markierte einen Wendepunkt 
                      in meiner spirituellen Entwicklung.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">🙏</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 text-lg mb-2">Spirituelle Einweihung 1999</h4>
                        <p className="text-amber-700 font-semibold">Durch Guru Ramanaden Sathyamuurti</p>
                        <p className="text-amber-600 text-sm">Wendepunkt in meiner Entwicklung als Vedischer Astrologe</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-2xl border border-purple-200">
                    <h3 className="text-2xl font-bold text-[#260C56] mb-6">Meine Astrologie-Tradition</h3>
                    <div className="space-y-4">
                      {familyTradition.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <span className="text-white text-sm">{item.emoji}</span>
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Element */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200 flex items-center justify-center transform rotate-12 animate-float">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline OPTIMISÉE */}
        <section id="qualifications" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-16 text-center">
              Mein Weg zum <span className="text-purple-600">Vedischen Astrologen</span>
            </h2>
            
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-2xl p-2 flex gap-2">
                {timelineCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTimeline(category.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTimeline === category.id
                        ? 'bg-[#260C56] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#260C56] hover:bg-white'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {timelineData[activeTimeline].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white text-lg">{item.emoji}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                          {item.location && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {item.location}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#260C56] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Connector Line */}
                    {index < timelineData[activeTimeline].length - 1 && (
                      <div className="absolute bottom-0 left-6 w-0.5 h-8 bg-gradient-to-b from-purple-200 to-blue-200 group-hover:from-purple-400 group-hover:to-blue-400 transition-all"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Auszeichnungen Section OPTIMISÉE */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
                Auszeichnungen & <span className="text-amber-600">wissenschaftliche Anerkennung</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Anerkennung für mein Engagement in Vedischer Astrologie, spiritueller Beratung und sozialem Service
              </p>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-4xl">🏆</span>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[#260C56] mb-2">
                      Doctor of Letters (D.Litt.)
                    </h3>
                    <p className="text-xl text-amber-600 font-semibold mb-2">
                      Honoris Causa in Social Service
                    </p>
                    <p className="text-gray-600 text-lg">
                      Verliehen von der <strong>University of New Jerusalem</strong><br />
                      Für herausragende Leistungen in Vedischer Astrologie, spiritueller Beratung und sozialem Dienst
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section OPTIMISÉE */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#260C56] via-purple-800 to-purple-900"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Starten Sie Ihre <span className="text-amber-300">Vedische Astrologie Reise</span>
              </h2>
              <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie sich von meiner 30-jährigen Erfahrung als Vedischer Astrologe und TV-Experte leiten 
                und entdecken Sie neue Perspektiven für Ihr Leben durch uraltes Jyotish-Wissen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-[#ff6e54] to-orange-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg flex items-center gap-3"
                >
                  <span>Mehr Informationen</span>
                  <span className="group-hover:translate-x-2 transition-transform">✨</span>
                </Link>
                
                <Link 
                  href="/ServicePrice"
                  className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-3"
                >
                  <span>Vedische Astrologie Dienstleistungen</span>
                  <span className="group-hover:rotate-180 transition-transform">🔮</span>
                </Link>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-purple-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>📞 +41 79 261 33 31 - Vedische Astrologie Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>🏠 Persönliche Beratung in Zürich & Online verfügbar</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Data optimisée
const stats = [
  { id: 1, value: '30+', label: 'Jahre Vedische Astrologie' },
  { id: 2, value: '1000+', label: 'Zufriedene Kunden' },
  { id: 3, value: '15+', label: 'Spirituelle Ausbildungen' },
  { id: 4, value: '1999', label: 'Spirituelle Einweihung' },
];

const familyTradition = [
  { emoji: '👨‍👦', text: 'Mehrgenerationen Vedische Astrologie' },
  { emoji: '🕉️', text: 'Familie von Priestern & Jyotish Experten' },
  { emoji: '⭐', text: 'Jothida Thilagam Meister Ausbildung' },
  { emoji: '🙏', text: 'Tiefe vedische Spiritualität' },
];

const timelineCategories = [
  { id: 'spiritual', label: 'Spirituelle Entwicklung' },
  { id: 'education', label: 'Astrologie Ausbildungen' },
  { id: 'career', label: 'Beruflicher Weg' },
];

const timelineData = {
  spiritual: [
    {
      year: '1991',
      title: 'Beginn der Vedischen Astrologie',
      description: 'Erste intensive Beschäftigung mit Vedischer Astrologie (Jyotish) und vedischen spirituellen Praktiken',
      emoji: '🌌',
      location: ''
    },
    {
      year: '1999',
      title: 'Spirituelle Einweihung durch Guru',
      description: 'Einweihung durch Guru Ramanaden Sathyamuurti - entscheidender Wendepunkt in meiner Entwicklung als Vedischer Astrologe',
      emoji: '🙏',
      location: 'Indien'
    },
    {
      year: '2006-2016',
      title: 'Vertiefung spiritueller Fähigkeiten',
      description: 'Umfassende Ausbildungen in Reiki, Channeling, Tantra und energetischer Heilung zur Ergänzung der Vedischen Astrologie',
      emoji: '🔮',
      location: 'International'
    }
  ],
  education: [
    {
      year: '2006-2007',
      title: 'Reiki Meister & Grand Master',
      description: 'Ausbildung zum Reiki-Meister in Zürich und Grand-Master Of Reiki in Indien für energetische Heilung',
      emoji: '🔥',
      location: 'Zürich & Indien'
    },
    {
      year: '2007-2012',
      title: 'Heil- & Wellness-Ausbildungen',
      description: 'Ayurveda-Masseur, Professional Channeling, Mind Touch, Ayurveda-Wellness-Ausbilder für ganzheitliche Beratung',
      emoji: '🌿',
      location: 'International'
    },
    {
      year: '2015',
      title: 'Vedische Astrologie Meister',
      description: 'Jothida Thilagam & Jothida Vibooshan Ausbildung in Tamil Nadu, Indien - höchste Stufe der Vedischen Astrologie',
      emoji: '⭐',
      location: 'Indien'
    }
  ],
  career: [
    {
      year: '1992-2002',
      title: 'Gastronomie-Erfahrung',
      description: 'Verschiedene Tätigkeiten im Gastronomiebereich, Entwicklung von Service-Expertise und Menschenkenntnis',
      emoji: '🍽️',
      location: 'Zürich'
    },
    {
      year: '2002-2015',
      title: 'Geschäftsführer Ayurveda',
      description: 'Leitung von Ayurveda-Restaurant Ambaal, Arun-ayurvedacenter und Ayus AG - Verbindung von Ayurveda und Astrologie',
      emoji: '💼',
      location: 'Zürich'
    },
    {
      year: '2009-Heute',
      title: 'TV-Experte & Vedischer Astrologe',
      description: 'Vedische Astrologie und Ayurveda-Experte bei Schweiz 5 TV, eigene Beratungspraxis für Vedische Astrologie in Zürich',
      emoji: '📺',
      location: 'Schweiz'
    }
  ]
};

// NOUVELLES DONNÉES POUR LA SECTION TV
const tvTopics = [
  { emoji: '⭐', title: 'Vedische Astrologie Grundlagen' },
  { emoji: '💑', title: 'Partnerschaft & Beziehungen' },
  { emoji: '🌌', title: 'Karma & Schicksalsanalyse' },
  { emoji: '🔮', title: 'Zukunftsprognosen' },
  { emoji: '💼', title: 'Beruf & Karriere' },
  { emoji: '❤️', title: 'Gesundheit & Wohlbefinden' }
];

const mediaTimeline = [
  {
    year: '2009',
    title: 'Erste TV-Auftritte',
    description: 'Beginn der Medienpräsenz als Vedische Astrologie Experte',
    emoji: '🎬'
  },
  {
    year: '2012-2015',
    title: 'Regelmäßige Sendungen',
    description: 'Experte in verschiedenen Formaten bei Schweiz 5',
    emoji: '📡'
  },
  {
    year: 'Heute',
    title: 'Etablierter TV-Experte',
    description: 'Anerkannter Astrologie-Experte im Schweizer Fernsehen',
    emoji: '🏆'
  }
];