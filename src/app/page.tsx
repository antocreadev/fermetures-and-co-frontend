import BestSales from "@/components/BestSales";
import CategoryNavList from "@/components/CategoryNavList";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";

export const PRODUCTS = [
  {
    id: 1,
    name: "PORTAIL COULISSANT 3M VEYMONT H.140CM ALUMINIUM GRIS",
    price: 699,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "PORTAIL COULISSANT 3M VOGEL H.140CM ALUMINIUM GRIS",
    price: 719,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "PORTAIL COULISSANT 3M EIGER H.140CM ALUMINIUM GRIS",
    price: 759,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "PORTAIL COULISSANT 3M CIMONE H.140 ALUMINIUM GRIS",
    price: 759,
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "PORTAIL COULISSANT 3,5M VEYMONT H.140CM ALUMINIUM GRIS",
    price: 789,
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "PORTAIL COULISSANT 3,5M VOGEL H.140CM ALUMINIUM GRIS",
    price: 799,
    image: "https://placehold.co/600x400",
  },
  {
    id: 7,
    name: "PORTAIL COULISSANT 3M VEYMONT H.160CM ALUMINIUM GRIS",
    price: 799,
    image: "https://placehold.co/600x400",
  },
  {
    id: 8,
    name: "PORTAIL COULISSANT 3M VOGEL H.160CM ALUMINIUM GRIS",
    price: 819,
    image: "https://placehold.co/600x400",
  },
  {
    id: 9,
    name: "PORTAIL COULISSANT 3,5M EIGER H.140CM ALUMINIUM GRIS",
    price: 859,
    image: "https://placehold.co/600x400",
  },
  {
    id: 10,
    name: "PORTAIL COULISSANT 4M VEYMONT H.160CM ALUMINIUM GRIS",
    price: 899,
    image: "https://placehold.co/600x400",
  },
  {
    id: 11,
    name: "PORTAIL COULISSANT 4M VOGEL H.160CM ALUMINIUM GRIS",
    price: 949,
    image: "https://placehold.co/600x400",
  },
  {
    id: 12,
    name: "PORTAIL COULISSANT 4M EIGER H.180CM ALUMINIUM GRIS",
    price: 999,
    image: "https://placehold.co/600x400",
  },
  {
    id: 13,
    name: "PORTAIL COULISSANT 4,5M VEYMONT H.160CM ALUMINIUM GRIS",
    price: 1049,
    image: "https://placehold.co/600x400",
  },
  {
    id: 14,
    name: "PORTAIL COULISSANT 4,5M VOGEL H.160CM ALUMINIUM GRIS",
    price: 1099,
    image: "https://placehold.co/600x400",
  },
  {
    id: 15,
    name: "PORTAIL COULISSANT 5M VEYMONT H.180CM ALUMINIUM GRIS",
    price: 1149,
    image: "https://placehold.co/600x400",
  },
  {
    id: 16,
    name: "PORTAIL COULISSANT 5M VOGEL H.180CM ALUMINIUM GRIS",
    price: 1199,
    image: "https://placehold.co/600x400",
  },
];

export default function Index() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />

      <Showcase featuredProduct={PRODUCTS[0]} products={PRODUCTS.slice(0, 6)} />
      <BestSales />
    </main>
  );
}
