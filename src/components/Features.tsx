"use client";
import { CreditCard, Gift, Package, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: (
        <Truck
          className="w-12 h-12 text-
      neutral-500"
        />
      ),
      title: "Livraison rapide",
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
    <div className="bg-neutral-50 py-10">
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col border-neutral-950 border-2 rounded-lg p-4 max-w-60 min-w-60  min-h-28 max-h-28"
          >
            <div className="">{feature.icon}</div>
            <p className="text-neutral-950 font-semibold uppercase text-center text-sm mt-2">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
