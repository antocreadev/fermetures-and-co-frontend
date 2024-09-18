import ProductItem, { Product, ProductItemBig } from "./ProductItem";

const ProductItemList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 mx-auto">
      <ProductItemBig product={products[0]} className="md:col-span-2" />

      <div className="flex flex-row items-center gap-2 md:flex-col">
        <div className="flex flex-col md:flex-row flex-wrap gap-2">
          {products.slice(1, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-2">
          {products.slice(3, 6).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItemList;
