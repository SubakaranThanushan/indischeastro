// app/gratuit/page.jsx
'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Gratuit() {
  const [activeSection, setActiveSection] = useState('astrologie');

  return (
    <>
      <Head>
        <title>Kostenlose Beratung - Astrologie & Chakren | IhrPortal</title>
        <meta 
          name="description" 
          content="Kostenlose astrologische Partneranalyse und umfassender Chakra-Test. Entdecken Sie vedische Astrologie und energetische Balance." 
        />
      </Head>

      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <h1 className="title">Kostenlose Beratung</h1>
            <p className="subtitle">
              Wählen Sie zwischen unserer vedischen Partnerastrologie oder dem komplettem Chakra-Test
            </p>
          </div>
        </header>

        {/* Choice Selection */}
        <div className="choice-section">
          <div className="choice-cards">
            <div 
              className={`choice-card ${activeSection === 'astrologie' ? 'active' : ''}`}
              onClick={() => setActiveSection('astrologie')}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">🌌</div>
                <div className="card-text">
                  <h3>Vedische Partnerastrologie</h3>
                  <p>Tiefgehende Beziehungsanalyse mit jahrtausendealtem Wissen</p>
                </div>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-features">
                <span>✨ Karmische Verbindungen</span>
                <span>💫 Planetenanalyse</span>
                <span>❤️ Beziehungsharmonie</span>
              </div>
            </div>

            <div 
              className={`choice-card ${activeSection === 'chakra' ? 'active' : ''}`}
              onClick={() => setActiveSection('chakra')}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">🌀</div>
                <div className="card-text">
                  <h3>Chakra-Test & Analyse</h3>
                  <p>Umfassende energetische Balanceanalyse Ihrer 7 Hauptchakren</p>
                </div>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-features">
                <span>🌈 7 Energiezentren</span>
                <span>⚖️ Balance-Check</span>
                <span>🌿 Heilungsempfehlungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="content-sections">
          
          {/* Astrologie Section */}
          {activeSection === 'astrologie' && (
            <div className="section-content astro-section">
              <div className="section-header">
                <div className="section-badge">♋️ Vedische Astrologie</div>
                <h2>Astrologische Partnerberatung</h2>
                <p className="section-subtitle">Erfahren Sie tiefgehende Einblicke in Ihre Beziehung durch jahrtausendealtes Wissen</p>
              </div>

              <div className="content-grid">
                <div className="info-card">
                  <div className="card-decoration"></div>
                  <h3>📋 Was Sie erfahren werden</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <div className="icon">💫</div>
                      <div className="text">
                        <strong>Partner-Erwartungen</strong>
                        <span>Was Ihr/e Partner/in von einer Beziehung erwartet, damit er/sie glücklich ist</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="icon">⚡</div>
                      <div className="text">
                        <strong>Herausforderungen</strong>
                        <span>Was die Herausforderungen in Ihrer Beziehung sind und wie Sie Konflikte vermeiden können</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="icon">🔍</div>
                      <div className="text">
                        <strong>Partner-Bedürfnisse</strong>
                        <span>Welche Bedürfnisse Ihr Partner/Ihre Partnerin hat und warum er/sie so reagiert</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="icon">🤝</div>
                      <div className="text">
                        <strong>Unterschiede meistern</strong>
                        <span>Wie Sie mit Ihren Unterschieden zurechtkommen für eine dauerhaft glückliche Beziehung</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card highlight">
                  <h3>❓ Warum eine astrologische Partneranalyse wichtig ist</h3>
                  <div className="feature-grid">
                    <div className="feature">
                      <div className="feature-icon">🛡️</div>
                      <div className="feature-text">
                        <strong>Schutz vor Enttäuschungen</strong>
                        <p>Falsche Erwartungen in der Beziehung/Ehe erkennen und vermeiden</p>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="feature-icon">🎯</div>
                      <div className="feature-text">
                        <strong>Projektionen auflösen</strong>
                        <p>Falsche Projektionen an den Partner erkennen und auflösen</p>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="feature-icon">⭐</div>
                      <div className="feature-text">
                        <strong>Qualität erkennen</strong>
                        <p>Die wahre Qualität Ihrer Beziehung/Ehe verstehen</p>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="feature-icon">📈</div>
                      <div className="feature-text">
                        <strong>Lernprozesse akzeptieren</strong>
                        <p>Akzeptanz der Lernprozesse und Erkennung von Wachstumschancen</p>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="feature-icon">🌊</div>
                      <div className="feature-text">
                        <strong>Phasen verstehen</strong>
                        <p>Phasen der Beziehung/Ehe und Planeten-Einflüsse verstehen</p>
                      </div>
                    </div>
                    <div className="feature">
                      <div className="feature-icon">🆘</div>
                      <div className="feature-text">
                        <strong>Krisenmanagement</strong>
                        <p>Krisenmanagement in der Beziehung/Ehe meistern</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card">
                  <h3>🔍 Was die Analyse enthüllt</h3>
                  <div className="discovery-grid">
                    <div className="discovery-item">
                      <div className="discovery-number">01</div>
                      <div className="discovery-content">
                        <h4>Sternzeichen-Analyse</h4>
                        <p>Ähnlichkeiten und Unterschiede der beiden Sternzeichen feststellen</p>
                      </div>
                    </div>
                    <div className="discovery-item">
                      <div className="discovery-number">02</div>
                      <div className="discovery-content">
                        <h4>Stress-Faktoren</h4>
                        <p>Hinweise über mögliche Stress-Faktoren in der Beziehung</p>
                      </div>
                    </div>
                    <div className="discovery-item">
                      <div className="discovery-number">03</div>
                      <div className="discovery-content">
                        <h4>Harmonie-Analyse</h4>
                        <p>Verstehen warum es harmonisiert oder Differenzen gibt</p>
                      </div>
                    </div>
                    <div className="discovery-item">
                      <div className="discovery-number">04</div>
                      <div className="discovery-content">
                        <h4>Karmische Verbindungen</h4>
                        <p>Aufzeigen karmischer Verbindungen und Seelenpartnerschaften</p>
                      </div>
                    </div>
                    <div className="discovery-item">
                      <div className="discovery-number">05</div>
                      <div className="discovery-content">
                        <h4>Verhaltensmuster</h4>
                        <p>Analyse typischer Merkmale und Verhaltensweisen der Partner</p>
                      </div>
                    </div>
                    <div className="discovery-item">
                      <div className="discovery-number">06</div>
                      <div className="discovery-content">
                        <h4>Harmonie-Bereiche</h4>
                        <p>Erkennen wo Sie gut harmonieren und Verbesserungsmöglichkeiten</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card">
                  <h3>⚙️ Wie die Beratung funktioniert</h3>
                  <div className="process-steps">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Datenanalyse</h4>
                        <p>Analyse auf Basis der persönlichen Geburtsdaten mit genauen Angaben der Geburtsstunden und -orte</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Planetenkonstellation</h4>
                        <p>Gegenüberstellung der Planetenkonstellation der beiden Sternzeichen</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Vergleich & Deutung</h4>
                        <p>Vergleich der speziellen Besonderheiten der beiden Partner und deren Planeten</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card">
                  <h3>⭐ Wichtige Aspekte für eine erfolgreiche Verbindung</h3>
                  <div className="aspects-grid">
                    <div className="aspect">
                      <div className="aspect-icon">💑</div>
                      <div className="aspect-content">
                        <h4>Tägliches Auskommen</h4>
                        <p>Gutes tägliches gemeinsames Auskommen im gegenseitigen Kontext</p>
                      </div>
                    </div>
                    <div className="aspect">
                      <div className="aspect-icon">😊</div>
                      <div className="aspect-content">
                        <h4>Emotionale Wahrnehmung</h4>
                        <p>Stärke von Wahrnehmung gewisser Emotionen</p>
                      </div>
                    </div>
                    <div className="aspect">
                      <div className="aspect-icon">👶</div>
                      <div className="aspect-content">
                        <h4>Nachkommenschaft</h4>
                        <p>Mondkonstellation in Bezug auf Nachkommenschaft</p>
                      </div>
                    </div>
                    <div className="aspect">
                      <div className="aspect-icon">💰</div>
                      <div className="aspect-content">
                        <h4>Wohlstand</h4>
                        <p>Erfüllung von Wohlstand in der Verbindung</p>
                      </div>
                    </div>
                    <div className="aspect">
                      <div className="aspect-icon">💞</div>
                      <div className="aspect-content">
                        <h4>Sexuelle Kompatibilität</h4>
                        <p>Sexuelle Kompatibilität der Geschlechtsteile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chakra Section */}
          {activeSection === 'chakra' && (
            <div className="section-content chakra-section">
              <div className="section-header">
                <div className="section-badge">🕉️ Chakra-Analyse</div>
                <h2>Testen Sie Ihre Chakra</h2>
                <p className="section-subtitle">Umfassende Analyse der 7 Hauptchakren für körperliche und seelische Balance</p>
              </div>

              {/* Chakra Visualization */}
              <div className="chakra-visualization">
                <div className="chakra-column">
                  {[7, 6, 5, 4, 3, 2, 1].map((number) => (
                    <div key={number} className={`chakra-level chakra-${number}`}>
                      <div className="chakra-dot">
                        <span>{number}</span>
                      </div>
                      <div className="chakra-label">
                        {number === 7 && 'Krone'}
                        {number === 6 && 'Stirn'}
                        {number === 5 && 'Hals'}
                        {number === 4 && 'Herz'}
                        {number === 3 && 'Solarplexus'}
                        {number === 2 && 'Sakral'}
                        {number === 1 && 'Wurzel'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-grid">
                
                {/* Chakra Overview */}
                <div className="info-card full-width">
                  <h3>🧘 Die 7 Hauptchakren im Detail</h3>
                  
                  <div className="chakra-overview">
                    {/* Chakra 7 */}
                    <div className="chakra-detail-card crown">
                      <div className="chakra-header">
                        <div className="chakra-number">7</div>
                        <div className="chakra-info">
                          <h4>Kronen-Chakra</h4>
                          <p>Scheitel, höchster Punkt des Kopfes</p>
                        </div>
                        <div className="chakra-theme">Spiritualität & Erleuchtung</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Krebserkrankungen</li>
                            <li>Immunschwäche</li>
                            <li>Chronische Krankheiten</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Depressionen</li>
                            <li>Verwirrung</li>
                            <li>Realitätsflucht</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Gehirn, Gesamtheit des Organismus</li>
                            <li>Zirbeldrüse oder Epiphyse</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Selbstverwirklichung (Serotonin, Melatonin)</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 6 */}
                    <div className="chakra-detail-card third-eye">
                      <div className="chakra-header">
                        <div className="chakra-number">6</div>
                        <div className="chakra-info">
                          <h4>Stirn-Chakra</h4>
                          <p>In der Stirnmitte über der Nasenwurzel</p>
                        </div>
                        <div className="chakra-theme">Intuition & Wahrnehmung</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Kopfschmerzen</li>
                            <li>Erkrankungen der Sinnesorgane</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Konzentrations- und Lernschwäche</li>
                            <li>Ängstlichkeit</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Kleinhirn, Nerven- & Hormonsystem</li>
                            <li>Augen, Ohren, Nase, Nebenhöhlen</li>
                            <li>Hirnanhangdrüse oder Hypophyse</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Fantasie</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 5 */}
                    <div className="chakra-detail-card throat">
                      <div className="chakra-header">
                        <div className="chakra-number">5</div>
                        <div className="chakra-info">
                          <h4>Hals-Chakra</h4>
                          <p>Kehlkopf</p>
                        </div>
                        <div className="chakra-theme">Kommunikation & Wahrheit</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Schilddrüsenerkrankungen</li>
                            <li>Nackenschmerzen</li>
                            <li>Sprachstörungen</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Hemmungen</li>
                            <li>Mangel an Ausdrucksmöglichkeiten</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Hals, Kehlkopf, Speise- und Luftröhre</li>
                            <li>Nacken, Schulter, Kiefer</li>
                            <li>Schilddrüse und Nebenschilddrüse (Thyroxin)</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Kommunikation</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 4 */}
                    <div className="chakra-detail-card heart">
                      <div className="chakra-header">
                        <div className="chakra-number">4</div>
                        <div className="chakra-info">
                          <h4>Herz-Chakra</h4>
                          <p>Brustmitte, auf der Höhe des Herzens</p>
                        </div>
                        <div className="chakra-theme">Liebe & Mitgefühl</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Blutdruckstörungen</li>
                            <li>Herz- und Lungenerkrankungen</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Gefühlskälte</li>
                            <li>Kontaktschwierigkeiten</li>
                            <li>Mangelnde Abgrenzung</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Herz, Lunge, Blut, Arme & Hände</li>
                            <li>Thymusdrüse (Immunsystem)</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Mitgefühl</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 3 */}
                    <div className="chakra-detail-card solar">
                      <div className="chakra-header">
                        <div className="chakra-number">3</div>
                        <div className="chakra-info">
                          <h4>Solarplexus-Chakra</h4>
                          <p>Oberhalb des Bauchnabels</p>
                        </div>
                        <div className="chakra-theme">Willenskraft & Persönlichkeit</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Verdauungsstörungen</li>
                            <li>Magenprobleme, Diabetes, Übergewicht</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Aggressivität</li>
                            <li>Unsicherheit</li>
                            <li>Alpträume, Schlafstörungen</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Magen, Dünndarm, Leber</li>
                            <li>Vegetatives Nervensystem</li>
                            <li>Bauchspeicheldrüse (Insulin, Verdauungsenzyme)</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Emotionalität</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 2 */}
                    <div className="chakra-detail-card sacral">
                      <div className="chakra-header">
                        <div className="chakra-number">2</div>
                        <div className="chakra-info">
                          <h4>Sakral-Chakra</h4>
                          <p>Unterhalb des Nabels</p>
                        </div>
                        <div className="chakra-theme">Sexualität & Kreativität</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Impotenz</li>
                            <li>Prostata- und Frauenleiden</li>
                            <li>Nierenprobleme</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Süchte</li>
                            <li>Sexuelle Unlust</li>
                            <li>Geistige Kraftlosigkeit</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Geschlechtsorgane, Nieren, Blase</li>
                            <li>Blutkreislauf</li>
                            <li>Hoden und Eierstöcke (Keimzellen, Östrogene, Testosteron)</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Körperbewusstsein</p>
                        </div>
                      </div>
                    </div>

                    {/* Chakra 1 */}
                    <div className="chakra-detail-card root">
                      <div className="chakra-header">
                        <div className="chakra-number">1</div>
                        <div className="chakra-info">
                          <h4>Wurzel-Chakra</h4>
                          <p>Damm, zwischen Anus und Geschlechtsorganen</p>
                        </div>
                        <div className="chakra-theme">Lebenswille & Sicherheit</div>
                      </div>
                      <div className="chakra-content">
                        <div className="chakra-section">
                          <h5>Körperliche Störungen</h5>
                          <ul>
                            <li>Verstopfung</li>
                            <li>Kreuzschmerzen</li>
                            <li>Knochenerkrankungen</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Seelische Störungen</h5>
                          <ul>
                            <li>Existenzielle Ängste</li>
                            <li>Mangel an Vertrauen</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Organe & Drüsen</h5>
                          <ul>
                            <li>Steißbein, Knochen, Dickdarm, Nägel, Zähne</li>
                            <li>Nebennieren (Kortison, Adrenalin, Noradrenalin)</li>
                          </ul>
                        </div>
                        <div className="chakra-section">
                          <h5>Geistige Ebene</h5>
                          <p>Lebenswille</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          min-height: 100vh;
        }

        /* Header Styles */
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
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
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

        .choice-card.active {
          border-color: #667eea;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-4px);
        }

        .choice-card.active .card-features span {
          background: rgba(255,255,255,0.2);
          color: white;
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

        .choice-card.active .card-glow {
          opacity: 1;
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

        .choice-card.active .card-text h3 {
          color: white;
        }

        .card-text p {
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .choice-card.active .card-text p {
          color: rgba(255,255,255,0.9);
        }

        .card-arrow {
          font-size: 1.5rem;
          font-weight: 300;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .choice-card.active .card-arrow {
          opacity: 1;
          transform: translateX(0);
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

        /* Content Sections */
        .content-sections {
          min-height: 500px;
        }

        .section-content {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 3rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          gap: 2rem;
        }

        .info-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          border: 1px solid #f1f5f9;
        }

        .info-card.highlight {
          background: linear-gradient(135deg, #fef7ff, #faf5ff);
          border-color: #e9d5ff;
        }

        .info-card.full-width {
          grid-column: 1 / -1;
        }

        .card-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 0 0 0 100px;
          opacity: 0.1;
        }

        .info-card h3 {
          color: #1e293b;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Info List */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
        }

        .info-item .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .info-item .text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-item .text strong {
          color: #1e293b;
          font-weight: 600;
        }

        .info-item .text span {
          color: #64748b;
          line-height: 1.5;
        }

        /* Feature Grid */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .feature-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .feature-text {
          flex: 1;
        }

        .feature-text strong {
          display: block;
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .feature-text p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Discovery Grid */
        .discovery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .discovery-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .discovery-number {
          background: #667eea;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .discovery-content h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .discovery-content p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Process Steps */
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: #f8fafc;
          border-radius: 16px;
          position: relative;
        }

        .step::before {
          content: '';
          position: absolute;
          left: 3rem;
          top: 5rem;
          bottom: -2rem;
          width: 2px;
          background: #e2e8f0;
          z-index: 1;
        }

        .step:last-child::before {
          display: none;
        }

        .step-number {
          background: #667eea;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .step-content {
          flex: 1;
        }

        .step-content h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .step-content p {
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* Aspects Grid */
        .aspects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .aspect {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .aspect:hover {
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

        /* Chakra Visualization */
        .chakra-visualization {
          display: flex;
          justify-content: center;
          margin: 3rem 0;
          padding: 2rem;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 20px;
        }

        .chakra-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .chakra-level {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .chakra-dot {
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
        }

        .chakra-7 .chakra-dot { 
          background: linear-gradient(135deg, #7e22ce, #a855f7);
          animation-delay: 0s;
        }
        .chakra-6 .chakra-dot { 
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          animation-delay: 0.2s;
        }
        .chakra-5 .chakra-dot { 
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
          animation-delay: 0.4s;
        }
        .chakra-4 .chakra-dot { 
          background: linear-gradient(135deg, #10b981, #34d399);
          animation-delay: 0.6s;
        }
        .chakra-3 .chakra-dot { 
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          animation-delay: 0.8s;
        }
        .chakra-2 .chakra-dot { 
          background: linear-gradient(135deg, #f97316, #fb923c);
          animation-delay: 1.0s;
        }
        .chakra-1 .chakra-dot { 
          background: linear-gradient(135deg, #dc2626, #ef4444);
          animation-delay: 1.2s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .chakra-label {
          font-weight: 600;
          color: #1e293b;
          min-width: 100px;
        }

        /* Chakra Detail Cards */
        .chakra-overview {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .chakra-detail-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
        }

        .chakra-detail-card.crown { border-top: 4px solid #7e22ce; }
        .chakra-detail-card.third-eye { border-top: 4px solid #4f46e5; }
        .chakra-detail-card.throat { border-top: 4px solid #0ea5e9; }
        .chakra-detail-card.heart { border-top: 4px solid #10b981; }
        .chakra-detail-card.solar { border-top: 4px solid #f59e0b; }
        .chakra-detail-card.sacral { border-top: 4px solid #f97316; }
        .chakra-detail-card.root { border-top: 4px solid #dc2626; }

        .chakra-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .chakra-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          color: white;
          flex-shrink: 0;
        }

        .crown .chakra-number { background: #7e22ce; }
        .third-eye .chakra-number { background: #4f46e5; }
        .throat .chakra-number { background: #0ea5e9; }
        .heart .chakra-number { background: #10b981; }
        .solar .chakra-number { background: #f59e0b; }
        .sacral .chakra-number { background: #f97316; }
        .root .chakra-number { background: #dc2626; }

        .chakra-info {
          flex: 1;
        }

        .chakra-info h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .chakra-info p {
          color: #64748b;
          margin: 0;
        }

        .chakra-theme {
          background: #f1f5f9;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #475569;
        }

        .chakra-content {
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .chakra-section h5 {
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .chakra-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .chakra-section li {
          padding: 0.3rem 0;
          color: #64748b;
          position: relative;
          padding-left: 1rem;
        }

        .chakra-section li:before {
          content: '•';
          color: inherit;
          position: absolute;
          left: 0;
        }

        .chakra-section p {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}