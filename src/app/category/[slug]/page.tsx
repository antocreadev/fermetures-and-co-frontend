"use client";

import CategoryNavList from "@/components/CategoryNavList";
import Filters from "@/components/Filters";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/products";
import { useParams } from "next/navigation";
import { Product } from "@/types/Product";

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

  useEffect(() => {
    const categoryFilteredProducts = PRODUCTS.filter(
      (product) => product.category === params.slug
    );
    console.log(categoryFilteredProducts);
    setProducts(categoryFilteredProducts);
    setFilteredProducts(categoryFilteredProducts);
  }, [params.slug]);

  useEffect(() => {
    if (!products.length) return;
    console.log("ok yen a assez");

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
        selectedHeights.some((height) =>
          product.name.includes(height.toString())
        )
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
          <h2 className="font-semibold text-lg hidden lg:block">Filtres</h2>

          <div className="lg:hidden">
            {/* Titre et toggle pour mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex justify-between items-center w-full py-2 border-b"
            >
              <h2 className="font-semibold text-lg">Filtres</h2>
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
              />
            )}
          </div>

          {/* Affiché directement sur desktop */}
          <div className="hidden lg:block">
            <Filters
              MINBOUND={minPricedProduct}
              MAXBOUND={maxPricedProduct}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              selectedHeights={selectedHeights}
              setSelectedHeights={setSelectedHeights}
            />
          </div>
        </section>

        {/* Liste des produits */}
        <section className="lg:w-3/4">
          <ProductList products={filteredProducts} />
        </section>
      </div>
    </main>
  );
}
