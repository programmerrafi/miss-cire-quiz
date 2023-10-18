import Image from "next/image";
import React from "react";

const benefitsData = [
  {
    id: 1,
    title: "ACCESS TO PRO PRICES",
    icon: "/icons/4.svg",
  },
  {
    id: 2,
    title: "CLAIM YOUR FREE SAMPLES",
    icon: "/icons/3.svg",
  },
  {
    id: 3,
    title: "20% OFF ON 1ST ORDER",
    icon: "/icons/2.svg",
  },
  {
    id: 4,
    title: "BUY BULK & SAVE",
    icon: "/icons/1.svg",
  },
];

function Benefits() {
  return (
    <div className="py-4 sm:py-10">
      <h1 className="text-center text-[18px] sm:text-[32px] text-black font-bold  mt-4">
        CREATE A PRO ACCOUNT &
      </h1>
      <h2 className="text-center text-[18px] sm:text-[32px] text-black font-bold -mt-1 mb-2 sm:mb-8">
        ACCESS TO EXCLUSIVE BENEFITS
      </h2>

      <div className="hidden sm:block">
        <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-6 sm:gap-20 py-4 sm:py-8 px-4 sm:px-0">
          {benefitsData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={item.icon}
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-[60px] sm:h-[60px] w-[32px] h-[32px]"
                alt="ico"
              />
              <p className="text-center text-[13px] sm:text-[18px] whitespace-nowrap text-black font-semibold mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="flex items-center justify-center gap-6 w-full pt-6 pb-6 sm:pt-8 sm:pb-9">
          {/* 1st one */}
          <div className="flex items-center gap-7 flex-col md:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/4.svg"
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-[29px] sm:h-[29px] w-[32px] h-[32px]"
                alt="ico"
              />
              <p className="text-center text-[12px] sm:text-[11px] whitespace-nowrap text-black font-semibold mt-1">
                ACCESS TO PRO PRICES
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/2.svg"
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-[29px] sm:h-[29px] w-[32px] h-[32px]"
                alt="ico"
              />
              <p className="text-center text-[12px] sm:text-[13px] whitespace-nowrap text-black font-semibold mt-1">
                20% OFF ON 1ST ORDER
              </p>
            </div>
          </div>
          {/* 2nd one */}
          <div className="flex items-center flex-col gap-7 md:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/3.svg"
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-[29px] sm:h-[29px] w-[32px] h-[32px]"
                alt="ico"
              />
              <p className="text-center text-[12px] sm:text-[11px] whitespace-nowrap text-black font-semibold mt-1">
                CLAIM YOUR FREE SAMPLES
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/1.svg"
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-[29px] sm:h-[29px] w-[32px] h-[32px]"
                alt="ico"
              />
              <p className="text-center text-[12px] sm:text-[11px] whitespace-nowrap text-black font-semibold mt-1">
                BUY BULK & SAVE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
