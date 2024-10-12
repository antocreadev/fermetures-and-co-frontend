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
            <span className="text-sm text-gray-500 uppercase">Sale</span>
            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description ?? "N/A"}</p>

            {/* Informations supplémentaires sur le produit */}
            <div className="mt-6 space-y-4">
              <details>
                <summary className="cursor-pointer text-lg font-semibold">
                  Product Information
                </summary>
                <div className="mt-2 text-gray-500">
                  Detailed product specifications, materials, and technical
                  details here.
                </div>
              </details>

              <details>
                <summary className="cursor-pointer text-lg font-semibold">
                  Shipping & Returns
                </summary>
                <div className="mt-2 text-gray-500">
                  Information about shipping, estimated delivery, and return
                  policies here.
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
