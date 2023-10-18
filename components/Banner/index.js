import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="hidden sm:block">
        <Image
          src="/banner/banner-1.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="banner"
          className="w-full h-auto"
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/banner/banner-2.jpg"
          width={0}
          height={0}
          alt="banner"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Banner;
