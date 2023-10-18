"use client";

import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import Claim from "@/components/Claim";
import HighGrade from "@/components/HignGrade";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1250px] mx-auto w-full">
        <Benefits />
        <Products />
        <HighGrade />
      </div>
      <Claim />
    </div>
  );
}
