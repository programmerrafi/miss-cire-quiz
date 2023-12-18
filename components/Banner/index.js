import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="hidden sm:block">
        <Image
          src="/banner/banner-d.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="banner"
          className="w-full h-auto"
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/banner/banner-mm.png"
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
