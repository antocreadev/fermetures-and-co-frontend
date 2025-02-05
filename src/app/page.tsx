import BestSales from "@/components/BestSales";
import CategoryNavList from "@/components/CategoryNavList";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsletterSignup from "@/components/NewsletterSignup";
import PaymentMethods from "@/components/PaymentMethods";
import Reviews from "@/components/Reviews";
import TextHomepage from "@/components/TextHomepage";

import Showcase from "@/components/Showcase";
import { PRODUCTS } from "@/products";

export default function Index() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />
      <Showcase featuredProduct={PRODUCTS[0]} products={PRODUCTS.slice(0, 6)} />
      <BestSales />
      <TextHomepage />
      <Features />
      <PaymentMethods />
      <Reviews />
      <NewsletterSignup />

      <Footer />
    </main>
  );
}
