import Image from "next/image";
import React from "react";

const OffersData = [
  {
    image: "/icons/offer-1.svg",
    title: "Receive Free Samples \n ($60 Value)",
  },
  {
    image: "/icons/offer-2.svg",
    title: "20% OFF in your \n First Purchase",
  },
  {
    image: "/icons/offer-3.svg",
    title: "Lifetime Access to Pro \n Prices & Discounts",
  },
];

function ChooseHeader() {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-center">
        FREE SAMPLES DELIVERED TO YOUR DOOR
      </h1>
      <p className="text-[14px] text-[#7a7979] text-center mb-4">
        Create your account at Miss Cire to get exclusive benefits.
      </p>

      <div className="flex justify-between">
        {OffersData.map((item, index) => (
          <div
            className="w-[165px] border border-[#dfdfdfdd] flex flex-col items-center justify-center py-2 px-4"
            key={index}
          >
            <Image src={item.image} width={20} height={20} alt="ico" />
            <p className="text-[12px] text-black font-light text-center leading-4 mt-[8px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseHeader;
