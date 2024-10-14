"use client";
import { Truck, CreditCard, Gift, Package } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: (
        <Truck
          className="w-12 h-12 text-
      neutral-500"
        />
      ),
      title: "Livraison 2/5 jours",
    },
    {
      icon: (
        <CreditCard
          className="w-12 h-12 text-
      neutral-500"
        />
      ),
      title: "Paiements sécurisés",
    },
    {
      icon: (
        <Gift
          className="w-12 h-12 text-
      neutral-500"
        />
      ),
      title: "Frais de port offerts",
    },
    {
      icon: (
        <Package
          className="w-12 h-12 text-
      neutral-500"
        />
      ),
      title: "Livraison sans contact",
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="flex justify-around items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col"
          >
            <div className="mb-4">{feature.icon}</div>
            <p className="text-gray-700 font-semibold">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
