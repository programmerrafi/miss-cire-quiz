import Image from "next/image";
import React, { useState } from "react";
import { Modal, ScrollArea, Drawer } from "@mantine/core";
import { VscChromeClose } from "react-icons/vsc";

function Footer() {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  return (
    <>
      <div className="hidden sm:block">
        <div className="py-[18px] bg-black w-full flex justify-between px-10 items-center">
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
          <p
            onClick={() => setOpenSignUpModal(true)}
            className="underline text-[12px] text-white font-medium cursor-pointer"
          >
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

            <p
              onClick={() => setOpenSignUpModal(true)}
              className="underline text-[12px] text-white font-medium cursor-pointer"
            >
              Terms & Services
            </p>
          </div>

          <p className="text-white text-[12px] font-light text-center">
            @ {new Date().getFullYear()} Miss Cire Cosmetics, Corp. All rights
            reserved.
          </p>
        </div>
      </div>

      <Modal
        opened={openSignUpModal}
        centered
        onClose={() => {
          setOpenSignUpModal(false);
        }}
        transitionProps={{ transition: "pop" }}
        withCloseButton={false}
        className="signUp_popUp"
        size={true ? 450 : 690}
        // size={accountSelected ? "100%" : "100%"}
        scrollAreaComponent={ScrollArea.Autosize}
        zIndex={200000}
      >
        <div className="px-4 py-2">
          <div className="flex justify-center border-b py-2 relative">
            <p className="text-sm font-semibold">Terms & Services</p>
            <VscChromeClose
              onClick={() => setOpenSignUpModal(false)}
              size={20}
              className="text-[#3f3f3f] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
          <p className="text-[13px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquet est lacus, ut pharetra lectus lobortis sit amet. In dictum
            lacus volutpat felis hendrerit,
            <br />
            <br />
            in suscipit quam interdum. Curabitur enim tellus, ornare nec
            tincidunt sit amet, pellentesque ut elit. Ut suscipit nisi non
            rhoncus dapibus. Morbi vehicula tellus velit, eget semper ligula
            posuere quis. <br />
            <br />
            Cras et felis ornare, pretium nulla a, condimentum urna. Cura a,
            condimentum. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquet est lacus, ut pharetra lectus lobortis sit amet. In dictum
            lacus volutpat felis hendrerit,
            <br />
            <br />
            in suscipit quam interdum. Curabitur enim tellus in suscipit quam
            interdum. Curabitur enim tellus in suscipit quam interdum. Curabitur
            enim tellus in suscipit quam linterdum. Curabitur enim tellus
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Footer;
