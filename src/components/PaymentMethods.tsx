"use client";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiApplepay,
  SiGooglepay,
} from "@icons-pack/react-simple-icons";

const PaymentMethods = () => {
  const methods = [
    { name: "VISA", icon: <SiVisa color="default" size={36} /> },
    { name: "MasterCard", icon: <SiMastercard color="default" size={36} /> },
    { name: "Apple Pay", icon: <SiApplepay color="default" size={36} /> },
    { name: "Google Pay", icon: <SiGooglepay color="default" size={36} /> },
    { name: "PayPal", icon: <SiPaypal color="default" size={36} /> },
    // Ajoute d'autres méthodes si nécessaire
  ];

  return (
    <div className="bg-neutral-800 py-6">
      <h2 className=" text-center text-xl font-semibold mb-8 uppercase text-neutral-50">
        Paiement sécurisé
      </h2>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {methods.map((method, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-neutral-50 w-24 h-16 rounded-lg border border-neutal-50"
          >
            {method.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
