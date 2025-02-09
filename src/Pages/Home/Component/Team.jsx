import React from "react";

const Team = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-slate-800 text-white" : "bg-[#f9f6fa] text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 mx-auto xs:py-5 md:pb-[8vw]">
        <h2 className="lg:text-[5vw] md:text-[5.8vw] sm:text-[6.2vw] xs:text-[6.5vw] text-center text-theme-purple font-semibold">
          7000000+
        </h2>
        <p className="lg:text-[2.5vw] md:text-[3vw] sm:text-[3.5vw] xs:text-[4vw] font-semibold text-center">
          Professionals & Tem Choose Intellivid AI
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-10 w-full justify-between">
          <img
            className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
            src="/imgs/Team/brand-1-1.png.png"
            alt=""
          />
          <img
            className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
            src="/imgs/Team/brand-1-2.png.png"
            alt=""
          />
          <img
            className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
            src="/imgs/Team/brand-1-3.png.png"
            alt=""
          />
          <img
            className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
            src="/imgs/Team/brand-1-4.png.png"
            alt=""
          />
          <img
            className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
            src="/imgs/Team/brand-1-5.png.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
