import CategorySection from "@/componments/home/CategorySection";
import Page from "@/componments/home/page";
import ProductSection from "@/componments/home/ProductSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Page />
      <CategorySection />
      <ProductSection />
    </>
  );
};

export default HomePage;
