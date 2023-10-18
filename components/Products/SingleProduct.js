import Image from "next/image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

function SingleProduct({ sample, addItem, addNewItems }) {
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
      <Image
        src={sample.image}
        width={0}
        height={0}
        alt="ico"
        sizes="100vw"
        className="sm:w-[240px] sm:h-[240px] w-[166px] h-[166px]"
      />
      <p className="text-[16.61] sm:text-[24px] text-black font-bold text-center leading-4 mt-[20px] mb-[14px]">
        {sample.title}
      </p>
      <div className="hidden sm:block">
        <div className="flex flex-col justify-between gap-1">
          {sample.subTitle.map((item, index) => (
            <div className="flex items-center py-1 px-4 gap-[3px]" key={index}>
              <AiOutlineCheck size="20px" className="text-primary" />
              <p className="text-[13px] sm:text-[15px] text-black font-normal text-center leading-4">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="flex flex-col justify-between gap-1">
          {sample.subTitle2.map((item, index) => (
            <div className="flex items-center px-4 gap-[3px]" key={index}>
              <AiOutlineCheck size="12px" className="text-primary" />
              <p className="text-[10.38px] text-black font-normal text-center leading-4">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[12.46px] sm:text-[18px] text-black font-medium text-center leading-4 my-[10px] sm:my-[20px]">
        ${sample.price}.00
      </p>
      <div
        onClick={() => addItem(sample)}
        className={` border text-[12.46px] sm:text-[18px] font-medium sm:font-bold cursor-pointer border-primary py-1 px-4 text-center w-full uppercase ${
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

export default SingleProduct;
