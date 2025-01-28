"use client";

import CategoryNavList from "@/components/CategoryNavList";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentMethods";
import ProductList from "@/components/ProductList";
import TextHomepage from "@/components/TextHomepage";
import { PRODUCTS } from "@/products";
import { Product } from "@/types/Product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [selectedWidths, setSelectedWidths] = useState<number[]>([]);
  const [availableWidths, setAvailableWidths] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  useEffect(() => {
    const categoryFilteredProducts = PRODUCTS.filter(
      (product) => product.category === params.slug
    );
    const uniqueHeights = Array.from(
      new Set(categoryFilteredProducts.map((product) => product.hauteur))
    ).sort((a, b) => a - b);
    const uniqueWidths = Array.from(
      new Set(categoryFilteredProducts.map((product) => product.largeur))
    ).sort((a, b) => a - b);
    const uniqueColors = Array.from(
      new Set(categoryFilteredProducts.map((product) => product.couleur))
    ).sort();
    setProducts(categoryFilteredProducts);
    setFilteredProducts(categoryFilteredProducts);
    setAvailableHeights(uniqueHeights);
    setAvailableWidths(uniqueWidths);
    setAvailableColors(uniqueColors);
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

    // Si au moins une largeur est sélectionnée
    if (selectedWidths.length > 0) {
      filtered = filtered.filter((product) =>
        selectedWidths.includes(product.largeur)
      );
    }

    // Si au moins une couleur est sélectionnée
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(product.couleur)
      );
    }

    setFilteredProducts(filtered);
  }, [
    products,
    minPrice,
    maxPrice,
    selectedHeights,
    selectedWidths,
    selectedColors,
  ]);

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
                selectedWidths={selectedWidths}
                setSelectedWidths={setSelectedWidths}
                availableWidths={availableWidths}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                availableColors={availableColors}
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
              selectedWidths={selectedWidths}
              setSelectedWidths={setSelectedWidths}
              availableWidths={availableWidths}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              availableColors={availableColors}
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
