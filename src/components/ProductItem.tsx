import { cn } from "@/lib/utils";
import { Product } from "@/types/Product";

export const ProductItem = ({
  product,
  ...props
}: { product: Product } & React.LinkHTMLAttributes<HTMLAnchorElement>) => {
  // const finalPrice = product.discount_percentage
  //   ? (product.price * (1 - product.discount_percentage / 100)).toFixed(2)
  //   : product.price.toFixed(2);
  return (
    <div
      //w-48 h-48 md:w-32 md:h-32 lg:w-40 lg:h-40
      className={cn(
        "flex flex-col items-center p-2 bg-white border border-gray-200 cursor-pointer mr-1 ml-1",
        props.className
      )}
    >
      <a href={`/product/${product.id}`}>
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-40 lg:w-36 xl:w-48 object-cover pb-1 min-h-28 max-h-28"
        />
      </a>
      <a href={`/product/${product.id}`}>
        <h2 className="text-xs md:text-[10px] uppercase text-center line-clamp-1">
          {product.name}
        </h2>
      </a>
      <div className="flex gap-2 items-center py-1 md:py-0.5">
        {/* {product.discount_percentage && (
          <p className="text-xs md:text-[8px]  text-orange-300 font-bold line-through">
            {product.price} €
          </p>
        )} */}
        <p className="md:text-xs font-bold text-orange-500">
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
  // const finalPrice = product.discount_percentage
  //   ? (product.price * (1 - product.discount_percentage / 100)).toFixed(2)
  //   : product.price.toFixed(2);
  return (
    <a
      href={props.href}
      className={cn(
        "relative flex flex-col justify-center items-center p-2 bg-white border border-gray-200 cursor-pointer",
        props.className
      )}
    >
      <img
        src={product.imageUrls[0]}
        alt={product.name}
        className=" h-[90%] object-cover pb-1"
      />
      <div className="absolute right-0 bottom-5 bg-gray-200 text-end px-2 py-1">
        <p className="text-sm uppercase line-clamp-1">{product.name}</p>
        <p className="text-sm uppercase">
          A PARTIR DE{" "}
          <span className="font-semibold text-orange-500">
            {product.price.toFixed(2)} €
          </span>
        </p>
      </div>
    </a>
  );
};

export default ProductItem;
