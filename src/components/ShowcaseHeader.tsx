import { PRODUCTS } from "@/app/page";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import ProductItemList from "./ProductItemList";

const ShowcaseHeader = () => {
  return (
    <div className="flex flex-col justify-center px-6 py-2 bg-gray-100">
      <h1 className="header text-center mb-4">
        FERMETURES & CO : LE SPÉCIALISTE DES PORTAILS ET PERGOLAS EN CORSE
      </h1>

      <ProductItemList products={PRODUCTS} />
    </div>
  );
};

export default ShowcaseHeader;
