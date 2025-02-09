import React from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
const Header = ({ darkMode, toggleMode }) => {
  return (
    <div
      className={` fixed top-0  z-50 w-full ${
        darkMode ? "text-white bg-slate-950" : "text-black bg-white"
      }`}
    >
      <div
        className={`max-w-[75vw] py-4 font-roboto mx-auto justify-between xs:hidden lg:flex w-full`}
      >
        <div className="flex items-center gap-3">
          <img
            className="w-[0.6vw] h-[4vw]"
            src="/imgs/Hero/Rectangle 13418.png"
            alt=""
          />
          <img
            className="w-[10vw] h-[2.7vw]"
            src="/imgs/Hero/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-[47px] text-[0.9vw]">
          {["Home", "About", "Pages", "Pricing", "Contact"].map((link, idx) => {
            return (
              <Link key={idx} to={`/${idx === 0 ? "" : link.toLowerCase()}`}>
                {link}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <span
            onClick={toggleMode}
            className="lg:text-[1.1vw] md:text-[2.1vw] cursor-pointer"
          >
            {darkMode ? <LuSunMedium /> : <IoMoonOutline />}
          </span>
          <Link
            to={"/dashboard/login"}
            className={`py-[0.6vw] text-[0.9vw] px-6 border font-semibold border-theme-purple text-theme-purple rounded-md`}
          >
            Sign in
          </Link>
          <Link
            className={`py-[0.6vw] text-[0.9vw] px-6 border bg-theme-purple font-semibold border-theme-purple text-white rounded-md`}
          >
            Try for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
