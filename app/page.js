"use client";

import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import Claim from "@/components/Claim";
import HighGrade from "@/components/HignGrade";
import HowWorks from "@/components/HowWorks";
import Products from "@/components/Products";
import ProductsNew from "@/components/ProductsNew";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1250px] mx-auto w-full">
        <Benefits />
        <HowWorks />
        <ProductsNew />
        {/* <Products /> */}
        {/* <HighGrade /> */}
      </div>
      <Claim />
    </div>
  );
}
