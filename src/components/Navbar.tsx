"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, ShoppingBagIcon, UserCircleIcon, XIcon } from "lucide-react";
import GlobalSearchInput from "./GlobalSearchInput";
import { Product } from "@/types/Product";

// Composant pour le Menu Drawer
interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start ${
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
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type CartItem = {
  item: Product;
  quantity: number;
};

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Récupération des éléments du panier depuis le localStorage
    const items = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];

    // update quantity of same items
    const groupedItems = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.item.id === item.item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ item: item.item, quantity: 1 });
      }
      return acc;
    }, [] as CartItem[]);

    setCartItems(groupedItems);
  }, []);

  // Fonction pour supprimer un produit
  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.item.id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedCart.flatMap((cartItem) =>
          Array(cartItem.quantity).fill(cartItem.item)
        )
      )
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay pour fermer le drawer quand on clique en dehors */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Drawer du panier */}
      <div className="relative w-96 max-w-full bg-white h-full shadow-lg p-6 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <XIcon size={24} />
        </button>

        {/* Contenu du panier */}
        <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
        <div className="flex flex-col space-y-4 overflow-scroll">
          {cartItems.length > 0 ? (
            cartItems.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="flex flex-row justify-between items-center"
              >
                {item?.imageUrls && (
                  <img
                    src={item.imageUrls[0]}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                )}
                <div className="flex flex-col flex-1 ml-4">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-500">{item.price} €</p>
                  <p className="font-bold">Quantité : {quantity}</p>
                  <p className="font-bold">Total : {item.price * quantity} €</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Supprimer
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Votre panier est actuellement vide.</p>
          )}
        </div>

        {/* Bouton pour passer à la caisse */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-bold">Total :</p>
          <p className="text-lg font-bold">
            {cartItems.reduce(
              (total, { item, quantity }) => total + item.price * quantity,
              0
            )}{" "}
            €
          </p>
        </div>
        <button className="mt-6 w-full bg-orange-500 text-white rounded-lg py-2">
          Passer à la caisse
        </button>
      </div>
    </div>
  );
};

// Composant Navbar
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

            <a href="/">
              <img
                src="/img/logo.jpg"
                alt=""
                className="w-36 mix-blend-multiply"
              />
            </a>
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
