import React, { useState } from "react";
import { PRODUCTS } from "@/products";

const GlobalSearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(PRODUCTS);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredResults(filtered);

    console.log("Filtered Results:", filtered);
  };

  return (
    <div className="relative w-full">
      <input
        type="search"
        id="global-search"
        name="global-search"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="
          text-sm
          p-2
          bg-gray-50
          border
          border-gray-500
          focus:outline-none
          focus:ring-gray-400
          rounded-sm
          w-full
        "
      />
      {searchQuery && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10 max-h-60 overflow-y-auto w-full">
          {filteredResults.map((product) => (
            <a href={`/product/${product.id}`} key={product.id}>
              <li className="p-2 hover:bg-gray-100 flex gap-6">
                <img className="w-16" src={product.imageUrls[0]} alt="" />
                {product.name}
              </li>
            </a>
          ))}
          {filteredResults.length === 0 && (
            <li className="p-2 text-gray-500">Aucun résultat</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default GlobalSearchInput;
