"use client";
// components/Footer.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const services = [
    { name: 'Vedische Astrologie Beratung', href: '/services#vedische-astrologie' },
    { name: 'Partner Horoskop Analyse', href: '/services#partner-analyse' },
    { name: 'Karmische Blockaden Lösung', href: '/services#karmische-beratung' },
    { name: 'Chakra Energie Arbeit', href: '/services#spirituelle-heilung' },
    { name: 'Familien Aufstellung Zürich', href: '/services#energiearbeit' },
  ];

  const quickLinks = [
    { name: 'Über Suthakar Parameswaran', href: '/ubermich' },
    { name: 'Vedische Dienstleistungen', href: '/ServicePrice' },
    { name: 'Preise & Leistungen', href: '/ServicePrice' },
    { name: 'Kontakt & Termin', href: '/contact' },
    { name: 'Vedisches Wissen Blog', href: '/blog' },
  ];

  const contactInfo = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ), 
      text: 'sutha.eatham@gmail.com', 
      href: 'mailto:sutha.eatham@gmail.com' 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
      ), 
      text: '+41 79 261 33 31', 
      href: 'tel:+41792613331' 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ), 
      text: 'Zürich, Schweiz', 
      href: 'https://maps.google.com/?q=Zürich,Schweiz' 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#260C56] to-purple-900 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Vedische Astrologie Zürich - Startseite">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff6e54] to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Vedische Astrologie
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed" itemProp="description">
              Professionelle Vedische Astrologie Beratung, Indische Astrologie, Partner Horoskop Analyse, 
              Karmische Blockaden Lösung, Chakra Energie Arbeit und spirituelle Heilung in Zürich, Schweiz. 
              Telefonische Beratung und Online-Beratung verfügbar.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#ff6e54] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={`Folgen Sie uns auf ${social.name} für Vedische Astrologie Tipps`}
                  itemProp="sameAs"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6e54] rounded-full"></span>
              Vedische Dienstleistungen
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    title={`${service.name} - Vedische Astrologie Beratung Zürich`}
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-[#ff6e54] transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6e54] rounded-full"></span>
              Schnellzugriff
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    title={`${link.name} - Vedische Astrologie Zürich`}
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-[#ff6e54] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6e54] rounded-full"></span>
              Kontakt & Termin
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  aria-label={`Kontaktieren Sie uns per ${contact.text.includes('@') ? 'Email' : contact.text.includes('+') ? 'Telefon' : 'Karte'}`}
                >
                  <span className="w-5 h-5 group-hover:scale-110 transition-transform">{contact.icon}</span>
                  <span className="group-hover:translate-x-1 transition-transform" 
                        itemProp={contact.text === 'Zürich, Schweiz' ? 'addressLocality' : contact.text.includes('@') ? 'email' : 'telephone'}>
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Schema.org hidden data */}
            <div style={{display: 'none'}} itemProp="address" itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Zürich</span>
              <span itemProp="addressLocality">Zürich</span>
              <span itemProp="addressCountry">Schweiz</span>
            </div>
            <div style={{display: 'none'}} itemProp="geo" itemType="https://schema.org/GeoCoordinates">
              <meta itemProp="latitude" content="47.374448"/>
              <meta itemProp="longitude" content="8.531434"/>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Suthakar Parameswaran - Vedische Astrologie Beratung Zürich. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Jetzt für Vedische Astrologie Beratung erreichbar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Vedische Astrologie Beratung Zürich",
            "description": "Professionelle Vedische Astrologie, Indische Astrologie, Partner Horoskop Analyse, Karmische Blockaden Lösung und spirituelle Heilung in Zürich",
            "url": "https://www.indischeastro.ch",
            "telephone": "+41-79-261-33-31",
            "email": "sutha.eatham@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Zürich",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.374448",
              "longitude": "8.531434"
            },
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
            "serviceType": [
              "Vedische Astrologie",
              "Indische Astrologie", 
              "Partner Horoskop",
              "Karma Beratung",
              "Chakra Heilung",
              "Energiearbeit",
              "Familien Aufstellung",
              "Lebensberatung",
              "Zukunftsberatung"
            ],
            "provider": {
              "@type": "Person",
              "name": "Suthakar Parameswaran",
              "jobTitle": "Vedischer Astrologe und Heiler",
              "description": "Experte für Vedische Astrologie, Karma Analyse und spirituelle Heilung"
            },
            "sameAs": [
              "https://www.instagram.com/cittarastro/",
              "https://www.youtube.com/@1000suthakar"
            ]
          })
        }}
      />
    </footer>
  );
}

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ), 
    href: 'https://facebook.com' 
  },
  { 
    name: 'Instagram', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297z"/>
      </svg>
    ), 
    href: 'https://www.instagram.com/cittarastro/' 
  },
  { 
    name: 'YouTube', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ), 
    href: 'https://www.youtube.com/@1000suthakar' 
  },
];