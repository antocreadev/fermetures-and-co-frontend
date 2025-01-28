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
  selectedWidths: number[];
  setSelectedWidths: React.Dispatch<React.SetStateAction<number[]>>;
  availableWidths: number[];
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  availableColors: string[];
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
  selectedWidths,
  setSelectedWidths,
  availableWidths,
  selectedColors,
  setSelectedColors,
  availableColors,
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

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(e.target.id);
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedWidths((prev) => [...prev, width]);
    } else {
      setSelectedWidths((prev) => prev.filter((w) => w !== width));
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedColors((prev) => [...prev, color]);
    } else {
      setSelectedColors((prev) => prev.filter((c) => c !== color));
    }
  };

  return (
    <div className="space-y-4 mt-4 lg:mt-0">
      {/* Filtre par prix */}
      <div>
        <h3 className="font-semibold mb-2">Prix</h3>
        <div className="w-[70%]">
          <Range
            step={10}
            min={MINBOUND}
            max={MAXBOUND}
            values={[minPrice, maxPrice]}
            onChange={handlePriceChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="w-full h-1 bg-neutral-300"
                style={{
                  ...props.style,
                  background: `linear-gradient(to right, #ddd ${
                    (100 * (minPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
                  }%, #737373 ${
                    (100 * (minPrice - MINBOUND)) / (MAXBOUND - MINBOUND)
                  }%, #737373 ${
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
                  className="w-4 h-4 bg-neutral-500 rounded-full"
                />
              );
            }}
          />
          <div className="flex  w-full justify-between mt-2">
            <span>{minPrice} €</span>
            <span>{maxPrice} €</span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-4 border-neutral-300" />
      {/* Filtre par hauteur */}
      <div>
        <h3 className="font-semibold">Hauteur (cm)</h3>
        <ul className="space-y-1 mt-2">
          {availableHeights.map((height) => (
            <li key={height} className="space-x-2">
              <input
                type="checkbox"
                className="accent-neutral-500"
                id={height.toString()}
                checked={selectedHeights.includes(height)}
                onChange={handleHeightChange}
              />
              <label htmlFor={height.toString()}>{height}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Separator */}
      <hr className="my-4 border-neutral-300" />

      {/* Filtre par largeur */}
      <div>
        <h3 className="font-semibold">Largeur (cm)</h3>
        <ul className="space-y-1 mt-2">
          {availableWidths.map((width) => (
            <li key={width} className="space-x-2">
              <input
                type="checkbox"
                className="accent-neutral-500"
                id={width.toString()}
                checked={selectedWidths.includes(width)}
                onChange={handleWidthChange}
              />
              <label htmlFor={width.toString()}>{width}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Separator */}
      <hr className="my-4 border-neutral-300" />

      {/* Filtre par couleur */}
      <div>
        <h3 className="font-semibold">Couleur</h3>
        <ul className="space-y-1 mt-2">
          {availableColors.map((color) => (
            <li key={color} className="space-x-2">
              <input
                type="checkbox"
                className="accent-neutral-500"
                id={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange}
              />
              <label htmlFor={color}>{color}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
