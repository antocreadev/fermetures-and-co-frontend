import BestSales from "@/components/BestSales";
import CategoryNavList from "@/components/CategoryNavList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import { PRODUCTS } from "@/products";

export default function Index() {
  return (
    <main className="flex flex-col h-screen max-h-screen p-4">
      <Navbar />
      <CategoryNavList />
      <Showcase featuredProduct={PRODUCTS[0]} products={PRODUCTS.slice(0, 6)} />
      <BestSales />
      <Footer />
    </main>
  );
}
