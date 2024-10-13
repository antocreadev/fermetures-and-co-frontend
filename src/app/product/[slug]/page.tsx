"use client";
import CategoryNavList from "@/components/CategoryNavList";
import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

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
    <>
      <Navbar />
      <CategoryNavList />
      <div className="bg-gray-50 flex flex-col items-center">
        {/* Container principal avec flex en colonne pour petits écrans et row pour grands */}
        <div className="max-w-7xl p-6 flex flex-col md:flex-row gap-8">
          {/* Colonne des images produit */}
          <div className="flex-1 flex flex-col gap-2 items-center justify-center p-6">
            <Carousel dynamicHeight={true} infiniteLoop={true}>
              {product.imageUrls.map((url, idx) => (
                <img key={idx} src={url} alt="Product" />
              ))}
            </Carousel>
          </div>
          {/* Colonne des détails produit */}
          <div className="flex-1 p-6">
            {/* <span className="text-sm text-gray-500 uppercase">Sale</span> */}
            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
            {/* <p className="text-gray-600 mt-4">{product.description ?? "N/A"}</p> */}

            {/* Informations supplémentaires sur le produit */}
            <div className="mt-6 space-y-4">
              <details>
                <summary className="cursor-pointer text-lg font-semibold">
                  Description technique
                </summary>
                <div className="mt-2 text-gray-500">
                  {product.category === "pergolas" ? (
                    <div>
                      <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-700">Adossée ou en îlot</li>
                        <li className="text-gray-700">
                          Poteaux 125 mm x 125 mm
                        </li>
                        <li className="text-gray-700">
                          Option stores verticaux
                        </li>
                        <li className="text-gray-700">Option éclairage LED</li>
                        <li className="text-gray-700">Lames simple paroi</li>
                        <li className="text-gray-700">
                          Structure sans vis apparente
                        </li>
                        <li className="text-gray-700">Largeur max = 5954 mm</li>
                        <li className="text-gray-700">Avancée max = 4000 mm</li>
                        <li className="text-gray-700">Hauteur = 2650 mm</li>
                        <li className="text-gray-700">
                          Motorisation Somfy ou Nice
                        </li>
                        <li className="text-gray-700">Aluminium de qualité</li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-700">Aluminium de qualité</li>
                        <li className="text-gray-700">
                          Assemblage mécanique sans soudure
                        </li>
                        <li className="text-gray-700">
                          Traverse 160 mm pour une grande robustesse
                        </li>
                        <li className="text-gray-700">
                          Renfort sur toute la largeur du portail
                        </li>
                        <li className="text-gray-700">Visserie en inox</li>
                        <li className="text-gray-700">
                          Joints entre certains profils pour éviter les
                          vibrations et les effets sonores désagréables
                        </li>
                        <li className="text-gray-700">
                          Laquage certifié Qualicoat et Qualimarine
                        </li>
                        <li className="text-gray-700">Motorisable</li>
                      </ul>
                    </div>
                  )}
                </div>
              </details>

              <details>
                <summary className="cursor-pointer text-lg font-semibold">
                  Livraison & Retours
                </summary>
                <div className="mt-2 text-gray-500">
                  Nous offrons la livraison gratuite pour toutes les commandes
                  supérieures à 50 €. Les commandes sont généralement expédiées
                  dans un délai de 2 à 3 jours ouvrables. Vous pouvez retourner
                  les articles non utilisés dans les 30 jours suivant la
                  réception pour un remboursement complet. Veuillez noter que
                  les frais de retour sont à la charge du client.
                </div>
              </details>
            </div>
            <div className="mt-5">
              <p>
                Prix :
                <span className="text-2xl font-bold text-orange-500">
                  {" "}
                  {product.price.toFixed(2)} €
                </span>
              </p>
            </div>
            <button
              className="mt-4 w-full bg-orange-400 text-white rounded-lg py-2 hover:bg-orange-500 cursor-pointer"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
