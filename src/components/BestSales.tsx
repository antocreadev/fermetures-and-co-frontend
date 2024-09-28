"use client";

import { PRODUCTS } from "@/app/page";
import React from "react";
import ProductItem from "./ProductItem";
import ProductSlider from "./ProductSlider";

const BestSales = () => {
  return (
    <section className="px-5 py-10">
      <h1 className="header">Nos meilleures ventes</h1>

      <ProductSlider />
    </section>
  );
};

export default BestSales;
