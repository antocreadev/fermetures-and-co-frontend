"use client";
import { Range } from "react-range";

type FiltersProps = {
  MINBOUND: number;
  MAXBOUND: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  selectedHeights: number[];
  setSelectedHeights: React.Dispatch<React.SetStateAction<number[]>>;
  availableHeights: number[];
};

const Filters: React.FC<FiltersProps> = ({
  MINBOUND,
  MAXBOUND,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedHeights,
  setSelectedHeights,
  availableHeights,
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
          min={MINBOUND}
          max={MAXBOUND}
          values={[minPrice, maxPrice]}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-1 bg-gray-300"
              style={{
                ...props.style,
                background: `linear-gradient(to right, #ddd ${
                  (100 * (minPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
                }%, #F97316 ${
                  (100 * (minPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
                }%, #F97316 ${
                  (100 * (maxPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
                }%, #ddd ${
                  (100 * (maxPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
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
                className="w-4 h-4 bg-orange-500 rounded-full"
              />
            );
          }}
        />
        <div className="flex justify-between mt-2">
          <span>{minPrice} €</span>
          <span>{maxPrice} €</span>
        </div>
      </div>

      {/* Filtre par hauteur */}
      <div>
        <h3 className="font-semibold">Hauteur (cm)</h3>
        <ul className="space-y-1 mt-2">
          {availableHeights.map((height) => (
            <li key={height} className="space-x-2">
              <input
                type="checkbox"
                className="accent-orange-500"
                id={height.toString()}
                onChange={handleHeightChange}
              />
              <label htmlFor={height.toString()}>{height}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
