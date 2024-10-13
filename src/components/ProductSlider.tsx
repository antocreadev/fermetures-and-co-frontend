import { PRODUCTS } from "@/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductItem from "./ProductItem";

const ProductSlider = () => {
  return (
    <Slider
      {...{
        dots: true,
        slidesToShow: window.innerWidth >= 1000 ? 4 : 2,
        slidesToScroll: window.innerWidth >= 1000 ? 3 : 2,
      }}
    >
      {PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          href={`/product/${product.id}`}
        />
      ))}
    </Slider>
  );
};

export default ProductSlider;
