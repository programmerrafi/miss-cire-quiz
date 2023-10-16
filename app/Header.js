import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [searchBackDrop, setSearchBackDrop] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [accountSelected, setAccountSelected] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleResize = () => {
    if (typeof window === "undefined") return;
    const docWidth = window.document.documentElement.clientWidth;
    if (docWidth <= 1024) {
      setMenuClick(true);
    } else {
      setMenuClick(false);
    }
    if (docWidth <= 640) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="py-4 bg-black w-full flex justify-center px-6 items-center relative">
          <Image
            src="https://www.misscire.com/cdn/shop/files/Miss-Cire-Logo-White_x35@2x.png?v=1613174703"
            width={0}
            height={0}
            alt="miss-cire"
            sizes="100vw"
            className="w-[124px] h-[20px] md:w-[197px] md:h-[32px]"
          />

          <div className="flex items-center gap-1 absolute left-3 sm:left-10 top-1/2 -translate-y-1/2">
            <FiPhone
              className={`text-white text-[11px] sm:text-[15px] md:text-[20px]`}
            />
            <p className="text-white text-[8px] sm:text-[11px] md:text-[16px] font-normal">
              +1 (305) 302-2129
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
