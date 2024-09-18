import BestSales from "@/components/BestSales";
import CategoryNavList from "@/components/CategoryNavList";
import Navbar from "@/components/Navbar";
import ShowcaseHeader from "@/components/ShowcaseHeader";

export const PRODUCTS = [
  {
    id: 1,
    name: "Portail en aluminium",
    price: 1000,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Pergola bioclimatique",
    price: 1999,
    discount_percentage: 10,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Portail en aluminium",
    price: 1000,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Pergola bioclimatique",
    price: 2000,
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "Portail en aluminium",
    price: 1000,
    discount_percentage: 14,
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Pergola bioclimatique",
    price: 2000,
    image: "https://placehold.co/600x400",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />
      <ShowcaseHeader />
      <BestSales />
    </main>
  );
}
