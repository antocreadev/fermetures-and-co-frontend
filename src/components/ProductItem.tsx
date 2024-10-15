"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/types/Product";

export const ProductItem = ({
  product,
  slider,
  ...props
}: {
  product: Product;
  slider: boolean;
} & React.LinkHTMLAttributes<HTMLAnchorElement>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Cela indique que le composant est monté côté client
  }, []);

  return (
    <div
      className={cn(
        slider == true
          ? `flex flex-col items-center justify-between p-2 bg-white border border-neutral-200 cursor-pointer mr-1 ml-1`
          : `flex flex-col items-center justify-between p-2 bg-white border border-neutral-200 cursor-pointer `,
        props.className
      )}
    >
      <a href={`/product/${product.id}`} className="w-full">
        <div
          className={`w-full h-[125px] bg-cover bg-center`}
          style={{
            backgroundImage: isMounted
              ? `url(${product.imageUrls[0]})`
              : "none",
          }}
        ></div>
      </a>
      <a href={`/product/${product.id}`}>
        <h2 className="text-sm md:text-[15px] uppercase text-center line-clamp-1">
          {product.name}
        </h2>
      </a>
      <div className="flex gap-2 items-center py-1 md:py-0.5">
        <p className="md:text-xs font-bold text-neutral-500">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </div>
  );
};

export const ProductItemBig = ({
  product,
  ...props
}: { product: Product } & React.LinkHTMLAttributes<HTMLAnchorElement>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <a
      href={props.href}
      className={cn(
        "relative flex flex-col justify-center items-center p-2 bg-white border border-neutral-200 cursor-pointer lg:w-full",
        props.className
      )}
    >
      {isMounted && (
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="h-[90%] object-cover pb-1 w-full"
        />
      )}
      <div className="absolute right-0 bottom-5 bg-neutral-200 text-end px-2 py-1">
        <p className="text-sm uppercase line-clamp-1">{product.name}</p>
        <p className="text-sm uppercase">
          A PARTIR DE{" "}
          <span className="font-semibold text-neutral-500">
            {product.price.toFixed(2)} €
          </span>
        </p>
      </div>
    </a>
  );
};

export default ProductItem;
