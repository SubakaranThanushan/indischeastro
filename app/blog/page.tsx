"use client";
import { useState } from "react";
import Head from "next/head";
import { FaSearch, FaCalendar, FaUser, FaClock, FaArrowRight, FaTimes, FaStar, FaBook, FaHeart, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe, FaShareAlt } from "react-icons/fa";

// ✅ SCHEMA STRUCTURÉ COMPLET POUR LE SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vedische Astrologie Zürich - Suthakar Parameswaran",
  "description": "Professionelle Vedische Astrologie Beratung in Zürich. Partnerhoroskop, Karma-Analyse, Liebesbeziehung, Trennung, Zukunft, indische Astrologie, Jyotish, Lebensberatung Schweiz.",
  "url": "https://www.cittarastro.ch",
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.3744",
    "longitude": "8.5225"
  },
  "openingHours": "Mo-Fr 14:00-20:00, Sa 09:00-14:00",
  "serviceType": [
    "Vedische Astrologie Beratung",
    "Partner Horoskop Analyse",
    "Karma Beratung",
    "Liebesbeziehung Analyse",
    "Trennung Beratung",
    "Zukunftsberatung",
    "Lebensberatung",
    "Chakra Energie Arbeit",
    "Fernberatung Telefonisch"
  ],
  "areaServed": ["Switzerland", "Germany"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.cittarastro.ch",
    "https://www.cittarastro.ch/blog"
  ]
};

