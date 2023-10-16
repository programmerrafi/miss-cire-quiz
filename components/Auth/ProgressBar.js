// components/ProgressBar.js
import { useState, useEffect } from "react";

const ProgressBar = ({ setProgress, progress }) => {
  const [progress1, setProgress1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress1 <= progress - 1) {
        setProgress1(progress1 + 1);
      }
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [progress1, progress]);

  return (
    <div className="progress-bar mt-0">
      <div
        className="-mt-7 ml-[14px] absolute text-right"
        style={{ width: `${progress1}%` }}
      >
        <div className="inline-block relative">
          <span className="bg-primary text-white text-[10px] py-[2px] min-w-[30px] px-1 font-semibold">
            {progress1}%
          </span>
          <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 bg-primary w-[9px] h-[9px] rotate-45"></span>
        </div>
      </div>
      <div className="progress" style={{ width: `${progress1}%` }}>
        {/* {progress}% */}
      </div>
    </div>
  );
};

export default ProgressBar;
