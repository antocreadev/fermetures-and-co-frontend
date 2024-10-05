import { PRODUCTS } from "@/app/page";
import { Product } from "@/types/Product";

type ShowcaseProps = {
  featuredProduct: Product;
  products: Product[];
};

const Showcase: React.FC<ShowcaseProps> = ({ featuredProduct, products }) => {
  console.log("featuredProduct", featuredProduct);
  return (
    <section className="flex flex-col justify-center p-5 bg-gray-100">
      <h1 className="header text-center mb-4">
        FERMETURES & CO : LE SPÉCIALISTE DES PORTAILS ET PERGOLAS EN CORSE
      </h1>

      {/* Container responsive */}
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Produit vedette (plus grand) */}
        <div className="w-full lg:w-1/2 lg:h-full mb-6 lg:mb-0 flex items-center justify-center">
          <div className="border rounded-lg p-4">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="font-semibold text-center">
              {featuredProduct.name}
            </h3>
            <p className="text-center text-green-600 font-bold mt-2">
              {featuredProduct.price} €
            </p>
          </div>
        </div>

        {/* Les 6 autres produits plus petits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-1/2">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="font-semibold text-center line-clamp-3">
                {product.name}
              </h3>
              <p className="text-center text-green-600 font-bold mt-2">
                {product.price} €
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
