// app/gratuit/page.jsx
'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Selbsttests() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Head>
        {/* ✅ OPTIMISÉ : Title avec mots-clés stratégiques */}
        <title>Vedische Astrologie & Chakra Analyse Kostenlos - Partnerhoroskop & Energiebalance Test</title>
        
        {/* ✅ OPTIMISÉ : Meta description riche en mots-clés */}
        <meta 
          name="description" 
          content="Kostenlose vedische Partneranalyse & Chakra-Test in Zürich. Entdecken Sie karmische Beziehungen, Blockaden lösen & Beziehungskompatibilität. Professionelle Astrologie-Beratung Schweiz." 
        />
        
        {/* ✅ NOUVEAU : Balises SEO supplémentaires */}
        <meta name="keywords" content="vedische astrologie, partnerhoroskop, chakra analyse, karmische beziehung, energetische balance, astrologie beratung zürich, liebesbeziehung, trennung, blockaden lösen, indische astrologie, lebensberatung, zukunftsberatung" />
        <meta name="author" content="Ihr Astrologie Experte" />
        <meta property="og:title" content="Vedische Astrologie & Chakra Analyse - Kostenloser Test" />
        <meta property="og:description" content="Kostenlose Partneranalyse & Chakra-Test. Entdecken Sie karmische Verbindungen und energetische Blockaden." />
        <meta property="og:type" content="website" />
        
        {/* ✅ NOUVEAU : Balise canonique */}
        <link rel="canonical" href="https://www.ihrwebsite.ch/gratuit" />
      </Head>

      {/* ✅ CONTENU SEO CACHÉ POUR LES ROBOTS - N'affecte pas l'apparence */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>Vedische Astrologie und Chakra Analyse Kostenlos - Professionelle Beratung</h1>
        <p>Kostenlose vedische Astrologie Beratung und Chakra Analyse in der Schweiz. Entdecken Sie tiefe Einblicke in Ihre Beziehungen, karmische Verbindungen und energetische Blockaden. Professionelle astrologische Partneranalyse und Energiearbeit.</p>
        <h2>Indische Astrologie für Liebe und Beziehung</h2>
        <h3>Partnerhoroskop und Ehe Analyse</h3>
        <h3>Chakra Heilung und Energiearbeit</h3>
      </div>

      <div className="container">
        {/* Header Section - MÊME APPAREANCE mais contenu optimisé */}
        <header className="header">
          <div className="header-content">
            {/* ✅ OPTIMISÉ : H1 avec mots-clés mais même style */}
            <h1 className="title">Vedische Astrologie & Chakra Energie Analyse</h1>
            <p className="subtitle">
              {/* ✅ OPTIMISÉ : Sous-titre enrichi naturellement */}
              Kostenlose Analyse Ihrer Beziehungskompatibilität und energetischen Balance. 
              Entdecken Sie karmische Verbindungen und Seelenpartner-Beziehungen.
            </p>
          </div>
        </header>

        {/* ✅ NOUVEAU : Section texte SEO visible mais discrète */}
        <div className="seo-text-section">
          <div className="seo-content">
            <h2>Professionelle Vedische Astrologie und Chakra Beratung in der Schweiz</h2>
            <p>
              Unsere <strong>kostenlosen Analysetools</strong> basieren auf authentischer 
              <strong> vedischer Astrologie</strong> und traditioneller <strong>Chakra-Heilung</strong>. 
              Als erfahrener <strong>Astrologie-Experte</strong> in <strong>Zürich, Bern, Luzern</strong> 
              und gesamten Schweiz bieten wir tiefgehende Einblicke in 
              <strong> Liebesbeziehungen, karmische Verbindungen und energetische Blockaden</strong>. 
              Entdecken Sie mit unserer <strong>Partneranalyse</strong> die wahre Qualität Ihrer Beziehung 
              und lösen Sie <strong>emotionale Blockaden</strong> durch <strong>Chakra-Balance</strong>.
            </p>
          </div>
        </div>

        {/* Choice Selection - MÊME APPAREANCE mais texte optimisé */}
        <div className="choice-section">
          <div className="choice-cards">
            <div 
              className="choice-card"
              onClick={() => openModal('astrologie')}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">🌌</div>
                <div className="card-text">
                  {/* ✅ OPTIMISÉ : Titre enrichi naturellement */}
                  <h3>Vedische Partnerastrologie & Beziehungshoroskop</h3>
                  <p>
                    Tiefgehende Analyse Ihrer Liebesbeziehung und karmischen Verbindungen 
                    durch jahrtausendealtes vedisches Wissen.
                  </p>
                </div>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-features">
                {/* ✅ OPTIMISÉ : Features avec mots-clés */}
                <span>✨ Karmische Beziehungen</span>
                <span>💫 Vedische Planetenanalyse</span>
                <span>❤️ Beziehungskompatibilität</span>
                <span>🔗 Seelenpartner erkennen</span>
              </div>
            </div>

            <div 
              className="choice-card"
              onClick={() => openModal('chakra')}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">🌀</div>
                <div className="card-text">
                  {/* ✅ OPTIMISÉ : Titre enrichi naturellement */}
                  <h3>Chakra Test & Energetische Balance Analyse</h3>
                  <p>
                    Umfassende Analyse Ihrer 7 Hauptchakren für körperliche und seelische Balance. 
                    Blockaden lösen und Energiefluss optimieren.
                  </p>
                </div>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-features">
                {/* ✅ OPTIMISÉ : Features avec mots-clés */}
                <span>🌈 7 Energiezentren Analyse</span>
                <span>⚖️ Energetische Balance</span>
                <span>🌿 Blockaden lösen</span>
                <span>💎 Heilungsempfehlungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section - MÊME APPAREANCE mais contenu optimisé */}
        <div className="info-section">
          <h2>Warum unsere kostenlosen Tools für Vedische Astrologie?</h2>
          
          {/* ✅ NOUVEAU : Paragraphe SEO supplémentaire */}
          <div className="additional-seo-text">
            <p>
              <strong>Vedische Astrologie (Jyotisha)</strong> ist die traditionelle indische Astrologie 
              basierend auf den alten Veden. Unsere <strong>kostenlosen Analysen</strong> kombinieren 
              dieses uralte Wissen mit moderner <strong>Energiearbeit</strong> für Menschen in 
              <strong> Zürich, Bern, Luzern, Basel, Genf</strong> und gesamten Schweiz. 
              Perfekt bei Fragen zu <strong>Liebe, Partnerschaft, Trennung oder spiritueller Entwicklung</strong>.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🎯</div>
              <h3>Vedische Astrologie Expertise</h3>
              <p>
                Authentische <strong>indische Astrologie-Beratung</strong> nach 
                vedischer Tradition für präzise Partneranalyse.
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⚡</div>
              <h3>Energetische Heilung</h3>
              <p>
                <strong>Chakra Reinigung</strong> und <strong>Blockaden lösen</strong> 
                für mehr Lebensenergie und seelische Balance.
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🛡️</div>
              <h3>100% Kostenlos & Diskret</h3>
              <p>
                Keine versteckten Kosten, keine Verpflichtungen. 
                <strong> Diskret und professionell</strong> in der Schweiz.
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🌙</div>
              <h3>Altes Vedisches Wissen</h3>
              <p>
                <strong>Jahrtausendealte Weisheiten</strong> der vedischen Tradition 
                und authentischer <strong>indischer Astrologie</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ NOUVEAU : Section FAQ SEO */}
        <div className="faq-seo-section">
          <h2>Häufige Fragen - Vedische Astrologie & Chakra Arbeit</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Was ist der Unterschied zwischen vedischer und westlicher Astrologie?</h3>
              <p>
                Die <strong>vedische Astrologie</strong> basiert auf dem siderischen Zodiak und 
                jahrtausendealten indischen Traditionen. Sie bietet tiefere Einblicke in 
                <strong> Karma, Lebensweg und spirituelle Entwicklung</strong> als die westliche Astrologie.
              </p>
            </div>
            <div className="faq-item">
              <h3>Kann Chakra-Analyse bei Beziehungsproblemen helfen?</h3>
              <p>
                Ja, <strong>blockierte Chakren</strong> können Beziehungen erheblich beeinflussen. 
                Unsere <strong>Chakra-Analyse</strong> hilft <strong>energetische Blockaden</strong> 
                zu erkennen und zu lösen, was zu harmonischeren Partnerschaften führt.
              </p>
            </div>
            <div className="faq-item">
              <h3>Wie erkenne ich karmische Beziehungen?</h3>
              <p>
                <strong>Karmische Beziehungen</strong> zeigen sich durch starke Anziehungskraft 
                wiederholte Muster und Lernaufgaben. Die <strong>vedische Partneranalyse</strong> 
                identifiziert diese Verbindungen und hilft, deren Sinn zu verstehen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Les modaux restent EXACTEMENT IDENTIQUES */}
      {/* Astrologie Modal */}
      {activeModal === 'astrologie' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content astro-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="modal-header">
              <div className="modal-badge">♋️ Vedische Astrologie</div>
              <h2>Astrologische Partnerberatung</h2>
              <p className="modal-subtitle">Erfahren Sie tiefgehende Einblicke in Ihre Beziehung durch jahrtausendealtes Wissen</p>
            </div>

            <div className="modal-body">
              <div className="modal-content-grid">
                
                {/* Section 1 - Was Sie erfahren */}
                <div className="modal-section">
                  <div className="section-icon">💫</div>
                  <div className="section-content">
                    <h3>Was Sie erfahren werden</h3>
                    <div className="features-list">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Was Ihr/e Partner/in von einer Beziehung erwartet, damit er/sie glücklich ist</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Was die Herausforderungen in Ihrer Beziehung sind und wie Sie Konflikte vermeiden können</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Welche Bedürfnisse Ihr Partner/Ihre Partnerin hat und warum er/sie so reagiert</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Wie Sie mit Ihren Unterschieden zurechtkommen für eine dauerhaft glückliche Beziehung</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 - Warum wichtig */}
                <div className="modal-section highlight">
                  <div className="section-icon">❓</div>
                  <div className="section-content">
                    <h3>Warum eine astrologische Partneranalyse wichtig ist</h3>
                    <div className="benefits-grid">
                      <div className="benefit-card">
                        <div className="benefit-icon">🛡️</div>
                        <div className="benefit-text">
                          <h4>Schutz vor Enttäuschungen</h4>
                          <p>Falsche Erwartungen in der Beziehung/Ehe erkennen und vermeiden</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">🎯</div>
                        <div className="benefit-text">
                          <h4>Projektionen auflösen</h4>
                          <p>Falsche Projektionen an den Partner erkennen und auflösen</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">⭐</div>
                        <div className="benefit-text">
                          <h4>Qualität erkennen</h4>
                          <p>Die wahre Qualität Ihrer Beziehung/Ehe verstehen</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">📈</div>
                        <div className="benefit-text">
                          <h4>Lernprozesse akzeptieren</h4>
                          <p>Akzeptanz der Lernprozesse und Erkennung von Wachstumschancen</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">🌊</div>
                        <div className="benefit-text">
                          <h4>Phasen verstehen</h4>
                          <p>Phasen der Beziehung/Ehe und Planeten-Einflüsse verstehen</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">🆘</div>
                        <div className="benefit-text">
                          <h4>Krisenmanagement</h4>
                          <p>Krisenmanagement in der Beziehung/Ehe meistern</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">🔗</div>
                        <div className="benefit-text">
                          <h4>Karmische Verbindungen</h4>
                          <p>Erkennen von karmischen Verbindungen und ihre Aufgaben</p>
                        </div>
                      </div>
                      <div className="benefit-card">
                        <div className="benefit-icon">🔄</div>
                        <div className="benefit-text">
                          <h4>Verhaltensänderungen</h4>
                          <p>Verstehen plötzlicher Verhaltensänderungen durch Planeten-Einflüsse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 - Was verrät die Analyse */}
                <div className="modal-section">
                  <div className="section-icon">🔍</div>
                  <div className="section-content">
                    <h3>Was verrät eine astrologische Partnerberatung bei mir?</h3>
                    <div className="discovery-cards">
                      <div className="discovery-card">
                        <div className="card-number">01</div>
                        <h4>Sternzeichen-Analyse</h4>
                        <p>Ähnlichkeiten und Unterschiede der beiden Sternzeichen feststellen</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">02</div>
                        <h4>Stress-Faktoren</h4>
                        <p>Hinweise darüber, welche Stress-Faktoren auftreten könnten</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">03</div>
                        <h4>Harmonie-Analyse</h4>
                        <p>Entdecken warum es zwischen zwei Personen harmoniert oder Differenzen gibt</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">04</div>
                        <h4>Verhaltensmuster</h4>
                        <p>Analyse typischer Merkmale und Verhaltensweisen aufgrund von Sternzeichen, Mondstellung, Aszendent</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">05</div>
                        <h4>Harmonie-Bereiche</h4>
                        <p>Antworten finden, in welchen Bereichen man gut oder weniger gut harmoniert</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">06</div>
                        <h4>Stärken & Schwächen</h4>
                        <p>Helfen die Stärken und Schwächen der verschiedenen Sternzeichen zu verstehen</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">07</div>
                        <h4>Partner-Bedürfnisse</h4>
                        <p>Informationen darüber was dem Sternzeichen Ihres Partners in der Liebe wichtig ist</p>
                      </div>
                      <div className="discovery-card">
                        <div className="card-number">08</div>
                        <h4>Karmische Verbindungen</h4>
                        <p>Aufzeigen karmischer Verbindungen und Seelenpartner</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 - Beratung als Wegweiser */}
                <div className="modal-section highlight">
                  <div className="section-icon">💡</div>
                  <div className="section-content">
                    <h3>Meine Beratung kann als Wegweiser dienen</h3>
                    <div className="guidance-content">
                      <p>Sie können sich damit auf die kommenden Herausforderungen vorbereiten und lernen, sich und Ihren Partner besser zu verstehen.</p>
                      <div className="guidance-points">
                        <div className="guidance-point">
                          <div className="point-icon">🎯</div>
                          <span>Bewusste und aktive Gestaltung Ihrer Beziehung</span>
                        </div>
                        <div className="guidance-point">
                          <div className="point-icon">🌟</div>
                          <span>Besseres Verständnis für sich und den Partner</span>
                        </div>
                        <div className="guidance-point">
                          <div className="point-icon">🛡️</div>
                          <span>Vorbereitung auf kommende Herausforderungen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 - Wie funktioniert es */}
                <div className="modal-section">
                  <div className="section-icon">⚙️</div>
                  <div className="section-content">
                    <h3>Wie funktioniert eine astrologische Partnerberatung?</h3>
                    <div className="process-flow">
                      <div className="process-step">
                        <div className="step-indicator">
                          <div className="step-number">1</div>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                          <h4>Datenanalyse</h4>
                          <p>Analyse auf Basis der persönlichen Geburtsdaten mit möglichst genauen Angaben der Geburtsstunden und Geburtsorte beider Partner</p>
                        </div>
                      </div>
                      <div className="process-step">
                        <div className="step-indicator">
                          <div className="step-number">2</div>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                          <h4>Planetenkonstellation</h4>
                          <p>Gegenüberstellung der Planetenkonstellation der beiden Sternzeichen</p>
                        </div>
                      </div>
                      <div className="process-step">
                        <div className="step-indicator">
                          <div className="step-number">3</div>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                          <h4>Vergleich & Deutung</h4>
                          <p>Vergleich der speziellen Besonderheiten der beiden Partner und deren Planeten</p>
                        </div>
                      </div>
                      <div className="process-step">
                        <div className="step-indicator">
                          <div className="step-number">4</div>
                        </div>
                        <div className="step-content">
                          <h4>Detaillierte Auswertung</h4>
                          <p>Umfassende Analyse und persönliche Empfehlungen für Ihre Beziehung</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 - Wichtige Aspekte */}
                <div className="modal-section highlight">
                  <div className="section-icon">⭐</div>
                  <div className="section-content">
                    <h3>Wichtige Aspekte für eine erfolgreiche Verbindung</h3>
                    <div className="aspects-grid">
                      <div className="aspect-card">
                        <div className="aspect-icon">💑</div>
                        <div className="aspect-content">
                          <h4>Tägliches Auskommen</h4>
                          <p>Gutes tägliches gemeinsames Auskommen im gegenseitigen Kontext</p>
                        </div>
                      </div>
                      <div className="aspect-card">
                        <div className="aspect-icon">😊</div>
                        <div className="aspect-content">
                          <h4>Emotionale Wahrnehmung</h4>
                          <p>Stärke von Wahrnehmung gewisser Emotionen</p>
                        </div>
                      </div>
                      <div className="aspect-card">
                        <div className="aspect-icon">👶</div>
                        <div className="aspect-content">
                          <h4>Nachkommenschaft</h4>
                          <p>Mondkonstellation in Bezug auf Nachkommenschaft</p>
                        </div>
                      </div>
                      <div className="aspect-card">
                        <div className="aspect-icon">💰</div>
                        <div className="aspect-content">
                          <h4>Wohlstand</h4>
                          <p>Erfüllung von Wohlstand in der Verbindung</p>
                        </div>
                      </div>
                      <div className="aspect-card">
                        <div className="aspect-icon">💞</div>
                        <div className="aspect-content">
                          <h4>Sexuelle Kompatibilität</h4>
                          <p>Sexuelle Kompatibilität der Geschlechtsteile</p>
                        </div>
                      </div>
                      <div className="aspect-card">
                        <div className="aspect-icon">🌌</div>
                        <div className="aspect-content">
                          <h4>Planeteneinflüsse</h4>
                          <p>Einflüsse von verschiedenen Planeten und ihren Qualitäten zum aktuellen Zeitpunkt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chakra Modal */}
      {activeModal === 'chakra' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content chakra-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="modal-header">
              <div className="modal-badge">🕉️ Chakra-Analyse</div>
              <h2>Testen Sie Ihre Chakra</h2>
              <p className="modal-subtitle">Umfassende Analyse der 7 Hauptchakren für körperliche und seelische Balance</p>
            </div>

            <div className="modal-body">
              {/* Chakra Visualization */}
              <div className="chakra-visual-section">
                <div className="chakra-visual">
                  {[7, 6, 5, 4, 3, 2, 1].map((number) => (
                    <div key={number} className={`chakra-node chakra-${number}`}>
                      <div className="chakra-orb">
                        <span className="chakra-number">{number}</span>
                      </div>
                      <div className="chakra-info">
                        <div className="chakra-name">
                          {number === 7 && 'Kronen-Chakra'}
                          {number === 6 && 'Stirn-Chakra'}
                          {number === 5 && 'Hals-Chakra'}
                          {number === 4 && 'Herz-Chakra'}
                          {number === 3 && 'Solarplexus-Chakra'}
                          {number === 2 && 'Sakral-Chakra'}
                          {number === 1 && 'Wurzel-Chakra'}
                        </div>
                        <div className="chakra-theme">
                          {number === 7 && 'Spiritualität & Erleuchtung'}
                          {number === 6 && 'Intuition & Wahrnehmung'}
                          {number === 5 && 'Kommunikation & Wahrheit'}
                          {number === 4 && 'Liebe & Mitgefühl'}
                          {number === 3 && 'Willenskraft & Persönlichkeit'}
                          {number === 2 && 'Sexualität & Kreativität'}
                          {number === 1 && 'Lebenswille & Sicherheit'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-content-grid">
                
                {/* Chakra Details Grid */}
                <div className="chakra-details-grid">
                  
                  {/* Chakra 7 */}
                  <div className="chakra-detail-card crown">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">7</div>
                      <h3>Kronen-Chakra</h3>
                      <div className="chakra-symbol">👑</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Scheitel, höchster Punkt des Kopfes</strong> - Kosmisches Bewusstsein</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Spiritualität, Erleuchtung, Selbstverwirklichung</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Krebserkrankungen</li>
                          <li>Immunschwäche</li>
                          <li>Chronische Krankheiten</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Depressionen</li>
                          <li>Verwirrung</li>
                          <li>Realitätsflucht</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Gehirn</li>
                          <li>Gesamtheit des Organismus</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Zirbeldrüse oder Epiphyse</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Selbstverwirklichung (Serotonin, Melatonin)</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 6 */}
                  <div className="chakra-detail-card third-eye">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">6</div>
                      <h3>Stirn-Chakra</h3>
                      <div className="chakra-symbol">👁️</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>In der Stirnmitte über der Nasenwurzel</strong> - 7. Sinn, Intuition</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Intuition, Wahrnehmung, Fantasie</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Kopfschmerzen</li>
                          <li>Erkrankungen der Sinnesorgane</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Konzentrations- und Lernschwäche</li>
                          <li>Ängstlichkeit</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Kleinhirn</li>
                          <li>Nerven- & Hormonsystem</li>
                          <li>Augen, Ohren, Nase, Nebenhöhlen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Hirnanhangdrüse oder Hypophyse</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Fantasie</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 5 */}
                  <div className="chakra-detail-card throat">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">5</div>
                      <h3>Hals-Chakra</h3>
                      <div className="chakra-symbol">🗣️</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Kehlkopf</strong> - Hören</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Kommunikation, Wahrheit, Inspiration</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Schilddrüsenerkrankungen</li>
                          <li>Nackenschmerzen</li>
                          <li>Sprachstörungen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Hemmungen</li>
                          <li>Mangel an Ausdrucksmöglichkeiten</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Hals, Kehlkopf</li>
                          <li>Speise- und Luftröhre</li>
                          <li>Nacken, Schulter, Kiefer</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Schilddrüse und Nebenschilddrüse (Thyroxin)</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Kommunikation</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 4 */}
                  <div className="chakra-detail-card heart">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">4</div>
                      <h3>Herz-Chakra</h3>
                      <div className="chakra-symbol">💚</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Brustmitte, auf der Höhe des Herzens</strong> - Tasten</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Liebe, Mitgefühl, Menschlichkeit</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Blutdruckstörungen</li>
                          <li>Herz- und Lungenerkrankungen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Gefühlskälte</li>
                          <li>Kontaktschwierigkeiten</li>
                          <li>Mangelnde Abgrenzung</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Herz, Lunge</li>
                          <li>Blut, Arme & Hände</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Thymusdrüse (Immunsystem)</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Mitgefühl</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 3 */}
                  <div className="chakra-detail-card solar">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">3</div>
                      <h3>Solarplexus-Chakra</h3>
                      <div className="chakra-symbol">🔥</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Oberhalb des Bauchnabels</strong> - Sehen</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Willenskraft, Persönlichkeit, Selbstkontrolle</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Verdauungsstörungen</li>
                          <li>Magenprobleme, Diabetes, Übergewicht</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Aggressivität</li>
                          <li>Unsicherheit</li>
                          <li>Alpträume, Schlafstörungen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Magen, Dünndarm</li>
                          <li>Leber, vegetatives Nervensystem</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Bauchspeicheldrüse (Insulin, Verdauungsenzyme)</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Emotionalität</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 2 */}
                  <div className="chakra-detail-card sacral">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">2</div>
                      <h3>Sakral-Chakra</h3>
                      <div className="chakra-symbol">💧</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Unterhalb des Nabels</strong> - Schmecken</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Sexualität, Sinnlichkeit, Fortpflanzung, Kreativität</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Impotenz</li>
                          <li>Prostata- und Frauenleiden</li>
                          <li>Nierenprobleme</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Süchte</li>
                          <li>Sexuelle Unlust</li>
                          <li>Geistige Kraftlosigkeit</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Geschlechtsorgane, Nieren, Blase</li>
                          <li>Blutkreislauf</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Hoden und Eierstöcke (Keimzellen, Östrogene, Testosteron)</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Körperbewusstsein</p>
                      </div>
                    </div>
                  </div>

                  {/* Chakra 1 */}
                  <div className="chakra-detail-card root">
                    <div className="chakra-card-header">
                      <div className="chakra-card-number">1</div>
                      <h3>Wurzel-Chakra</h3>
                      <div className="chakra-symbol">🌱</div>
                    </div>
                    <div className="chakra-card-content">
                      <div className="detail-group">
                        <h4>📍 Lokalisation & Sinn</h4>
                        <p><strong>Damm, zwischen Anus und Geschlechtsorganen</strong> - Riechen</p>
                      </div>
                      <div className="detail-group">
                        <h4>💫 Zentrale Themen</h4>
                        <p>Lebenswille, Überleben, Urvertrauen, Sicherheit, Selbsterhaltung</p>
                      </div>
                      <div className="detail-group">
                        <h4>🩺 Körperliche Störungen</h4>
                        <ul>
                          <li>Verstopfung</li>
                          <li>Kreuzschmerzen</li>
                          <li>Knochenerkrankungen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>😔 Seelische Störungen</h4>
                        <ul>
                          <li>Existenzielle Ängste</li>
                          <li>Mangel an Vertrauen</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🧠 Körperfunktionen & Organe</h4>
                        <ul>
                          <li>Steißbein, Knochen</li>
                          <li>Dickdarm, Nägel, Zähne</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🔬 Organdrüsen</h4>
                        <ul>
                          <li>Nebennieren (Kortison, Adrenalin, Noradrenalin)</li>
                        </ul>
                      </div>
                      <div className="detail-group">
                        <h4>🌌 Geistige Ebene</h4>
                        <p>Lebenswille</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        /* ✅ NOUVEAU : Styles pour le contenu SEO - Discrètement intégré */
        .seo-text-section {
          background: rgba(255, 255, 255, 0.7);
          padding: 1.5rem 2rem;
          border-radius: 16px;
          margin: 0 auto 3rem auto;
          max-width: 1000px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .seo-content h2 {
          color: #1e293b;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 600;
        }

        .seo-content p {
          color: #475569;
          line-height: 1.7;
          text-align: center;
          margin: 0;
          font-size: 1rem;
        }

        .additional-seo-text {
          background: rgba(255, 255, 255, 0.8);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 2.5rem;
          border: 1px solid #e2e8f0;
        }

        .additional-seo-text p {
          color: #475569;
          line-height: 1.6;
          text-align: center;
          margin: 0;
          font-size: 1rem;
        }

        .faq-seo-section {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          margin-top: 3rem;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
        }

        .faq-seo-section h2 {
          text-align: center;
          margin-bottom: 2.5rem;
          color: #1e293b;
          font-size: 2rem;
          font-weight: 600;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .faq-item {
          padding: 2rem;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .faq-item h3 {
          color: #1e293b;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .faq-item p {
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* Tous les styles existants restent IDENTIQUES */
        .header {
          text-align: center;
          margin-bottom: 4rem;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 24px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 300;
          position: relative;
        }

        /* Choice Cards */
        .choice-section {
          margin-bottom: 4rem;
        }

        .choice-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .choice-cards {
            grid-template-columns: 1fr;
          }
          
          .seo-text-section,
          .additional-seo-text {
            padding: 1rem;
            margin: 0 auto 2rem auto;
          }
          
          .faq-grid {
            grid-template-columns: 1fr;
          }
          
          .title {
            font-size: 2.5rem;
          }
        }

        .choice-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid #f1f5f9;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .choice-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s ease;
        }

        .choice-card:hover::before {
          left: 100%;
        }

        .choice-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border-color: #667eea;
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
          border-radius: 22px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .choice-card:hover .card-glow {
          opacity: 0.3;
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .card-icon {
          font-size: 3.5rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .choice-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-text {
          flex: 1;
        }

        .card-text h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .card-text p {
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .card-arrow {
          font-size: 1.5rem;
          font-weight: 300;
          color: #667eea;
          transition: transform 0.3s ease;
        }

        .choice-card:hover .card-arrow {
          transform: translateX(5px);
        }

        .card-features {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .card-features span {
          background: #f8fafc;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #475569;
          transition: all 0.3s ease;
        }

        .choice-card:hover .card-features span {
          background: #667eea;
          color: white;
        }

        /* Info Section */
        .info-section {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
        }

        .info-section h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #333;
          font-weight: 300;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit {
          padding: 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .benefit p {
          color: #666;
          line-height: 1.6;
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .benefit p {
          color: #666;
          line-height: 1.6;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 1200px;
          width: 100%;
          max-height: 95vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideIn 0.4s ease-out;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .close-button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          color: #64748b;
          backdrop-filter: blur(10px);
        }

        .close-button:hover {
          background: #dc2626;
          color: white;
          transform: rotate(90deg);
        }

        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 2rem 2rem;
          text-align: center;
          border-radius: 24px 24px 0 0;
          position: relative;
          overflow: hidden;
        }

        .modal-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .modal-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          backdrop-filter: blur(10px);
        }

        .modal-header h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .modal-subtitle {
          opacity: 0.9;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .modal-body {
          padding: 0;
        }

        /* Modal Content Grid */
        .modal-content-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Modal Sections */
        .modal-section {
          padding: 3rem 2rem;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .modal-section:last-child {
          border-bottom: none;
        }

        .modal-section.highlight {
          background: linear-gradient(135deg, #fef7ff, #faf5ff);
        }

        .section-icon {
          font-size: 3rem;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        .section-content {
          flex: 1;
        }

        .section-content h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        /* Features List */
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          border-color: #667eea;
          transform: translateX(5px);
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: #667eea;
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .feature-item span {
          color: #475569;
          line-height: 1.5;
        }

        /* Benefits Grid */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .benefit-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .benefit-card .benefit-icon {
          font-size: 2rem;
          margin: 0;
          flex-shrink: 0;
        }

        .benefit-text h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .benefit-text p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Discovery Cards */
        .discovery-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .discovery-card {
          padding: 2rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #f1f5f9;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .discovery-card:hover {
          border-color: #667eea;
          transform: translateY(-5px);
        }

        .card-number {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #667eea;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .discovery-card h4 {
          color: #1e293b;
          margin: 1rem 0 0.5rem;
          font-weight: 600;
        }

        .discovery-card p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Guidance Content */
        .guidance-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .guidance-content p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .guidance-points {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .guidance-point {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .point-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .guidance-point span {
          color: #475569;
          font-weight: 500;
        }

        /* Process Flow */
        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .process-step {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: #667eea;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .step-line {
          width: 2px;
          height: 40px;
          background: #e2e8f0;
          flex: 1;
        }

        .process-step:last-child .step-line {
          display: none;
        }

        .step-content {
          flex: 1;
          padding-bottom: 2rem;
        }

        .step-content h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .step-content p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Aspects Grid */
        .aspects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .aspect-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .aspect-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .aspect-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .aspect-content h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .aspect-content p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Chakra Modal Specific Styles */
        .chakra-modal .modal-body {
          padding: 0;
        }

        .chakra-visual-section {
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        }

        .chakra-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .chakra-node {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .chakra-orb {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .chakra-7 .chakra-orb { 
          background: linear-gradient(135deg, #7e22ce, #a855f7);
          animation-delay: 0s;
        }
        .chakra-6 .chakra-orb { 
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          animation-delay: 0.2s;
        }
        .chakra-5 .chakra-orb { 
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
          animation-delay: 0.4s;
        }
        .chakra-4 .chakra-orb { 
          background: linear-gradient(135deg, #10b981, #34d399);
          animation-delay: 0.6s;
        }
        .chakra-3 .chakra-orb { 
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          animation-delay: 0.8s;
        }
        .chakra-2 .chakra-orb { 
          background: linear-gradient(135deg, #f97316, #fb923c);
          animation-delay: 1.0s;
        }
        .chakra-1 .chakra-orb { 
          background: linear-gradient(135deg, #dc2626, #ef4444);
          animation-delay: 1.2s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .chakra-info {
          flex: 1;
        }

        .chakra-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 1.1rem;
        }

        .chakra-theme {
          color: #64748b;
          font-size: 0.9rem;
          margin-top: 0.25rem;
        }

        /* Chakra Details Grid */
        .chakra-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }

        .chakra-detail-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border-top: 4px solid;
          transition: all 0.3s ease;
        }

        .chakra-detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .crown { border-color: #7e22ce; }
        .third-eye { border-color: #4f46e5; }
        .throat { border-color: #0ea5e9; }
        .heart { border-color: #10b981; }
        .solar { border-color: #f59e0b; }
        .sacral { border-color: #f97316; }
        .root { border-color: #dc2626; }

        .chakra-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .chakra-card-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          color: white;
          flex-shrink: 0;
        }

        .crown .chakra-card-number { background: #7e22ce; }
        .third-eye .chakra-card-number { background: #4f46e5; }
        .throat .chakra-card-number { background: #0ea5e9; }
        .heart .chakra-card-number { background: #10b981; }
        .solar .chakra-card-number { background: #f59e0b; }
        .sacral .chakra-card-number { background: #f97316; }
        .root .chakra-card-number { background: #dc2626; }

        .chakra-card-header h3 {
          color: #1e293b;
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .chakra-symbol {
          font-size: 1.5rem;
          margin-left: auto;
        }

        .chakra-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-group h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .detail-group p {
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        .detail-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .detail-group li {
          padding: 0.3rem 0;
          color: #475569;
          position: relative;
          padding-left: 1rem;
        }

        .detail-group li:before {
          content: '•';
          color: inherit;
          position: absolute;
          left: 0;
        }
      `}</style>
    </>
  );
}