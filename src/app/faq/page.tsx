import CategoryNavList from "@/components/CategoryNavList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />
      <div className="max-w-4xl mx-auto px-4 py-12  text-black">
        <h1 className="text-3xl font-bold text-center mb-12">FAQ</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">PASSER UNE COMMANDE</h2>
            <p className="mb-4">
              Pour toute question concernant vos commandes passées, nous vous
              invitons à nous contacter via notre
              <span className="font-bold"> formulaire de contact</span>. Nous
              serons heureux de vous assister et de répondre à vos
              préoccupations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels sont les délais de livraison chez Fermetures and Co ?
            </h2>
            <p className="mb-4">
              Nous mettons tout en œuvre pour que vos commandes arrivent
              rapidement et en parfait état :
            </p>
            <ul className="space-y-4 mb-4">
              <li className="flex gap-2">
                <span className="font-bold">Produits en stock :</span>
                <span>
                  Votre commande est préparée en moins de 24h ouvrées. Les
                  délais de livraison sont précisés directement sur la fiche
                  produit, à côté du bouton &quot;Ajouter au panier&quot;.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">
                  Produits en attente de réapprovisionnement :
                </span>
                <span>
                  La livraison est effectuée dès que le stock est à nouveau
                  disponible. Vous recevez votre commande en une seule
                  expédition pour plus de praticité.
                </span>
              </li>
            </ul>
            <p className="mb-4">
              <span className="font-bold">Astuce :</span> Si vous souhaitez
              recevoir vos produits en stock plus rapidement, passez deux
              commandes distinctes : une pour les articles disponibles et une
              pour ceux en attente de réapprovisionnement.
            </p>
            <p>
              Avec <span className="font-bold">Fermetures and Co</span>, la
              livraison est toujours
              <span className="font-bold"> offerte</span>, quelle que soit la
              configuration, pour un maximum de satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Vos données personnelles sont en sécurité avec Fermetures and Co
            </h2>
            <p className="mb-4">
              Chez <span className="font-bold">Fermetures and Co</span>, nous
              nous engageons à protéger vos données personnelles. Elles sont
              utilisées uniquement pour assurer une livraison rapide et
              sécurisée de vos produits.
            </p>
            <p className="mb-4">
              Conformément à la Loi Informatique et Libertés du 6 janvier 1978,
              vous pouvez à tout moment :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Accéder, modifier ou supprimer vos données personnelles.</li>
              <li>
                Exercer votre droit directement depuis votre espace client, dans
                la rubrique « Mes informations personnelles ».
              </li>
              <li>
                Contacter notre Service Client, qui prendra en charge votre
                demande rapidement et efficacement.
              </li>
            </ul>
            <p>
              Avec <span className="font-bold">Fermetures and Co</span>, vos
              informations sont entre de bonnes mains, pour une expérience
              d&apos;achat en toute sérénité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Créez votre compte utilisateur facilement sur Fermetures and Co
            </h2>
            <p className="mb-4">
              Rien de plus simple pour profiter pleinement des services de{" "}
              <span className="font-bold">Fermetures and Co</span> :
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                Cliquez sur l&apos;icône en haut à droite représentant un
                personnage.
              </li>
              <li>
                Sur la page qui s&apos;affiche, choisissez « Inscription ».
              </li>
              <li>
                Remplissez le formulaire avec vos informations personnelles :
                civilité, nom, prénom et adresse e-mail.
              </li>
              <li>Choisissez un mot de passe sécurisé.</li>
              <li>
                Cliquez sur &quot;Je crée mon compte&quot; pour valider votre
                inscription.
              </li>
            </ol>
            <p>
              En quelques secondes, votre compte est prêt, et vous pouvez
              commencer à explorer nos produits et passer commande en toute
              simplicité !
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Modifier vos informations personnelles sur Fermetures and Co
            </h2>
            <p className="mb-4">
              Rien de plus simple pour mettre à jour vos informations
              personnelles :
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                Connectez-vous à votre compte en cliquant sur l&apos;icône en
                haut à droite de la page d&apos;accueil.
              </li>
              <li>Entrez votre adresse e-mail et votre mot de passe.</li>
              <li>
                Une fois connecté, accédez à la rubrique « Mes informations
                personnelles ».
              </li>
              <li>Modifiez les champs souhaités et validez vos changements.</li>
            </ol>
            <p className="mb-4">
              Besoin d&apos;une modification spécifique ? Si une information ne
              peut être modifiée directement, répondez &quot;Non&quot; à la
              question &quot;Avez-vous trouvé la réponse à votre question
              ?&quot;. Un formulaire de contact s&apos;affichera pour nous
              transmettre votre demande, et nous ferons le nécessaire
              rapidement.
            </p>
            <p>
              Avec <span className="font-bold">Fermetures and Co</span>, votre
              compte est toujours à jour, en toute simplicité !
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Les produits Fermetures and Co peuvent-ils être ajustés ?
            </h2>
            <p className="mb-4">
              Pour une installation parfaitement adaptée à votre espace, la
              plupart de nos portails battants, portillons et clôtures peuvent
              être ajustés en largeur.
            </p>
            <p className="mb-4">
              Cependant, les ajustements en hauteur ne sont pas possibles, en
              raison du profilage spécifique des montants verticaux. Toute
              modification de ces éléments pourrait compromettre la solidité et
              la durabilité du produit.
            </p>
            <p className="mb-4">
              Pour ajuster la largeur, vous pouvez découper les lames et
              montants horizontaux à l&apos;aide d&apos;outils appropriés (par
              exemple, une meuleuse avec un disque spécial aluminium).
              Assurez-vous de suivre les précautions nécessaires pour protéger
              les composants pendant la découpe.
            </p>
            <p className="mb-4">
              Besoin d&apos;aide ? Contactez-nous via notre formulaire en ligne
              pour recevoir une notice détaillée sur la marche à suivre.
            </p>
            <p>
              💡 <span className="font-bold">Note importante :</span> Toute
              modification est réalisée sous votre entière responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai oublié mon mot de passe, que faire ?
            </h2>
            <p className="mb-4">
              Pas de panique, voici la procédure à suivre :
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                Allez sur la page de connexion en cliquant sur l&apos;icône en
                haut à droite (représentant un personnage).
              </li>
              <li>Cliquez ensuite sur &quot;Mot de passe oublié&quot;.</li>
              <li>
                Entrez votre adresse e-mail, puis soumettez-la. Un e-mail vous
                sera envoyé dans les plus brefs délais pour réinitialiser votre
                mot de passe (vérifiez également votre dossier SPAM au cas où).
              </li>
              <li>
                Suivez les instructions dans l&apos;e-mail pour définir un
                nouveau mot de passe.
              </li>
              <li>
                Une fois la réinitialisation effectuée, vous pourrez vous
                reconnecter à votre compte avec vos nouvelles informations.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quelle motorisation choisir pour mon portail ?
            </h2>
            <p className="mb-4">
              Sur <span className="font-bold">Fermetures and Co</span>, nous
              vous proposons des motorisations adaptées à chaque type de
              portail, qu&apos;il soit coulissant ou battant.
            </p>

            <h3 className="text-xl font-bold mb-2">
              Pour les portails coulissants :
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-bold">Motorisation RANGER C300</h4>
                <ul className="list-disc pl-6">
                  <li>Poids maximum du portail : 300 kg</li>
                  <li>Puissance : 230 V</li>
                  <li>
                    Accessoires inclus :
                    <ul className="list-disc pl-6">
                      <li>2 télécommandes à 4 touches</li>
                      <li>Crémaillère en nylon (4m – 12 morceaux de 33 cm)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold">Motorisation TANKER C600</h4>
                <ul className="list-disc pl-6">
                  <li>Poids maximum du portail : 600 kg</li>
                  <li>Puissance : 230 V</li>
                  <li>
                    Accessoires inclus :
                    <ul className="list-disc pl-6">
                      <li>2 télécommandes à 4 touches</li>
                      <li>Crémaillère en nylon (4m – 12 morceaux de 33 cm)</li>
                      <li>2 photocellules PHOTOCELL</li>
                      <li>1 feu de signalisation FLASH</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Pour les portails battants :
            </h3>
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="font-bold">Motorisation RANGER B150</h4>
                <ul className="list-disc pl-6">
                  <li>Poids maximal par vantail : 150 kg</li>
                  <li>Longueur maximale par vantail : 2 mètres</li>
                  <li>Puissance : 24 V</li>
                  <li>
                    Accessoires inclus :
                    <ul className="list-disc pl-6">
                      <li>2 télécommandes à 4 touches</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold">Motorisation TANKER B250</h4>
                <ul className="list-disc pl-6">
                  <li>Poids maximal par vantail : 300 kg</li>
                  <li>Longueur maximale par vantail : 2,5 mètres</li>
                  <li>Puissance : 24 V</li>
                  <li>
                    Accessoires inclus :
                    <ul className="list-disc pl-6">
                      <li>2 télécommandes à 4 touches</li>
                      <li>2 photocellules PHOTOCELL</li>
                      <li>1 feu de signalisation FLASH</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Toutes les informations détaillées sont disponibles sur les fiches
              produits, avec leurs caractéristiques techniques et notices de
              montage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels sont les pays livrés par Fermetures and Co ?
            </h2>
            <p className="mb-4">
              Nous proposons la livraison dans de nombreux pays européens,
              notamment :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>France</li>
              <li>Allemagne</li>
              <li>Espagne</li>
              <li>Italie</li>
              <li>Belgique</li>
              <li>Pays-Bas</li>
              <li>Pologne</li>
            </ul>
            <p className="mb-4">
              <span className="font-bold">Concernant les îles :</span>{" "}
              Actuellement, nous ne livrons pas encore vers les îles. Cependant,
              nous mettons tout en œuvre pour étendre notre service de livraison
              et vous tiendrons informés dès que ces zones seront couvertes.
            </p>
            <p className="mb-4">
              <span className="font-bold">Important à savoir :</span> Veillez à
              créer votre compte sur le site correspondant au pays où vous
              souhaitez être livré. Par exemple, si vous résidez en France et
              souhaitez être livré en France, il est indispensable de créer un
              compte sur Fermetures-and-co.fr. Sans cela, vous ne pourrez pas
              bénéficier de la livraison dans ce pays.
            </p>
            <p>Pour plus de détails, consultez nos CGV.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Fermetures and Co, qui sommes-nous ?
            </h2>
            <p className="mb-4">
              Vous souhaitez en savoir plus sur{" "}
              <span className="font-bold">Fermetures and Co</span> ? Nous vous
              invitons à consulter les pages suivantes pour découvrir qui nous
              sommes et ce que nous vous proposons :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Mentions légales</li>
              <li>Nos engagements</li>
              <li>Qui sommes-nous</li>
            </ul>
            <p className="mb-4">
              <span className="font-bold">
                Vous avez une question urgente ?
              </span>{" "}
              Chez <span className="font-bold">Fermetures and Co</span>, nous
              avons fait le choix de ne pas proposer de numéro de téléphone
              surtaxé, afin de vous offrir une réponse plus claire et détaillée
              par écrit. Nous mettons toutes les informations nécessaires à
              votre disposition directement sur notre site (notices, fiches
              techniques, caractéristiques des produits, etc.). Nous nous
              engageons à répondre à toutes vos demandes sous 24h ouvrées. Si un
              échange téléphonique est nécessaire, nous vous rappellerons sur
              demande, en remplissant le formulaire de contact et en répondant
              &quot;non&quot; à la question &quot;Avez-vous trouvé la réponse à
              votre question ?&quot;.
            </p>
            <p className="mb-4">
              <span className="font-bold">Où trouver nos produits ?</span> Nos
              produits sont exclusivement disponibles en ligne, sur
              Fermetures-and-co.fr. Nous n&apos;avons pas de showroom ou de
              magasin physique. Pour vous aider dans votre choix, nous mettons à
              votre disposition des informations détaillées sur chaque fiche
              produit et dans notre FAQ. Vous pouvez également consulter les
              photos des réalisations de nos clients, qui montrent nos produits
              en situation réelle.
            </p>
            <p>
              Pour voir ces photos, recherchez simplement le modèle souhaité sur
              notre site, puis cliquez sur l&apos;onglet &quot;Photos des
              clients&quot; pour découvrir les installations de nos
              utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quelle est la différence entre l&apos;adresse de livraison et
              l&apos;adresse de facturation ?
            </h2>
            <div className="mb-4">
              <p className="mb-2">
                <span className="font-bold">Adresse de facturation :</span> Il
                s&apos;agit de l&apos;adresse liée à la personne qui passe la
                commande, utilisée pour émettre la facture.
              </p>
              <p>
                <span className="font-bold">Adresse de livraison :</span>{" "}
                C&apos;est l&apos;adresse où la commande sera envoyée. Elle peut
                être différente de l&apos;adresse de facturation. Par exemple,
                vous pouvez choisir de vous faire livrer à votre lieu de
                travail, dans un relais colis ou à une résidence secondaire.
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-2">
                Informations nécessaires pour la livraison :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adresse complète</li>
                <li>Nom et prénom</li>
                <li>
                  Numéro de téléphone portable (pour faciliter la communication
                  avec le livreur et vous tenir informé de l&apos;avancement de
                  la livraison)
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-2">
                Informations nécessaires pour la facturation :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adresse complète</li>
                <li>Nom et prénom</li>
              </ul>
            </div>

            <p>
              Vous avez la possibilité de renseigner plusieurs adresses de
              facturation et de livraison selon vos besoins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai des problèmes pour me connecter, que faire ?
            </h2>
            <p className="mb-4">
              Les difficultés de connexion peuvent être dues à plusieurs raisons
              :
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-4">
              <li>
                <p className="font-bold mb-2">Erreur de site de connexion :</p>
                <p>
                  Il est possible que vous essayiez de vous connecter sur le
                  mauvais site Fermetures and Co. Par exemple, si vous avez créé
                  un compte sur Fermetures-and-co.fr, vous ne pourrez vous
                  connecter que sur Fermetures-and-co.fr. Veillez donc à vous
                  connecter sur le bon site correspondant à votre inscription.
                </p>
                <p className="mt-2">
                  <span className="font-bold">Important :</span> Il est
                  essentiel de créer votre compte sur le site du pays où vous
                  souhaitez être livré. Par exemple, si vous habitez en France
                  et souhaitez être livré en France, créez un compte sur
                  Fermetures-and-co.fr. Si ce n&apos;est pas le cas, vous ne
                  pourrez pas recevoir votre commande dans ce pays.
                </p>
              </li>
              <li>
                <p className="font-bold mb-2">Erreur de mot de passe :</p>
                <p>
                  Si vous n&apos;arrivez pas à vous connecter à cause d&apos;un
                  mot de passe incorrect, vous pouvez facilement le
                  réinitialiser. Rendez-vous dans la rubrique &quot;J&apos;ai
                  besoin d&apos;informations sur le fonctionnement de mon
                  compte&quot;, où vous trouverez la procédure pour
                  réinitialiser votre mot de passe.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Existe-t-il des magasins ou des showrooms pour voir les produits
              de Fermetures and Co ?
            </h2>
            <p className="mb-4">
              Nos produits sont exclusivement disponibles en ligne sur
              Fermetures-and-co.fr. Nous n&apos;avons pas de showroom physique
              ni de magasin où vous pourriez voir nos produits en personne ou
              les acheter sur place.
            </p>
            <p className="mb-4">
              Nous mettons tout en œuvre pour vous fournir toutes les
              informations nécessaires sur notre site pour vous aider à faire
              votre choix. Que ce soit dans notre FAQ ou sur nos fiches
              produits, vous trouverez des détails complets sur :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Les produits : Consultez l&apos;onglet &quot;J&apos;ai besoin
                d&apos;informations sur un produit&quot;.
              </li>
              <li>
                La livraison : Rendez-vous dans &quot;J&apos;ai besoin
                d&apos;informations sur la livraison&quot;.
              </li>
              <li>
                Le paiement : Allez dans &quot;J&apos;ai besoin
                d&apos;informations sur le paiement&quot;.
              </li>
            </ul>
            <p className="mb-4">
              Pour vous donner une idée du rendu final et de la qualité de nos
              produits, nous partageons également les photos des réalisations de
              nos clients. Si vous le souhaitez, vous pouvez consulter ces
              photos directement sur notre site.
            </p>
            <p>
              Il vous suffit de rechercher le modèle de votre choix sur notre
              site, puis de cliquer sur l&apos;onglet &quot;Photos des
              clients&quot; pour découvrir des installations réelles de nos
              utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quel est le poids des produits Fermetures and Co ?
            </h2>
            <p className="mb-4">
              Le poids de chaque produit, ainsi que celui des colis associés,
              est indiqué sur la fiche produit correspondante.
            </p>
            <p className="mb-4">
              Pour connaître le poids de l&apos;article que vous souhaitez, il
              vous suffit de rechercher le modèle de votre choix sur notre site
              et de vous rendre sur sa fiche produit. Ensuite, cliquez sur
              l&apos;onglet &quot;Schéma technique&quot;. Vous y trouverez le
              poids ainsi que d&apos;autres informations techniques importantes.
            </p>
            <p>
              Vous pouvez également consulter l&apos;onglet
              &quot;Caractéristiques techniques&quot;, où le poids exact des
              colis composant le produit est indiqué en bas de la section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              PayPal, un moyen de paiement sécurisé avec Fermetures and Co !
            </h2>
            <p className="mb-4">
              L&apos;utilisation de PayPal est entièrement gratuite. Il vous
              suffit de créer un compte PayPal ou d&apos;utiliser un compte
              existant pour finaliser votre paiement. Une fois connecté à votre
              compte PayPal, vous serez redirigé vers une fenêtre sécurisée pour
              compléter votre transaction. Après cela, vous recevrez un reçu par
              email pour confirmer votre paiement.
            </p>
            <p className="mb-4">
              Avec PayPal, vos informations bancaires ne sont jamais partagées
              avec Fermetures and Co : vous effectuez votre paiement sans avoir
              à communiquer vos coordonnées bancaires directement sur notre
              site. PayPal crypte et sécurise vos données et sert
              d&apos;intermédiaire pour garantir la sécurité de toutes vos
              transactions.
            </p>
            <p>
              De plus, PayPal propose, à sa discrétion, une option de paiement
              en 4 fois. Nous vous conseillons de vous renseigner directement
              auprès de PayPal pour connaître votre éligibilité à cette option.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels sont les coloris disponibles ?
            </h2>
            <p>
              Actuellement, <span className="font-bold">Fermetures and Co</span>{" "}
              vous propose uniquement le coloris gris anthracite (RAL 7016). Le
              coloris blanc mat sablé arrivera très prochainement sur certains
              de nos modèles. À l&apos;avenir, nous envisagerons de proposer
              divers coloris. Plus concrètement, il ne nous est pas possible de
              vous offrir un coloris spécifique à l&apos;heure actuelle. Seuls
              les produits et coloris présents sur notre site sont disponibles à
              l&apos;achat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Existe-t-il un service de montage pour les produits Fermetures and
              Co ?
            </h2>
            <p className="mb-4">
              Actuellement, nous proposons nos produits uniquement avec le
              service de livraison. Nous ne proposons pas de solution de montage
              à ce jour. Cependant, nos Fermetures sont simples à monter et
              peuvent être installées rapidement.
            </p>
            <p className="mb-4">
              <span className="font-bold">Bon à savoir :</span> Nos clients
              peuvent parfois se rapprocher d&apos;artisans ou
              d&apos;entrepreneurs spécialisés dans le montage de produits
              similaires aux nôtres. Il vous est donc possible de vérifier si
              des artisans sont disponibles dans votre région pour vous aider à
              installer vos Fermetures.
            </p>
            <p>
              Vous trouverez ces informations directement sur chaque fiche
              produit via ces onglets :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Caractéristiques techniques</li>
              <li>Schéma technique</li>
              <li>Notice d&apos;assemblage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quelles sont les garanties associées aux produits Fermetures and
              Co ?
            </h2>
            <p>
              Tous nos produits bénéficient d&apos;une garantie commerciale de 2
              ans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Précommande, qu&apos;est-ce que c&apos;est ?
            </h2>
            <p className="mb-4">
              <span className="font-bold">Fermetures and Co</span> met un point
              d&apos;honneur à ne proposer à l&apos;achat que des produits en
              stock. Le système de réservation prioritaire vous permet de
              précommander de manière définitive les produits qui vous
              intéressent pour le prochain arrivage. Vous êtes informé en toute
              transparence des délais de livraison estimés pour ces produits.
            </p>
            <p className="mb-4">
              Concrètement, il vous suffit de sélectionner les produits désirés
              et de les ajouter à votre panier. Précommander n&apos;a jamais été
              aussi simple avec{" "}
              <span className="font-bold">Fermetures and Co</span>.
            </p>
            <p className="mb-4">
              Pour plus d&apos;informations, consultez nos CGV &gt; Produits
              réservables.
            </p>
            <p className="font-bold mb-2">
              Voici comment effectuer une précommande :
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Recherchez le modèle désiré et accédez à sa fiche produit.
              </li>
              <li>
                Cliquez sur le bouton &quot;Précommander&quot; visible sur la
                fiche produit.
              </li>
              <li>Vous serez redirigé vers une page de connexion.</li>
              <li>
                Pour confirmer votre précommande, vous devez être connecté à
                votre compte Fermetures and Co.
              </li>
              <li>
                Si vous avez déjà un compte, entrez votre adresse email et votre
                mot de passe, puis cliquez sur &quot;Je me connecte&quot;.
              </li>
              <li>
                Si vous êtes nouveau, cliquez sur &quot;Inscription&quot; et
                créez votre compte.
              </li>
              <li>
                Une fois connecté ou inscrit, finalisez votre précommande pour
                sécuriser votre réservation sur le prochain arrivage.
              </li>
            </ol>
            <p className="mt-4">
              Un email de confirmation vous sera envoyé. Vous serez informé dès
              que votre produit sera de nouveau disponible et livré !
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quel est le sens d&apos;ouverture des produits Fermetures and Co ?
            </h2>
            <p className="mb-4">
              Le sens d&apos;ouverture de nos produits est défini pour des
              raisons de sécurité. Vous pouvez retrouver le sens
              d&apos;ouverture de chacun de nos produits directement sur sa
              fiche produit.
            </p>
            <p className="mb-4">Pour cela :</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Recherchez le modèle désiré et accédez à sa fiche produit.
              </li>
              <li>Cliquez sur l&apos;onglet Schéma technique.</li>
              <li>
                Le sens d&apos;ouverture ainsi que d&apos;autres éléments
                techniques seront renseignés.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Comment passer une commande ?
            </h2>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                Recherchez et choisissez le produit que vous souhaitez sur notre
                site, soit via les catégories de produits, soit via la barre de
                recherche. Vous arriverez alors sur la fiche produit.
              </li>
              <li>
                Ajoutez-le à votre panier en cliquant sur &quot;Ajouter au
                panier&quot;.
              </li>
              <li>
                Votre panier apparaîtra à droite, vous pourrez alors soit
                finaliser votre commande, soit continuer vos achats.
              </li>
              <li>
                Le passage de commande nécessite la création d&apos;un compte
                utilisateur (pour plus d&apos;infos, consultez la section
                &quot;Comment créer mon compte&quot;).
              </li>
              <li>
                Une fois connecté, choisissez votre moyen de paiement et validez
                votre commande.
              </li>
              <li>
                Vous recevrez un email de confirmation et nous procéderons à la
                préparation et à l&apos;expédition de votre commande.
              </li>
              <li>
                Suivez l&apos;avancement de votre commande dans l&apos;espace
                client sous la rubrique Mes commandes.
              </li>
              <li>
                Cliquez sur Voir le détail puis Suivre le colis pour suivre
                votre commande.
              </li>
            </ol>
            <p>
              <span className="font-bold">NB :</span> Si votre paiement
              rencontre un problème, vous recevrez un email vous informant du
              refus de la transaction. Consultez la FAQ pour plus
              d&apos;informations sur les paiements non validés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quelles sont les mesures exactes des produits Fermetures and Co ?
            </h2>
            <p>
              Les mesures exactes de nos produits sont disponibles directement
              sur chaque fiche produit. Pour cela, accédez à la fiche produit du
              modèle que vous désirez et cliquez sur l&apos;onglet Schéma
              technique. Les mesures exactes et d&apos;autres caractéristiques y
              sont renseignées. Vous pouvez aussi consulter l&apos;onglet
              Caractéristiques techniques pour retrouver ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Peut-on prendre contact par téléphone ?
            </h2>
            <p>
              Nous avons fait le choix de ne pas proposer de numéro de téléphone
              surtaxé afin de mieux répondre à vos questions par écrit. Nous
              mettons en ligne toutes les informations dont vous avez besoin
              (notices, caractéristiques techniques, cotes…). Nous répondons
              généralement sous 24h ouvrées à vos demandes par écrit, ce qui
              nous permet de vous fournir des réponses plus détaillées
              qu&apos;au téléphone. Si nécessaire, nous pouvons vous rappeler
              sur demande via le formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Comment utiliser le système d&apos;alerte produit de Fermetures
              and Co ?
            </h2>
            <p className="mb-4">
              Si un produit est indisponible, vous pouvez vous inscrire pour
              être alerté de son retour en stock. Voici la procédure pour
              recevoir une alerte :
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Accédez à la fiche produit du modèle désiré.</li>
              <li>Cliquez sur le bouton M&apos;alerter en bas à droite.</li>
              <li>Vous serez redirigé vers une page de connexion.</li>
              <li>
                Si vous avez déjà un compte, entrez votre email et mot de passe,
                puis cliquez sur &quot;Je me connecte&quot;.
              </li>
              <li>Si vous êtes nouveau, créez votre compte.</li>
              <li>
                Une fois connecté ou inscrit, la page confirmera que
                l&apos;alerte a été créée pour ce produit.
              </li>
              <li>
                Vous serez informé dès que ce produit sera à nouveau disponible.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Faites-vous du &quot;sur-mesure&quot; ?
            </h2>
            <p>
              Nos produits sont fabriqués à l&apos;échelle industrielle et
              livrés en kit à assembler. Nous ne proposons pas de sur-mesure
              strictement dit, mais nos produits peuvent être adaptés en
              fonction de vos besoins. Nos Fermetures peuvent être recoupées en
              largeur, mais pas en hauteur. Les dimensions standard sont :
              115/120 cm, 140 cm, 160 cm et 180 cm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Comment obtenir de l&apos;aide sur un produit ou des informations
              complémentaires ?
            </h2>
            <p>
              Vous pouvez nous contacter via notre formulaire de contact dans la
              rubrique Question sur un produit. Nous nous efforcerons de
              répondre à toutes vos questions et de vous fournir l&apos;aide
              nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Certains produits sont &quot;indisponibles&quot;, qu&apos;est-ce
              que cela signifie ?
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="font-bold">
                  &quot;Bientôt disponible&quot; :
                </span>{" "}
                Cela signifie que le produit est actuellement en rupture de
                stock, mais un retour est prévu à une date approximative.
              </li>
              <li>
                <span className="font-bold">
                  &quot;Victime de son succès&quot; :
                </span>{" "}
                Ce statut indique que le produit est épuisé et qu&apos;aucune
                date de retour en stock n&apos;est encore disponible.
              </li>
            </ul>
            <p>
              Dans les deux cas, vous pouvez créer une alerte pour être notifié
              dès que le produit sera à nouveau disponible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Certains produits sont réservables, qu&apos;est-ce que cela
              signifie ?
            </h2>
            <p>
              Nous proposons de sécuriser votre commande pour des produits qui
              sont sur le point de revenir en stock. Vous pouvez pré-réserver
              ces produits et garantir votre commande à leur arrivée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Peut-on effectuer un paiement à la réception ?
            </h2>
            <p>
              Nous ne proposons pas encore cette option, mais elle est en cours
              d&apos;étude. Plus d&apos;informations seront disponibles dans nos
              CGV.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Puis-je payer en plusieurs fois ma commande ?
            </h2>
            <p>
              PayPal 4x et Franfinance (3x ou 4x) sont disponibles pour les
              paiements échelonnés. Ces solutions vous permettent de payer en
              plusieurs fois selon les conditions d&apos;éligibilité. Plus de
              détails dans nos CGV &gt; Modes de paiements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels sont les moyens de paiement disponibles sur
              Fermetures-and-Co ?
            </h2>
            <p className="mb-4">
              Chez Fermetures and Co, nous avons choisi de travailler avec des
              partenaires de paiement reconnus pour vous offrir des solutions
              sécurisées et fiables. Cela vous permet de choisir parmi une large
              gamme de méthodes de paiement selon vos préférences et votre pays
              de résidence.
            </p>
            <p className="font-bold mb-2">
              Moyens de paiement disponibles pour la France :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Carte bancaire (CB)</li>
              <li>Visa</li>
              <li>Mastercard</li>
              <li>PayPal</li>
              <li>Paypal x4</li>
            </ul>
            <p className="mb-4">
              Lors du passage de commande, vous pourrez sélectionner le mode de
              paiement qui vous convient le mieux.
            </p>
            <p>
              Pour plus d&apos;informations, consultez nos Conditions Générales
              de Vente dans la section &quot;Moyens de Paiement&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Livraison</h2>
            <p>
              Pour toutes questions concernant la livraison de votre commande,
              n&apos;hésitez pas à nous contacter via notre formulaire de
              contact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Comment fonctionne la livraison sur Fermetures-and-Co ?
            </h2>
            <p className="mb-4">
              <span className="font-bold">Gestion de la livraison :</span> Le
              processus de livraison est assuré par notre transporteur
              partenaire. Vous avez la possibilité de choisir un créneau de
              livraison qui vous convient, en fonction de vos disponibilités.
              Voici comment cela se passe :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Vous pouvez suivre l&apos;avancement de votre commande dans
                votre compte Fermetures and Co, dans la section « Mes commandes
                ».
              </li>
              <li>
                Notre partenaire vous contactera par SMS sur le numéro de
                téléphone que vous nous avez fourni.
              </li>
              <li>
                Ce message vous proposera plusieurs options de dates pour
                programmer la livraison.
              </li>
              <li>
                Vous pourrez choisir une date pour chaque colis de votre
                commande (vous pourrez regrouper plusieurs colis sur la même
                date si cela vous convient).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels sont les délais de livraison sur Fermetures-and-Co ?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">
                  Commandes avec produits &quot;en stock&quot; :
                </p>
                <p>
                  Lorsque tous les produits sont disponibles, nous nous
                  engageons à préparer votre commande dans les 24 heures. Les
                  délais de livraison sont indiqués pour chaque produit sur
                  notre site, et ne dépassent généralement pas 5 jours ouvrés.
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">
                  Commandes avec produits &quot;en réservation&quot; :
                </p>
                <p>
                  Si votre commande contient des produits en réservation, la
                  préparation et la livraison seront planifiées en fonction du
                  produit ayant le délai le plus long. Pour recevoir les
                  articles en stock plus rapidement, nous vous conseillons de
                  passer deux commandes distinctes : une pour les articles en
                  stock et une autre pour les produits en attente de
                  réapprovisionnement.
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">Moment du débit :</p>
                <p>
                  Le montant de votre commande sera débité uniquement au moment
                  de sa préparation, pas avant.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Puis-je prendre rendez-vous pour la livraison ?
            </h2>
            <p>
              Oui, toutes nos livraisons sont programmées avec un rendez-vous
              choisi par vos soins, grâce à notre transporteur partenaire. Cela
              vous permet de définir un créneau qui vous convient pour être
              disponible lors de la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Livrez-vous sur les îles (Corse, …) ?
            </h2>
            <p>
              Actuellement, nous ne livrons pas sur les îles. Cependant, nous
              travaillons à améliorer notre service et vous tiendrons informé
              dès que nous serons en mesure d&apos;offrir la livraison dans ces
              zones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je souhaite savoir où en est ma livraison
            </h2>
            <p>
              Pour suivre l&apos;avancée de votre livraison, connectez-vous à
              votre compte Fermetures and Co, dans la section « Mes commandes ».
              Vous y trouverez toutes les informations concernant le suivi de
              votre commande et, le cas échéant, les liens de suivi de vos
              colis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je n&apos;ai pas encore eu de contact avec le livreur pour
              programmer ma livraison, que dois-je faire ?
            </h2>
            <p>
              Si vous n&apos;avez pas encore été contacté par le livreur, nous
              vous invitons à prendre contact avec le service client de notre
              transporteur partenaire, en vous munissant de votre numéro de
              colis. Ils pourront vous aider à programmer la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Le livreur n&apos;est pas passé malgré la programmation de la
              livraison, que dois-je faire ?
            </h2>
            <p>
              Dans ce cas, veuillez contacter le service client de notre
              transporteur partenaire avec votre numéro de colis pour clarifier
              la situation et convenir d&apos;une nouvelle date de livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Un lien de suivi m&apos;a été transmis mais celui-ci ne fonctionne
              pas, que dois-je faire ?
            </h2>
            <p>
              Il peut arriver que la mise à jour des informations de suivi
              prenne un peu de temps. Si le lien ne fonctionne pas, nous vous
              recommandons de réessayer le lendemain. Si le problème persiste,
              contactez-nous via notre formulaire de contact et nous nous
              chargerons de résoudre la situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai dû refuser le produit car celui-ci était abîmé, que
              dois-je faire ?
            </h2>
            <p>
              Si vous avez refusé un colis abîmé, notre transporteur nous
              informera de l&apos;incident. Contactez-nous via le formulaire de
              contact, section « J&apos;ai un problème avec ma commande », et
              nous ouvrirons un dossier SAV pour suivre la situation et vous
              tenir informé de l&apos;évolution du retour et de la réexpédition
              du colis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Dans le suivi de la livraison, on m&apos;annonce un souci
              d&apos;adresse, que dois-je faire ?
            </h2>
            <p>
              Si un problème d&apos;adresse est signalé, contactez-nous
              immédiatement via notre formulaire de contact. En parallèle, il
              est essentiel que vous contactiez notre transporteur pour mettre à
              jour votre adresse ou fournir toute information supplémentaire
              nécessaire à la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai programmé une livraison mais je suis absent, que dois-je
              faire ?
            </h2>
            <p>
              Si vous êtes absent lors de la livraison, nous vous conseillons de
              contacter notre transporteur partenaire dès que possible pour voir
              si une nouvelle date de livraison peut être programmée. Vous
              pourrez suivre votre colis et modifier la date de livraison si
              nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Puis-je modifier ma date de livraison ?
            </h2>
            <p>
              Les dates de livraison sont choisies en accord avec notre
              transporteur partenaire. Si vous devez changer la date, contactez
              rapidement le service client de notre transporteur, qui pourra
              vous proposer un créneau alternatif.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Quels transporteurs utilisez-vous ?
            </h2>
            <p>
              Nous avons choisi notre partenaire DPD pour la livraison de vos
              commandes. Grâce à leur expertise, toutes les livraisons sont
              organisées avec un rendez-vous que vous choisissez. Il est donc
              important que vous nous fournissiez un numéro de téléphone valide
              afin de recevoir toutes les notifications et de pouvoir répondre
              aux propositions de dates de livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Annulation - Rétractation
            </h2>
            <p>
              Pour toute demande d&apos;annulation ou de rétractation concernant
              une commande, merci de nous contacter via notre formulaire de
              contact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je souhaite annuler ma commande, que dois-je faire ?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">
                  Pour une commande avec produits en réservation :
                </p>
                <p>
                  Vous avez la possibilité de demander l&apos;annulation en nous
                  contactant par le biais du formulaire de contact. Dès que
                  l&apos;annulation sera confirmée, nous vous enverrons un email
                  de confirmation.
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">
                  Pour une commande de produits en stock :
                </p>
                <p>
                  Une fois que la préparation et l&apos;expédition de la
                  commande ont été lancées, il n&apos;est plus possible
                  d&apos;annuler la commande. Si vous souhaitez annuler une
                  commande après expédition, nous vous conseillons de nous
                  contacter via le formulaire de contact pour discuter des
                  options possibles concernant l&apos;annulation
                  post-expédition.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je souhaite me rétracter, que dois-je faire ?
            </h2>
            <p>
              Conformément à nos Conditions Générales de Vente, vous avez
              jusqu&apos;à 14 jours après réception de votre commande pour
              exercer votre droit de rétractation. Pour ce faire, un formulaire
              de rétractation est disponible dans nos CGV. Retrouvez tous les
              détails et la procédure de rétractation dans cette section de nos
              CGV.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je souhaite modifier l&apos;adresse de livraison, quelles sont mes
              possibilités ?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">
                  Pour une commande avec produits en réservation :
                </p>
                <p>
                  Vous pouvez nous contacter via notre formulaire de contact
                  pour vérifier si une modification de l&apos;adresse de
                  livraison est possible.
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">
                  Pour une commande de produits en stock :
                </p>
                <p>
                  Dès que la préparation et l&apos;expédition de la commande
                  sont lancées, il n&apos;est plus possible de changer
                  l&apos;adresse de livraison. Toutefois, si cela vous concerne,
                  nous vous invitons à nous contacter par le biais du formulaire
                  de contact afin d&apos;explorer une solution alternative à
                  votre demande.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Problème de commande</h2>
            <p>
              Si vous rencontrez un problème avec votre commande, nous vous
              invitons à nous contacter via notre formulaire de contact. Toutes
              les questions ci-dessus peuvent être gérées en utilisant ce
              formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai reçu le mauvais produit, que dois-je faire ?
            </h2>
            <p>
              Si vous avez reçu un produit incorrect, nous vous prions de bien
              vouloir nous fournir les détails de la commande et des colis
              concernés. Une fois ces informations reçues, nous vous guiderons
              sur les démarches à suivre pour retourner le colis et nous
              permettre de vous envoyer le bon produit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Comment trouver ma facture pour une commande déjà effectuée ?
            </h2>
            <p className="mb-4">
              Pour obtenir votre facture, voici les étapes à suivre :
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Connectez-vous à votre compte Fermetures and Co en utilisant vos
                identifiants. Cliquez sur l&apos;icône de connexion en haut de
                la page.
              </li>
              <li>Entrez vos identifiants (login et mot de passe).</li>
              <li>
                Une fois connecté, accédez à votre espace personnel en cliquant
                sur l&apos;icône de profil en haut à droite.
              </li>
              <li>
                Sélectionnez la section « Mes commandes », puis cliquez sur «
                Voir le détail » de la commande pour laquelle vous souhaitez
                obtenir la facture.
              </li>
              <li>
                Vous serez redirigé vers une page où vous pourrez télécharger
                votre facture.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Paiement en attente, qu&apos;est-ce que cela signifie ?
            </h2>
            <p className="mb-4">
              Un paiement en attente peut se produire pour plusieurs raisons,
              mais cela est souvent lié à une précommande.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">Précommande :</span> Si vous avez
                réservé un produit avant qu&apos;il ne soit à nouveau en stock,
                le paiement est généralement réservé et débité une fois que le
                produit est disponible. Cela permet de garantir que vous
                recevrez le produit dès qu&apos;il est réapprovisionné.
              </li>
              <li>
                <span className="font-bold">Problème de paiement :</span> Si
                vous n&apos;avez pas complété le paiement (par exemple, si vous
                n&apos;avez pas renseigné le code 3DS), votre paiement peut être
                marqué en attente. Si ce n&apos;est pas résolu, le paiement
                passera en « refusé » et vous serez informé par email.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Mon paiement a été refusé, que dois-je faire ?
            </h2>
            <p className="mb-4">
              Si votre paiement a été refusé, vous recevrez une notification à
              l&apos;écran immédiatement après la commande, et un email vous
              confirmera ce refus. Cela peut être dû à plusieurs raisons :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="font-bold">Problème 3DS :</span> La transaction
                a peut-être échoué à cause d&apos;un code de sécurité 3D Secure
                (obligatoire pour certaines banques).
              </li>
              <li>
                <span className="font-bold">Plafond bancaire :</span> Votre
                banque pourrait limiter vos achats en ligne, ou votre
                transaction pourrait dépasser votre plafond.
              </li>
              <li>
                <span className="font-bold">Fonds insuffisants :</span> Il se
                peut que votre compte ne dispose pas des fonds nécessaires pour
                la transaction.
              </li>
            </ul>
            <p className="font-bold mb-2">Que faire ?</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identifiez la cause du refus.</li>
              <li>
                Résolvez le problème (par exemple, mettez à jour votre plafond
                bancaire ou assurez-vous que vous avez les fonds nécessaires).
              </li>
              <li>Recommencez la commande après avoir corrigé le problème.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Je souhaite me rétracter, quelles sont les démarches à suivre ?
            </h2>
            <p className="mb-4">
              <span className="font-bold">Droit de rétractation :</span> Vous
              avez jusqu&apos;à 14 jours après la réception de votre commande
              pour exercer votre droit de rétractation.
            </p>
            <p className="mb-4">
              Pour cela, veuillez utiliser notre formulaire de contact section «
              Je souhaite me rétracter » et remplir un formulaire de
              rétractation.
            </p>
            <p className="mb-4">
              Vous trouverez ce formulaire à télécharger via ce lien.
            </p>
            <p>
              Assurez-vous de lire attentivement nos Conditions Générales de
              Vente (CGV) concernant les conditions du droit de rétractation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Le produit ne me convient pas, puis-je l&apos;échanger ?
            </h2>
            <p>
              Actuellement, les échanges de produits ne sont pas possibles.
              Toutefois, si vous êtes toujours dans les délais de rétractation,
              vous pouvez demander une rétractation via notre formulaire de
              contact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              J&apos;ai reconnu un problème sur mon produit après la livraison,
              que dois-je faire ?
            </h2>
            <p>
              Si vous constatez un problème avec un produit après la livraison,
              contactez-nous rapidement via notre formulaire de contact section
              « J&apos;ai un problème avec ma commande ». Nous analyserons la
              situation et trouverons une solution pour vous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Ma commande est incomplète, que dois-je faire ?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Vérifiez votre commande :</p>
                <p>
                  Connectez-vous à votre compte et consultez la section « Mes
                  commandes » pour vérifier si tous les colis ont bien été
                  livrés.
                </p>
              </div>
              <p>
                Si un colis manque ou si le délai de livraison est anormalement
                long, contactez-nous via le formulaire de contact pour que nous
                puissions résoudre ce problème.
              </p>
              <p>
                <span className="font-bold">
                  Pièces manquantes dans un colis :
                </span>{" "}
                Si des pièces sont manquantes dans votre colis, contactez-nous
                en précisant les pièces manquantes et leur codification. Nous
                trouverons une solution pour que vous puissiez compléter votre
                produit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Mon produit dysfonctionne, que dois-je faire ?
            </h2>
            <p>
              Si votre produit ne fonctionne pas correctement, contactez-nous
              via le formulaire de contact en sélectionnant la section
              appropriée (par exemple : « Mon produit ne fonctionne pas »). Nous
              analyserons la situation et trouverons une solution pour vous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Mon produit dysfonctionne pour des raisons météorologiques, que
              dois-je faire ?
            </h2>
            <p>
              Si le dysfonctionnement de votre produit est lié à des conditions
              météorologiques (par exemple, exposition à l&apos;humidité ou aux
              températures extrêmes), contactez-nous via notre formulaire de
              contact. Nous étudierons le cas et nous vous guiderons pour
              trouver une solution.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
