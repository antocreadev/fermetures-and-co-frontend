"use client";
import CategoryNavList from "@/components/CategoryNavList";
import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import PaymentMethods from "@/components/PaymentMethods";
import TextHomepage from "@/components/TextHomepage";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const params = useParams<{ slug: string }>();

  const product = PRODUCTS.find((p) => p.id === Number(params.slug));

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    // add product to cart in localstorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      item: product,
      quantity: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  };

  return (
    <main>
      <Navbar />
      <CategoryNavList />
      <div className="bg-neutral-200 flex flex-col items-center">
        {/* Container principal avec flex en colonne pour petits écrans et row pour grands */}
        <div className="max-w-7xl p-6 pb-0 flex flex-col md:flex-row gap-8">
          {/* Colonne des images produit */}
          <div className="flex-1 flex flex-col gap-2 items-center justify-center p-6 pb-0">
            <Carousel dynamicHeight={true} infiniteLoop={true}>
              {product.imageUrls.map((url, idx) => (
                <img key={idx} src={url} alt="Product" />
              ))}
            </Carousel>
          </div>
          {/* Colonne des détails produit */}
          <div className="w-full md:w-1/3 h-full md:h-[30rem] p-6 flex flex-col justify-between mb-2 md:mb-0 z-50 bg-neutral-50">
            <div>
              <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

              <p>
                Prix :
                <span className="text-2xl font-bold text-neutral-950">
                  {" "}
                  {product.price.toFixed(2)} €
                </span>
              </p>
            </div>

            {product.category === "pergolas" ? (
              <ul className="list-disc list-inside space-y-2">
                <li className="text-neutral-950">Adossée ou en îlot</li>
                <li className="text-neutral-950">Poteaux 125 mm x 125 mm</li>
                <li className="text-neutral-950">Option stores verticaux</li>
                <li className="text-neutral-950">
                  {" "}
                  <a className="underline" href="#description">
                    Voir plus
                  </a>{" "}
                </li>
              </ul>
            ) : (
              <ul className="list-disc list-inside space-y-2">
                <li className="text-neutral-950">Aluminium de qualité</li>
                <li className="text-neutral-950">
                  Assemblage mécanique sans soudure
                </li>
                <li className="text-neutral-950">
                  Traverse 160 mm pour une grande robustesse
                </li>
                <li className="text-neutral-950">
                  {" "}
                  <a className="underline" href="#description">
                    Voir plus
                  </a>{" "}
                </li>
              </ul>
            )}

            <button
              className="mt-4 w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 cursor-pointer"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        {/* Description technique */}
        <div
          id="description"
          className=" w-full flex flex-col items-center justify-center border-t-2 pt-1 text-neutral-950 pb-2 bg-neutral-50"
        >
          <h2 className="text-lg font-semibold uppercase">
            Description technique
          </h2>
          <div className="mt-2 text-neutral-950 w-3/4">
            {product.category === "pergolas" ? (
              <ul className="list-disc list-inside space-y-2 grid grid-cols-2">
                <li className="text-neutral-950">Adossée ou en îlot</li>
                <li className="text-neutral-950">Poteaux 125 mm x 125 mm</li>
                <li className="text-neutral-950">Option stores verticaux</li>
                <li className="text-neutral-950">Option éclairage LED</li>
                <li className="text-neutral-950">Lames simple paroi</li>
                <li className="text-neutral-950">
                  Structure sans vis apparente
                </li>
                <li className="text-neutral-950">Largeur max = 5954 mm</li>
                <li className="text-neutral-950">Avancée max = 4000 mm</li>
                <li className="text-neutral-950">Hauteur = 2650 mm</li>
                <li className="text-neutral-950">Motorisation Somfy ou Nice</li>
                <li className="text-neutral-950">Aluminium de qualité</li>
              </ul>
            ) : (
              <ul className="list-disc list-inside space-y-2 text-neutral-950 bg-neutral-50">
                <li className="text-neutral-950">Aluminium de qualité</li>
                <li className="text-neutral-950">
                  Assemblage mécanique sans soudure
                </li>
                <li className="text-neutral-950">
                  Traverse 160 mm pour une grande robustesse
                </li>
                <li className="text-neutral-950">
                  Renfort sur toute la largeur du portail
                </li>
                <li className="text-neutral-950">Visserie en inox</li>
                <li className="text-neutral-950">
                  Joints entre certains profils pour éviter les vibrations et
                  les effets sonores désagréables
                </li>
                <li className="text-neutral-950">
                  Laquage certifié Qualicoat et Qualimarine
                </li>
                <li className="text-neutral-950">Motorisable</li>
              </ul>
            )}
          </div>
        </div>

        {/* Livraison & Retours */}
        <div className="pt-6 pb-6 flex flex-col items-center justify-center text-neutral-950 bg-neutral-50">
          <h2 className="text-lg font-semibold uppercase">
            Livraison & Retours
          </h2>
          <div className="mt-2 text-neutral-950 w-3/4 ">
            Nous offrons la livraison gratuite pour toutes les commandes
            supérieures à 50 €. Les commandes sont généralement expédiées dans
            un délai de 2 à 3 jours ouvrables. Vous pouvez retourner les
            articles non utilisés dans les 30 jours suivant la réception pour un
            remboursement complet. Veuillez noter que les frais de retour sont à
            la charge du client.
          </div>
        </div>
      </div>
      <PaymentMethods />
      <TextHomepage />
      <Footer />
    </main>
  );
};

export default ProductPage;
