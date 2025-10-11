"use client";
import Image from "next/image";
import { useState } from "react";

function CardsService(props) {
  const [showModal, setShowModal] = useState(false);

  // Descriptions détaillées pour chaque service
  const detailedDescriptions = {
    1: `Die Partner-Horoskop-Analyse bietet tiefe Einblicke in Ihre Beziehungsdynamiken. Wir analysieren die astrologische Kompatibilität zwischen Ihnen und Ihrem Partner, identifizieren potentielle Konfliktbereiche und zeigen Wege zur Harmonisierung auf. Diese umfassende Analyse basiert auf vedischen astrologischen Prinzipien und berücksichtigt karmische Verbindungen sowie Seelenverträge.`,
    
    2: `Ihr Geburtshoroskop ist ein detaillierter Fahrplan Ihres Lebens. Wir entschlüsseln die Positionen von Planeten, Häusern und Aspekten zum Zeitpunkt Ihrer Geburt. Diese Analyse gibt Aufschluss über Ihre Lebensaufgabe, Talente, Herausforderungen und den optimalen Zeitpunkt für wichtige Entscheidungen. Entdecken Sie Ihr volles Potenzial und verstehen Sie die tieferen Muster Ihres Schicksals.`,
    
    3: `In der astrologischen Partnerberatung kombinieren wir jahrtausendealtes Wissen mit modernen Beziehungsansätzen. Wir arbeiten mit der Kraft lebendiger Räume und harmonisieren weibliche und männliche Energien. Die Beratung hilft bei Kommunikationsproblemen, zeigt Lösungswege bei Konflikten und unterstützt beim Aufbau einer erfüllenden Partnerschaft auf spiritueller Ebene.`,
    
    4: `Kundalini-Energiearbeit aktiviert Ihre ureigene Lebenskraft, die an der Basis Ihrer Wirbelsäule schlummert. Durch spezielle Techniken und Atemübungen wecken wir diese transformative Energie, die durch Ihre sieben Hauptchakren aufsteigt. Dieser Prozess führt zu tiefgreifender persönlicher Transformation, erhöhter Vitalität und spirituellem Erwachen.`,
    
    5: `Die Marmapunkt-Behandlung ist eine 5.000 Jahre alte ayurvedische Heilkunst. Wir arbeiten mit 107 vitalen Energiepunkten im Körper, die als Schnittstellen zwischen Bewusstsein und Materie fungieren. Die Behandlung löst energetische Blockaden, fördert die Selbstheilungskräfte und bringt Körper, Geist und Seele wieder in Einklang. Besonders wirksam bei Stress, Schlaflosigkeit und chronischen Beschwerden.`,
    
    6: `Heilende Energie-Mudras sind spezielle Handhaltungen, die den Energiefluss im Körper lenken und harmonisieren. Jedes Mudra hat eine spezifische Wirkung auf bestimmte Organe, Emotionen und Bewusstseinszustände. Wir lehren Ihnen persönlich abgestimmte Mudras für mehr innere Ruhe, bessere Konzentration, emotionalen Ausgleich und körperliche Vitalität.`,
    
    7: `Reiki ist japanisch für "universelle Lebensenergie". Als zertifizierte Reiki-Meister leiten wir diese sanfte, aber kraftvolle Heilenergie durch unsere Hände an Sie weiter. Die Behandlung wirkt auf körperlicher, emotionaler, mentaler und spiritueller Ebene. Besonders effektiv bei Stressabbau, Schmerzlinderung, emotionaler Heilung und der Unterstützung jedes Heilungsprozesses.`,
    
    8: `Unser kostenloser Chakra-Test gibt Ihnen einen umfassenden Überblick über den Zustand Ihrer sieben Hauptenergiezentren. Mittels Pendel und energetischer Testverfahren analysieren wir die Balance, Stärke und Durchlässigkeit jedes Chakras. Sie erhalten konkrete Empfehlungen für die Harmonisierung Ihrer Energiesysteme und erfahren, welche Behandlungen für Sie besonders geeignet sind.`,
    
    9: `Die traditionelle indische Ayurveda-Kopfmassage (Champi) ist eine tiefenentspannende Behandlung, die Verspannungen im Nacken-, Schulter- und Kopfbereich löst. Mit speziellen warmen Ölen und rhythmischen Bewegungen wird nicht nur die Muskulatur gelockert, sondern auch das Nervensystem beruhigt. Ideal bei Kopfschmerzen, Stress, Schlafproblemen und mentaler Erschöpfung.`,
    
    10: `Der Öl-Kopfguss (Shirodhara) ist eine der tiefsten Entspannungstechniken des Ayurveda. Ein kontinuierlicher, warmer Ölstrom fließt auf Ihre Stirn und stimuliert dabei das Dritte Auge. Dieser meditative Zustand bringt das Nervensystem zur Ruhe, klärt den Geist und öffnet das Bewusstsein für höhere Einsichten. Transformiert Stress in tiefe Gelassenheit.`,
    
    11: `Die Ayurveda-Ganzkörpermassage (Abhyanga) ist eine umfassende Ölmassage, die alle Körpersysteme harmonisiert. Mit zwei Therapeuten und großen Mengen warmem, mediziniertem Öl wird der gesamte Körper von Kopf bis Fuß massiert. Diese Behandlung entgiftet tiefe Gewebeschichten, stärkt das Immunsystem, verjüngt die Zellen und bringt die Lebensenergie (Prana) zum Fließen.`,
    
    12: `Unsere Relax-Massage mit sanfter Berührung ist eine wohltuende Behandlung für Menschen, die besondere Zuwendung brauchen. Mit sehr achtsamen, liebevollen Berührungen und minimalem Druck lösen wir Verspannungen, ohne den Körper zu überfordern. Besonders geeignet bei Erschöpfungszuständen, nach Krankheiten oder für hochsensible Menschen.`,
    
    13: `Aura-Heilung und Reinigung arbeitet mit Ihrem feinstofflichen Energiekörper. Wir identifizieren und lösen energetische Blockaden, reparieren Risse in der Aura und entfernen fremde Energien. Diese Behandlung schützt vor negativen Einflüssen, erhöht Ihre Vibrationsfrequenz und schafft einen kraftvollen Energieschild um Sie herum.`,
    
    14: `Die vedische Astrologie-Beratung (Jyotish) ist eine präzise Wissenschaft der Zeit. Wir analysieren nicht nur gegenwärtige Einflüsse, sondern auch karmische Muster aus vergangenen Leben. Die Beratung gibt klare Handlungsempfehlungen für Beruf, Beziehungen, Gesundheit und Spiritualität. Besonderer Fokus auf günstige Zeitpunkte (Muhurtas) für wichtige Entscheidungen.`
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    handleClick();
  };

  // Vérifier si le service est gratuit
  const isFree = props.price_presentiel === "Gratis" || props.price_online === "Gratis";

  return (
    <>
      <div className="w-full p-4">
        <div
          className="bg-white/90 backdrop-blur-sm border border-gray-100 p-6 m-4 w-full max-w-sm mx-auto text-wrap rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] cursor-pointer group relative overflow-hidden"
          onClick={handleClick}
          role="button"
          aria-label={`Mehr Details über ${props.nom}`}
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
        >
          {/* Effet de fond décoratif */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          {/* Badge gratuit si applicable */}
          {isFree && (
            <div className="absolute -top-2 -right-2 z-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                🎁 Kostenlos
              </div>
            </div>
          )}

          {/* Image */}
          <div className="flex justify-center mb-6">
            {props.images && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  src={props.images}
                  alt={`${props.nom} - Astrologische Dienstleistung`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  title={props.nom}
                  loading="lazy"
                />
                {/* Overlay sur l'image */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            )}
          </div>

          {/* Nom */}
          <h2 className="text-xl font-bold text-center mb-4 whitespace-normal text-[#260C56] group-hover:text-[#ff6e54] transition-colors duration-300">
            {props.nom}
          </h2>

          {/* Description courte */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 leading-relaxed text-center line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
              {props.description}
            </p>
          </div>

          {/* Prix et durée */}
          {props.pricetime && (
            <div className="space-y-3 mb-6">
              {/* Prix pour les deux formats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-xs text-gray-500 mb-1">🏠 Vor Ort</div>
                  <div className="text-lg font-bold text-[#260C56]">
                    {props.price_presentiel}
                  </div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="text-xs text-gray-500 mb-1">💻 Online</div>
                  <div className="text-lg font-bold text-[#260C56]">
                    {props.price_online}
                  </div>
                </div>
              </div>
              
              {/* Durée */}
              <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="text-lg">⏱️</span>
                  <span className="font-semibold text-[#260C56]">{props.time}</span>
                  <span className="text-sm text-gray-500">Minuten</span>
                </div>
              </div>
            </div>
          )}

          {/* Bouton */}
          <div className="flex justify-center">
            <button
              onClick={handleButtonClick}
              className="cursor-pointer px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-[#ff5a40] hover:to-[#ff7a40] rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full group/btn overflow-hidden relative"
              aria-label={`Details zu ${props.nom} ansehen`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>✨</span>
                Details ansehen
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </span>
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e54] to-[#ff6e54] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-white to-gray-50/90 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/70 animate-scaleIn">
            <div className="p-8">
              {/* En-tête */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#260C56] to-[#4c1d95] bg-clip-text text-transparent mb-2">
                    {props.nom}
                  </h2>
                  <div className="flex gap-3">
                    {!isFree && (
                      <>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          🏠 Vor Ort: {props.price_presentiel}
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          💻 Online: {props.price_online}
                        </div>
                      </>
                    )}
                    {isFree && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        🎁 Kostenloser Service
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110 ml-4"
                  aria-label="Modal schließen"
                >
                  ×
                </button>
              </div>

              {/* Image */}
              {props.images && (
                <div className="flex justify-center mb-8">
                  <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      className="object-cover"
                      src={props.images}
                      alt={`${props.nom} - Astrologische Dienstleistung`}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                </div>
              )}

              {/* Description détaillée */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#260C56] border-b border-gray-200 pb-3 flex items-center gap-2">
                  <span>📖</span>
                  Detaillierte Beschreibung
                </h3>
                <div className="bg-white/60 rounded-2xl p-6 shadow-inner border border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {detailedDescriptions[props.id] || props.description}
                  </p>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-white/80 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="text-2xl mb-2">🏠</div>
                  <p className="font-semibold text-gray-600 mb-1">Vor Ort</p>
                  <p className="text-xl font-bold text-[#260C56]">
                    {props.price_presentiel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">in Zürich</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="text-2xl mb-2">💻</div>
                  <p className="font-semibold text-gray-600 mb-1">Online</p>
                  <p className="text-xl font-bold text-[#260C56]">
                    {props.price_online}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per Video-Call</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="text-2xl mb-2">⏱️</div>
                  <p className="font-semibold text-gray-600 mb-1">Dauer</p>
                  <p className="text-xl font-bold text-[#260C56]">
                    {props.time}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Minuten</p>
                </div>
              </div>

              {/* Garantie */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 mb-8 border border-amber-200">
                <p className="text-center text-amber-800 font-semibold flex items-center justify-center gap-2">
                  <span className="text-lg">✅</span>
                  Garantierte gleiche Qualität in beiden Beratungsformaten
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 cursor-pointer px-6 py-4 font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:border-gray-400 flex items-center justify-center gap-2"
                >
                  <span>←</span>
                  Zurück zur Übersicht
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    window.location.href = `/Contacte?service=${encodeURIComponent(props.nom)}`;
                  }}
                  className="flex-1 cursor-pointer px-6 py-4 font-semibold text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-[#ff5a40] hover:to-[#ff7a40] rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>📅</span>
                  Termin buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default CardsService;