import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../../../Component/ScrollToTopButton";

const Hero = ({ darkMode, targetSection }) => {
  return (
    <div
      ref={targetSection}
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto pt-32 lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <ScrollToTopButton />
        <div className="flex flex-col relative items-center gap-2.5">
          <div className="md:py-3 xs:py-1.5 lg:px-[4vw] md:px-[4.5vw] sm:px-[5vw] xs:px-[5.5vw] lg:text-[1vw] md:text-[2vw] xs:text-[2.8vw] mx-auto rounded-full bg-theme-purple/50">
            <h2>👋 Artificial Intelligence Makes Content Fast & Easy</h2>
          </div>
          <h1 className="lg:text-[5.5vw]  md:text-[6vw] xs:text-[6.5vw] lg:leading-[5.5vw] md:leading-[6.5vw] xs:leading-[5.5vw] mt-3 font-semibold tracking-wide">
            10x faster way to write
          </h1>
          <div>
            <img
              className="absolute xs:hidden md:block -left-[10%] -top-[3%]"
              src="/imgs/Hero/baner-1-1.png.png"
              alt=""
            />
            <img
              className="absolute xs:hidden md:block -left-[10%] top-44"
              src="/imgs/Hero/baner-1-2.png.png"
              alt=""
            />
            <img
              className="absolute xs:hidden md:block -right-[10%] top-44"
              src="/imgs/Hero/baner-1-3.png.png"
              alt=""
            />
          </div>
          <h2 className="lg:text-[5.5vw] md:text-[6vw] xs:text-[6.5vw] leading-[5.5vw] font-semibold text-center tracking-wide">
            Easy <span className="text-theme-purple">Stories</span>
          </h2>
          <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide text-center xs:my-4 md:my-7 text-gray-400">
            Write unique & plagiarism-free content for blogs, articles, ads,
            products, websites & <br /> social media unlock the power of
            generative AI across every team.
          </p>
          <div className="flex xs:flex-col sm:flex-row items-center xs:gap-2.5 md:gap-4">
            <Link
              className={`lg:py-[1vw] md:py-[1.5vw] sm:py-[1.9vw] xs:py-[2.4vw] rounded-md tracking-wide lg:text-[1.1vw] md:text-[1.6vw] xs:text-[2.5vw] lg:px-[1.7vw] md:px-[2.3vw] sm:px-[2.7vw] xs:px-[3.3vw] ${
                darkMode
                  ? "bg-theme-purple border-theme-purple"
                  : "bg-black border-black"
              } border text-white`}
            >
              Start Writing Free
            </Link>
            <span className="text-gray-400">OR</span>
            <Link className="lg:py-[1vw] md:py-[1.5vw] sm:py-[1.9vw] xs:py-[2.4vw] flex items-center gap-1 rounded-md tracking-wide lg:text-[1.1vw] md:text-[1.6vw] xs:text-[2.5vw] px-6  border-theme-purple border text-theme-purple">
              <img src="/imgs/Hero/gogole-logo.png.png" alt="" />
              Sign Up With Google
            </Link>
          </div>
          <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide mt-3 text-gray-400">
            No credit card required
          </p>
        </div>
        <div className="w-full mt-20 relative flex items-center justify-center">
          <div className="videoGradient cursor-pointer w-[9vw] absolute rounded-full h-[9vw] flex items-center justify-center">
            <svg
              className="w-[4vw] h-[4vw]"
              viewBox="0 0 43 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 19.3038C44 21.6132 44 27.3867 40 29.6962L9.25 47.4497C5.25 49.7591 0.249998 46.8723 0.249998 42.2535L0.249999 6.74648C0.25 2.12768 5.25 -0.759077 9.25 1.55032L40 19.3038Z"
                fill="white"
              />
            </svg>
          </div>
          <img
            className="w-full rounded-xl object-cover"
            src="/imgs/Hero/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
