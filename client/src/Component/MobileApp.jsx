import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const MobileApp = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] font-roboto tracking-wide text-center xs:py-10 px-5 md:py-[4vw] mx-auto">
        <h2 className="lg:text-[3.5vw] md:text-[4vw] xs:text-[4.5vw] font-semibold gradient-text">
          Intellivid AI{" "}
          <span
            id=""
            className={`mobileApp relative z-20 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Mobile App
          </span>
        </h2>
        <div
          id="modileAppPoster"
          className="md:mt-[4vw] xs:mt-5 w-full rounded-xl grid lg:grid-cols-2 sm:gap-5 "
        >
          <div className="md:px-[2.5vw] sm:px-10 xs:px-5 xs:py-5 md:py-10 text-start">
            <h2 className="lg:text-[4.5vw] xs:text-[6.6vw] xs:leading-[7vw] md:text-[5.6vw] md:leading-[6vw] text-white text-start lg:leading-[4.8vw] font-bold tracking-wide">
              Get the mobile app
            </h2>
            <p className="md:text-[1.3vw] xs:text-[3vw] xs:my-3 lg:mt-[1.5vw] text-gray-300">
              Your creative workflow just got a whole lot more flexible
            </p>
            <div className="md:flex xs:flex sm:grid sm:grid-cols-2 flex-col gap-7 xs:mt-5 lg:mt-10">
              <div className="flex items-center gap-2.5 bg-white rounded-xl mr-auto text text-theme-purple px-6 py-3">
                <span className="md:text-[46px] xs:text-[6vw]">
                  <FaApple />
                </span>
                <div>
                  <p className="text-[14px] leading-2">Download on the</p>
                  <h3 className="xl:text-[1.4vw] lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] sm:text-[4vw]">
                    App Store
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl mr-auto text text-theme-purple px-6 py-3">
                <span className="md:text-[46px] xs:text-[6vw]">
                  <FaGooglePlay />
                </span>
                <div>
                  <p className="text-[14px] leading-2">Download on the</p>
                  <h3 className="xl:text-[1.4vw] lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] sm:text-[4vw]">
                    Play Store
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full"
              src="/imgs/Mobile/in tellivid Ai -01 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
