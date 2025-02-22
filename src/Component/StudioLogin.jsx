import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useStudioLogin } from "../Context/IsOpenStudioLogin";
import { FaFacebook } from "react-icons/fa";

const StudioLogin = ({ darkMode }) => {
  const { isStudioLoginOpen, toggleStudioLogin } = useStudioLogin();
  return (
    <div className="w-full z-[9999] font-roboto fixed h-screen pointer-events-none flex items-center justify-center m-auto">
      <div
        className={`${
          isStudioLoginOpen ? "scale-100" : "scale-0"
        } flex items-center w-full h-full transition-all duration-500 justify-center pointer-events-auto overflow-hidden bg-black/30 backdrop-blur`}
      >
        <div
          className={`md:w-[45vw] rounded-[1.3vw] md:p-[1.3vw] xs:p-[2.5vw] ${
            darkMode ? "bg-slate-800 text-white" : "bg-white"
          }`}
        >
          <div className="w-full flex justify-end lg:text-[1.5vw] md:text-[1.9vw] xs:text-[2.5vw] ">
            <span
              onClick={() => toggleStudioLogin()}
              className="cursor-pointer"
            >
              <RxCross2 />
            </span>
          </div>
          <div className="flex w-full flex-col gap-[1.2vw] text-center">
            <h3 className="lg:text-[2.8vw] text-center md:text-[3.3vw] xs:text-[4vw] font-bold tracking-wide">
              Login to your account
            </h3>
            <Link
              className={`lg:py-[1vw] flex items-center w-full md:py-[1.5vw] sm:py-[1.9vw] xs:py-[2.4vw] rounded-md tracking-wide lg:text-[1.1vw] md:text-[1.6vw] xs:text-[2.5vw] lg:px-[1.7vw] md:px-[2.3vw] sm:px-[2.7vw] xs:px-[3.3vw] ${
                darkMode
                  ? "bg-slate-900 border-slate-900"
                  : "bg-[#f2f2f2] border-gray-200"
              } border`}
            >
              <span className="lg:text-[1.9vw] md:text-[2.9vw] xs:text-[3.8vw]">
                <FcGoogle />
              </span>
              <span className="w-full">Login With Google</span>
            </Link>
            <Link
              className={`lg:py-[1vw] flex items-center w-full md:py-[1.5vw] sm:py-[1.9vw] xs:py-[2.4vw] rounded-md tracking-wide lg:text-[1.1vw] md:text-[1.6vw] xs:text-[2.5vw] lg:px-[1.7vw] md:px-[2.3vw] sm:px-[2.7vw] xs:px-[3.3vw] ${
                darkMode
                  ? "bg-slate-900 border-slate-900"
                  : "bg-[#f2f2f2] border-gray-200"
              } border`}
            >
              <span className="lg:text-[1.9vw] text-blue-500 md:text-[2.9vw] xs:text-[3.8vw]">
                <FaFacebook />
              </span>
              <span className="w-full">Login With Google</span>
            </Link>
          </div>
          <div className="py-[1.3vw] w-full flex items-center relative">
            <div className="w-full h-0.5 bg-gray-600 w-ful"></div>
            <div className="lg:p-[1.3vw] md:p-[1.7vw] xs:p-[2.5vw] lg:text-[1.5vw] md:text-[1.9vw] xs:text-[2.6vw]">
              OR
            </div>
            <div className="w-full h-0.5 bg-gray-600 w-ful"></div>
          </div>
          <form
            action=""
            className="flex flex-col pb-[1.3vw] border-b border-gray-500 lg:gap-[1.5vw] md:text-[1.8vw] xs:text-[2.5vw]"
            method="post"
          >
            <input
              type="email"
              className="w-full lg:py-[1vw] lg:text-[1vw] placeholder:text-gray-400 md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
              placeholder="Enter your email"
              id=""
            />
            <div>
              <input
                type="submit"
                value={"Continue"}
                className="md:py-4 xs:py-2.5 gap-1 rounded-full bg-blue-500 mr-auto text-white lg:text-[1.1vw] md:text-[1.7vw] sm:text-[2.1vw] xs:text-[2.5vw] tracking-wide xs:px-3 md:px-6"
              />
            </div>
          </form>
          <div className="lg:py-[1.3vw] xs:py-[2.5vw]">
            <p>
              Have an account?
              <span className="text-blue-500 font-semibold"> Login {">"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioLogin;
