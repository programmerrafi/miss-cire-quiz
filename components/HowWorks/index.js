import React from "react";
import Player from "../shared/Player";

function HowWorks() {
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
    </div>
  );
}

export default HowWorks;
