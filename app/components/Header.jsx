"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

// ICONS -
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} md:h-[80px]`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={60} height={100} />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* ICON START */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[20px] md:text-[24px]" />
            <div className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-500 absolute top-1 left-5 md:left-7 text-[8px] md:text-[11px] flex justify-center items-center text-white font-light px-[3px] md:px-[5px]">
              4
            </div>
          </div>
          {/* ICON END */}

          {/* ICON START */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[18px] md:text-[24px]" />
            <div className="h-[16px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-500 absolute top-1 left-5 md:left-7 text-[8px] md:text-[11px] flex justify-center items-center text-white font-light px-[3px] md:px-[5px]">
              5
            </div>
          </div>
          {/* ICON END */}

          {/* MOBILE ICON - HAMBURDER PART */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[24px]"
                onClick={() => {
                  setMobileMenu(false);
                  setShowCatMenu(false);
                }}
              />
            ) : (
              <BiMenuAltRight
                className="text-[24px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
