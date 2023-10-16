import Image from "next/image";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const agreements = ["Form W8", "Form W9"];

function Agreement({ user, setSelectAgreement, selectAgreement }) {
  // console.log("user2: ", user);

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <p className="text-white font-medium text-[15px] sm:text-[17px]">
          Please sign the agreements
        </p>
        <span className="text-[#9c9c9cdd] underline cursor-pointer">
          Learn More
        </span>
      </div>

      {agreements.map((agreement, index) => (
        <div
          onClick={() => setSelectAgreement(agreement)}
          key={index}
          className="flex items-center justify-between py-[12px] sm:py-[14px] px-3 rounded border border-[#ced4da5f] mb-4"
        >
          <div className="flex gap-4 items-center relative">
            <Image src="/Icons/Frame.svg" width={35} height={35} alt="logo" />
            <p className="text-white font-medium text-[17px]">{agreement}</p>
            {selectAgreement !== agreement && (
              <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
            )}
          </div>
          {selectAgreement === agreement ? (
            <BsCheckCircleFill size={25} className="text-primary" />
          ) : (
            <div className="w-[24px] h-[24px] rounded-full border border-primary"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Agreement;
