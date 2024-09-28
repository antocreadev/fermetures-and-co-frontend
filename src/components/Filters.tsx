"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Range } from "react-range";

type FiltersProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  selectedHeights: number[];
  setSelectedHeights: React.Dispatch<React.SetStateAction<number[]>>;
};

const MIN = 0;
const MAX = 3000;

const Filters: React.FC<FiltersProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedHeights,
  setSelectedHeights,
}) => {
  const handlePriceChange = (values: number[]) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(e.target.id);
    const isChecked = e.target.checked;

    if (isChecked) {
      // Ajoute la hauteur au tableau si elle est cochée
      setSelectedHeights((prev) => [...prev, height]);
    } else {
      // Retire la hauteur si elle est décochée
      setSelectedHeights((prev) => prev.filter((h) => h !== height));
    }
  };

  return (
    <div className="space-y-4 mt-4 lg:mt-0">
      {/* Filtre par prix */}
      <div>
        <h3 className="font-semibold mb-2">Prix</h3>
        <Range
          step={10}
          min={MIN}
          max={MAX}
          values={[minPrice, maxPrice]}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-1 bg-gray-300"
              style={{
                ...props.style,
                background: `linear-gradient(to right, #ddd ${
                  (100 * (minPrice - MIN)) / (MAX - MIN)
                }%, #4CAF50 ${
                  (100 * (minPrice - MIN)) / (MAX - MIN)
                }%, #4CAF50 ${(100 * (maxPrice - MIN)) / (MAX - MIN)}%, #ddd ${
                  (100 * (maxPrice - MIN)) / (MAX - MIN)
                }%)`,
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                className="w-4 h-4 bg-green-500 rounded-full"
              />
            );
          }}
        />
        <div className="flex justify-between mt-2">
          <span>{minPrice} €</span>
          <span>{maxPrice} €</span>
        </div>
      </div>

      {/* Exemple d'autres filtres */}
      <div>
        <h3 className="font-semibold">Hauteur (cm)</h3>
        <ul className="space-y-1 mt-2">
          <li className="space-x-2">
            <input type="checkbox" id="140" onChange={handleHeightChange} />
            <label htmlFor="140">140</label>
          </li>
          <li className="space-x-2">
            <input type="checkbox" id="160" onChange={handleHeightChange} />
            <label htmlFor="160">160</label>
          </li>
          <li className="space-x-2">
            <input type="checkbox" id="180" onChange={handleHeightChange} />
            <label htmlFor="180">180</label>
          </li>
          {/* Ajoute d'autres options de hauteurs si nécessaire */}
        </ul>
      </div>

      {/* D'autres filtres à ajouter... */}
    </div>
  );
};

export default Filters;
