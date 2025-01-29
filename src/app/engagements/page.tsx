import CategoryNavList from "@/components/CategoryNavList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />
      <div className="max-w-4xl mx-auto px-4 py-8  text-black">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Nos Engagements chez Fermetures & Co
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">
              Engagement n°1 : Une qualité irréprochable
            </h2>
            <p className="mb-4">
              Chez <span className="font-bold">Fermetures & Co</span>, nous
              sélectionnons nos produits avec soin en collaboration avec nos
              partenaires fabricants. La qualité est contrôlée à chaque étape :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>À la réception des matières premières.</li>
              <li>Tout au long du processus de fabrication.</li>
              <li>Avant expédition depuis nos usines.</li>
              <li>À l&apos;arrivée dans nos entrepôts.</li>
            </ul>
            <p className="mt-4">
              Vous êtes assurés de recevoir des produits durables et fiables,
              conformes à nos exigences élevées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Engagement n°2 : Paiements 100% sécurisés
            </h2>
            <p className="mb-4">
              Faites vos achats en toute sérénité sur{" "}
              <span className="font-bold">fermetures-et-co.fr</span> grâce à nos
              protocoles de sécurité avancés :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protection de vos données via une connexion cryptée SSL.</li>
              <li>
                Gestion des paiements par un prestataire reconnu, sans jamais
                transmettre vos informations bancaires à Fermetures & Co.
              </li>
              <li>
                Débit transparent au moment de votre commande ou précommande.
                Pour plus de détails, consultez nos CGV &gt; Paiements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Engagement n°3 : Une livraison premium offerte
            </h2>
            <p className="mb-4">
              Profitez d&apos;un service de livraison rapide et soigné :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expédition de votre commande sous 24h ouvrées.</li>
              <li>
                Livraison à domicile, sur rendez-vous, à la date et l&apos;heure
                de votre choix.
              </li>
              <li>
                Frais de livraison entièrement offerts sur tous nos produits.
                Pour plus d&apos;informations, consultez nos CGV &gt; Livraison.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Engagement n°4 : Respect de votre confidentialité
            </h2>
            <p>
              Chez <span className="font-bold">Fermetures & Co</span>, votre vie
              privée est une priorité. Nous traitons vos données personnelles
              avec la plus grande rigueur. Découvrez tous les détails dans notre
              Politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Engagement n°5 : Une commande simplifiée
            </h2>
            <p className="mb-4">
              Commandez en quelques clics sur{" "}
              <span className="font-bold">fermetures-et-co.fr</span> :
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Ajoutez vos produits au panier.</li>
              <li>Identifiez-vous.</li>
              <li>Renseignez vos coordonnées.</li>
              <li>Vérifiez votre commande.</li>
              <li>Payez en toute sécurité.</li>
            </ol>
            <p>
              Toutes les informations essentielles (fiches techniques, visuels)
              sont à votre disposition pour vous guider dans votre choix.
            </p>
          </section>

          <p className="text-center font-bold mt-8">
            <span className="font-bold">Fermetures & Co</span>, des engagements
            clairs pour une expérience client unique et satisfaisante.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
