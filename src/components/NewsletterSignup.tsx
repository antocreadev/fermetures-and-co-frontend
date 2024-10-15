"use client";
import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email && acceptedPolicy) {
      // Logic for submitting email
      console.log("Email submitted:", email);
    } else {
      alert(
        "Veuillez entrer un email valide et accepter la politique de confidentialité."
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-neutral-200 py-10 px-5">
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="/img/Images_pergolas_CEBEL/AUSTRAL-BOREAL_-_LPA_RO.jpg"
          alt="Newsletter Illustration"
          className="w-full object-cover rounded-lg"
        />
        <span className="absolute top-10 left-0 bg-opacity-70 bg-neutral-200 px-4 py-2 text-lg font-semibold shadow-lg uppercase">
          Bienvenue chez Fermetures & Co !
        </span>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SUIVEZ NOTRE ACTU !
        </h2>
        <p className="text-gray-600 mb-6">
          Inscrivez-vous à la newsletter pour avoir des conseils et des bons
          plans !
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full lg:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="policy"
              className="mr-2"
              checked={acceptedPolicy}
              onChange={(e) => setAcceptedPolicy(e.target.checked)}
            />
            <label htmlFor="policy" className="text-gray-600 text-sm ">
              J&apos;accepte la politique de confidentialité
            </label>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center px-5 py-3 bg-neutral-600 text-white font-semibold rounded-lg hover:bg-neutral-700 transition duration-300"
          >
            JE M&apos;INSCRIS !
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
