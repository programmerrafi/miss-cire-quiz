"use client";

import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

function HighGrade() {
  return (
    <div>
      <h1 className="text-[18px] sm:text-[38px] font-bold text-center sm:leading-[45px] mb-4 sm:mb-8">
        THOUGHTFULLY <br /> DESIGNED, HIGH-GRADE <br /> FORMULATIONS
      </h1>

      <div className="mb-10 sm:mb-14">
        <Image
          src="/images/high.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="banner"
          className="w-full h-[230px] sm:h-[500px] object-contain"
        />
      </div>

      <Button
        title="FIND MY SHADE"
        className="mx-auto !max-w-[320px] sm:!max-w-[400px] w-full !bg-primary mb-8 sm:mb-14"
      />
    </div>
  );
}

export default HighGrade;
