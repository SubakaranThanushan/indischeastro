// components/Footer.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique pour l'inscription à la newsletter
    console.log('Email submitted:', email);
    setEmail('');
    alert('Vielen Dank für Ihre Anmeldung!');
  };

  const services = [
    { name: 'Vedische Astrologie', href: '/services#vedische-astrologie' },
    { name: 'Partner Horoskop Analyse', href: '/services#partner-analyse' },
    { name: 'Karmische Beratung', href: '/services#karmische-beratung' },
    { name: 'Spirituelle Heilung', href: '/services#spirituelle-heilung' },
    { name: 'Energiearbeit', href: '/services#energiearbeit' },
  ];

  const quickLinks = [
    { name: 'Über Mich', href: '/ueber-mich' },
    { name: 'Dienstleistungen', href: '/services' },
    { name: 'Preise', href: '/ServicePrice' },
    { name: 'Kontakt', href: '/contact' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Impressum', href: '/impressum' },
  ];

  const contactInfo = [
    { icon: '📧', text: 'info@vedische-astrologie.ch', href: 'mailto:info@vedische-astrologie.ch' },
    { icon: '📞', text: '+41 76 123 45 67', href: 'tel:+41761234567' },
    { icon: '🏠', text: 'Zürich, Schweiz', href: 'https://maps.google.com/?q=Zürich' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#260C56] to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff6e54] to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Vedische Astrologie
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professionelle Vedische Astrologie Beratung, Partner Horoskop Analyse 
              und spirituelle Heilung in Zürich und online.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#ff6e54] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6e54] rounded-full"></span>
              Dienstleistungen
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
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
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-[#ff6e54] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6e54] rounded-full"></span>
              Kontakt & Newsletter
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{contact.icon}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Erhalten Sie spirituelle Insights und spezielle Angebote.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6e54] transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff6e54] to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Suthakar Parameswaran. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/agb" className="hover:text-white transition-colors">
                AGB
              </Link>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Jetzt erreichbar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

const socialLinks = [
  { name: 'Facebook', icon: '📘', href: 'https://facebook.com' },
  { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
  { name: 'YouTube', icon: '📺', href: 'https://youtube.com' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
];