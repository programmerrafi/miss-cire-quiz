import Image from "next/image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

function ProductCard({ sample, addItem, addNewItems }) {
  const checkItemExists = (id) => {
    const find = addNewItems.filter((item) => item.id === id);
    return !!find.length;
  };

  return (
    <div
      className={`flex flex-col items-center ${
        checkItemExists(sample.id) && "bg-[#FFF4F8]"
      }`}
    >
      <Image src={sample.image} width={114} height={114} alt="ico" />
      <p className="text-[12px] text-black font-bold text-center leading-4 mt-[8px] mb-[4px]">
        {sample.title}
      </p>

      <div className="flex flex-col justify-between gap-1">
        {sample.subTitle.map((item, index) => (
          <div className="flex items-center px-4 gap-[3px]" key={index}>
            <AiOutlineCheck size="10px" className="text-primary" />
            <p className="text-[8px] text-black font-normal text-center leading-4">
              {item}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[12px] text-black font-medium text-center leading-4 my-[4px]">
        ${sample.price}.00
      </p>
      <div
        onClick={() => addItem(sample)}
        className={` border text-[9.26px] font-bold cursor-pointer border-primary py-1 px-4 text-center w-full uppercase ${
          checkItemExists(sample.id)
            ? "bg-primary text-white"
            : "bg-white text-primary"
        }`}
      >
        {checkItemExists(sample.id) ? "Selected" : "Select"}
      </div>
    </div>
  );
}

export default ProductCard;
