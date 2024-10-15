"use client";

import CategoryNavList from "@/components/CategoryNavList";
import Filters from "@/components/Filters";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/products";
import { useParams } from "next/navigation";
import { Product } from "@/types/Product";
import PaymentMethods from "@/components/PaymentMethods";
import TextHomepage from "@/components/TextHomepage";
import Footer from "@/components/Footer";

export default function CategoryIndex() {
  const params = useParams<{ slug: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [minPricedProduct, setMinPricedProduct] = useState<number>(0);
  const [maxPricedProduct, setMaxPricedProduct] = useState<number>(9999);
  // Valeurs des filtres
  const [minPrice, setMinPrice] = useState<number>(minPricedProduct);
  const [maxPrice, setMaxPrice] = useState<number>(maxPricedProduct);
  const [selectedHeights, setSelectedHeights] = useState<number[]>([]);
  const [availableHeights, setAvailableHeights] = useState<number[]>([]);

  useEffect(() => {
    const categoryFilteredProducts = PRODUCTS.filter(
      (product) => product.category === params.slug
    );
    const uniqueHeights = Array.from(
      new Set(categoryFilteredProducts.map((product) => product.hauteur))
    );
    setProducts(categoryFilteredProducts);
    setFilteredProducts(categoryFilteredProducts);
    setAvailableHeights(uniqueHeights);
  }, [params.slug]);

  useEffect(() => {
    if (!products.length) return;

    setMinPricedProduct(
      products.reduce((acc, product) => {
        if (product.price < acc.price) {
          return product;
        }
        return acc;
      }).price
    );
    setMinPrice(minPricedProduct);

    setMaxPricedProduct(
      products.reduce((acc, product) => {
        if (product.price > acc.price) {
          return product;
        }
        return acc;
      }).price
    );
    setMaxPrice(maxPricedProduct);
  }, [products, minPricedProduct, maxPricedProduct]);

  // Filtrage des produits en fonction des filtres sélectionnés
  useEffect(() => {
    let filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Si au moins une hauteur est sélectionnée
    if (selectedHeights.length > 0) {
      filtered = filtered.filter((product) =>
        selectedHeights.includes(product.hauteur)
      );
    }

    setFilteredProducts(filtered);
  }, [products, minPrice, maxPrice, selectedHeights]); // On re-filtre dès que les valeurs changent

  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />

      {/* Section Filtre et Produit */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-8 py-4 lg:space-x-8 ">
        {/* Partie Filtre */}
        <section className="lg:w-1/4 mb-4">
          <h2 className="font-semibold text-lg hidden lg:block bg-neutral-200 uppercase p-2 mb-4 h-12 flex justify-end items-center">
            Filtres
          </h2>

          <div className="lg:hidden">
            {/* Titre et toggle pour mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex justify-between items-center w-full p-2 border-b bg-neutral-200 "
            >
              <h2 className="font-semibold text-lg uppercase h-12 flex justify-end items-center">
                Filtres
              </h2>
              <span>{isFilterOpen ? "▲" : "▼"}</span>
            </button>
            {isFilterOpen && (
              <Filters
                MINBOUND={minPricedProduct}
                MAXBOUND={maxPricedProduct}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                selectedHeights={selectedHeights}
                setSelectedHeights={setSelectedHeights}
                availableHeights={availableHeights}
              />
            )}
          </div>

          {/* Affiché directement sur desktop */}
          <div className="hidden lg:block ">
            <Filters
              MINBOUND={minPricedProduct}
              MAXBOUND={maxPricedProduct}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              selectedHeights={selectedHeights}
              setSelectedHeights={setSelectedHeights}
              availableHeights={availableHeights}
            />
          </div>
        </section>

        {/* Liste des produits */}
        <section>
          <h1 className="bg-neutral-200 p-2 font-bold uppercase mb-4 h-12 flex items-center">
            Tous les{" "}
            {params.slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
          </h1>
          <ProductList products={filteredProducts} />
        </section>
      </div>
      <PaymentMethods />
      <TextHomepage />
      <Footer />
    </main>
  );
}
