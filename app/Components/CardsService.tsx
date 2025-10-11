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

  return (
    <>
      <div className="w-full p-4">
        <div
          className="bg-white/80 backdrop-blur-sm border border-[#260c5620] p-6 m-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-wrap rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          onClick={handleClick}
          role="button"
          aria-label={`Mehr Details über ${props.nom}`}
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
        >
          {/* Image */}
          <div className="flex justify-center">
            {props.images && (
              <Image
                className="rounded-2xl w-full h-48 object-cover shadow-md"
                src={props.images}
                alt={`${props.nom} - Astrologische Dienstleistung`}
                width={140}
                height={140}
                title={props.nom}
                loading="lazy"
              />
            )}
          </div>

          {/* Nom */}
          <h2 className="text-2xl md:text-3xl text-center mt-4 whitespace-normal text-[#260C56] font-bold">
            {props.nom}
          </h2>

          {/* Description courte */}
          <div className="mt-4 text-center">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {props.description}
            </p>
          </div>

          {/* Prix et durée */}
          {props.pricetime && (
            <div className="grid grid-cols-2 mt-5 gap-4">
              <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <p className="text-gray-700 font-medium">
                  Preis:{" "}
                  <strong className="text-[#ff6e54] text-lg">{props.price} </strong>
                </p>
              </div>
              <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <p className="text-gray-700 font-medium">
                  Dauer:{" "}
                  <strong className="text-[#ff6e54] text-lg">{props.time} </strong>
                </p>
              </div>
            </div>
          )}

          {/* Bouton */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleButtonClick}
              className="cursor-pointer px-8 py-3 font-medium text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-[#ff5a40] hover:to-[#ff7a40] rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label={`Details zu ${props.nom} ansehen`}
            >
              Details ansehen
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-white to-gray-50/80 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/50">
            <div className="p-8">
              {/* En-tête */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#260C56] to-[#4c1d95] bg-clip-text text-transparent">
                  {props.nom}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Modal schließen"
                >
                  ×
                </button>
              </div>

              {/* Image */}
              {props.images && (
                <div className="flex justify-center mb-8">
                  <Image
                    className="rounded-2xl w-full h-64 object-cover shadow-lg"
                    src={props.images}
                    alt={`${props.nom} - Astrologische Dienstleistung`}
                    width={300}
                    height={200}
                  />
                </div>
              )}

              {/* Description détaillée */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#260C56] border-b border-gray-200 pb-2">
                  Detaillierte Beschreibung
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {detailedDescriptions[props.id] || props.description}
                </p>
              </div>

              {/* Informations pratiques */}
              <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-white/60 rounded-2xl shadow-inner border border-white/50">
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <p className="font-semibold text-gray-600 mb-2">Preis:</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] bg-clip-text text-transparent">
                    {props.price} CHF
                  </p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <p className="font-semibold text-gray-600 mb-2">Dauer:</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] bg-clip-text text-transparent">
                    {props.time} Minuten
                  </p>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 cursor-pointer px-6 py-4 font-medium text-gray-700 bg-white/80 hover:bg-gray-100 border border-gray-200 rounded-xl text-center transition-all duration-300 hover:shadow-lg"
                >
                  Zurück
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    // Rediriger vers la page de contact
                    window.location.href = `/Contacte?service=${encodeURIComponent(props.nom)}`;
                  }}
                  className="flex-1 cursor-pointer px-6 py-4 font-medium text-white bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] hover:from-[#ff5a40] hover:to-[#ff7a40] rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Termin buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardsService;