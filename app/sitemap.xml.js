import { getServerSideSitemap } from "next-sitemap";

export async function getServerSideProps(ctx) {
  // Liste des URLs de votre site
  const urls = [
    "https://www.indischeastro.fr/", // Page d'accueil
    // Page "Services"
    // Ajoutez toutes les autres URLs de votre site ici
  ];

  // Créez les champs pour le sitemap
  const fields = urls.map((url) => ({
    loc: url, // URL de la page
    lastmod: new Date().toISOString(), // Date de dernière modification
    changefreq: "daily", // Fréquence de mise à jour (daily, weekly, etc.)
    priority: 1, // Priorité (entre 0.1 et 1.0)
  }));

  // Retournez les données du sitemap
  return getServerSideSitemap(ctx, fields);
}

// Cette fonction est obligatoire, mais vous n'avez pas besoin de la modifier
export default function Sitemap() {}
