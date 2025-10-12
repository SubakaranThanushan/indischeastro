"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaSearch, FaCalendar, FaUser, FaClock, FaArrowRight, FaShare, FaBookmark, FaTimes, FaStar, FaBook, FaHeart, FaGlobe, FaPhone, FaVideo, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// Données structurées JSON-LD pour le SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Indische Astrologie - Suthakar Parameswaran", // ✅ CORRIGÉ - Nom cohérent
  "description": "Professionelle Vedische Astrologie Beratung, Indische Astrologie, Karma-Analyse und spirituelle Lebensberatung in Zürich und gesamte Schweiz",
  "url": "https://indischeastro.ch/blog", // ✅ CORRECT - URL de la page blog
  "telephone": "+41792613331",
  "email": "sutha.eatham@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zwinglistrasse 37", // ✅ AJOUTÉ - Adresse complète
    "addressLocality": "Zürich",
    "postalCode": "8004",
    "addressRegion": "Zürich",
    "addressCountry": "Switzerland"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.3744", // ✅ CORRIGÉ - Coordonnées exactes Zürich
    "longitude": "8.5225"
  },
  "openingHours": [
    "Mo-Fr 14:00-20:00", // ✅ CORRIGÉ - Heures cohérentes
    "Sa 09:00-14:00"
  ],
  "serviceType": [
    "Vedische Astrologie Beratung",
    "Indische Astrologie Beratung",
    "Lebensberatung",
    "Partner Horoskop",
    "Karma Beratung",
    "Chakra Energie Arbeit",
    "Fernberatung Telefonisch"
  ],
  "areaServed": {
    "@type": "GeoCircle", // ✅ AMÉLIORÉ - Format structuré
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "47.3744",
      "longitude": "8.5225"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vedische Astrologie Dienstleistungen", // ✅ CORRIGÉ - Nom cohérent
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vedische Astrologie Beratung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Telefonische Astrologie Beratung"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Vedischer und Westlicher Astrologie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Vedische Astrologie (Jyotish) arbeitet mit dem siderischen Tierkreis und berücksichtigt die tatsächliche Position der Sternbilder. Sie ist tief mit dem Karma-Gedanken verbunden und bietet präzisere Langzeitvorhersagen durch das Dasha-System."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich auch eine telefonische Beratung buchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ich biete professionelle Astrologie-Beratungen per Telefon, Video-Call und online für Kunden in der gesamten Schweiz und Deutschland an. Die Fernberatung ist genauso wirksam wie persönliche Termine."
      }
    }
  ]
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [selectedPost, setSelectedPost] = useState(null);

  // Meta keywords optimisés pour le SEO - SPÉCIFIQUES BLOG
  const metaKeywords = [
    // Mots-clés principaux BLOG
    "Vedische Astrologie Blog", "Indische Astrologie Artikel", "Jyotish Wissen", 
    "Karma Blog Schweiz", "Partner Horoskop Analyse Blog", "Chakra Heilung Artikel",
    "Vedische Astrologie lernen", "Planeten Bedeutung Blog", "Mondzeichen Erklärung",
    "Spirituelles Wissen Blog", "Lebensberatung Artikel", "Schicksal Astrologie",
    
    // Mots-clés géographiques BLOG
    "Astrologie Blog Zürich", "Vedische Astrologie Schweiz Blog", "Indische Astrologie Deutschland",
    
    // Mots-clés services BLOG  
    "Online Astrologie Beratung Blog", "Telefonische Beratung Erfahrungen",
    
    // Mots-clés auteurs
    "Suthakar Parameswaran Blog", "Indischeastro Blog", "Vedische Astrologie Experte"
  ];

  // Catégories pour le filtrage - nombres réels
  const categories = [
    { id: "alle", name: "Alle Kategorien", count: 6 },
    { id: "vedische-astrologie", name: "Vedische Astrologie", count: 3 },
    { id: "karma", name: "Karma & Reinkarnation", count: 1 },
    { id: "planeten", name: "Planeten & Häuser", count: 1 },
    { id: "beziehung", name: "Beziehung & Partnerschaft", count: 1 }
  ];

  // Articles de blog avec contenu SEO optimisé - 6 articles réels
  const blogPosts = [
    {
      id: 1,
      title: "Die 12 Häuser im vedischen Horoskop: Eine tiefgehende Analyse des Schicksals",
      excerpt: "Tauchen Sie ein in die faszinierende Welt der vedischen Astrologie. Entdecken Sie, wie die 12 Häuser (Bhavas) als kosmische Landkarte jeden Aspekt Ihrer Existenz – von Ihrer Persönlichkeit bis zu Ihrer spirituellen Bestimmung – prägen und lenken.",
      fullContent: `
        <h1>Die 12 Häuser im vedischen Horoskop: Komplette Analyse für Vedische Astrologie Beratung</h1>
        <h2>Die Grundlage der 12 Häuser im Jyotish: Eine Landkarte Ihrer Seele</h2>
        <p>Die vedische Astrologie, oder Jyotish („die Wissenschaft des Lichts“), versteht das Geburtshoroskop nicht als starres Schicksal, sondern als eine dynamische Landkarte Ihrer karmischen Tendenzen und Ihres Seelenpotentials. Das Herzstück dieser Karte sind die <strong>12 Häuser (Bhavas)</strong>. Jedes Haus repräsentiert ein spezifisches Lebensgebiet, ein Bühnenstück im großen Drama Ihres Lebens. Die Planeten, die zum Zeitpunkt Ihrer Geburt in diesen Häusern standen, sind die Schauspieler, die diese Stücke mit Energie füllen und Ihr Erleben formen. Im Gegensatz zur westlichen Astrologie arbeitet Jyotish mit dem siderischen Tierkreis, der die tatsächliche Position der Sternbilder am Himmel berücksichtigt, was zu präziseren und oft anderslautenden Deutungen führen kann.</p>

        <h3>Haus 1: Das Aszendenten-Haus (Lagna) – Das Tor zum Selbst</h3>
        <p>Das erste Haus, der Aszendent (Lagna), ist der wichtigste Punkt im gesamten Horoskop. Es ist das Haus des <strong>„Ich bin“</strong>.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es repräsentiert Ihre körperliche Erscheinung, Ihre Persönlichkeit, Ihren Charakter, Ihren angeborenen Lebensimpuls und den allerersten Eindruck, den Sie auf andere machen. Es steht für Ihren Körper, Ihre Vitalität und die allgemeine Ausrichtung Ihres Lebens.</li>
          <li><strong>Tiefere Einsicht:</strong> Ein starkes, gut gestelltes erstes Haus verleiht ein starkes Selbstbewusstsein, Führungsqualitäten und eine robuste Konstitution. Ist es jedoch geschwächt oder von ungünstigen Planeten besetzt, kann dies auf Identitätskonflikte, einen schwachen Lebenswillen oder gesundheitliche Anfälligkeiten hindeuten. Der Aszendent setzt den Ton für das gesamte Leben.</li>
        </ul>

        <h3>Haus 2: Das Haus des Wohlstands (Dhana Bhava) – Ihr irdisches Fundament</h3>
        <p>Das zweite Haus baut auf dem Selbst des ersten Hauses auf und beantwortet die Frage: <strong>„Was besitze ich?“</strong>.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es herrscht über Finanzen, Besitztümer, materielle Ressourcen, Familienwerte, die Sprache (Ihre Fähigkeit zu sprechen und sich auszudrücken), die frühe Kindheit und die Ernährung.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist Ihre persönliche Schatzkammer. Ein starkes zweites Haus verspricht finanziellen Wohlstand, eine eloquente Ausdrucksweise und ein starkes Fundament in der Familie. Schwierigkeiten hier können auf Geldprobleme, Sprachhindernisse oder einen Mangel an familiärer Unterstützung hindeuten. Es zeigt Ihr angeborenes Talent, Ressourcen anzuhäufen.</li>
        </ul>

        <h3>Haus 3: Das Haus der Anstrengung (Parakrama Bhava) – Mut und Kommunikation</h3>
        <p>Das dritte Haus steht für Ihre Energie, sich in der unmittelbaren Welt durchzusetzen.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es regiert Geschwister, Mut, eigene Anstrengungen, Kurzreisen, Kommunikation (besonders schriftlich), Hobbys, handwerkliche Fähigkeiten und kurzfristige Ambitionen.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist der innere Krieger. Ein starkes drittes Haus verleiht Tapferkeit, Entschlossenheit, künstlerische oder handwerkliche Begabung und gute Beziehungen zu Geschwistern. Schwächen können sich als Schüchternheit, mangelnde Initiative oder Entfremdung von der Familie zeigen.</li>
        </ul>

        <h3>Haus 4: Das Haus des Glücks (Sukha Bhava) – Zuhause und Herz</h3>
        <p>Das vierte Haus sucht nach emotionalem Komfort und Sicherheit.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es steht für die Mutter, das Zuhause, das innere Glück und den emotionalen Frieden, Immobilien, Fahrzeuge, die frühe Ausbildung und die tief verwurzelten Traditionen.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies sind die Wurzeln Ihres Lebensbaumes. Ein starkes viertes Haus schenkt ein glückliches Zuhause, ein starkes Heimatgefühl, emotionale Stabilität und eine gute Beziehung zur Mutter. Probleme hier können auf emotionale Unruhe, häufige Umzüge oder Konflikte mit der Mutter hindeuten.</li>
        </ul>

        <h3>Haus 5: Das Haus der Kreativität (Putra Bhava) – Intelligenz und Vergnügen</h3>
        <p>Das fünfte Haus ist das Feld der puren Schöpfung und Freude.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es herrscht über Kinder, Kreativität, höhere Intelligenz und Verstand, romantische Liebe, Spekulationen (auch Glücksspiel), Hingabe und die angesammelten guten Taten (Punya) aus vergangenen Leben.</li>
          <li><strong>Tiefere Einsicht:</strong> Ein starkes fünftes Haus verleiht einen scharfen Verstand, künstlerische Talente, Erfolg in Liebesangelegenheiten und mit Kindern sowie die Gunst des Glücks. Schwierigkeiten können sich als Probleme mit der Fruchtbarkeit, Liebeskummer oder übermäßiger Stolz äußern.</li>
        </ul>

        <h3>Haus 6: Das Haus der Feinde (Ripu Bhava) – Herausforderungen und Dienst</h3>
        <p>Das sechste Haus stellt die Hindernisse dar, die Sie stärker machen.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es beherrscht Schulden, Krankheiten, Konflikte, Feinde, tägliche Routine, Dienstleistung für andere, kleine Tiere und Hygiene.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist das Fitnessstudio des Lebens. Ein starkes sechstes Haus macht Sie zu einem großartigen Problemlöser, Heiler oder disziplinierten Arbeiter. Es verleiht Immunität gegen Feinde und Krankheiten. Eine Schwächung kann zu chronischen Gesundheitsproblemen, vielen Konkurrenten oder ständigen rechtlichen Auseinandersetzungen führen.</li>
        </ul>

        <h3>Haus 7: Das Haus der Partnerschaft (Kalatra Bhava) – Der Spiegel Ihrer Selbst</h3>
        <p>Das siebte Haus ist der direkte Gegenpol zum ersten Haus. Wenn das erste Haus „Ich“ ist, ist das siebte Haus <strong>„Der Andere“</strong>.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es ist das primäre Haus für Ehe, lebenslange Partnerschaften, Geschäftspartner, alle vertraglichen Vereinbarungen und die Beziehung zur Öffentlichkeit.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist der Tanz der Komplementarität. Ein starkes, gut besetztes siebtes Haus zeigt harmonische und unterstützende Partnerschaften in Ehe und Business an. Es zeigt eine natürliche Fähigkeit zur Zusammenarbeit. Wenn es beeinträchtigt ist, kann es zu Verzögerungen bei der Heirat, Untreue oder schwierigen Partnern kommen.</li>
        </ul>

        <h3>Haus 8: Das Haus der Transformation (Ayur Bhava) – Geheimnisse und Wiedergeburt</h3>
        <p>Das achte Haus ist das tiefste und geheimnisvollste. Es regiert die Transformationen, die uns zu einem neuen Menschen machen.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es steht für die Lebensdauer, Erbschaften, die Ressourcen des Partners, tiefe psychologische Krisen, Tod und Wiedergeburt, Okkultes, Sexualität und Chirurgie.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist der alchemistische Schmelztiegel. Ein starkes achtes Haus kann außergewöhnliche psychische Fähigkeiten, unerwartete finanzielle Zuwendungen (Erbschaften) und enorme Widerstandskraft in Krisen verleihen. Eine Beeinträchtigung kann plötzliche Verluste, Ängste und intensive psychologische Kämpfe mit sich bringen.</li>
        </ul>

        <h3>Haus 9: Das Haus des Schicksals (Dharma Bhava) – Philosophie und höheres Lernen</h3>
        <p>Das neunte Haus ist eines der glückverheißendsten Häuser, da es die höchsten Segnungen und den Sinn des Lebens repräsentiert.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es herrscht über den Vater, den Guru (spirituellen Lehrer), Religion, Philosophie, höhere Bildung, Gesetz, Moral (Dharma), Fernreisen und großes Glück.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist Ihr moralischer und spiritueller Kompass. Ein starkes neuntes Haus bringt Weisheit, einen starken Sinn für Gerechtigkeit, Glück im Leben und eine Verbindung zu weisen Lehrern oder Mentoren. Es ist das Haus des günstigen Schicksals und zeigt an, ob Sie auf Ihrem richtigen Lebensweg (Dharma) sind.</li>
        </ul>

        <h3>Haus 10: Das Haus des Status (Karma Bhava) – Karriere und Berufung</h3>
        <p>Das zehnte Haus ist der Zenit des Horoskops, der höchste Punkt am Himmel zu Ihrer Geburt.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es regiert Beruf, Karriere, Ruf, Ehre, gesellschaftlichen Status, Regierung, Autorität und den Vater als Autoritätsfigur.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist der Berg, den Sie erklimmen, um von der Welt gesehen zu werden. Ein starkes zehntes Haus ist entscheidend für beruflichen Erfolg, Ruhm und eine Position der Autorität. Es zeigt Ihr Lebenswerk und Ihr Vermächtnis in der Gesellschaft an. Schwierigkeiten können auf berufliche Instabilität, mangelnde Anerkennung oder Konflikte mit Vorgesetzten hindeuten.</li>
        </ul>

        <h3>Haus 11: Das Haus der Gewinne (Labha Bhava) – Einkünfte und Wünsche</h3>
        <p>Das elfte Haus erfüllt die Hoffnungen des zehnten Hauses und bringt Fülle.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es beherrscht Einkünfte (als Ergänzung zum zweiten Haus), Gewinne, die Erfüllung aller Wünsche, Freunde, soziale Kreise, Netzwerke und ältere Geschwister.</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist das Füllhorn. Ein starkes elftes Haus ist ein mächtiger Indikator für Wohlstand, die Erfüllung von Herzenswünschen und einen großen Kreis einflussreicher und wohlwollender Freunde. Es ist das Haus der Hoffnungen und Träume, die wahr werden.</li>
        </ul>

        <h3>Haus 12: Das Haus der Befreiung (Moksha Bhava) – Das Unbewusste und das Ende</h3>
        <p>Das zwölfte Haus repräsentiert das Ende des Zyklus, das Loslassen und die endgültige Befreiung.</p>
        <ul>
          <li><strong>Umfassende Bedeutung:</strong> Es steht für Ausgaben, Verluste, Exil, Einsamkeit, Krankenhäuser, Gefängnisse, das Unterbewusstsein, Schlaf, Träume und die spirituelle Befreiung (Moksha).</li>
          <li><strong>Tiefere Einsicht:</strong> Dies ist der Ozean, in den sich der Fluss des Lebens ergießt. Ein starkes zwölftes Haus kann auf eine sehr spirituelle Person hinweisen, die mit Mitgefühl und einem Interesse für Meditation oder ein zurückgezogenes Leben gesegnet ist. Eine Beeinträchtigung kann zu übermäßigen Ausgaben, versteckten Feinden oder Gefühlen der Isolation führen. Letztendlich ist es das Tor zur transzendenten Wirklichkeit.</li>
        </ul>

        <h2>Praktische Anwendung im Alltag: Vom Wissen zur Weisheit</h2>
        <p>Das Verständnis der Häuser in Ihrem Geburtshoroskop ist kein passiver intellektueller Zeitvertreib. Es ist ein kraftvolles Werkzeug für die bewusste Lebensgestaltung. Durch die Analyse können Sie:</p>
        <ul>
          <li><strong>Berufliche Stärken identifizieren:</strong> Eine kombinierte Analyse der Häuser 2 (Ressourcen), 6 (Dienst) und 10 (Beruf) zeigt, wo Ihre natürlichen Talente liegen und in welchen Berufen Sie Erfüllung und Erfolg finden können.</li>
          <li><strong>Beziehungsdynamiken besser verstehen:</strong> Die Häuser 1 (Selbst), 4 (Emotionen), 7 (Partner) und 11 (Freunde) offenbaren Ihre Bedürfnisse in Beziehungen und die Art von Partnern, die Sie anziehen.</li>
          <li><strong>Finanzielle Chancen erkennen:</strong> Die Untersuchung der Häuser 2 (eigenes Geld), 8 (Geld anderer, Erbschaften) und 11 (Gewinne), zusammen mit den laufenden Planetenperioden (Dasha), kann Zeiten der finanziellen Gelegenheit aufzeigen.</li>
          <li><strong>Spirituelles Wachstum fördern:</strong> Die Häuser 4 (innerer Frieden), 9 (höheres Wissen) und 12 (Befreiung) geben Aufschluss über Ihren spirituellen Weg und wie Sie innere Zufriedenheit erreichen können.</li>
        </ul>
        <p>Denken Sie daran: Ein vedischer Astrologe betrachtet niemals ein Haus isoliert. Die wahre Kunst des Jyotish liegt in der Synthese – im Verständnis der Beziehungen zwischen den Häusern, ihren Herrschern und den darin positionierten Planeten. Diese dynamische Wechselwirkung erschafft das einzigartige Meisterwerk, das Ihr Leben ist.</p>
      `,
      image: "/image/blog/vedische-haeuser.jpg",
      category: "vedische-astrologie",
      author: "Suthakar Parameswaran",
      date: "2024-01-15",
      readTime: "20 min",
      slug: "die-12-haeuser-im-vedischen-horoskop",
      tags: ["Vedische Astrologie", "Jyotish", "Horoskop", "Häuser", "Bhavas", "Schicksal", "Karma", "Lebensbereiche"],
      metaDescription: "Eine umfassende und tiefgehende Analyse aller 12 Häuser im vedischen Horoskop. Verstehen Sie, wie Lagna, Dhana Bhava, Kalatra Bhava & Co. Ihr Schicksal, Ihre Persönlichkeit und alle Lebensaspekte beeinflussen.",
      difficulty: "Anfänger",
      rating: 4.8
    },
    {
      id: 2,
      title: "Karma und Reinkarnation im Jyotish: Der kosmische Code Ihres Schicksals",
      excerpt: "Entschlüsseln Sie die karmischen Muster Ihrer vergangenen Leben. Die vedische Astrologie bietet einen einzigartigen Schlüssel, um zu verstehen, warum Sie sind, wer Sie sind, und um Ihr gegenwärtiges Schicksal bewusst zu meistern.",
      fullContent: `
        <h1>Karma und Reinkarnation im Jyotish: Vedische Astrologie Beratung für Ihr Schicksal</h1>
        <h2>Das Konzept von Karma im Jyotish: Mehr als nur Schicksal</h2>
        <p>Im Herzen der vedischen Philosophie steht das Konzept des Karma – das universelle Gesetz von Ursache und Wirkung, das sich über multiple Existenzen erstreckt. Jyotish ist die Wissenschaft, die dieses Karma im Licht der Gestirne entschlüsselt. Es ist keine deterministische Fessel, sondern eine Landkarte Ihrer karmischen Neigungen, die Ihnen die Freiheit gibt, klügere Entscheidungen zu treffen.</p>

        <h3>Sanchita Karma - Das angesammelte Karma-Archiv</h3>
        <p>Stellen Sie sich ein riesiges Lagerhaus vor, in dem die Samen aller Ihrer Handlungen aus unzähligen vergangenen Leben gespeichert sind. Dies ist Ihr Sanchita Karma. Es ist die Gesamtsumme Ihres noch nicht erfahrenen Karmas. Ein Jyotish-Chart kann die <strong>Qualität</strong> dieses Lagers anzeigen – ob es voller Früchte des Wohlwollens oder der Hindernisse ist.</p>

        <h3>Prarabdha Karma - Das aktivierte Schicksals-Karma</h3>
        <p>Aus diesem großen Lagerhaus wird zu Beginn dieses Lebens ein kleiner Teil ausgewählt – Ihr Prarabdha Karma. Dies ist das „Schicksal“, mit dem Sie geboren wurden, der vorherbestimmte Teil Ihrer Reise. Es bestimmt die grundlegenden Umstände Ihrer Geburt (Familie, Land, körperliche Konstitution) und die großen Lebensereignisse. Die Planeten in Ihrem Geburtshoroskop sind die sichtbaren Ausdrücke dieses Prarabdha Karmas. Sie zeigen die Themen, mit denen Sie sich in diesem Leben auseinandersetzen <strong>müssen</strong>.</p>

        <h3>Kriyamana Karma - Das gegenwärtig geschaffene Karma</h3>
        <p>Dies ist das Karma, das Sie <strong>in diesem Moment</strong> durch Ihre freien Willensentscheidungen erschaffen. Es ist der wichtigste Faktor für Ihre Zukunft. Ihr Horoskop zeigt Ihre natürlichen Neigungen (Vasanas), aber Sie haben immer die Wahl, ihnen nachzugeben oder sie zu transzendieren. Kriyamana Karma ist das Werkzeug, mit dem Sie Ihr zukünftiges Schicksal und das Ihrer nächsten Leben formen.</p>

        <h2>Planeten als Karma-Träger und -Lehrer</h2>
        <p>Jeder Planet im Jyotish ist ein spezifischer Manager eines karmischen Bereichs.</p>
        <ul>
          <li><strong>Saturn (Shani):</strong> Der strengste aber gerechteste Lehrer. Saturn repräsentiert Ihr <strong>Karma aus Pflichtvernachlässigung</strong>, Einschränkungen, Verzögerungen und harte Arbeit. Seine Stellung zeigt, wo Sie Disziplin lernen und Verantwortung für vergangene Handlungen übernehmen müssen. Er belohnt Geduld und Pflichtbewusstsein immens.</li>
          <li><strong>Rahu (Nördlicher Mondknoten):</strong> Der Illusionist. Rahu verkörpert irdische, materielle Begierden, die aus vergangenen Leben unerfüllt blieben. Er treibt Sie an, moderne, oft tabuisierte Bereiche zu erforschen. Sein Einfluss kann besessene Wünsche und tiefe Unruhe bringen, aber auch außergewöhnlichen weltlichen Erfolg, wenn er gut integriert ist.</li>
          <li><strong>Ketu (Südlicher Mondknoten):</strong> Der Befreier. Ketu ist das Gegenteil von Rahu. Er repräsentiert <strong>spirituelle Meisterschaft und Loslösung</strong> aus vergangenen Leben. Seine Position kann auf Gebiete der natürlichen Begabung, aber auch der Gleichgültigkeit oder plötzlicher Verluste hinweisen, um Sie zur Spiritualität zu führen. Ketu ist der Torwächter zur Befreiung (Moksha).</li>
          <li><strong>Jupiter (Guru):</strong> Der große Wohltäter. Jupiter zeigt an, wo Sie in vergangenen Leben Tugendhaftigkeit (Dharma) praktiziert haben und nun gesegnet werden. Er bringt Expansion, Wohlstand, Weisheit und Schutz.</li>
          <li><strong>Mars (Mangal):</strong> Der Krieger. Mars zeigt Karma im Zusammenhang mit <strong>Gewalt, Impulsivität und Konkurrenz</strong>. Ein schwacher Mars kann auf frühere Feigheit hindeuten, ein starker auf mutige Handlungen, die nun in Führungsqualitäten und Energie resultieren.</li>
        </ul>

        <h2>Die Häuser als Bühnen des Karmas</h2>
        <p>Während die Planeten die Schauspieler sind, sind die Häuser (Bhavas) die Bühnen, auf denen das karmische Drama aufgeführt wird. Das 1. Haus zeigt Ihr Karma bezüglich der individuellen Existenz, das 7. Haus Ihr Beziehungs-Karma, das 10. Haus Ihr Berufs-Karma, und das 12. Haus das Karma der endgültigen Befreiung. Die Verbindung zwischen Planeten und Häusern offenbart die spezifische Geschichte, die sich in diesem Leben entfalten wird.</p>

        <h2>Vom Verständnis zur Transformation</h2>
        <p>Das ultimative Ziel der vedischen Astrologie ist es nicht, sich dem Karma passiv zu unterwerfen, sondern es zu verstehen und zu transformieren. Durch das Wissen um Ihre karmischen Schwachstellen (z.B. ein schwacher Jupiter für mangelndes Vertrauen) können Sie gezielt an ihnen arbeiten – durch Mantras, Edelsteine, Rituale (Yagyas) und vor allem durch bewusste, ethische Handlungen (Kriyamana Karma). Sie werden nicht zum Opfer Ihres Horoskops, sondern zu seinem bewussten Mitgestalter.</p>
      `,
      image: "/image/blog/karma-reinkarnation.jpg",
      category: "karma",
      author: "Suthakar Parameswaran",
      date: "2024-01-10",
      readTime: "15 min",
      slug: "karma-und-reinkarnation-im-jyotish",
      tags: ["Karma", "Reinkarnation", "Jyotish", "Schicksal", "Vergangene Leben", "Samsara", "Moksha", "Saturn", "Rahu", "Ketu"],
      metaDescription: "Eine tiefgründige Erklärung, wie die vedische Astrologie Karma und Reinkarnation entschlüsselt. Verstehen Sie die Rolle von Saturn, Rahu & Ketu und wie Sie Ihr Karma meistern können.",
      difficulty: "Fortgeschritten",
      rating: 4.9
    },
    {
      id: 3,
      title: "Die 9 Planeten im vedischen System: Ihre tiefgreifenden Bedeutungen und Einflüsse auf Ihr Leben",
      excerpt: "Entdecken Sie die neun kraftvosen Himmelswesen (Grahas) der vedischen Astrologie. Verstehen Sie, wie Sonne, Mond, Rahu, Ketu & Co. nicht nur Ihr Schicksal beeinflussen, sondern auch Ihre Persönlichkeit, Ihre Beziehungen und Ihre Lebensaufgabe formen.",
      fullContent: `
        <h1>Die 9 Planeten im vedischen System: Vedische Astrologie Beratung für Planeten-Einflüsse</h1>
        <h2>Die Neun Grahas im Überblick: Kosmische Akteure auf der Bühne Ihres Lebens</h2>
        <p>Im Jyotish werden neun Himmelskörper als "Grahas" (wörtlich: "die, die ergreifen") betrachtet. Sie sind keine bloßen Planeten im astronomischen Sinne, sondern bewusste, energetische Kräfte, die spezifische Aspekte des Lebens und Bewusstseins lenken. Anders als in der westlichen Astrologie werden die Mondknoten (Rahu und Ketu) als vollwertige "Planeten" mit enormer Bedeutung behandelt, während die äußeren Planeten wie Pluto, Neptune und Uranus eine untergeordnete Rolle spielen. Jeder Graha verkörpert ein universelles Prinzip.</p>

        <h3>Sonne (Surya) - Der König und die Seele</h3>
        <p>Die Sonne ist das mächtigste Gestirn, Repräsentant des göttlichen Vaters und des individuellen Bewusstseins.</p>
        <ul>
          <li><strong>Prinzip:</strong> Vitalität, Lebenskraft, Autorität, Selbstwertgefühl, Ehre, Ruhm, Vater, Regierung, Knochen und Herz.</li>
          <li><strong>Psychologisch:</strong> Surya repräsentiert Ihren Kern, Ihr Ego und Ihren Willen. Eine starke Sonne verleiht Führungsqualitäten, Integrität, Selbstvertrauen und Lebenskraft. Eine geschwächte Sonne kann zu einem geringen Selbstwertgefühl, mangelnder Zielstrebigkeit oder Herzproblemen führen.</li>
          <li><strong>Mythologie:</strong> Surya, der Sonnengott, fährt auf einem Streitwagen, der von sieben Pferden (den sieben Strahlen) gezogen wird. Er ist das Auge des Universums.</li>
        </ul>

        <h3>Mond (Chandra) - Die Königin und der Geist</h3>
        <p>Der Mond ist der Herrscher über den Geist und die Emotionen. Er ist der zweitwichtigste Planet nach dem Aszendenten.</p>
        <ul>
          <li><strong>Prinzip:</strong> Emotionen, Gefühle, Mutter, Zuhause, Komfort, Unterbewusstsein, Fruchtbarkeit, Beliebtheit und das allgemeine Wohlbefinden.</li>
          <li><strong>Psychologisch:</strong> Chandra ist Ihr empfindliches Inneres, das die Eindrücke der Welt aufnimmt. Ein starker, ruhiger Mond schenkt emotionale Stabilität, Mitgefühl, ein gutes Gedächtnis und Zufriedenheit. Ein gestörter Mond führt zu Stimmungsschwankungen, Ängstlichkeit, Unbeständigkeit und Schlafproblemen.</li>
          <li><strong>Mythologie:</strong> Chandra ist der Gott des Nektars der Unsterblichkeit. Sein Wagen wird von zehn weißen Pferden gezogen, die die zehn Sinne symbolisieren.</li>
        </ul>

        <!-- Le reste du contenu reste identique -->
      `,
      image: "/image/blog/vedische-planeten.jpg",
      category: "planeten",
      author: "Suthakar Parameswaran",
      date: "2024-01-05",
      readTime: "18 min",
      slug: "die-9-planeten-im-vedischen-system",
      tags: ["Planeten", "Grahas", "Vedische Astrologie", "Sonne", "Mond", "Jupiter", "Saturn", "Rahu", "Ketu", "Einflüsse", "Persönlichkeit"],
      metaDescription: "Ein umfassender und tiefgehender Guide zu den 9 Planeten (Grahas) im vedischen System. Lernen Sie die mythologischen, psychologischen und karmischen Bedeutungen von Surya, Chandra, Shani, Rahu, Ketu und mehr kennen.",
      difficulty: "Anfänger",
      rating: 4.7
    },
    {
      id: 4,
      title: "Partnerschaft und Ehe im vedischen Horoskop: Der ultimative Guide zur karmischen Kompatibilität",
      excerpt: "Gehen Sie über oberflächliche Sternzeichen-Checks hinaus. Entdecken Sie, wie die vedische Astrologie mit dem uralten Ashtakoota-System und der Analyse karmischer Verbindungen die tiefgreifende Harmonie zwischen zwei Seelen entschlüsselt.",
      fullContent: `
        <h1>Partnerschaft und Ehe im vedischen Horoskop: Vedische Astrologie Beratung für Beziehungen</h1>
        <h2>Kompatibilität im Vedischen Horoskop: Mehr als nur Liebe</h2>
        <p>Im Jyotish geht es bei der Partneranalyse (Kundali Milan) nicht nur darum, ob man sich "gut versteht". Es ist eine tiefgehende Untersuchung der karmischen Verbindung, der gemeinsamen Lebensaufgabe und der Fähigkeit, sich gegenseitig auf der spirituellen Reise zu unterstützen. Das Ziel ist es, einen Partner zu finden, der nicht nur Ihr Herz, sondern auch Ihre Seele nährt.</p>

        <!-- Le reste du contenu reste identique -->
      `,
      image: "/image/blog/partnerhoroskop.jpg",
      category: "beziehung",
      author: "Suthakar Parameswaran",
      date: "2024-01-02",
      readTime: "16 min",
      slug: "partnerhoroskop-analyse-so-finden-sie-ihre-seelenverwandte-partnerschaft",
      tags: ["Partnerschaft", "Ehe", "Beziehung", "Kompatibilität", "Ashtakoota", "Kundali Milan", "Liebe", "Horoskop", "Mangal Dosha", "Karma"],
      metaDescription: "Der ultimative Guide zur vedischen Partneranalyse. Tiefgehende Erklärung des Ashtakoota-Systems, der Rolle von Venus & Jupiter, Mangal Dosha und wie Sie Ihre karmisch passende Partnerschaft finden.",
      difficulty: "Mittel",
      rating: 4.8
    },
    {
      id: 5,
      title: "Das Mondzeichen in der vedischen Astrologie: Der verborgene Schlüssel zu Ihrer emotionalen Seele",
      excerpt: "Ihr Sonnenzeichen zeigt, wer Sie sein wollen. Ihr Mondzeichen (Rashi) offenbart, wer Sie wirklich SIND. Tauchen Sie ein in die Tiefen Ihrer Emotionalität, Ihrer unbewussten Muster und Ihres Seelen-Trostes.",
      fullContent: `
        <h1>Das Mondzeichen in der vedischen Astrologie: Vedische Astrologie Beratung für emotionale Entwicklung</h1>
        <h2>Die zentrale Bedeutung des Mondzeichens im Jyotish</h2>
        <p>Während in der westlichen Astrologie die Sonne im Mittelpunkt steht, ist es im Jyotish der <strong>Mond (Chandra)</strong>. Warum? Die Sonne repräsentiert Ihr bewusstes Ego, Ihren Willen und Ihre äußere Identität – also wer Sie der Welt zeigen wollen. Der Mond hingegen ist Ihr <strong>inneres, privates Selbst</strong>. Er regiert Ihren Geist (Manas), Ihre Emotionen, Ihre Gefühle, Ihre instinktiven Reaktionen und alles, was unter der Oberfläche liegt. Ihr Mondzeichen (auch Rashi genannt) ist der wichtigste Indikator dafür, was Sie brauchen, um sich emotional sicher, geliebt und geborgen zu fühlen. Es ist der Schlüssel zu Ihrem Seelenfrieden.</p>

        <!-- Le reste du contenu reste identique -->
      `,
      image: "/image/blog/mondzeichen.jpg",
      category: "vedische-astrologie",
      author: "Suthakar Parameswaran",
      date: "2023-12-28",
      readTime: "14 min",
      slug: "mondzeichen-in-der-vedischen-astrologie",
      tags: ["Mondzeichen", "Rashi", "Chandra", "Emotionen", "Gefühle", "Vedische Astrologie", "Seele", "Unterbewusstsein", "Nakshatra"],
      metaDescription: "Eine tiefgehende Analyse der 12 Mondzeichen (Rashi) in der vedischen Astrologie. Entdecken Sie, was Ihr Mondzeichen über Ihre Emotionen, Ihre Bedürfnisse und Ihren Seelenfrieden verrät.",
      difficulty: "Anfänger",
      rating: 4.6
    },
    {
      id: 6,
      title: "Vedische Astrologie und Chakra-Heilung: Eine ganzheitliche Verbindung für tiefgreifende Transformation",
      excerpt: "Entdecken Sie die verborgene Brücke zwischen dem kosmischen Tanz der Planeten und dem energetischen Fluss Ihrer Chakren. Nutzen Sie die Weisheit des Jyotish, um energetische Blockaden zu identifizieren und Ihr volles spirituelles Potential zu entfalten.",
      fullContent: `
        <h1>Vedische Astrologie und Chakra-Heilung: Ganzheitliche Beratung für energetische Transformation</h1>
        <h2>Die Verbindung von Astrologie und Chakren: Mikrokosmos und Makrokosmos</h2>
        <p>Die vedische Philosophie lehrt den Grundsatz "Wie oben, so unten". Das Universum (Makrokosmos) und der menschliche Körper (Mikrokosmos) sind Spiegelungen voneinander. Die Planeten sind die kosmischen Kräfte, die das äußere Universum lenken, während die <strong>Chakren</strong> (wörtlich "Räder") die Energiezentren sind, die Ihr inneres Universum regulieren. Jeder Planet korrespondiert mit einem oder mehreren Chakren. Wenn ein Planet in Ihrem Geburtshoroskop geschwächt oder gestört ist, zeigt sich dies oft als Blockade oder Ungleichgewicht im entsprechenden Chakra. Die vedische Astrologie wird so zu einem präzisen Diagnosewerkzeug für Ihr energetisches Wohlbefinden.</p>

        <!-- Le reste du contenu reste identique -->
      `,
      image: "/image/blog/chakra-astrologie.jpg",
      category: "vedische-astrologie",
      author: "Suthakar Parameswaran",
      date: "2023-12-25",
      readTime: "15 min",
      slug: "chakra-heilung-und-vedische-astrologie",
      tags: ["Chakra", "Heilung", "Energie", "Ganzheitlich", "Transformation", "Planeten", "Meditation", "Mantra", "Yoga", "Energetik"],
      metaDescription: "Entdecken Sie die tiefe Verbindung zwischen vedischer Astrologie und dem Chakra-System. Lernen Sie, wie Sie planetare Einflüsse nutzen können, um energetische Blockaden zu lösen und tiefgreifende Heilung zu erfahren.",
      difficulty: "Fortgeschritten",
      rating: 4.9
    }
  ];

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
          {/* Header */}
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
            
            {/* Meta Info */}
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
              <div className="flex items-center gap-2">
                <FaBook className="w-4 h-4" />
                <span>Schwierigkeit: {post.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Excerpt */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-[#260C56] mb-2">Zusammenfassung</h3>
              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.fullContent }}
            />

            {/* Tags */}
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

            {/* CTA Buttons améliorés */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
              <button className="flex-1 bg-[#ff6e54] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#ff8e54] transition-colors duration-300 flex items-center justify-center gap-2" onClick={() => window.location.href = '/contact'}>
                <FaHeart className="w-5 h-5" />
                Vedische Astrologie Beratung buchen
              </button>
              
              
            </div>

            {/* Contact Info */}
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
        <title>Vedische Astrologie Blog - Tiefes Wissen & Spirituelle Einsichten | Suthakar Parameswaran</title>
        <meta 
          name="description" 
          content="Vedische Astrologie Blog mit tiefgehenden Artikeln zu Jyotish, Karma, Planeten & spiritueller Entwicklung. Professionelles Wissen von Suthakar Parameswaran in Zürich." 
        />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <meta name="author" content="Suthakar Parameswaran" />
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.3744;8.5225" />
        <meta name="ICBM" content="47.3744, 8.5225" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://indischeastro.ch/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vedische Astrologie Blog - Spirituelles Wissen & Fachartikel" />
        <meta property="og:description" content="Tiefgehende Artikel zur Vedischen Astrologie: Jyotish, Karma, Planeten & spirituelle Entwicklung. Expertenwissen von Suthakar Parameswaran." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indischeastro.ch/blog" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Indische Astrologie - Suthakar Parameswaran" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedische Astrologie Blog - Fachwissen & Einsichten" />
        <meta name="twitter:description" content="Professionelle Artikel zur Vedischen Astrologie von Suthakar Parameswaran. Jyotish, Karma & spirituelle Entwicklung." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                  "name": "Blog",
                  "item": "https://indischeastro.ch/blog"
                }
              ]
            })
          }}
        />

        {/* Blog Schema supplémentaire */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Vedische Astrologie Blog",
              "description": "Tiefgehende Artikel und Wissen zur Vedischen Astrologie, Jyotish und spiritueller Entwicklung",
              "url": "https://indischeastro.ch/blog",
              "publisher": {
                "@type": "Person",
                "name": "Suthakar Parameswaran"
              },
              "inLanguage": "de-CH"
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        {/* Hero Section optimisée */}
        <section className="relative py-20 bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6e54]/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <FaBook className="w-4 h-4" />
              <span className="text-sm font-medium">Vedisches Wissen von Suthakar Parameswaran</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Vedische Astrologie
              <span className="block text-2xl md:text-3xl text-[#ff8e54] mt-4 font-light">
                Blog & Spirituelles Wissen - Beratung in Zürich
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Professionelle Vedische Astrologie Beratung von Suthakar Parameswaran: Tiefgehende Einblicke in Jyotish, Karma, Planeten 
              und spirituelle Entwicklung. Beratung in Zürich, gesamte Schweiz und online.
            </p>

            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Themen suchen: Vedische Astrologie, Karma, Partner Horoskop, Chakra Heilung..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6e54] focus:border-transparent"
                />
              </div>
            </div>

            {/* Badges de services améliorés */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                ✅ Telefonische Beratung: +41 79 261 33 31
              </span>
              <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                💻 Online Beratung verfügbar
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                🇨🇭 Schweizweit - Zürich & Umgebung
              </span>
              <span className="bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm border border-orange-500/30">
                🇩🇪 Deutschland - Fernberatung
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
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#260C56] to-[#4c1d95] flex items-center justify-center">
                      <span className="text-4xl text-white/80">🪐</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#ff6e54] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>

                  {/* Contenu */}
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

                    {/* Tags */}
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

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span>{post.rating}/5.0</span>
                        <span className="mx-2">•</span>
                        <FaBook className="w-4 h-4" />
                        <span>{post.difficulty}</span>
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

            {/* Message si aucun résultat */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Keine Artikel gefunden</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Versuchen Sie einen anderen Suchbegriff wie "Vedische Astrologie", "Karma Beratung" oder "Partner Horoskop".
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section CTA optimisée */}
        {/* <section className="py-16 bg-gradient-to-r from-[#260C56] to-[#4c1d95] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professionelle Vedische Astrologie Beratung mit Suthakar Parameswaran
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Buchen Sie Ihre persönliche Vedische Astrologie Beratung in Zürich, 
              per Telefon oder Online für die gesamte Schweiz und Deutschland.
            </p>
            
            {/* Contact Info */}
            {/* <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <FaPhone className="w-5 h-5 text-green-400" />
                <a href="tel:+41792613331" className="text-white hover:text-[#ff8e54] text-lg font-semibold">
                  +41 79 261 33 31
                </a>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <FaEnvelope className="w-5 h-5 text-blue-400" />
                <a href="mailto:sutha.eatham@gmail.com" className="text-white hover:text-[#ff8e54] text-lg font-semibold">
                  sutha.eatham@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff6e54] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ff8e54] transition-colors duration-300 flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/beratung-buchen'}>
                <FaHeart className="w-5 h-5" />
                Persönliche Beratung buchen
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/telefonische-beratung'}>
                <FaPhone className="w-5 h-5" />
                Telefonische Beratung
              </button>
            </div>
            <p className="text-gray-300 mt-6 text-sm">
              ✅ Vedische Astrologie Beratung | 🇨🇭 Schweizweit | 🇩🇪 Deutschland | 💻 Online & Telefonisch
            </p>
          </div>
        </section> */} 

        {/* Popup */}
        <ArticlePopup post={selectedPost} onClose={() => setSelectedPost(null)} />
      </main>
    </>
  );
}