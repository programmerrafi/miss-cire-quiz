import React from "react";
import { Oval } from "react-loader-spinner";

function Button({
  title = "button",
  className,
  onClick,
  loading = false,
  ...otherProps
}) {
  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={`font-semibold font-Montserrat bg-black flex outline-none items-center justify-center text-base text-white py-[9px] px-4 cursor-pointer ${className}`}
    >
      {loading ? (
        <Oval
          height={18}
          width={18}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#000"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />
      ) : (
        title
      )}
    </button>
  );
}

export default Button;
