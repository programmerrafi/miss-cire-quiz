import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="py-6 bg-black w-full flex justify-between px-10 items-center">
          <Image
            src="https://www.misscire.com/cdn/shop/files/Miss-Cire-Logo-White_x35@2x.png?v=1613174703"
            width={120}
            height={18}
            alt="miss-cire"
          />

          <p className="text-white text-[12px] font-light">
            @ {new Date().getFullYear()} Miss Cire Cosmetics, Corp. All rights
            reserved.
          </p>
          <p className="underline text-[12px] text-white font-medium">
            Terms & Services
          </p>
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="py-4 bg-black">
          <div className="w-full flex justify-between px-3 items-center mb-4">
            <Image
              src="https://www.misscire.com/cdn/shop/files/Miss-Cire-Logo-White_x35@2x.png?v=1613174703"
              width={120}
              height={18}
              alt="miss-cire"
            />

            <p className="underline text-[12px] text-white font-medium">
              Terms & Services
            </p>
          </div>

          <p className="text-white text-[12px] font-light text-center">
            @ {new Date().getFullYear()} Miss Cire Cosmetics, Corp. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
