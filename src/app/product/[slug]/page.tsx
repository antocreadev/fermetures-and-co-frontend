"use client";
import CategoryNavList from "@/components/CategoryNavList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentMethods";
import TextHomepage from "@/components/TextHomepage";
import { PRODUCTS } from "@/products";
import { Product } from "@/types/Product";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const params = useParams<{ slug: string }>();
  const [selectedOptions, setSelectedOptions] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const product = PRODUCTS.find((p) => p.id === Number(params.slug));

  if (!product) {
    return notFound();
  }

  useEffect(() => {
    // Calculer le prix total (produit + options sélectionnées)
    const optionsTotal = selectedOptions.reduce(
      (sum, option) => sum + option.price,
      0
    );
    setTotalPrice(product.price + optionsTotal);
  }, [selectedOptions, product.price]);

  const handleOptionToggle = (option: Product) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.some((o) => o.id === option.id);
      if (isSelected) {
        return prev.filter((o) => o.id !== option.id);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Ajouter le produit principal
    cart.push({
      item: product,
      quantity: 1,
    });

    // Ajouter chaque option sélectionnée comme un produit séparé
    selectedOptions.forEach((option) => {
      cart.push({
        item: option,
        quantity: 1,
      });
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
        <h1 className="text-4xl font-bold relative top-6">{product.name}</h1>

        <div className="max-w-7xl p-6 pb-0 flex flex-col items-start justify-center md:flex-row gap-8">
          {/* Colonne des images produit */}

          <div className="flex-1 flex flex-col gap-2 items-center justify-center p-6 pb-0">
            <Carousel dynamicHeight={true} infiniteLoop={true}>
              {product.imageUrls.map((url, idx) => (
                <img key={idx} src={url} alt="Product" />
              ))}
            </Carousel>
          </div>
          {/* Colonne des détails produit */}
          <div className="w-full md:w-1/3 h-full md:h-[30rem] p-6 flex flex-col justify-between mb-2 md:mb-0 z-30 bg-neutral-50 relative lg:top-6">
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

            {product.options && product.options.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-4">Options disponibles :</h3>
                <div className="space-y-4">
                  {product.options.map((option) => {
                    const isSelected = selectedOptions.some(
                      (o) => o.id === option.id
                    );
                    return (
                      <div
                        key={option.id}
                        className={`relative border rounded-lg p-2 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleOptionToggle(option)}
                      >
                        <div className="flex gap-2">
                          {option.imageUrls && option.imageUrls.length > 0 && (
                            <div className="w-16 h-16 flex-shrink-0">
                              <img
                                src={option.imageUrls[0]}
                                alt={option.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-sm leading-tight">
                                  {option.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <p className="text-green-600 font-semibold text-sm">
                                    +{option.price.toFixed(2)} €
                                  </p>
                                  <a
                                    href={`/product/${option.id}`}
                                    className="text-xs text-blue-600 hover:text-blue-800"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    En savoir plus
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <p>
                Prix total :
                <span className="text-2xl font-bold text-neutral-950">
                  {" "}
                  {totalPrice.toFixed(2)} €
                </span>
              </p>
            </div>

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
