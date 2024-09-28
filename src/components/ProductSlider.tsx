import { PRODUCTS } from "@/app/page";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductItem from "./ProductItem";

const ProductSlider = () => {
  return (
    <Slider
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      }}
    >
      {PRODUCTS.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
