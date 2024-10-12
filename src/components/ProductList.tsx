import { Product } from "@/types/Product";
import ProductItem from "./ProductItem";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <p className="text-center py-10 text-slate-500">
      Aucun produit trouvé pour ces critères
    </p>
  );
};

export default ProductList;
