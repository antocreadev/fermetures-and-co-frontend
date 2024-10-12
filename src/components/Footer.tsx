export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BESOIN D'AIDE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">BESOIN D'AIDE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Nous contacter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Suivi de commande
              </a>
            </li>
          </ul>
        </div>

        {/* À PROPOS DE CASANOOV */}
        <div>
          <h3 className="text-lg font-semibold mb-4">À PROPOS DE CASANOOV</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Qui sommes-nous ?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Nos engagements
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Casanoov Pro
              </a>
            </li>
          </ul>
        </div>

        {/* INTERNATIONAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INTERNATIONAL</h3>
          <p className="text-sm leading-relaxed">
            France, Allemagne, Royaume-Uni, Italie, Espagne, Belgique, Pologne,
            Pays-Bas, Autriche, Luxembourg, Portugal, Irlande, Danemark,
            Finlande, Suède, République Tchèque, Grèce, Croatie, Hongrie,
            Lituanie, Lettonie, Roumanie, Slovénie, Slovaquie
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>Cliquez-ici pour modifier vos préférences en matière de cookies</p>
        <p className="mt-2">
          © 2019 - Casanoov / CGV / Politique de confidentialité / Mentions
          légales
        </p>
      </div>
    </footer>
  );
};

export default Footer;
