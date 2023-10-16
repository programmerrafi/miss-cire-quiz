import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCheck, AiFillWarning } from "react-icons/ai";
import ChooseHeader from "./ChooseHeader";

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

const accountType = [
  {
    title: "Esthetician/Cosmologist",
    img: "/icons/accounts/1-black.svg",
    img2: "/icons/accounts/1-white.svg",
  },
  {
    title: "Salon/Spa Owner",
    img: "/icons/accounts/3-black.svg",
    img2: "/icons/accounts/3-white.svg",
  },
  {
    title: "Cosmetology Student",
    img: "/icons/accounts/2-black.svg",
    img2: "/icons/accounts/2-white.svg",
  },
];

function ChooseAccount({
  setGoingNext,
  setSelectAccountType,
  selectAccountType,
  setProgress,
}) {
  return (
    <div className="max-w-[510px] w-full">
      {/* <h1 className="text-[24px] font-bold text-center">
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
      </div> */}
      <ChooseHeader />

      {/* choose account */}
      <div className="py-8 px-6">
        <h1 className="text-[18px] font-bold text-center">
          CHOOSE YOUR CATEGORY
        </h1>

        <div className="py-3 w-full">
          {accountType.map((item, index) => (
            <div
              onClick={() => setSelectAccountType(item)}
              key={index}
              className={`mb-[15px] w-full flex items-center justify-between gap-3 py-[6px] px-3 cursor-pointer border border-primary shadow-md ${
                item.title === selectAccountType.title
                  ? "bg-primary"
                  : "bg-[#fff]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={
                    item.title === selectAccountType.title
                      ? item.img2
                      : item.img
                  }
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
                  alt="ico"
                />
                <p
                  className={`text-center text-[11px] sm:text-[15px] font-normal ${
                    item.title === selectAccountType.title
                      ? "text-[#fff]"
                      : "text-black"
                  }`}
                >
                  {item.title}
                </p>
              </div>
              {item.title === selectAccountType.title && (
                <div className="w-[21px] h-[21px] bg-white flex items-center justify-center">
                  <AiOutlineCheck size={18} className="text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          onClick={() => {
            setGoingNext(true);
            setProgress(25);
          }}
          className="flex items-center justify-center gap-2 w-full mx-auto !bg-primary !py-[10px] font-semibold cursor-pointer mb-4"
        >
          <p className="text-white text-[15px]">NEXT</p>
        </div>

        <div className="flex items-center bg-[#E9E9E9] px-2 w-[75%] mx-auto gap-1 py-[1px]">
          <AiFillWarning size={22} className="text-[#444444b5]" />
          <p className="text-[10.38px] leading-[13px] text-[#444444fd]">
            This program is exclusively available for beauty professionals with
            a valid esthetician/cosmetologist US license
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseAccount;