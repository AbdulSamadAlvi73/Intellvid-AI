import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const IntellvidCommonHero = ({ darkMode, targetSection, heroContent }) => {
  console.log(heroContent);

  return (
    <div
      ref={targetSection}
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto pt-32 lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <h1 className="lg:text-[5.5vw] text-center md:text-[6vw] xs:text-[6.5vw] lg:leading-[5.5vw] md:leading-[6.5vw] xs:leading-[5.5vw] mt-3 font-bold tracking-wide">
          <span className="gradient-text">{heroContent.headingPart1}</span>{" "}
          {heroContent.headingPart2}
        </h1>
        <p className="md:text-[1.4vw] xs:text-[2.5vw] tracking-wide text-center xs:my-4 md:my-7 text-gray-400">
          {heroContent.disc}
        </p>
        <Link className="md:px-8 xs:px-4 md:py-[1.4vw] xs:py-1.5 lg:text-[1.4vw] md:text-[1.8vw] xs:text-[2.5vw] bg-blue-500 text-white  rounded-full">
          {heroContent.button}
        </Link>
        {heroContent.creditText ? (
          <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide mt-3 text-gray-400">
            {heroContent.creditText}
          </p>
        ) : (
          ""
        )}
        <div className="w-full mt-20 relative flex items-center justify-center">
          {heroContent.video ? (
            <video loop muted autoPlay className="w-full rounded-xl">
              <source src={heroContent.video} />
            </video>
          ) : (
            <img className="w-full rounded-xl" src={heroContent.img} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntellvidCommonHero;
