import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import InVideoDropMobile from "./InVideoDropMobile";
import StudioDropMobile from "./StudioDropMobile";

const MobileHeader = ({ darkMode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropOpen1, setIsDropOpen1] = useState(false);
  const [isDropOpen2, setIsDropOpen2] = useState(false);

  let toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "Intellvid AI", to: "#" },
    { name: "Intellvid Studio", to: "#" },
    { name: "Help", to: "/help" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
  ];

  const handleDropdownOpen = (setState) => {
    setState((prev) => !prev);
  };
  console.log(isDropOpen1);

  return (
    <>
      <div
        className={` fixed top-0  z-50 w-full ${
          darkMode ? "text-white bg-slate-950" : "text-black bg-white"
        }`}
      >
        <div
          className={`max-w-[1450px] xs:py-1 md:py-4 xs:px-0.5 md:px-5 font-roboto mx-auto justify-between xs:flex lg:hidden w-full`}
        >
          <div className="flex xs:scale-75 md:scale-100 items-center xs:gap-1.5 md:gap-3">
            <img
              className="w-[5px] h-[40px]"
              src="/imgs/Hero/Rectangle 13418.png"
              alt=""
            />
            <img
              className="w-[125px] object-cover h-[36px]"
              src="/imgs/Hero/logo.png"
              alt=""
            />
          </div>
          <div className="flex items-center xs:gap-2 md:gap-3">
            <div onClick={toggleMenu} className="cursor-pointer">
              <div className="flex flex-col xs:gap-[3px] md:gap-1">
                <div
                  className={`md:w-4.5 xs:w-2.5 md:h-0.5 xs:h-[0.2vw] ${
                    darkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`md:w-4.5 xs:w-2.5 md:h-0.5 xs:h-[0.2vw] ${
                    darkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`md:w-4.5 xs:w-2.5 md:h-0.5 xs:h-[0.2vw] ${
                    darkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </div>
            </div>
            <span
              onClick={toggleMode}
              className="md:text-[2.5vw] xs:text-[3.5vw] cursor-pointer"
            >
              {darkMode ? <LuSunMedium /> : <IoMoonOutline />}
            </span>
            <Link
              to={"/dashboard/login"}
              className={`md:py-1.5 xs:py-1 md:text-[1.1vw] xs:text-[2.5vw] md:px-6 xs:px-2.5 xs:border md:border-2 font-semibold border-theme-purple text-theme-purple rounded-md`}
            >
              Sign in
            </Link>
            <Link
              className={`md:py-1.5 xs:py-1 md:text-[1.1vw] xs:text-[2.5vw] md:px-6 xs:px-2.5 xs:border md:border-2 bg-theme-purple font-semibold border-theme-purple text-white rounded-md`}
            >
              Try for free
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`min-h-screen bg-black/80 fixed z-50 ${
          isMenuOpen ? "min-w-[100vw]" : "min-w-0"
        }`}
      >
        <div
          className={`min-h-screen ${
            isMenuOpen ? "max-w-[50vw]" : "max-w-0"
          } overflow-hidden flex flex-col bg-black`}
        >
          <div className="w-full flex justify-end p-8">
            <span
              onClick={toggleMenu}
              className="text-white lg:text-[1.1vw] md:text-[2.5vw] xs:text-[4.5vw]"
            >
              <RxCross2 />
            </span>
          </div>
          <ul className="flex flex-col w-full xs:px-10 pb-8 md:px-[8vw] text-white text-[2vw] items-center">
            {links.map((link, idx) => {
              return (
                <>
                  <li
                    key={idx}
                    onClick={() =>
                      idx === 1
                        ? handleDropdownOpen(setIsDropOpen1)
                        : "" || idx === 2
                        ? handleDropdownOpen(setIsDropOpen2)
                        : ""
                    }
                    id={idx === 1 || idx === 2 ? `openDropdown-${idx}` : ""}
                    className="py-4 border-b flex justify-between items-center border-gray-500 w-full"
                  >
                    <Link onClick={toggleMenu} to={link.to}>
                      {link.name}
                    </Link>
                    {idx === 1 || idx === 2 ? <BiPlus /> : ""}
                  </li>
                  {idx === 1 ? (
                    <InVideoDropMobile dropdownOpen={isDropOpen1} />
                  ) : (
                    ""
                  )}
                  {idx === 2 ? (
                    <StudioDropMobile dropdownOpen={isDropOpen2} />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
