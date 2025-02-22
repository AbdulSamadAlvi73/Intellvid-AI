import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import InTellvidAiDrop from "./InTellvidAiDrop";
import StudioDropDown from "./StudioDropDown";
import { useStudioSignup } from "../Context/IsOpenStudioSignup";
import { useStudioLogin } from "../Context/IsOpenStudioLogin";

const Header = ({ darkMode, toggleMode }) => {
  const { isStudioSignupOpen, toggleStudioOpen } = useStudioSignup();
  const { isStudioLoginOpen, toggleStudioLogin } = useStudioLogin();
  console.log(isStudioLoginOpen);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 10);
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "Intellvid AI", to: "javascript:void(0)" },
    { name: "Intellvid Studio", to: "javascript:void(0)" },
    { name: "Help", to: "/help" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 z-50 w-full ${
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
        <div className="flex items-center relative gap-[1vw] text-[0.9vw]">
          {links.map((link, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-[1vw] active py-[0.5vw] relative"
                  : "px-[1vw] py-[0.5vw]"
              }
              key={idx}
              to={link.to}
            >
              {link.name === "Intellvid AI" ||
              link.name === "Intellvid Studio" ? (
                <span
                  onMouseEnter={() =>
                    handleMouseEnter(
                      link.name === "Intellvid AI" ? "intellvid" : "studio"
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-0.5"
                >
                  {link.name} <RiArrowDropDownLine />
                </span>
              ) : (
                <span className="capitalize">{link.name}</span>
              )}
            </NavLink>
          ))}
          <InTellvidAiDrop
            hovered={activeDropdown === "intellvid"}
            darkMode={darkMode}
            toggleStudioOpen={toggleStudioOpen}
            toggleStudioLogin={toggleStudioLogin}
            onMouseEnter={() => handleMouseEnter("intellvid")}
            onMouseLeave={handleMouseLeave}
          />
          <StudioDropDown
            hovered={activeDropdown === "studio"}
            darkMode={darkMode}
            onMouseEnter={() => handleMouseEnter("studio")}
            onMouseLeave={handleMouseLeave}
          />
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
