"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/types/Product";
import React from "react";

export default function ProductItemBig({
  product,
  ...props
}: {
  product: Product;
} & React.LinkHTMLAttributes<HTMLAnchorElement>): JSX.Element {
  // const finalPrice = product.discount_percentage
  //   ? (product.price * (1 - product.discount_percentage / 100)).toFixed(2)
  //   : product.price.toFixed(2);
  return (
    <a
      href={props.href}
      className={cn(
        "relative flex flex-col justify-center items-center p-2 bg-white border border-neutral-200 cursor-pointer",
        props.className
      )}
    >
      <img
        src={product.imageUrls[0]}
        alt={product.name}
        className=" h-[90%] object-cover pb-1"
      />
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
}
