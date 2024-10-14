"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardReview from "./CardReview";
export default function Reviews() {
  return (
    <div className="p-2 mb-6">
      <Slider
        {...{
          className: "ml-10 mr-10 flex",
          dots: true,
          speed: 500,
          slidesToShow:
            typeof window !== "undefined" && window.innerWidth >= 1000 ? 3 : 2,
          slidesToScroll:
            typeof window !== "undefined" && window.innerWidth >= 1000 ? 3 : 2,
        }}
      >
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
      </Slider>
    </div>
  );
}
