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

function ChooseHeader({ active }) {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-center sm:block hidden">
        FREE SAMPLES DELIVERED TO YOUR DOOR
      </h1>
      <h1 className="text-[21px] mt-3 font-bold text-center sm:hidden block leading-7">
        FREE SAMPLES <br /> DELIVERED TO YOUR DOOR
      </h1>
      <p className="text-[14px] text-[#7a7979] text-center mb-3 sm:block hidden">
        Create your account at Miss Cire to get exclusive benefits.
      </p>
      <p className="text-[14px] text-[#7a7979] text-center mb-3 sm:hidden block">
        Create Your Account with Us <br />& Eniov the Perks
      </p>

      <div className="flex sm:flex-row flex-col justify-between gap-2 px-4 sm:px-0">
        {OffersData.map((item, index) => (
          <div
            className="w-full sm:w-[165px] bg-[#FAFAFA] sm:bg-white sm:border border-[#dfdfdfdd] flex flex-row sm:flex-col items-center sm:justify-center gap-2 sm:gap-0 py-2 px-4"
            key={index}
          >
            <Image src={item.image} width={20} height={20} alt="ico" />
            <p className="text-[12px] text-black font-light text-center leading-4 sm:mt-[8px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseHeader;
