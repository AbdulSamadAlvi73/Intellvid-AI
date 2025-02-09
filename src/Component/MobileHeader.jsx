import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const MobileHeader = ({ darkMode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
              className="md:text-[1.1vw] xs:text-[3.5vw] cursor-pointer"
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
        className={` w-full bg-black/80 fixed z-50 ${
          isMenuOpen ? "min-h-screen" : "min-h-0"
        }`}
      >
        <div
          className={`w-full ${
            isMenuOpen ? "max-h-full" : "max-h-0"
          } overflow-hidden flex flex-col bg-black`}
        >
          <div className="w-full flex justify-end p-8">
            <span
              onClick={toggleMenu}
              className="text-white md:text-[1.1vw] xs:text-[4.5vw]"
            >
              <RxCross2 />
            </span>
          </div>
          <ul className="flex flex-col xs:px-10 pb-8 md:px-72 text-white text-[2vw] items-center">
            {["Home", "About", "Pages", "Pricing", "Contact"].map(
              (link, idx) => {
                return (
                  <li
                    key={idx}
                    className="py-4 border-y border-gray-500 w-full text-center"
                  >
                    <Link
                      onClick={toggleMenu}
                      to={`/${idx === 0 ? "" : link.toLowerCase()}`}
                    >
                      {link}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
