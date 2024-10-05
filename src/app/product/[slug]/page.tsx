"use client"
import CategoryNavList from '@/components/CategoryNavList';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedPlug, setSelectedPlug] = useState<string | null>(null);

  const product = {
    name: "BlendMaster Elite Fusionator",
    description: `Because ordinary blenders are for the common folk. With the BlendMaster, you can effortlessly mix your pretentious smoothies and soups while feeling like a culinary genius. It's not just a blender; it's a status symbol in the world of haute cuisine.`,
    originalPrice: 289.00,
    discountPrice: 189.00,
    discountPercentage: 35,
    imageUrl: 'https://placehold.co/600x400' // Remplace avec ton vrai chemin d'image
  };

  const plugs = ["EU", "US", "UK"];

  return (
    <><Navbar /><CategoryNavList /><div className="bg-gray-50 flex flex-col items-center">
      {/* Container principal avec flex en colonne pour petits écrans et row pour grands */}
      <div className="max-w-7xl p-6 flex flex-col md:flex-row gap-8">

        {/* Colonne des détails produit */}
        <div className="flex-1 p-6">
          <span className="text-sm text-gray-500 uppercase">Sale</span>
          <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Informations supplémentaires sur le produit */}
          <div className="mt-6 space-y-4">
            <details>
              <summary className="cursor-pointer text-lg font-semibold">
                Product Information
              </summary>
              <div className="mt-2 text-gray-500">
                Detailed product specifications, materials, and technical details here.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer text-lg font-semibold">
                Shipping & Returns
              </summary>
              <div className="mt-2 text-gray-500">
                Information about shipping, estimated delivery, and return policies here.
              </div>
            </details>
          </div>
        </div>

        {/* Colonne des images produit */}
        <div className="flex-1 flex flex-col gap-2 items-center justify-center p-6">
          <img src={product.imageUrl} alt={product.name} className="max-w-xs md:max-w-md" />
          <img src={product.imageUrl} alt={product.name} className="max-w-xs md:max-w-md" />
        </div>

        {/* Colonne des options et prix */}
        <div className="flex-1 p-6 flex flex-col items-start">
          {/* Sélecteur de plug */}
          <div className="mt-6 flex space-x-4">
            {plugs.map((plug) => (
              <button
                key={plug}
                onClick={() => setSelectedPlug(plug)}
                className={`border px-4 py-2 rounded-lg ${selectedPlug === plug ? "border-black bg-gray-200" : "border-gray-300"}`}
              >
                {plug}
              </button>
            ))}
          </div>

          {/* Prix */}
          <div className="mt-6 text-left">
            <p className="text-lg font-semibold text-gray-500 line-through">
              Original: €{product.originalPrice}
            </p>
            <p className="text-2xl font-bold text-blue-600">
              From €{product.discountPrice}
            </p>
            <p className="text-sm text-green-600">
              -{product.discountPercentage}%
            </p>

            {/* Bouton Select */}
            <button
              className="mt-4 w-full bg-gray-300 text-gray-500 rounded-lg py-2 cursor-not-allowed"
              disabled
            >
              Select variant
            </button>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ProductPage;
