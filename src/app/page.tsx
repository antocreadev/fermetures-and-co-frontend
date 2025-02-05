"use client";

import BestSales from "@/components/BestSales";
import CategoryNavList from "@/components/CategoryNavList";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsletterSignup from "@/components/NewsletterSignup";
import PaymentMethods from "@/components/PaymentMethods";
import Reviews from "@/components/Reviews";
import Showcase from "@/components/Showcase";
import TextHomepage from "@/components/TextHomepage";
import { PRODUCTS } from "@/products";
import { useEffect, useState } from "react";

export default function Index() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou un loader/skeleton
  }

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
