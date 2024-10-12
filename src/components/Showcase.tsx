import { Product } from "@/types/Product";
import { ProductItem, ProductItemBig } from "./ProductItem";

type ShowcaseProps = {
  featuredProduct: Product;
  products: Product[];
};

const Showcase: React.FC<ShowcaseProps> = ({ featuredProduct, products }) => {
  return (
    <section className="flex flex-col justify-center p-5 bg-gray-100">
      <h1 className="header text-center mb-4">
        FERMETURES & CO : LE SPÉCIALISTE DES PORTAILS ET PERGOLAS EN CORSE
      </h1>

      {/* Container responsive */}
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Produit vedette (plus grand) */}
        <div className="w-full lg:w-1/2 lg:h-full mb-6 lg:mb-0 flex items-center justify-center">
          <ProductItemBig
            product={featuredProduct}
            href={`/product/${featuredProduct.id}`}
          />
        </div>

        {/* Les 6 autres produits plus petits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-1/2">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              href={`/product/${product.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
