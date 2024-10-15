export const Footer = () => {
  return (
    <footer className=" pt py-8">
      <div className="-4 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BESOIN D'AIDE */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            BESOIN D&apos;AIDE
          </h3>
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
          <h3 className="text-lg font-semibold mb-4 uppercase">
            À PROPOS DE FERMETURES & CO
          </h3>
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
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            INTERNATIONAL
          </h3>
          <p className="text-sm leading-relaxed">
            France, Allemagne, Royaume-Uni, Italie, Espagne, Belgique, Pologne,
            Pays-Bas, Autriche, Luxembourg, Portugal, Irlande, Danemark,
            Finlande, Suède, République Tchèque, Grèce, Croatie, Hongrie,
            Lituanie, Lettonie, Roumanie, Slovénie, Slovaquie
          </p>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-sm ">
        <p className="mt-2">
          © 2024 - Fermetures & co / CGV / Politique de confidentialité /
          Mentions légales
        </p>
      </div>
    </footer>
  );
};

export default Footer;
