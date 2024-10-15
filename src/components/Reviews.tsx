"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardReview from "./CardReview";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="p-2 mb-6 w-full flex flex-col md:flex-row justify-around bg-neutral-50">
      <div className="flex items-center justify-center gap-1 flex-col text-neutral-700">
        <p className="text-xl font-semibold">
          <span className="text-2xl">4.8</span>/5
        </p>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <div className="relative" key={index}>
              {/* Étoile vide */}
              <Star className="text-neutral-300" fill="none" />

              {/* Étoile pleine (avec remplissage partiel) */}
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{
                  width: index === 4 ? "80%" : "100%",
                }} // exemple pour des étoiles à 75%, 50%, ou 100% de remplissage
              >
                <Star className="text-neutral-500" fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
        <img className="w-24" src="/img/avis-verifies.svg" alt="" />
      </div>
      <div className="w-full md:w-[80%] p-2">
        <Slider
          {...{
            className: "ml-10 mr-10 flex",
            dots: true,
            speed: 500,
            slidesToShow:
              typeof window !== "undefined" && window.innerWidth >= 1000
                ? 3
                : typeof window !== "undefined" && window.innerWidth >= 768
                ? 2
                : 1,
            slidesToScroll:
              typeof window !== "undefined" && window.innerWidth >= 1000
                ? 3
                : typeof window !== "undefined" && window.innerWidth >= 768
                ? 2
                : 1,
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
    </div>
  );
}
