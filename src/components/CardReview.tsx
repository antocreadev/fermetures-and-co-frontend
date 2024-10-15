import { Star } from "lucide-react";

export default function CardReview() {
  return (
    <div className="border rounded-lg p-4 shadow-sm max-w-[19rem] m-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="text-neutral-500" fill="currentColor" />
        ))}
        <span className="ml-2 text-xl font-bold text-neutral-500">5/5</span>
      </div>
      <p className="mt-2 text-gray-700">
        Parfait, livraison rapide dans colis facile à porter
      </p>
      <div className="mt-4 text-sm text-gray-500">
        <p>
          <span className="font-medium">Avis du </span>
          <span className="font-bold">14/06/2024</span>, suite à une expérience
          du <span className="font-bold">09/04/2024</span> par{" "}
          <span className="font-bold text-gray-700">Aurelie A</span>
        </p>
      </div>
    </div>
  );
}
