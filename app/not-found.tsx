import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Seite nicht gefunden | Vedische Astrologie Beratung</title>
        <meta 
          name="description" 
          content="Die gesuchte Seite existiert nicht. Zurück zur Vedischen Astrologie Beratung in Zürich für Partner Horoskop, Karma Analyse und spirituelle Heilung." 
        />
        <meta name="robots" content="noindex, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="404 - Seite nicht gefunden | IndischeAstro" />
        <meta property="og:description" content="Zurück zur Vedischen Astrologie Beratung in Zürich" />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.indischeastro.ch" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "404 - Seite nicht gefunden",
              "description": "Die gesuchte Seite existiert nicht. Vedische Astrologie Beratung in Zürich.",
              "url": "https://www.indischeastro.ch/404",
              "mainEntity": {
                "@type": "WebSite",
                "name": "IndischeAstro - Vedische Astrologie",
                "url": "https://www.indischeastro.ch",
                "description": "Professionelle Vedische Astrologie Beratung in Zürich"
              }
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Illustration ou icône */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] rounded-full flex items-center justify-center text-white text-6xl mb-4">
              🔮
            </div>
          </div>

          {/* Code d'erreur */}
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-gray-900 mb-2">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] mx-auto mb-4"></div>
          </div>

          {/* Message principal */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seite nicht gefunden
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
              Entschuldigung, die von Ihnen gesuchte Seite existiert nicht mehr 
              oder wurde verschoben. Vielleicht können Sie hier weiterfinden:
            </p>
          </div>

          {/* Suggestions de navigation */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Beliebte Seiten:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link 
                href="/"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#ff6e54] hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-[#ff6e54] text-lg mb-2 group-hover:scale-110 transition-transform">🏠</div>
                <h4 className="font-semibold text-gray-800 mb-1">Startseite</h4>
                <p className="text-sm text-gray-600">Zurück zur Hauptseite</p>
              </Link>
              
              <Link 
                href="/ServicePrice"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#260C56] hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-[#260C56] text-lg mb-2 group-hover:scale-110 transition-transform">✨</div>
                <h4 className="font-semibold text-gray-800 mb-1">Dienstleistungen</h4>
                <p className="text-sm text-gray-600">Alle Angebote entdecken</p>
              </Link>
              
              <Link 
                href="/Contacte"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-green-500 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-green-500 text-lg mb-2 group-hover:scale-110 transition-transform">📞</div>
                <h4 className="font-semibold text-gray-800 mb-1">Kontakt</h4>
                <p className="text-sm text-gray-600">Beratungstermin vereinbaren</p>
              </Link>
              
              <Link 
                href="/blog"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-purple-500 text-lg mb-2 group-hover:scale-110 transition-transform">📚</div>
                <h4 className="font-semibold text-gray-800 mb-1">Blog</h4>
                <p className="text-sm text-gray-600">Vedisches Wissen entdecken</p>
              </Link>
            </div>
          </div>

          {/* CTA principal */}
          <div className="mb-8">
            <Link 
              href="/Contacte"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6e54] to-[#ff8e54] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>📅</span>
              Kostenlose Erstberatung buchen
            </Link>
          </div>

          {/* Informations de contact */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-md mx-auto">
            <h4 className="font-semibold text-gray-800 mb-3">Brauchen Sie sofort Hilfe?</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 <strong>Telefon:</strong> +41 76 123 45 67</p>
              <p>✉️ <strong>E-Mail:</strong> info@indischeastro.ch</p>
              <p>🕒 <strong>Öffnungszeiten:</strong> Mo-Fr 9:00-18:00</p>
            </div>
          </div>

          {/* Message SEO-friendly */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              IndischeAstro - Vedische Astrologie Beratung in Zürich für {" "}
              <strong>Partner Horoskop, Karma Analyse, Chakra Heilung</strong> und {" "}
              <strong>spirituelle Lebensberatung</strong>. Professionelle Hilfe bei {" "}
              <strong>karmischen Blockaden, Beziehungsproblemen</strong> und {" "}
              <strong>emotionalen Herausforderungen</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Script pour le tracking des erreurs 404 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Tracking de l'erreur 404
            if (typeof gtag !== 'undefined') {
              gtag('event', '404_error', {
                'event_category': 'error',
                'event_label': window.location.pathname,
                'value': 1
              });
            }
            
            // Log pour le développement
            console.log('404 Page Not Found:', {
              path: window.location.pathname,
              referrer: document.referrer,
              timestamp: new Date().toISOString()
            });
          `,
        }}
      />
    </>
  );
}