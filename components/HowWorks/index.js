import { updateUser } from "@/redux/slices/authSlice";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../shared/Button";
import Player from "../shared/Player";

function HowWorks() {
  const dispatch = useDispatch();

  return (
    <div className="mb-14 px-10">
      <h1 className="text-[18px] sm:text-[48px] mb-2 sm:mb-2 font-bold text-center">
        HOW IT WORKS
      </h1>

      <div className="sm:block hidden">
        <Player videoUrl="/videos/wax-d.mp4" />
      </div>
      <div className="sm:hidden block">
        <Player videoUrl="/videos/wax-m.mp4" />
      </div>

      <div className="my-6">
        <Button
          onClick={() => dispatch(updateUser(null))}
          title="CLAIM YOUR FREE SAMPLES"
          className="!py-[6px] !px-[10px] !bg-primary !text-[16px] sm:!text-[18px] !w-fit mx-auto cursor-default !font-bold"
        />
      </div>
    </div>
  );
}

export default HowWorks;
