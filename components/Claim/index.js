"use client";
import { updateUser } from "@/redux/slices/authSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../shared/Button";

function Claim() {
  const dispatch = useDispatch();

  const handleSamples = () => {
    // console.log("handleSamples");
    dispatch(updateUser(null));
    // localStorage.removeItem("x_auth_data");
  };
  return (
    <div className="relative">
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
          src="/banner/banner-3.jpg"
          width={0}
          height={0}
          alt="banner"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
        <Button
          onClick={handleSamples}
          title="CLAIM YOUR FREE SAMPLES"
          // className="mx-auto !max-w-[320px] sm:!max-w-[400px] w-full !bg-primary mb-8 sm:mb-14"
          className="mx-auto !max-w-[320px] sm:!max-w-[400px] w-full !text-[15px]"
        />
      </div>
    </div>
  );
}

export default Claim;
