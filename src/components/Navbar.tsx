"use client";
import React, { useState } from "react";
import { MenuIcon, ShoppingBagIcon, UserCircleIcon, XIcon } from "lucide-react";
import GlobalSearchInput from "./GlobalSearchInput";

// Composant pour le Menu Drawer
const MenuDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay pour fermer le drawer quand on clique en dehors */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Drawer du menu */}
      <div className="relative w-80 max-w-full bg-white h-full shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <XIcon size={24} />
        </button>

        {/* Contenu du menu */}
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="flex flex-col space-y-4">
          <li className="text-gray-700 hover:text-gray-900">Accueil</li>
          <li className="text-gray-700 hover:text-gray-900">Produits</li>
          <li className="text-gray-700 hover:text-gray-900">Contact</li>
          <li className="text-gray-700 hover:text-gray-900">À propos</li>
        </ul>
      </div>
    </div>
  );
};

// Composant pour le Cart Drawer
const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay pour fermer le drawer quand on clique en dehors */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Drawer du panier */}
      <div className="relative w-80 max-w-full bg-white h-full shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <XIcon size={24} />
        </button>

        {/* Contenu du panier */}
        <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500">Votre panier est actuellement vide.</p>
          {/* Ajoute ici les éléments du panier dynamiquement */}
        </div>

        {/* Bouton pour passer à la caisse */}
        <button className="mt-6 w-full bg-blue-500 text-white rounded-lg py-2">
          Passer à la caisse
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCartDrawer = () => setIsCartOpen(!isCartOpen);
  const toggleMenuDrawer = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex flex-col px-5 py-3">
        <div className="flex justify-between items-center py-2">
          <div className="flex flex-row gap-2 items-center">
            <button
              onClick={toggleMenuDrawer}
              className="p-1 rounded-sm hover:bg-gray-100"
            >
              <MenuIcon size={28} strokeWidth={1} />
            </button>

            <h1 className="header uppercase">Fermetures & Co</h1>
          </div>

          <div className="hidden md:flex w-1/3">
            <GlobalSearchInput />
          </div>

          <div className="flex flex-row gap-4 items-center">
            <button
              onClick={toggleCartDrawer}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <ShoppingBagIcon size={24} strokeWidth={1} />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <UserCircleIcon size={24} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="flex justify-stretch">
          <div className="flex md:hidden w-full">
            <GlobalSearchInput />
          </div>
        </div>
      </nav>

      {/* Intégration des drawers */}
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenuDrawer} />
      <CartDrawer isOpen={isCartOpen} onClose={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
