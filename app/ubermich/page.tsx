// app/ueber-mich/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Remplace par le chemin vers ta photo
import SuthakarPhoto from "@/public/image/ilustration/image.png";

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
        <div className="absolute inset-0 bg-[url('/images/cosmic-pattern.svg')] opacity-10 animate-move-slow"></div>
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
                Meister der Vedischen Astrologie & spiritueller Berater
              </p>
              
              <p className="text-lg text-purple-100 max-w-2xl leading-relaxed">
                Mit <strong className="text-amber-300">über 30 Jahren Erfahrung</strong> in Vedischer Astrologie, 
                Ayurveda und spiritueller Heilung begleite ich Sie auf Ihrem Weg zu innerer Klarheit 
                und Lebenserfüllung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-[#ff6e54] to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    Kostenlose Erstberatung
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                <Link 
                  href="#qualifications"
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Meine Qualifikationen
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
                      alt="Suthakar Parameswaran - Vedischer Astrologe und spiritueller Berater in Zürich mit über 30 Jahren Erfahrung"
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
                      <span className="font-bold">Seit 1991</span>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Spirituelle Berufung avec Animation */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-amber-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200 shadow-lg mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-purple-600 font-semibold">✨ Spirituelle Berufung & Erbe</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
                Das Geschenk der <span className="text-purple-600">Sterne</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-purple-100 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl mb-4">🌌</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-purple-600">Astrologie ist für mich ein Geschenk Gottes, 
                    das mir bereits in die Wiege gelegt wurde.</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Die Gabe, Astrologie zu studieren, zu leben und weiterzugeben, habe ich als 
                    Vermächtnis von meinem Grossvater übernommen. In meiner Familie sind viele 
                    Generationen als Priester und Astrologen tätig.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🙏</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 text-lg mb-2">Spirituelle Einweihung</h4>
                      <p className="text-amber-700 font-semibold">Durch Guru Ramanaden Sathyamuurti</p>
                      <p className="text-amber-600 text-sm">Im Jahr 1999</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-2xl border border-purple-200">
                  <h3 className="text-2xl font-bold text-[#260C56] mb-6">Familientradition</h3>
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

      {/* Interactive Timeline */}
      <section id="qualifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-16 text-center">
            Mein <span className="text-purple-600">Weg</span>
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

      {/* Auszeichnungen Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#260C56] mb-6">
              Auszeichnungen & <span className="text-amber-600">Ehren</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Anerkennung für jahrzehntelanges Engagement in spiritueller Beratung und sozialem Service
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
                    Doctor of Letters
                  </h3>
                  <p className="text-xl text-amber-600 font-semibold mb-2">
                    Honoris Causa Social Service
                  </p>
                  <p className="text-gray-600 text-lg">
                    Verliehen von der <strong>University of New Jerusalem</strong><br />
                    Für herausragende Leistungen im sozialen Dienst und spiritueller Beratung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#260C56] via-purple-800 to-purple-900"></div>
        <div className="absolute inset-0 bg-[url('/images/stars-pattern.svg')] opacity-10 animate-move-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beginnen Sie Ihre <span className="text-amber-300">spirituelle Reise</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie sich von meiner 30-jährigen Erfahrung in Vedischer Astrologie leiten 
              und entdecken Sie neue Perspektiven für Ihr Leben.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-[#ff6e54] to-orange-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg flex items-center gap-3"
              >
                <span>Kostenlose Erstberatung buchen</span>
                <span className="group-hover:translate-x-2 transition-transform">✨</span>
              </Link>
              
              <Link 
                href="/services"
                className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-3"
              >
                <span>Dienstleistungen entdecken</span>
                <span className="group-hover:rotate-180 transition-transform">🔮</span>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>📞 +41 76 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>🏠 Vor Ort in Zürich & Online verfügbar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const stats = [
  { id: 1, value: '30+', label: 'Jahre Erfahrung' },
  { id: 2, value: '1000+', label: 'Zufriedene Kunden' },
  { id: 3, value: '15+', label: 'Ausbildungen' },
  { id: 4, value: '1999', label: 'Spirituelle Einweihung' },
];

const familyTradition = [
  { emoji: '👨‍👦', text: 'Mehrgenerationen-Tradition' },
  { emoji: '🕉️', text: 'Familie von Priestern & Astrologen' },
  { emoji: '⭐', text: 'Weitergabe des Wissens seit Kindheit' },
  { emoji: '🙏', text: 'Tiefe spirituelle Verbundenheit' },
];

const timelineCategories = [
  { id: 'spiritual', label: 'Spirituelle Entwicklung' },
  { id: 'education', label: 'Ausbildungen' },
  { id: 'career', label: 'Beruflicher Weg' },
];

const timelineData = {
  spiritual: [
    {
      year: '1991',
      title: 'Beginn der astrologischen Reise',
      description: 'Erste intensive Beschäftigung mit Vedischer Astrologie und spirituellen Praktiken',
      emoji: '🌌',
      location: ''
    },
    {
      year: '1999',
      title: 'Spirituelle Einweihung',
      description: 'Einweihung durch Guru Ramanaden Sathyamuurti - Wendepunkt im spirituellen Weg',
      emoji: '🙏',
      location: 'Indien'
    },
    {
      year: '2006-2016',
      title: 'Vertiefung spiritueller Fähigkeiten',
      description: 'Umfassende Ausbildungen in Reiki, Channeling, Tantra und energetischer Heilung',
      emoji: '🔮',
      location: 'International'
    }
  ],
  education: [
    {
      year: '2006-2007',
      title: 'Reiki Meister & Grand Master',
      description: 'Ausbildung zum Reiki-Meister in Zürich und Grand-Master Of Reiki in Indien',
      emoji: '🔥',
      location: 'Zürich & Indien'
    },
    {
      year: '2007-2012',
      title: 'Heil- & Wellness-Ausbildungen',
      description: 'Ayurveda-Masseur, Professional Channeling, Mind Touch, Ayurveda-Wellness-Ausbilder',
      emoji: '🌿',
      location: 'International'
    },
    {
      year: '2015',
      title: 'Vedische Astrologie Meister',
      description: 'Jothida Thilagam & Jothida Vibooshan Ausbildung in Tamil Nadu, Indien',
      emoji: '⭐',
      location: 'Indien'
    }
  ],
  career: [
    {
      year: '1992-2002',
      title: 'Gastronomie-Erfahrung',
      description: 'Verschiedene Tätigkeiten im Gastronomiebereich, Entwicklung von Service-Expertise',
      emoji: '🍽️',
      location: 'Zürich'
    },
    {
      year: '2002-2015',
      title: 'Geschäftsführer Ayurveda',
      description: 'Leitung von Ayurveda-Restaurant Ambaal, Arun-ayurvedacenter und Ayus AG',
      emoji: '💼',
      location: 'Zürich'
    },
    {
      year: '2009-Heute',
      title: 'TV-Experte & Berater',
      description: 'Vedische Astrologie und Ayurveda-Experte bei Schweiz 5 TV, eigene Beratungspraxis',
      emoji: '📺',
      location: 'Schweiz'
    }
  ]
};