// ✅ META KEYWORDS COMPLETS POUR TOUS VOS MOTS-CLÉS
const metaKeywords = [
  // 🔥 MOTS-CLÉS PRINCIPAUX - Astrologie
  "Astrologie", "Vedische Astrologie", "Indische Astrologie", "Jyotish", "Jothidam", "Jathagam",
  "Partnerhoroskop", "Liebesbeziehung", "Karmische Beziehung", "Trennung", "Zukunft", "Schicksal", 
  "Karma", "Lebensberatung", "Zukunftsberatung", "Horoskop", "Sternzeichen",
  
  // 🏙️ MOTS-CLÉS GÉOGRAPHIQUES
  "Zürich", "Schweiz", "Swiss", "Schweizerland", "Bern", "Luzern", "Basel", "Genf", "St. Gallen",
  "Deutschland", "München", "Stuttgart", "Konstanz", "Singen", "Baden-Württemberg",
  
  // 💑 MOTS-CLÉS RELATIONNELS
  "romantische Beziehung", "emotional intimes", "Liebespaar", "Partnerschaft", "Sexualität", 
  "Liebe", "Seelenpartner", "Vertrauen", "treue Partner", "Beziehung positiv gestalten",
  
  // 🌟 MOTS-CLÉS SPIRITUELS
  "Chakra", "Energiearbeit", "Blockaden lösen", "Heiltherapeut", "Reiki", "Marma Punkte", 
  "Kundalini Energie", "Sexuelle Blockaden", "Emotionale Abhängigkeit", "Familie Trennung",
  "Hinduismus", "Veden", "Mantra", "Yantra", "Pooja", "Grihapravesh", "Navagraha",
  
  // 🔮 MOTS-CLÉS TECHNIQUES ASTROLOGIE
  "Geburts-Horoskop", "Aszendent", "Lagna", "Rasi", "Nakshatra", "Planeten", "Sonne", "Mond",
  "Häuser", "Dasha", "Transite", "Vastu", "Palmistry", "Numerologie",
  
  // 🎯 MOTS-CLÉS SPÉCIFIQUES
  "Magie", "Schwarze Magie", "Familien Aufstellung", "karmische Blockaden lösen",
  "Unfähigkeit loszulassen", "Schweiz Astrologie", "Deutschland Astrologie"
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [selectedPost, setSelectedPost] = useState(null);

  // ✅ CATÉGORIES OPTIMISÉES POUR LE SEO
  const categories = [
    { id: "alle", name: "Alle Artikel", count: 35 },
    { id: "astrologie", name: "Astrologie", count: 10 },
    { id: "partner-liebe", name: "Partner & Liebe", count: 8 },
    { id: "karma-schicksal", name: "Karma & Schicksal", count: 6 },
    { id: "zukunft-beratung", name: "Zukunft & Beratung", count: 5 },
    { id: "chakra-energie", name: "Chakra & Energie", count: 4 },
    { id: "spiritualitaet", name: "Spiritualität", count: 2 }
  ];

  // ✅ 35 ARTICLES COMPLETS OPTIMISÉS POUR GOOGLE
const blogPosts = [
    // 🔥 ARTICLE 1 - MOT-CLÉ PRINCIPAL "Astrologie"
    {
      id: 1,
      title: "Astrologie Beratung Zürich: Vedische & Indische Astrologie für Liebe, Beruf und Zukunft",
      excerpt: "Professionelle Astrologie Beratung in Zürich: Vedische und indische Astrologie für Liebesbeziehungen, Partnerhoroskop, Beruf, Zukunft und Lebensberatung. Erfahren Sie, wie Astrologie Ihr Leben verändern kann.",
      fullContent: `
        <h1>Astrologie Beratung Zürich: Vedische & Indische Astrologie für Ihr Leben</h1>
        
        <h2>Was ist Astrologie und wie kann sie Ihnen helfen?</h2>
        <p><strong>Astrologie</strong> ist eine uralte Wissenschaft, die die Beziehung zwischen den Bewegungen der Himmelskörper und den Ereignissen auf der Erde erforscht. In der <strong>Vedischen Astrologie (Jyotish)</strong> geht es nicht um Vorhersagen, sondern um das Verständnis Ihrer karmischen Muster und Lebensaufgaben.</p>

        <h3>Vedische Astrologie vs. Westliche Astrologie</h3>
        <p>Die <strong>Vedische Astrologie</strong> arbeitet mit dem siderischen Tierkreis und berücksichtigt die tatsächliche Position der Sternbilder. Sie ist tief mit dem <strong>Karma</strong>-Gedanken verbunden und bietet präzisere Langzeitvorhersagen durch das Dasha-System. Im Gegensatz zur westlichen Astrologie konzentriert sich Jyotish auf spirituelles Wachstum und karmische Auflösung.</p>

        <h3>Anwendungsbereiche der Astrologie Beratung</h3>
        <ul>
          <li><strong>Liebe und Partnerschaft:</strong> Partnerhoroskop, karmische Beziehungen, Seelenpartner erkennen</li>
          <li><strong>Beruf und Karriere:</strong> Berufliche Bestimmung, Erfolgschancen, richtiger Zeitpunkt für Veränderungen</li>
          <li><strong>Gesundheit und Wohlbefinden:</strong> Körperliche und seelische Gesundheit, energetische Blockaden</li>
          <li><strong>Spirituelle Entwicklung:</strong> Lebenssinn, Karma, persönliches Wachstum und Transformation</li>
          <li><strong>Finanzen und Wohlstand:</strong> Geldfluss, Geschäftschancen, finanzielle Planung</li>
        </ul>

        <h2>Warum Astrologie Beratung in Zürich wählen?</h2>
        <p>Als erfahrener <strong>Astrologe in Zürich</strong> biete ich Ihnen eine ganzheitliche Beratung, die Vedische Astrologie mit modernen psychologischen Erkenntnissen verbindet. Meine langjährige Erfahrung mit Kunden aus der gesamten Schweiz und Deutschland ermöglicht tiefe Einblicke in Ihre persönliche Situation.</p>

        <h3>Konkrete Vorteile einer astrologischen Beratung:</h3>
        <ul>
          <li>Klärung von Beziehungsdynamiken und Partnerschaftskonflikten</li>
          <li>Identifikation Ihrer beruflichen Bestimmung und Talente</li>
          <li>Verständnis für wiederkehrende Lebensmuster und deren karmische Ursachen</li>
          <li>Erkennung günstiger Zeitpunkte für wichtige Entscheidungen</li>
          <li>Lösung energetischer Blockaden durch Chakra-Arbeit</li>
        </ul>

        <h2>Wie läuft eine Astrologie Beratung ab?</h2>
        <p>Eine typische Sitzung beginnt mit der Analyse Ihres Geburtshoroskops. Wir betrachten gemeinsam:</p>
        <ul>
          <li>Ihre Sonne, Mond und Aszendent für die Persönlichkeitsanalyse</li>
          <li>Die Position der Planeten in den verschiedenen Häusern</li>
          <li>Aktuelle Planeten-Transite und deren Einfluss auf Ihr Leben</li>
          <li>Karmische Muster aus vergangenen Leben</li>
          <li>Ihre Lebensaufgabe und spirituelle Entwicklung</li>
        </ul>

        <div class="cta-box">
          <h3>📞 Astrologie Beratung Termin vereinbaren</h3>
          <p>Telefon: <strong>+41 79 261 33 31</strong> | E-Mail: <strong>sutha.eatham@gmail.com</strong></p>
          <p>Standort: <strong>Zürich, Schweiz</strong> | Auch Online-Beratung verfügbar für Kunden aus Deutschland und der gesamten Schweiz</p>
          <p>Öffnungszeiten: Mo-Fr 14:00-20:00, Sa 09:00-14:00</p>
        </div>

        <h2>Häufig gestellte Fragen zur Astrologie Beratung</h2>
        
        <h3>Kann Astrologie die Zukunft vorhersagen?</h3>
        <p>Astrologie zeigt keine festgeschriebene Zukunft, sondern Potentiale und Tendenzen basierend auf Ihren karmischen Mustern. Sie gibt Ihnen die Werkzeuge, um bessere Entscheidungen zu treffen.</p>

        <h3>Wie lange dauert eine Beratung?</h3>
        <p>Eine vollständige Beratung dauert in der Regel 60-90 Minuten. Für komplexe Themen können auch längere Sitzungen vereinbart werden.</p>

        <h3>Kann ich auch online beraten werden?</h3>
        <p>Ja, ich biete professionelle Online-Beratungen per Video-Call für Kunden in der gesamten Schweiz und Deutschland an.</p>
      `,
      image: "/api/placeholder/800/400",
      category: "astrologie",
      author: "Suthakar Parameswaran",
      date: "2024-01-20",
      readTime: "12 min",
      slug: "astrologie-beratung-zuerich-vedische-indische-astrologie",
      tags: ["Astrologie", "Vedische Astrologie", "Indische Astrologie", "Zürich", "Beratung", "Lebensberatung", "Partnerhoroskop", "Zukunft"],
      metaDescription: "Professionelle Astrologie Beratung in Zürich: Vedische und indische Astrologie für Liebe, Beruf, Zukunft und Lebensberatung. Erfahren Sie, wie Astrologie Ihr Leben positiv verändern kann.",
      difficulty: "Anfänger",
      rating: 4.9
    },

    // 🔥 ARTICLE 2 - "Vedische Astrologie"
    {
      id: 2,
      title: "Vedische Astrologie: Die Wissenschaft des Lichts für moderne Lebensberatung",
      excerpt: "Vedische Astrologie (Jyotish) ist die uralte Wissenschaft des Lichts aus Indien. Erfahren Sie, wie sie für Lebensberatung, Partneranalyse und Zukunftsplanung eingesetzt wird.",
      fullContent: `
        <h1>Vedische Astrologie: Komplette Einführung in Jyotish</h1>
        
        <h2>Was ist Vedische Astrologie?</h2>
        <p><strong>Vedische Astrologie</strong>, auch bekannt als <strong>Jyotish</strong> (Wissenschaft des Lichts), ist ein 5000 Jahre altes System aus Indien, das tiefe Einblicke in <strong>Karma, Schicksal und Lebensweg</strong> bietet. Im Gegensatz zur westlichen Astrologie arbeitet Jyotish mit dem siderischen Tierkreis, der die tatsächliche Position der Sternbilder berücksichtigt.</p>

        <h3>Die philosophische Grundlage der Vedischen Astrologie</h3>
        <p>Jyotish basiert auf der vedischen Philosophie, die besagt, dass unser gegenwärtiges Leben das Ergebnis vergangener Handlungen (Karma) ist. Die Planetenpositionen zum Zeitpunkt der Geburt zeigen unsere karmischen Neigungen und Lebenslektionen.</p>

        <h3>Die drei Hauptkomponenten des Jyotish</h3>
        <ul>
          <li><strong>Siddhanta:</strong> Die astronomischen und mathematischen Grundlagen</li>
          <li><strong>Samhita:</strong> Weltastrologie und Vorhersagen für Gesellschaften</li>
          <li><strong>Hora:</strong> Individualastrologie für persönliche Lebensberatung</li>
        </ul>

        <h2>Die einzigartigen Werkzeuge der Vedischen Astrologie</h2>
        
        <h3>Das Dasha-System: Zeitzyklen des Lebens</h3>
        <p>Das <strong>Dasha-System</strong> ist ein einzigartiges Merkmal des Jyotish. Es unterteilt das Leben in verschiedene Planetenperioden, die jeweils spezifische Themen und Herausforderungen mit sich bringen. Die Vimshottari Dasha ist das am häufigsten verwendete System mit einer Gesamtlaufzeit von 120 Jahren.</p>

        <h3>Nakshatras: Die 27 Mondstationen</h3>
        <p>Die <strong>Nakshatras</strong> sind 27 Fixsterne oder Sternkonstellationen, durch die der Mond während seines monatlichen Zyklus wandert. Jedes Nakshatra hat spezifische Eigenschaften und Einflüsse auf die Persönlichkeit.</p>

        <h3>Die Bedeutung der Häuser (Bhavas)</h3>
        <p>In der Vedischen Astrologie haben die 12 Häuser tiefgreifende Bedeutungen:</p>
        <ul>
          <li><strong>1. Haus (Lagna):</strong> Persönlichkeit, Körper, allgemeine Lebensausrichtung</li>
          <li><strong>7. Haus (Kalatra Bhava):</strong> Partnerschaft, Ehe, Geschäftsbeziehungen</li>
          <li><strong>10. Haus (Karma Bhava):</strong> Beruf, Karriere, gesellschaftlicher Status</li>
          <li><strong>12. Haus (Moksha Bhava):</strong> Spiritualität, Befreiung, verborgenes Karma</li>
        </ul>

        <h2>Anwendungsbereiche in der modernen Lebensberatung</h2>
        
        <h3>Beziehungs- und Partnerschaftsanalyse</h3>
        <p>Durch die <strong>Kundali Milan</strong> (Horoskop-Vergleich) können Partnerschaftskompatibilität und karmische Verbindungen analysiert werden. Das Ashtakoota-System bewertet 8 verschiedene Kompatibilitätsfaktoren.</p>

        <h3>Berufliche Orientierung und Karriereplanung</h3>
        <p>Die Analyse des 10. Hauses und seiner Verbindungen zeigt berufliche Begabungen, Erfolgspotentiale und günstige Zeitpunkte für Karrierewechsel.</p>

        <h3>Gesundheit und Wohlbefinden</h3>
        <p>Bestimmte Planetenkonstellationen können auf gesundheitliche Schwachstellen hinweisen. Präventive Maßnahmen können rechtzeitig eingeleitet werden.</p>

        <div class="cta-box">
          <h3>💫 Vedische Astrologie Beratung buchen</h3>
          <p>Entdecken Sie die Tiefe der Vedischen Astrologie in einer persönlichen Beratung.</p>
          <p>Telefon: <strong>+41 79 261 33 31</strong> | Online und in Zürich verfügbar</p>
        </div>
      `,
      image: "/api/placeholder/800/400",
      category: "astrologie",
      author: "Suthakar Parameswaran",
      date: "2024-01-18",
      readTime: "15 min",
      slug: "vedische-astrologie-jyotish-wissenschaft-des-lichts",
      tags: ["Vedische Astrologie", "Jyotish", "Indische Astrologie", "Lebensberatung", "Karma", "Schicksal", "Zukunft"],
      metaDescription: "Umfassende Einführung in Vedische Astrologie (Jyotish): Die uralte Wissenschaft des Lichts für moderne Lebensberatung und Zukunftsplanung.",
      difficulty: "Anfänger",
      rating: 4.8
    },

    // 🔥 ARTICLE 3 - "Partnerhoroskop"
    {
      id: 3,
      title: "Partnerhoroskop Analyse: Finden Sie Ihre karmische Liebe und Seelenpartner",
      excerpt: "Partnerhoroskop Analyse nach vedischer Tradition: Verstehen Sie Ihre Beziehungsmuster, finden Sie karmische Verbindungen und erkennen Sie Ihren Seelenpartner.",
      fullContent: `
        <h1>Partnerhoroskop Analyse: Der Weg zu Ihrer karmischen Liebe</h1>
        
        <h2>Was ist ein Partnerhoroskop in der Vedischen Astrologie?</h2>
        <p>Ein <strong>Partnerhoroskop</strong> in der vedischen Tradition zeigt nicht nur Kompatibilität, sondern auch <strong>karmische Verbindungen</strong> aus vergangenen Leben. Es geht weit über einfache Sternzeichen-Vergleiche hinaus und analysiert die tiefe energetische Verbindung zwischen zwei Menschen.</p>

        <h3>Das Ashtakoota-System: 8 Faktoren der Kompatibilität</h3>
        <p>Das traditionelle <strong>Ashtakoota-System</strong> bewertet die Partnerschaftskompatibilität anhand von 8 Faktoren mit maximal 36 Punkten:</p>
        <ul>
          <li><strong>Varna (1 Punkt):</strong> Geistige Kompatibilität und Werte</li>
          <li><strong>Vashya (2 Punkte):</strong> Gegenseitige Anziehung und Kontrolle</li>
          <li><strong>Tara (3 Punkte):</strong> Gesundheitskompatibilität</li>
          <li><strong>Yoni (4 Punkte):</strong> Sexuelle und emotionale Harmonie</li>
          <li><strong>Graha Maitri (5 Punkte):</strong> Mentale Verbindung</li>
          <li><strong>Gana (6 Punkte):</strong> Temperament und Natur</li>
          <li><strong>Bhakoot (7 Punkte):</strong> Emotionale und finanzielle Kompatibilität</li>
          <li><strong>Nadi (8 Punkte):</strong> Gesundheit der Nachkommen</li>
        </ul>

        <h2>Karmische Beziehungen erkennen</h2>
        
        <h3>Anzeichen einer karmischen Verbindung</h3>
        <p>Karmische Beziehungen zeigen sich durch bestimmte astrologische Konfigurationen:</p>
        <ul>
          <li>Saturn- und Rahu/Ketu-Verbindungen zwischen den Horoskopen</li>
          <li>Mondknoten-Achsen in sensitiven Punkten</li>
          <li>Planeten im 7. Haus und dessen Aspekte</li>
          <li>Venus-Mars-Verbindungen für Leidenschaft und Konflikt</li>
        </ul>

        <h3>Seelenpartner-Verbindungen</h3>
        <p>Seelenpartner-Beziehungen zeigen oft:</p>
        <ul>
          <li>Starke Mond-Mond-Verbindungen</li>
          <li>Sonnen- und Mond-Positionen in komplementären Zeichen</li>
          <li>Jupiter-Aspekte für Wachstum und Erweiterung</li>
          <li>Harmonische Aszendenten-Verbindungen</li>
        </ul>

        <h2>Praktische Anwendung der Partneranalyse</h2>
        
        <h3>Für Singles: Den richtigen Partner finden</h3>
        <p>Die Analyse Ihres 7. Hauses und seiner Herrscher zeigt:</p>
        <ul>
          <li>Den Typ Partner, der zu Ihnen passt</li>
          <li>Günstige Zeiträume für das Kennenlernen</li>
          <li>Mögliche Herausforderungen in Beziehungen</li>
          <li>Ihre unbewussten Beziehungsmuster</li>
        </ul>

        <h3>Für Paare: Beziehung vertiefen und harmonisieren</h3>
        <p>Für bestehende Partnerschaften hilft die Analyse:</p>
        <ul>
          <li>Konfliktursachen zu verstehen und zu lösen</li>
          <li>Kommunikationsmuster zu verbessern</li>
          <li>Gemeinsame Wachstumschancen zu erkennen</li>
          <li>Die Beziehung auf eine tiefere Ebene zu führen</li>
        </ul>

        <h2>Mangal Dosha und andere wichtige Faktoren</h2>
        
        <h3>Was ist Mangal Dosha?</h3>
        <p><strong>Mangal Dosha</strong> entsteht, wenn Mars in bestimmten Häusern positioniert ist und kann Beziehungsschwierigkeiten anzeigen. In der modernen Interpretation ist es jedoch kein Hindernis für eine glückliche Ehe, sondern zeigt Bereiche, die besondere Aufmerksamkeit benötigen.</p>

        <h3>Lösungsansätze für herausfordernde Konstellationen</h3>
        <p>Für schwierige Aspekte zwischen Partnerhoroskopen gibt es verschiedene Ausgleichsmethoden:</p>
        <ul>
          <li>Spezifische Mantras und Meditationen</li>
          <li>Edelsteine zur Harmonisierung</li>
          <li>Rituale zur karmischen Reinigung</li>
          <li>Bewusste Kommunikationsarbeit</li>
        </ul>

        <div class="cta-box">
          <h3>💑 Partnerhoroskop Analyse buchen</h3>
          <p>Erhalten Sie eine umfassende Analyse Ihrer Beziehung oder finden Sie Ihren Seelenpartner.</p>
          <p>Kontakt: <strong>+41 79 261 33 31</strong> | Beratung in Zürich und online</p>
        </div>

        <h2>Erfolgsgeschichten aus der Praxis</h2>
        <p>Viele meiner Klienten haben durch die Partnerhoroskop-Analyse tiefe Einsichten in ihre Beziehungsdynamik gewonnen und konnten:</p>
        <ul>
          <li>Jahrelange Konflikte lösen</li>
          <li>Ihren Seelenpartner finden</li>
          <li>Eine gescheiterte Beziehung verstehen und verarbeiten</li>
          <li>Eine neue, erfüllendere Partnerschaft eingehen</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "partner-liebe",
      author: "Suthakar Parameswaran",
      date: "2024-01-15",
      readTime: "14 min",
      slug: "partnerhoroskop-analyse-karmische-liebe-seelenpartner",
      tags: ["Partnerhoroskop", "Liebesbeziehung", "Karmische Beziehung", "Seelenpartner", "Partnerschaft", "Liebe", "Beziehung"],
      metaDescription: "Professionelle Partnerhoroskop Analyse nach vedischer Tradition: Finden Sie Ihre karmische Liebe und erkennen Sie Ihren Seelenpartner.",
      difficulty: "Mittel",
      rating: 4.9
    },

    // 🔥 ARTICLE 4 - "Karmische Beziehung"
    {
      id: 4,
      title: "Karmische Beziehung: Erkennen und lösen Sie karmische Verbindungen und Blockaden",
      excerpt: "Karmische Beziehungen sind besondere Verbindungen aus vergangenen Leben. Lernen Sie, karmische Muster zu erkennen und Blockaden zu lösen für freie Beziehungen.",
      fullContent: `
        <h1>Karmische Beziehung: Verbindungen aus vergangenen Leben</h1>
        
        <h2>Was ist eine karmische Beziehung?</h2>
        <p>Eine <strong>karmische Beziehung</strong> ist eine tiefe spirituelle Verbindung, die aus <strong>vergangenen Leben</strong> stammt und bestimmte Lektionen für Ihre Seele bereithält. Diese Beziehungen sind oft intensiv, herausfordernd und dienen Ihrem spirituellen Wachstum.</p>

        <h3>Die vier Arten karmischer Beziehungen</h3>
        <ul>
          <li><strong>Lern-Beziehungen:</strong> Bringen Ihnen wichtige Lebenslektionen bei</li>
          <li><strong>Heilungs-Beziehungen:</strong> Helfen Ihnen, alte Wunden zu heilen</li>
          <li><strong>Test-Beziehungen:</strong> Prüfen Ihre spirituelle Entwicklung</li>
          <li><strong>Seelenvertrags-Beziehungen:</strong> Basieren auf Vereinbarungen aus vergangenen Leben</li>
        </ul>

        <h2>Astrologische Zeichen karmischer Beziehungen</h2>
        
        <h3>Planeten-Konfigurationen die Karma anzeigen</h3>
        <p>Bestimmte Planetenstellungen deuten auf karmische Verbindungen hin:</p>
        <ul>
          <li><strong>Saturn im 7. Haus:</strong> Karmische Verpflichtungen in Beziehungen</li>
          <li><strong>Rahu/Ketu-Achse in sensitiven Punkten:</strong> Unerledigte Aufgaben aus vergangenen Leben</li>
          <li><strong>Planeten im 12. Haus:</strong> Verborgene karmische Muster</li>
          <li><strong>Mondknoten-Verbindungen zwischen Horoskopen:</strong> Starke karmische Bindung</li>
        </ul>

        <h3>Die Rolle von Rahu und Ketu</h3>
        <p><strong>Rahu</strong> (nördlicher Mondknoten) und <strong>Ketu</strong> (südlicher Mondknoten) sind in der Vedischen Astrologie besonders wichtig für karmische Beziehungen. Sie zeigen an, wo wir in vergangenen Leben unerfüllte Wünsche hatten und wo wir Meisterschaft erlangt haben.</p>

        <h2>Karmische Blockaden erkennen und lösen</h2>
        
        <h3>Häufige karmische Blockaden in Beziehungen</h3>
        <ul>
          <li><strong>Wiederholende Konfliktmuster:</strong> Immer gleiche Streitthemen</li>
          <li><strong>Emotionale Abhängigkeit:</strong> Unfähigkeit, sich zu trennen trotz Unglück</li>
          <li><strong>Unerklärliche Anziehung:</strong> Starke Anziehung ohne logischen Grund</li>
          <li><strong>Opfer-Retter-Dynamik:</strong> Ungesunde Beziehungsmuster</li>
        </ul>

        <h3>Methoden zur karmischen Reinigung</h3>
        <p>Es gibt verschiedene Wege, karmische Blockaden zu lösen:</p>
        <ul>
          <li><strong>Karmische Meditationen:</strong> Zur Lösung alter Muster</li>
          <li><strong>Mantra-Rezitation:</strong> Spezifische Klänge zur Harmonisierung</li>
          <li><strong>Spirituelle Praxis:</strong> Regelmäßige Meditation und Selbstreflexion</li>
          <li><strong>Therapeutische Arbeit:</strong> Aufarbeitung mit professioneller Begleitung</li>
        </ul>

        <h2>Von karmischer zu dharmischer Beziehung</h2>
        
        <h3>Was ist eine dharmische Beziehung?</h3>
        <p>Eine <strong>dharmische Beziehung</strong> geht über karmische Verstrickungen hinaus. Sie basiert auf gegenseitigem Wachstum, Respekt und der Erfüllung der gemeinsamen Lebensaufgabe.</p>

        <h3>Der Transformationsprozess</h3>
        <p>Die Transformation von karmischer zu dharmischer Beziehung erfolgt durch:</p>
        <ul>
          <li>Bewusstwerdung der karmischen Muster</li>
          <li>Vergebung und Loslassen alter Verletzungen</li>
          <li>Entwicklung von bedingungsloser Liebe</li>
          <li>Gemeinsame spirituelle Praxis</li>
        </ul>

        <div class="cta-box">
          <h3>🔄 Karmische Blockaden lösen</h3>
          <p>Professionelle Begleitung bei der Lösung karmischer Beziehungsmuster.</p>
          <p>Telefonische Beratung: <strong>+41 79 261 33 31</strong></p>
        </div>

        <h2>Praxisfälle: Erfolgreiche Transformationen</h2>
        
        <h3>Fallbeispiel 1: Die wiederkehrende Trennung</h3>
        <p>Eine Klientin kam mit dem Muster, dass sich alle ihre Beziehungen nach 2 Jahren auflösten. Die Analyse zeigte eine karmische Blockade mit Saturn im 7. Haus. Durch spezifische Reinigungsrituale und Bewusstseinsarbeit konnte sie dieses Muster durchbrechen.</p>

        <h3>Fallbeispiel 2: Die unerklärliche Anziehung</h3>
        <p>Ein Klient fühlte sich magisch zu einem Partner hingezogen, obwohl die Beziehung sehr schmerzhaft war. Die Horoskop-Analyse zeigte eine starke Rahu-Ketu-Verbindung aus einem vergangenen Leben. Durch karmische Loslösungsarbeit konnte er sich befreien.</p>

        <h2>Praktische Übungen zur Selbstreflexion</h2>
        <p>Fragen zur Erkennung karmischer Beziehungen:</p>
        <ul>
          <li>Wiederholen sich bestimmte Konfliktthemen in meinen Beziehungen?</li>
          <li>Fühle ich mich zu Menschen hingezogen, die mir nicht guttun?</li>
          <li>Habe ich das Gefühl, in Beziehungen "gefangen" zu sein?</li>
          <li>Erlebe ich immer wieder die gleichen Enttäuschungen?</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "partner-liebe",
      author: "Suthakar Parameswaran",
      date: "2024-01-12",
      readTime: "16 min",
      slug: "karmische-beziehung-erkennen-loesen-blockaden",
      tags: ["Karmische Beziehung", "Karma", "Vergangene Leben", "Seelenpartner", "Blockaden lösen", "Beziehung", "Liebe"],
      metaDescription: "Karmische Beziehungen verstehen und lösen: Erkennen Sie karmische Verbindungen aus vergangenen Leben und befreien Sie sich von Blockaden.",
      difficulty: "Fortgeschritten",
      rating: 4.7
    },

    // 🔥 ARTICLE 5 - "Trennung"
    {
      id: 5,
      title: "Trennung überwinden: Spirituelle Wege zur Heilung nach Beziehungsende",
      excerpt: "Eine Trennung kann schmerzhaft sein. Erfahren Sie spirituelle Wege und astrologische Einsichten, um Trennung zu überwinden und gestärkt hervorzugehen.",
      fullContent: `
        <h1>Trennung überwinden: Spirituelle Heilung nach Beziehungsende</h1>
        
        <h2>Die spirituelle Bedeutung von Trennungen</h2>
        <p>Eine <strong>Trennung</strong> ist oft eines der schmerzhaftesten Erlebnisse im Leben. Die <strong>Vedische Astrologie</strong> bietet tiefe Einblicke in die karmischen Ursachen von Trennungen. Aus spiritueller Sicht ist jede Trennung eine Chance für Wachstum und Transformation.</p>

        <h3>Astrologische Hinweise auf Trennungs-Themen</h3>
        <p>Bestimmte Planetenkonstellationen können auf Trennungs-Themen hinweisen:</p>
        <ul>
          <li><strong>Saturn im 7. Haus:</strong> Verzögerungen oder Herausforderungen in Beziehungen</li>
          <li><strong>Rahu im 7. Haus:</strong> Unkonventionelle Beziehungen oder plötzliche Trennungen</li>
          <li><strong>Mars-Aspekte auf Venus:</strong> Konflikte und Spannungen in Partnerschaften</li>
          <li><strong>Planeten im 12. Haus:</strong> Verluste und Loslösungsprozesse</li>
        </ul>

        <h2>Der karmische Zyklus von Beziehungen</h2>
        
        <h3>Warum Beziehungen enden</h3>
        <p>Aus karmischer Sicht enden Beziehungen, wenn:</p>
        <ul>
          <li>Die vereinbarten Lektionen gelernt sind</li>
          <li>Die Seelen sich in unterschiedliche Richtungen entwickeln</li>
          <li>Alte karmische Schulden beglichen wurden</li>
          <li>Neue Wachstumschancen wartend</li>
        </ul>

        <h3>Die Rolle des Dasha-Systems</h3>
        <p>Das <strong>Dasha-System</strong> der Vedischen Astrologie zeigt Zeitperioden an, in denen Beziehungsthemen besonders aktiv sind. Das Ende einer bestimmten Planetenperiode kann oft mit Beziehungsveränderungen zusammenfallen.</p>

        <h2>Spirituelle Heilungsmethoden nach Trennung</h2>
        
        <h3>Emotionale Reinigung</h3>
        <ul>
          <li><strong>Vergebungsmeditation:</strong> Loslassen von Groll und Verletzungen</li>
          <li><strong>Herz-Chakra-Heilung:</strong> Wiederherstellung der emotionalen Balance</li>
          <li><strong>Trauer-Arbeit:</strong> Gesundes Durchleben der Trauerphasen</li>
          <li><strong>Energie-Reinigung:</strong> Lösen der energetischen Verbindungen</li>
        </ul>

        <h3>Praktische Übungen für den Alltag</h3>
        <ul>
          <li><strong>Tägliche Dankbarkeitspraxis:</strong> Fokus auf die positiven Aspekte</li>
          <li><strong>Journaling:</strong> Verarbeitung der Emotionen durch Schreiben</li>
          <li><strong>Natur-Therapie:</strong> Heilung durch Verbindung mit der Natur</li>
          <li><strong>Kreativer Ausdruck:</strong> Malen, Musik, Tanz zur Emotionsverarbeitung</li>
        </ul>

        <h2>Astrologische Unterstützung beim Heilungsprozess</h2>
        
        <h3>Günstige Zeitpunkte für Neuanfänge</h3>
        <p>Bestimmte Planetenkonstellationen unterstützen den Heilungsprozess:</p>
        <ul>
          <li><strong>Jupiter-Transite:</strong> Bringen Optimismus und neue Perspektiven</li>
          <li><strong>Venus-Zyklen:</strong> Unterstützen die Selbstliebe und Wertschätzung</li>
          <li><strong>Mond-Phasen:</strong> Besonders der Neumond für Neuanfänge</li>
          <li><strong>Sonnen-Transite:</strong> Stärken das Selbstbewusstsein und die Identität</li>
        </ul>

        <h3>Planetare Heilmittel</h3>
        <p>Für spezifische Trennungs-Themen können planetare Heilmittel helfen:</p>
        <ul>
          <li><strong>Venus-Mantras:</strong> Für Herzöffnung und Selbstliebe</li>
          <li><strong>Mond-Meditationen:</strong> Für emotionalen Ausgleich</li>
          <li><strong>Saturn-Arbeit:</strong> Für Akzeptanz und Loslassen</li>
          <li><strong>Mercury-Affirmationen:</strong> Für klare Kommunikation mit sich selbst</li>
        </ul>

        <div class="cta-box">
          <h3>💔 Hilfe bei Trennungsschmerz</h3>
          <p>Professionelle Begleitung in der schwierigen Zeit nach einer Trennung.</p>
          <p>Kontakt: <strong>+41 79 261 33 31</strong> | Diskret und einfühlsam</p>
        </div>

        <h2>Von der Trennung zur Transformation</h2>
        
        <h3>Die 7 Phasen der Trennung nach vedischer Sicht</h3>
        <ol>
          <li><strong>Schock und Verleugnung:</strong> Das Unfassbare begreifen</li>
          <li><strong>Schmerz und Trauer:</strong> Die Emotionen zulassen</li>
          <li><strong>Wut und Verhandeln:</strong> Die Auseinandersetzung mit dem Geschehenen</li>
          <li><strong>Depression und Rückzug:</strong> Die innere Einkehr</li>
          <li><strong>Akzeptanz:</strong> Das Annehmen der Realität</li>
          <li><strong>Neuorientierung:</strong> Die Suche nach neuen Wegen</li>
          <li><strong>Integration und Wachstum:</strong> Die transformierte Sichtweise</li>
        </ol>

        <h3>Erfolgsgeschichten aus der Praxis</h3>
        <p>Viele meiner Klienten haben nach schmerzhaften Trennungen nicht nur geheilt, sondern sind gestärkt und weiser daraus hervorgegangen. Sie haben gelernt:</p>
        <ul>
          <li>Sich selbst besser zu lieben und zu respektieren</li>
          <li>Gesündere Beziehungsgrenzen zu setzen</li>
          <li>Ihre wahren Bedürfnisse in Beziehungen zu erkennen</li>
          <li>Eine tiefere Verbindung zu ihrer eigenen Spiritualität zu entwickeln</li>
        </ul>

        <h2>Vorbeugung und gesunde Beziehungsmuster</h2>
        <p>Nach der Heilung einer Trennung ist es wichtig, gesündere Beziehungsmuster zu entwickeln:</p>
        <ul>
          <li>Regelmäßige Selbstreflexion der Beziehungsdynamik</li>
          <li>Frühzeitige Kommunikation von Bedürfnissen und Grenzen</li>
          <li>Bewusste Wahl von Partnern, die zu den eigenen Werten passen</li>
          <li>Kontinuierliche spirituelle Praxis zur Selbstentwicklung</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "partner-liebe",
      author: "Suthakar Parameswaran",
      date: "2024-01-12",
      readTime: "16 min",
      slug: "karmische-beziehung-erkennen-loesen-blockaden",
      tags: ["Karmische Beziehung", "Karma", "Vergangene Leben", "Seelenpartner", "Blockaden lösen", "Beziehung", "Liebe"],
      metaDescription: "Karmische Beziehungen verstehen und lösen: Erkennen Sie karmische Verbindungen aus vergangenen Leben und befreien Sie sich von Blockaden.",
      difficulty: "Fortgeschritten",
      rating: 4.7
    },    // 🔥 ARTICLE 6 - "Zukunft"
    {
      id: 6,
      title: "Zukunft verstehen mit Vedischer Astrologie: Karmische Muster erkennen und Lebensentscheidungen optimieren",
      excerpt: "Kann man die Zukunft vorhersagen? Vedische Astrologie hilft nicht beim Vorhersagen, sondern beim Verstehen karmischer Muster für bessere Entscheidungen und persönliches Wachstum.",
      fullContent: `
        <h1>Zukunft verstehen mit Vedischer Astrologie: Karmische Muster erkennen</h1>
        
        <h2>Die vedische Sicht auf die Zukunft</h2>
        <p>Die <strong>Zukunft</strong> ist in der Vedischen Astrologie kein festgeschriebenes Schicksal, sondern ein Feld von Möglichkeiten, das durch Ihre <strong>karmischen Muster</strong> und freien Willensentscheidungen geformt wird. Jyotish bietet Werkzeuge, um diese Potentiale zu erkennen und optimal zu nutzen.</p>

        <h3>Das Konzept von Prarabdha Karma</h3>
        <p><strong>Prarabdha Karma</strong> ist das Schicksals-Karma, mit dem Sie geboren wurden. Es bestimmt die grundlegenden Lebensumstände und größeren Ereignisse. Durch bewusstes Handeln können Sie jedoch Einfluss auf die Ausprägung dieses Karmas nehmen.</p>

        <h2>Das Dasha-System: Zeitliche Vorhersagen im Jyotish</h2>
        
        <h3>Was sind Dashas?</h3>
        <p><strong>Dashas</strong> sind Planetenperioden, die bestimmte Lebensabschnitte und deren Themen bestimmen. Das Vimshottari Dasha-System teilt das Leben in 9 Hauptperioden mit Unterperioden auf.</p>

        <h3>Die wichtigsten Dasha-Perioden</h3>
        <ul>
          <li><strong>Saturn-Dasha (19 Jahre):</strong> Lektionen in Verantwortung, Disziplin und Reife</li>
          <li><strong>Jupiter-Dasha (16 Jahre):</strong> Expansion, Wachstum und spirituelle Entwicklung</li>
          <li><strong>Mars-Dasha (7 Jahre):</strong> Energie, Initiative und Durchsetzungskraft</li>
          <li><strong>Venus-Dasha (20 Jahre):</strong> Beziehungen, Kunst und Sinnlichkeit</li>
        </ul>

        <h2>Transite: Aktuelle Planetenbewegungen und deren Einfluss</h2>
        
        <h3>Wichtige Transite für Lebensentscheidungen</h3>
        <p>Bestimmte Planeten-Transite können bedeutende Lebensveränderungen anzeigen:</p>
        <ul>
          <li><strong>Saturn-Transite:</strong> Prüfungen und Reifeprozesse</li>
          <li><strong>Jupiter-Transite:</strong> Chancen und Erweiterungen</li>
          <li><strong>Rahu-Ketu-Transite:</strong> Unerwartete Veränderungen und karmische Themen</li>
          <li><strong>Mars-Transite:</strong> Energie und Konflikte</li>
        </ul>

        <h3>Das Saturn-Rückkehr: Die große Lebenswende mit 29-30 Jahren</h3>
        <p>Die erste <strong>Saturn-Rückkehr</strong> markiert den Übergang zum Erwachsenenleben. Sie bringt oft berufliche Veränderungen, Beziehungskrisen oder tiefgreifende persönliche Entwicklungen mit sich.</p>

        <h2>Praktische Anwendung für Lebensplanung</h2>
        
        <h3>Berufliche Entscheidungen</h3>
        <p>Die Analyse von 10. Haus, Saturn und Jupiter zeigt:</p>
        <ul>
          <li>Ihre natürlichen beruflichen Talente</li>
          <li>Günstige Zeitpunkte für Jobwechsel</li>
          <li>Erfolgspotentiale in verschiedenen Branchen</li>
          <li>Mögliche Herausforderungen im Berufsleben</li>
        </ul>

        <h3>Beziehungsplanung</h3>
        <p>Für Beziehungsentscheidungen betrachten wir:</p>
        <ul>
          <li>Venus- und Mars-Positionen für romantische Kompatibilität</li>
          <li>7. Haus und dessen Herrscher für Partnerschaftsthemen</li>
          <li>Günstige Zeiträume für Heirat oder Beziehungsbeginn</li>
          <li>Karmische Beziehungsmuster</li>
        </ul>

        <div class="cta-box">
          <h3>🔮 Zukunftsberatung buchen</h3>
          <p>Erhalten Sie Klarheit über Ihre Lebensrichtung und optimale Zeitpunkte für Entscheidungen.</p>
          <p>Telefon: <strong>+41 79 261 33 31</strong> | Beratung in Zürich und online</p>
        </div>

        <h2>Fallbeispiele aus der Praxis</h2>
        
        <h3>Fall 1: Der berufliche Quereinsteiger</h3>
        <p>Ein Klient mit starkem 10. Haus und günstigen Jupiter-Transiten wechselte erfolgreich in einen komplett neuen Berufszweig - genau zum richtigen astrologischen Zeitpunkt.</p>

        <h3>Fall 2: Die späte Liebe</h3>
        <p>Eine Klientin fand ihre große Liebe während einer günstigen Venus-Dasha-Periode - nach Jahren des Single-Seins und persönlicher Entwicklung.</p>

        <h2>Limitierungen und ethische Grundsätze</h2>
        <p>Wichtige Grundsätze in der Zukunftsberatung:</p>
        <ul>
          <li>Keine absolutistischen Vorhersagen</li>
          <li>Fokus auf Potentiale und Wahrscheinlichkeiten</li>
          <li>Respekt vor der freien Willensentscheidung</li>
          <li>Empowerment statt Abhängigkeit</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "zukunft-beratung",
      author: "Suthakar Parameswaran",
      date: "2024-01-08",
      readTime: "18 min",
      slug: "zukunft-verstehen-vedische-astrologie-vorhersage",
      tags: ["Zukunft", "Vorhersage", "Schicksal", "Karma", "Entscheidungen", "Lebensweg", "Planeten", "Dasha"],
      metaDescription: "Zukunft verstehen mit Vedischer Astrologie: Lernen Sie, karmische Muster zu erkennen und bessere Lebensentscheidungen zu treffen. Dasha-System und Transite verstehen.",
      difficulty: "Mittel",
      rating: 4.6
    },

    // 🔥 ARTICLE 7 - "Chakra"
    {
      id: 7,
      title: "Chakra Heilung: Energetische Blockaden lösen mit Vedischer Astrologie und ganzheitlicher Energiearbeit",
      excerpt: "Chakra Heilung kombiniert mit Vedischer Astrologie: Lösen Sie energetische Blockaden, die Ihre Beziehungen, Gesundheit und Lebensfreude beeinträchtigen. Ganzheitliche Ansätze für tiefgreifende Transformation.",
      fullContent: `
        <h1>Chakra Heilung: Energetische Blockaden lösen mit Vedischer Astrologie</h1>
        
        <h2>Die Verbindung von Chakren und Vedischer Astrologie</h2>
        <p>Die <strong>Chakra</strong>-Heilung ist eine kraftvolle Methode, um <strong>energetische Blockaden</strong> zu lösen, die oft die Ursache für wiederkehrende Lebensprobleme sind. In der Vedischen Astrologie korrespondiert jedes Chakra mit bestimmten Planeten und Häusern.</p>

        <h3>Das energetische System des Menschen</h3>
        <p>Unser energetisches System besteht aus:</p>
        <ul>
          <li><strong>7 Hauptchakren:</strong> Energiezentren entlang der Wirbelsäule</li>
          <li><strong>Nadis:</strong> Energiekanäle, die die Chakren verbinden</li>
          <li><strong>Aura:</strong> Das energetische Feld um den Körper</li>
          <li><strong>Kundalini-Energie:</strong> Die schlafende Kraft an der Basis der Wirbelsäule</li>
        </ul>

        <h2>Die 7 Hauptchakren und ihre astrologischen Entsprechungen</h2>
        
        <h3>1. Wurzel-Chakra (Muladhara) - Saturn</h3>
        <p><strong>Lage:</strong> Beckenboden | <strong>Themen:</strong> Überleben, Sicherheit, Urvertrauen<br>
        <strong>Astrologie:</strong> Saturn, 1. Haus | <strong>Blockaden:</strong> Existenzängste, finanzielle Sorgen</p>

        <h3>2. Sakral-Chakra (Svadhisthana) - Mond und Venus</h3>
        <p><strong>Lage:</strong> Unterbauch | <strong>Themen:</strong> Sexualität, Emotionen, Kreativität<br>
        <strong>Astrologie:</strong> Mond, Venus, 2. Haus | <strong>Blockaden:</strong> Sexuelle Probleme, emotionale Instabilität</p>

        <h3>3. Solarplexus-Chakra (Manipura) - Sonne und Mars</h3>
        <p><strong>Lage:</strong> Oberbauch | <strong>Themen:</strong> Wille, Macht, Persönlichkeit<br>
        <strong>Astrologie:</strong> Sonne, Mars, 3. Haus | <strong>Blockaden:</strong> Mangelndes Selbstvertrauen, Wut</p>

        <h3>4. Herz-Chakra (Anahata) - Venus</h3>
        <p><strong>Lage:</strong> Brustmitte | <strong>Themen:</strong> Liebe, Mitgefühl, Heilung<br>
        <strong>Astrologie:</strong> Venus, 4. Haus | <strong>Blockaden:</strong> Liebeskummer, emotionale Verhärtung</p>

        <h3>5. Hals-Chakra (Vishuddha) - Mercury</h3>
        <p><strong>Lage:</strong> Kehle | <strong>Themen:</strong> Kommunikation, Wahrheit, Ausdruck<br>
        <strong>Astrologie:</strong> Mercury, 5. Haus | <strong>Blockaden:</strong> Kommunikationsprobleme, Sprachhemmungen</p>

        <h3>6. Stirn-Chakra (Ajna) - Jupiter</h3>
        <p><strong>Lage:</strong> Stirnmitte | <strong>Themen:</strong> Intuition, Weisheit, Erkenntnis<br>
        <strong>Astrologie:</strong> Jupiter, 6. Haus | <strong>Blockaden:</strong> Entscheidungsschwäche, mangelnde Klarheit</p>

        <h3>7. Kronen-Chakra (Sahasrara) - Ketu</h3>
        <p><strong>Lage:</strong> Scheitel | <strong>Themen:</strong> Spiritualität, Erleuchtung, Einheit<br>
        <strong>Astrologie:</strong> Ketu, 12. Haus | <strong>Blockaden:</strong> Sinnkrisen, spirituelle Leere</p>

        <h2>Diagnose von Blockaden durch Vedische Astrologie</h2>
        
        <h3>Planetare Hinweise auf Blockaden</h3>
        <p>Bestimmte Planetenkonstellationen zeigen energetische Blockaden an:</p>
        <ul>
          <li><strong>Saturn-Aspekte:</strong> Blockaden im Wurzel-Chakra</li>
          <li><strong>Mars-Probleme:</strong> Blockaden im Solarplexus</li>
          <li><strong>Venus-Schwächen:</strong> Blockaden im Herz-Chakra</li>
          <li><strong>Mercury-Störungen:</strong> Blockaden im Hals-Chakra</li>
        </ul>

        <h2>Heilmethoden für die Chakren</h2>
        
        <h3>Energetische Techniken</h3>
        <ul>
          <li><strong>Reiki und Energieheilung:</strong> Direkte Übertragung heilender Energie</li>
          <li><strong>Chakra-Meditation:</strong> Gezielte Visualisierung und Aktivierung</li>
          <li><strong>Mantra-Heilung:</strong> Spezifische Klänge für jedes Chakra</li>
          <li><strong>Farbtherapie:</strong> Nutzung der Chakren-Farben zur Heilung</li>
        </ul>

        <h3>Praktische Übungen für zu Hause</h3>
        <ul>
          <li><strong>Tägliche Chakra-Meditation (10 Minuten):</strong> Systematische Aktivierung aller Chakren</li>
          <li><strong>Atemübungen (Pranayama):</strong> Energiefluss durch bewusste Atmung</li>
          <li><strong>Yoga-Asanas:</strong> Körperhaltungen für spezifische Chakren</li>
          <li><strong>Affirmationen:</strong> Positive Glaubenssätze für jedes Chakra</li>
        </ul>

        <div class="cta-box">
          <h3>🌀 Chakra-Heilung und Energiearbeit</h3>
          <p>Lösen Sie energetische Blockaden für mehr Lebensfreude und Wohlbefinden.</p>
          <p>Terminvereinbarung: <strong>+41 79 261 33 31</strong></p>
        </div>

        <h2>Fallbeispiele aus der Praxis</h2>
        
        <h3>Fall 1: Die blockierte Kreativität</h3>
        <p>Eine Künstlerin mit blockiertem Sakral-Chakra (Mond-Venus-Probleme) konnte durch gezielte Chakra-Arbeit ihre kreative Blockade lösen und erfolgreich neue Werke schaffen.</p>

        <h3>Fall 2: Der kommunikationsgestörte Manager</h3>
        <p>Ein Manager mit Hals-Chakra-Blockaden (Mercury-Probleme) verbesserte durch Chakra-Heilung seine Kommunikationsfähigkeiten und wurde zum erfolgreichen Teamleiter.</p>

        <h2>Integration in den Alltag</h2>
        <p>Für nachhaltige Ergebnisse empfehle ich:</p>
        <ul>
          <li>Regelmäßige energetische Selbstfürsorge</li>
          <li>Bewusste Lebensführung entsprechend der astrologischen Konstitution</li>
          <li>Kombination von astrologischer Beratung und energetischer Arbeit</li>
          <li>Entwicklung eines persönlichen spirituellen Praxissystems</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "chakra-energie",
      author: "Suthakar Parameswaran",
      date: "2024-01-05",
      readTime: "20 min",
      slug: "chakra-heilung-energetische-blockaden-loesen",
      tags: ["Chakra", "Heilung", "Energiearbeit", "Blockaden lösen", "Energetisch", "Heiltherapeut", "Reiki", "Energie"],
      metaDescription: "Chakra Heilung mit Vedischer Astrologie: Lösen Sie energetische Blockaden für bessere Beziehungen, Gesundheit und Lebensfreude. Ganzheitliche Ansätze für tiefgreifende Transformation.",
      difficulty: "Fortgeschritten",
      rating: 4.9
    },

    // 🔥 ARTICLE 8 - "Karma"
    {
      id: 8,
      title: "Karma verstehen: Wie vergangene Leben Ihr heutiges Schicksal, Beziehungen und Lebensherausforderungen beeinflussen",
      excerpt: "Karma ist das universelle Gesetz von Ursache und Wirkung. Verstehen Sie, wie vergangene Leben Ihr heutiges Schicksal, Ihre Beziehungen und Herausforderungen beeinflussen. Praktische Wege zur karmischen Reinigung.",
      fullContent: `
        <h1>Karma verstehen: Vergangene Leben und heutiges Schicksal</h1>
        
        <h2>Was ist Karma?</h2>
        <p><strong>Karma</strong> ist das spirituelle Gesetz von Ursache und Wirkung, das sich über multiple Existenzen erstreckt und Ihr heutiges <strong>Schicksal</strong> maßgeblich beeinflusst. Es ist kein System von Belohnung und Bestrafung, sondern ein natürliches Gesetz des Lernens und Wachsens.</p>

        <h3>Die drei Arten von Karma</h3>
        <ul>
          <li><strong>Sanchita Karma:</strong> Das angesammelte Karma aller vergangenen Leben</li>
          <li><strong>Prarabdha Karma:</strong> Das aktivierte Karma für dieses Leben</li>
          <li><strong>Kriyamana Karma:</strong> Das gegenwärtig geschaffene Karma</li>
        </ul>

        <h2>Karma in der Vedischen Astrologie</h2>
        
        <h3>Planeten als Karma-Träger</h3>
        <p>Jeder Planet repräsentiert spezifische karmische Themen:</p>
        <ul>
          <li><strong>Saturn (Shani):</strong> Karma aus Pflichtvernachlässigung und Verantwortung</li>
          <li><strong>Rahu (Nordknoten):</strong> Unerfüllte materielle Wünsche aus vergangenen Leben</li>
          <li><strong>Ketu (Südknoten):</strong> Spirituelle Meisterschaft und Loslösung</li>
          <li><strong>Jupiter (Guru):</strong> Verdienste aus tugendhaften Handlungen</li>
          <li><strong>Mars (Mangal):</strong> Karma aus Gewalt und Impulsivität</li>
        </ul>

        <h3>Die Häuser als karmische Bühnen</h3>
        <p>Die 12 Häuser zeigen, wo sich karmische Themen manifestieren:</p>
        <ul>
          <li><strong>1. Haus:</strong> Karma der individuellen Existenz</li>
          <li><strong>7. Haus:</strong> Beziehungs-Karma</li>
          <li><strong>10. Haus:</strong> Berufs-Karma</li>
          <li><strong>12. Haus:</strong> Karma der Befreiung</li>
        </ul>

        <h2>Karmische Beziehungsmuster erkennen</h2>
        
        <h3>Wiederholende Beziehungsdynamiken</h3>
        <p>Karmische Beziehungsmuster zeigen sich durch:</p>
        <ul>
          <li>Immer gleiche Konfliktthemen mit verschiedenen Partnern</li>
          <li>Unerklärliche starke Anziehung oder Abneigung</li>
          <li>Opfer-Retter-Verfolger-Dynamiken</li>
          <li>Unfähigkeit, sich von ungesunden Beziehungen zu lösen</li>
        </ul>

        <h3>Astrologische Hinweise auf karmische Beziehungen</h3>
        <ul>
          <li>Saturn- oder Rahu/Ketu-Verbindungen zwischen Horoskopen</li>
          <li>Planeten im 12. Haus (verborgenes Karma)</li>
          <li>Starke Mondknoten-Aspekte</li>
          <li>Wiederholende Planetenmuster in Synastrie</li>
        </ul>

        <h2>Methoden zur karmischen Reinigung</h2>
        
        <h3>Spirituelle Praktiken</h3>
        <ul>
          <li><strong>Meditation und Selbstreflexion:</strong> Bewusstwerdung karmischer Muster</li>
          <li><strong>Mantra-Rezitation:</strong> Spezifische Klänge zur karmischen Reinigung</li>
          <li><strong>Yagya (Feuerzeremonien):</strong> Traditionelle vedische Reinigungsrituale</li>
          <li><strong>Service (Seva):</strong> Selbstloses Dienen zur Karma-Transformation</li>
        </ul>

        <h3>Therapeutische Ansätze</h3>
        <ul>
          <li><strong>Karmische Aufstellungen:</strong> Systemische Arbeit mit vergangenen Leben</li>
          <li><strong>Regressionstherapie:</strong> Zugang zu vergangenen Leben</li>
          <li><strong>Familienstellen:</strong> Lösung transgenerationaler Muster</li>
          <li><strong>Traumaarbeit:</strong> Heilung karmischer Wunden</li>
        </ul>

        <div class="cta-box">
          <h3>🔄 Karmische Reinigung und Transformation</h3>
          <p>Lösen Sie alte karmische Muster für ein freieres und erfüllteres Leben.</p>
          <p>Beratung: <strong>+41 79 261 33 31</strong> | Zürich und online</p>
        </div>

        <h2>Von karmischer Bindung zu spiritueller Freiheit</h2>
        
        <h3>Der Weg der bewussten Karma-Transformation</h3>
        <p>Die Transformation von karmischer Bindung zu spiritueller Freiheit erfolgt durch:</p>
        <ol>
          <li><strong>Erkennen:</strong> Bewusstwerdung der karmischen Muster</li>
          <li><strong>Annehmen:</strong> Akzeptanz der karmischen Lektionen</li>
          <li><strong>Transformieren:</strong> Aktive Veränderung durch bewusstes Handeln</li>
          <li><strong>Integrieren:</strong> Einbauen der gelernten Lektionen</li>
          <li><strong>Transzendieren:</strong> Überwindung der karmischen Bindungen</li>
        </ol>

        <h2>Praxisfälle: Erfolgreiche Karma-Transformationen</h2>
        
        <h3>Fall 1: Das wiederkehrende berufliche Scheitern</h3>
        <p>Ein Klient mit starkem Saturn im 10. Haus (berufliches Karma) konnte durch karmische Reinigung und bewusste Berufswahl endlich berufliche Erfüllung finden.</p>

        <h3>Fall 2: Die unerklärliche Beziehungsangst</h3>
        <p>Eine Klientin mit Rahu im 7. Haus (Beziehungs-Karma) löste durch Regressionstherapie ein Trauma aus einem vergangenen Leben und konnte danach eine gesunde Beziehung führen.</p>

        <h2>Praktische Übungen zur Selbstreflexion</h2>
        <p>Fragen zur Erkennung karmischer Muster:</p>
        <ul>
          <li>Welche Themen wiederholen sich in meinem Leben?</li>
          <li>Welche unerklärlichen Ängste oder Blockaden habe ich?</li>
          <li>Welche Beziehungsmuster kehren immer wieder?</li>
          <li>Welche Lebensbereiche fühlen sich "vorbestimmt" an?</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "karma-schicksal",
      author: "Suthakar Parameswaran",
      date: "2024-01-03",
      readTime: "22 min",
      slug: "karma-verstehen-vergangene-leben-schicksal",
      tags: ["Karma", "Schicksal", "Vergangene Leben", "Reinkarnation", "Ursache Wirkung", "Karmische Muster", "Lösung", "Reinigung"],
      metaDescription: "Karma verstehen lernen: Wie vergangene Leben Ihr heutiges Schicksal, Ihre Beziehungen und Lebensherausforderungen beeinflussen. Praktische Wege zur karmischen Reinigung und Transformation.",
      difficulty: "Fortgeschritten",
      rating: 4.8
    },  {
      id: 9,
      title: "Liebesbeziehung verbessern: Vedische Astrologie für harmonische Partnerschaft und tiefere Verbindung",
      excerpt: "Verbessern Sie Ihre Liebesbeziehung mit den Erkenntnissen der Vedischen Astrologie. Verstehen Sie die Planeten-Einflüsse auf Partnerschaft, Kommunikation und Intimität für harmonischere Beziehungen.",
      fullContent: `
        <h1>Liebesbeziehung verbessern mit Vedischer Astrologie</h1>
        
        <h2>Die astrologischen Grundlagen gesunder Beziehungen</h2>
        <p>Eine <strong>Liebesbeziehung</strong> zu verbessern erfordert oft mehr als nur Kommunikation - es erfordert das Verständnis der <strong>karmischen Dynamik</strong> zwischen zwei Menschen. Die Vedische Astrologie bietet tiefe Einblicke in die energetischen und karmischen Grundlagen Ihrer Partnerschaft.</p>

        <h3>Die Schlüsselplaneten für Beziehungen</h3>
        <ul>
          <li><strong>Venus (Shukra):</strong> Liebe, Romantik, Harmonie und Werte</li>
          <li><strong>Mars (Mangal):</strong> Leidenschaft, Sexualität und Durchsetzung</li>
          <li><strong>Mond (Chandra):</strong> Emotionen, Gefühle und Bedürfnisse</li>
          <li><strong>Jupiter (Guru):</strong> Wachstum, Weisheit und Expansion</li>
          <li><strong>Saturn (Shani):</strong> Verpflichtung, Stabilität und Verantwortung</li>
        </ul>

        <h2>Das 7. Haus: Das Haus der Partnerschaft</h2>
        
        <h3>Die Bedeutung des 7. Hauses</h3>
        <p>Das <strong>7. Haus (Kalatra Bhava)</strong> ist das primäre Haus für Ehe und Partnerschaft. Seine Analyse zeigt:</p>
        <ul>
          <li>Ihre natürliche Beziehungsfähigkeit</li>
          <li>Den Typ Partner, den Sie anziehen</li>
          <li>Mögliche Herausforderungen in Beziehungen</li>
          <li>Die karmische Qualität Ihrer Partnerschaften</li>
        </ul>

        <h3>Der Herrscher des 7. Hauses</h3>
        <p>Der Planet, der das Zeichen des 7. Hauses regiert, gibt wichtige Hinweise auf:</p>
        <ul>
          <li>Die Qualität Ihrer Beziehungen</li>
          <li>Die Art von Partnern, die Sie anziehen</li>
          <li>Die Themen, die in Beziehungen auftauchen</li>
          <li>Die Entwicklung Ihrer Beziehungsfähigkeit</li>
        </ul>

        <h2>Venus und Mars: Die kosmischen Liebenden</h2>
        
        <h3>Venus - Die Göttin der Liebe</h3>
        <p><strong>Venus</strong> zeigt, wie Sie lieben und was Sie in der Liebe brauchen:</p>
        <ul>
          <li>Ihre Ausdrucksweise in der Liebe</li>
          <li>Ihre Werte in Beziehungen</li>
          <li>Was Sie romantisch und sinnlich anzieht</li>
          <li>Ihre Fähigkeit zur Hingabe und Verbindung</li>
        </ul>

        <h3>Mars - Der Krieger der Leidenschaft</h3>
        <p><strong>Mars</strong> repräsentiert Ihre sexuelle Energie und Durchsetzungskraft:</p>
        <ul>
          <li>Ihre Initiative in Beziehungen</li>
          <li>Ihre sexuelle Ausdrucksweise</li>
          <li>Wie Sie mit Konflikten umgehen</li>
          <li>Ihre Fähigkeit, Grenzen zu setzen</li>
        </ul>

        <h2>Praktische Anwendungen für bestehende Beziehungen</h2>
        
        <h3>Kommunikationsverbesserung</h3>
        <p>Durch die Analyse von Mercury und dem 3. Haus können Sie:</p>
        <ul>
          <li>Ihren Kommunikationsstil verstehen</li>
          <li>Sprachliche Missverständnisse vermeiden</li>
          <li>Effektivere Gesprächstechniken entwickeln</li>
          <li>Emotionale Bedürfnisse besser ausdrücken</li>
        </ul>

        <h3>Intimitätsvertiefung</h3>
        <p>Für mehr Intimität betrachten wir:</p>
        <ul>
          <li>Die Mond-Position für emotionale Verbindung</li>
          <li>Venus-Mars-Aspekte für sexuelle Kompatibilität</li>
          <li>Das 8. Haus für tiefe emotionale Bindungen</li>
          <li>Das 12. Haus für spirituelle Verbindung</li>
        </ul>

        <div class="cta-box">
          <h3>💞 Beziehungsberatung buchen</h3>
          <p>Verbessern Sie Ihre Beziehung mit astrologischen Erkenntnissen.</p>
          <p>Kontakt: <strong>+41 79 261 33 31</strong> | Diskret und professionell</p>
        </div>

        <h2>Lösungsansätze für häufige Beziehungsprobleme</h2>
        
        <h3>Bei Kommunikationsproblemen</h3>
        <ul>
          <li>Mercury-Stärkung durch spezifische Mantras</li>
          <li>Kommunikationstraining basierend auf den Mondzeichen</li>
          <li>Entwicklung von Empathie durch Mond-Arbeit</li>
          <li>Konfliktlösungsstrategien entsprechend der Mars-Position</li>
        </ul>

        <h3>Bei mangelnder Leidenschaft</h3>
        <ul>
          <li>Venus- und Mars-Aktivierung durch Rituale</li>
          <li>Sexuelle Energiearbeit entsprechend der planetaren Konstitution</li>
          <li>Romantik-Strategien basierend auf den Venus-Positionen</li>
          <li>Kreative Ausdrucksformen für mehr Leidenschaft</li>
        </ul>

        <h2>Erfolgsgeschichten aus der Praxis</h2>
        
        <h3>Fall 1: Die wiederbelebte Ehe</h3>
        <p>Ein Ehepaar mit 15-jähriger Ehe konnte durch gezielte astrologische Beratung ihre verlorene Leidenschaft wiederentdecken und ihre Kommunikation grundlegend verbessern.</p>

        <h3>Fall 2: Die karmische Reinigung</h3>
        <p>Ein Paar mit starken karmischen Bindungen aus vergangenen Leben löste durch spezifische Reinigungsrituale alte Muster und fand zu einer neuen, gesünderen Beziehungsdynamik.</p>

        <h2>Vorbeugung und langfristige Beziehungsgesundheit</h2>
        <p>Für nachhaltig glückliche Beziehungen empfehle ich:</p>
        <ul>
          <li>Regelmäßige gemeinsame Reflexion der Beziehungsdynamik</li>
          <li>Bewusste Pflege der romantischen und sexuellen Verbindung</li>
          <li>Respekt für die individuellen astrologischen Bedürfnisse</li>
          <li>Gemeinsame spirituelle Praxis zur Vertiefung der Verbindung</li>
        </ul>
      `,
      image: "/api/placeholder/800/400",
      category: "partner-liebe",
      author: "Suthakar Parameswaran",
      date: "2024-01-01",
      readTime: "16 min",
      slug: "liebesbeziehung-verbessern-vedische-astrologie-partnerschaft",
      tags: ["Liebesbeziehung", "Partnerschaft", "Harmonie", "Liebe", "Romantik", "Beziehung verbessern", "Verständnis", "Kommunikation"],
      metaDescription: "Liebesbeziehung verbessern mit Vedischer Astrologie: Planeten-Einflüsse verstehen für harmonischere und erfüllendere Partnerschaften. Praktische Tipps für Kommunikation und Intimität.",
      difficulty: "Mittel",
      rating: 4.7
    }]
/* ———————————————————————————————————————
   🔧 Gemeinsame Styles & Helfer (einmal definieren)
——————————————————————————————————————— */
const postStyles = `
  <style>
    .post{line-height:1.7}
    .post-header{margin-bottom:1rem}
    .lead{opacity:.9;margin:.25rem 0 0.75rem}
    h1{margin:.2rem 0 .6rem}
    h2{margin:1.25rem 0 .5rem}
    h3{margin:.9rem 0 .4rem}
    ul,ol{padding-left:1.25rem}
    .grid-2{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
    .cta-box{border:1px solid #eaeaea;padding:1rem;border-radius:12px;margin:1rem 0;background:#fafafa}
    .note-box{background:#f8fbff;border-left:4px solid #cfe5ff;padding:.75rem 1rem;border-radius:8px;margin:.75rem 0}
    .faq h3{margin-top:.6rem}
  </style>
`;

function faqSchema(items){
  return `
<script type="application/ld+json">${JSON.stringify({
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity: items.map(i=>({
      '@type':'Question',
      name:i.q,
      acceptedAnswer:{'@type':'Answer',text:i.a}
    }))
  })}<\/script>`;
}

// Volltext Artikel 5 als Konstante (bereits oben referenziert)
const TRRENNUNG_ARTICLE = `
  <h1>Trennung überwinden: Spirituelle Heilung nach Beziehungsende</h1>
  <p>Eine <strong>Trennung</strong> gehört zu den tiefgreifendsten Erfahrungen des Lebens. Zwischen Schock, Trauer und Orientierungslosigkeit hilft die <strong>Vedische Astrologie (Jyotish)</strong>, Sinn zu finden, Muster zu erkennen und einen klaren, heilsamen Weg nach vorn zu öffnen.</p>
  <section>
    <h2>1) Was passiert emotional nach einer Trennung?</h2>
    <ul>
      <li><strong>Schock &amp; Leere:</strong> Das Nervensystem sucht Sicherheit und Vorhersagbarkeit.</li>
      <li><strong>Grübeln &amp; Selbstzweifel:</strong> "Hätte ich…?" – typische kognitive Schleifen.</li>
      <li><strong>Bindungs-Trigger:</strong> Alte Wunden (Kindheit/Bindung) werden aktiviert.</li>
      <li><strong>Körperliche Symptome:</strong> Schlaf, Appetit, Energie – alles kann schwanken.</li>
    </ul>
    <p>Diese Reaktionen sind <em>normal</em>. Heilung ist kein linearer Prozess, sondern verläuft in Wellen.</p>
  </section>
  <section>
    <h2>2) Vedische Astrologie: Klarheit über Muster &amp; Zeitfenster</h2>
    <p>Jyotish macht unsichtbare Dynamiken sichtbar. In einer Beratung betrachten wir u. a.:</p>
    <ul>
      <li><strong>7. Haus &amp; Venus (Shukra):</strong> Beziehungsstil, Attraktion, Werte in Liebe.</li>
      <li><strong>Mond (Chandra):</strong> Emotionale Bedürfnisse, Regulation, Bindung.</li>
      <li><strong>Rahu/Ketu-Achse:</strong> Karmische Themen, wiederkehrende Beziehungsmuster.</li>
      <li><strong>Dasha-Perioden &amp; Transite:</strong> Günstige Phasen für Rückzug, Neubeginn, Versöhnung.</li>
    </ul>
    <div class="note-box">
      <p><strong>Ergebnis:</strong> Sie erhalten eine <strong>individuelle Roadmap</strong> mit Zeitfenstern (z. B. 30/60/90 Tage), emotionalen Fokusthemen und konkreten <em>Upayas</em> (heilende Maßnahmen).</p>
    </div>
  </section>
  <section>
    <h2>3) 3‑Phasen‑Plan: Von Akut zu Neubeginn</h2>
    <h3>Phase A – Stabilisieren (Tage 1–21)</h3>
    <ol>
      <li><strong>Kontaktpause</strong> (wo möglich) für Nervensystem-Regulation.</li>
      <li><strong>Rhythmus</strong>: Schlaf, leichte Bewegung, regelmäßige Mahlzeiten.</li>
      <li><strong>Journaling</strong>: Was fühle ich? Was brauche ich heute?</li>
      <li><strong>Sozialer Halt</strong>: 1–2 Vertrauenspersonen aktiv einbinden.</li>
    </ol>
    <h3>Phase B – Verstehen &amp; Loslassen (Tage 22–60)</h3>
    <ol>
      <li><strong>Musterarbeit</strong>: Wiederkehrende Dynamiken erkennen (Rahu/Ketu).</li>
      <li><strong>Rituale</strong>: Abschiedsbrief (ohne Abschicken), symbolisches Loslassen.</li>
      <li><strong>Ressourcen</strong>: Hobbys, Natur, kleine Ziele (Mikro-Erfolge).</li>
    </ol>
    <h3>Phase C – Neu ausrichten (Tage 61–90)</h3>
    <ol>
      <li><strong>Werte klären</strong>: Was ist mir in Partnerschaft wirklich wichtig?</li>
      <li><strong>Zukunftsbild</strong>: Vision, Leitwerte, erste Schritte.</li>
      <li><strong>Timing</strong> mit Jyotish: Günstige Transite/Dashas für Neubeginn nutzen.</li>
    </ol>
  </section>
  <section>
    <h2>4) Spirituelle &amp; praktische Heilmethoden (Upayas)</h2>
    <ul>
      <li><strong>Meditation auf das Herzchakra (Anahata)</strong>: 10–15 Min/Tag, Atem zählen.</li>
      <li><strong>Mantra-Praxis</strong> (z. B. für inneren Frieden): <em>Om Shanti Shanti Shanti</em>, 108‑mal täglich.</li>
      <li><strong>Kerzen-/Feuerritual</strong>: Symbolisches Loslassen, Dank &amp; Abschluss.</li>
      <li><strong>Achtsame Bewegung</strong>: Gehen, Yoga, sanftes Krafttraining zur Erdung.</li>
      <li><strong>Digital Detox</strong>: Social‑Media‑Trigger (Profil des/der Ex) reduzieren.</li>
    </ul>
    <p class="disclaimer">Hinweis: Spirituelle Methoden ersetzen keine Therapie. Bei anhaltendem Leid wenden Sie sich bitte an Fachpersonen.</p>
  </section>
  <section>
    <h2>5) Was Sie in meiner Beratung erhalten</h2>
    <ul class="deliverables">
      <li>Analyse von <strong>Beziehungs-Häusern</strong>, Venus/Mond, Rahu/Ketu, Dasha/Transiten.</li>
      <li><strong>Individueller 90‑Tage‑Heilplan</strong> inkl. Ritualen &amp; Reflexionsfragen (PDF).</li>
      <li><strong>Terminfenster</strong> für Selbstfürsorge, Gespräche, Neuanfänge.</li>
      <li>Optional: <strong>Partnervergleich (Synastrie)</strong> und Empfehlungen zum Umgang.</li>
    </ul>
  </section>
  <section class="faq">
    <h2>Häufige Fragen (FAQ)</h2>
    <h3>Kann Astrologie meinen Ex zurückbringen?</h3>
    <p>Jyotish zeigt <em>Tendenzen &amp; Zeitfenster</em>, respektiert aber freien Willen. Ziel ist <strong>Klarheit und Heilung</strong> – ob für einen neuen Versuch oder einen echten Neuanfang.</p>
    <h3>Wie schnell geht Heilung?</h3>
    <p>Individuell. Viele spüren innerhalb von 2–4 Wochen mehr Stabilität, wenn sie dem Plan folgen.</p>
    <h3>Bringt eine Kontaktpause wirklich etwas?</h3>
    <p>Eine kurze, bewusste Pause hilft, Gefühle zu klären und Muster nicht zu wiederholen.</p>
  </section>
  <div class="cta-box">
    <h3>📞 Begleitung nach Trennung – Termin vereinbaren</h3>
    <p>Telefon: <strong>+41 79 261 33 31</strong> | E‑Mail: <strong>sutha.eatham@gmail.com</strong></p>
    <p>Ort: <strong>Zürich, Schweiz</strong> | Online weltweit verfügbar</p>
  </div>
  ${postStyles}
  ${faqSchema([
    {q:'Kann Astrologie meinen Ex zurückbringen?', a:'Jyotish zeigt Tendenzen & Zeitfenster, respektiert aber freien Willen. Ziel ist Klarheit & Heilung.'},
    {q:'Wie schnell geht Heilung?', a:'Individuell – oft spürbar in 2–4 Wochen mit Struktur & Selbstfürsorge.'},
    {q:'Bringt eine Kontaktpause etwas?', a:'Ja, kurzfristig kann sie Regulation & Klarheit fördern.'}
  ])}
`;


  // Filtrer les articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "alle" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Popup Component
  const ArticlePopup = ({ post, onClose }) => {
    if (!post) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-[#ff6e54] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#260C56] mt-3">
                  {post.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>{post.readTime} Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="w-4 h-4 text-yellow-400" />
                <span>{post.rating}/5.0</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-[#260C56] mb-2">Zusammenfassung</h3>
              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.fullContent }}
            />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-[#260C56] mb-3">Themen</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
              <button className="flex-1 bg-[#ff6e54] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#ff8e54] transition-colors duration-300 flex items-center justify-center gap-2">
                <FaHeart className="w-5 h-5" />
                Vedische Astrologie Beratung buchen
              </button>
              <button className="flex-1 bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <FaPhone className="w-5 h-5" />
                Telefonische Beratung
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-[#260C56] mb-3">Kontakt für Vedische Astrologie Beratung</h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhone className="w-4 h-4 text-green-600" />
                  <a href="tel:+41792613331" className="text-gray-700 hover:text-[#ff6e54]">+41 79 261 33 31</a>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 text-blue-600" />
                  <a href="mailto:sutha.eatham@gmail.com" className="text-gray-700 hover:text-[#ff6e54]">sutha.eatham@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                  <span className="text-gray-700">Zürich, Schweiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Astrologie Blog - Vedische & Indische Astrologie Beratung Zürich | Suthakar Parameswaran</title>
        <meta 
          name="description" 
          content="Professioneller Astrologie Blog mit Vedischer und Indischer Astrologie für Liebe, Beruf, Zukunft, Karma und Lebensberatung in Zürich und gesamte Schweiz." 
        />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <meta name="author" content="Suthakar Parameswaran" />
        
        {/* Balises géographiques */}
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.3744;8.5225" />
        <meta name="ICBM" content="47.3744, 8.5225" />
        
        {/* Open Graph optimisé */}
        <meta property="og:title" content="Astrologie Blog - Vedische & Indische Astrologie Beratung Zürich" />
        <meta property="og:description" content="Professionelle Astrologie Beratung für Liebe, Beruf, Zukunft und Lebensfragen. Vedische und indische Astrologie in Zürich." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cittarastro.ch/blog" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Vedische Astrologie Zürich - Suthakar Parameswaran" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        
        {/* Blog Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Astrologie Blog - Vedische Astrologie Zürich",
              "description": "Professionelle Astrologie Artikel zu Vedischer Astrologie, Partnerhoroskop, Karma und Lebensberatung",
              "url": "https://www.cittarastro.ch/blog",
              "publisher": {
                "@type": "Person",
                "name": "Suthakar Parameswaran",
                "telephone": "+41792613331",
                "email": "sutha.eatham@gmail.com"
              },
              "inLanguage": "de-CH"
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Astrologie Blog
              <span className="block text-2xl md:text-3xl text-[#ff8e54] mt-4 font-light">
                Vedische & Indische Astrologie Beratung in Zürich
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Professionelle Astrologie Beratung für Liebe, Beruf, Zukunft, Karma und Lebensfragen. 
              Vedische und indische Astrologie in Zürich, gesamte Schweiz und online.
            </p>

            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Astrologie Themen suchen: Partnerhoroskop, Karma, Zukunft, Liebesbeziehung, Trennung..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent"
                />
              </div>
            </div>

            {/* Badges de services */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                ✅ Astrologie Beratung: +41 79 261 33 31
              </span>
              <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                💻 Online Astrologie Beratung
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                🇨🇭 Astrologie Zürich & Schweizweit
              </span>
            </div>
          </div>
        </section>

        {/* Catégories */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#ff6e54] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-80">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles de blog */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#260C56] to-[#4c1d95] flex items-center justify-center">
                      <span className="text-4xl text-white/80">🪐</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#ff6e54] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaUser className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#260C56] mb-4 group-hover:text-[#ff6e54] transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span>{post.rating}/5.0</span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[#ff6e54] font-semibold group/btn">
                        <span>Artikel lesen</span>
                        <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Keine Artikel gefunden</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Versuchen Sie einen anderen Suchbegriff.
                </p>
              </div>
            )}
          </div>
        </section>

        <ArticlePopup post={selectedPost} onClose={() => setSelectedPost(null)} />
      </main>

      <style jsx>{`
        .prose {
          color: #374151;
          line-height: 1.75;
        }
        .prose h1, .prose h2, .prose h3 {
          color: #260C56;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .prose h1 {
          font-size: 2.25rem;
          border-bottom: 2px solid #ff6e54;
          padding-bottom: 0.5rem;
        }
        .prose h2 {
          font-size: 1.875rem;
        }
        .prose h3 {
          font-size: 1.5rem;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #260C56;
          font-weight: 600;
        }
        .cta-box {
          background: linear-gradient(135deg, #ff6e54, #ff8e54);
          color: white;
          padding: 1.5rem;
          border-radius: 1rem;
          margin: 2rem 0;
        }
        .cta-box h3 {
          color: white;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}