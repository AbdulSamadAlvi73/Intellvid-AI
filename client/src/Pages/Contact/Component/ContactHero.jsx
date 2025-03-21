import React from "react";

const ContactHero = ({ darkMode, targetSection }) => {
  return (
    <div
      ref={targetSection}
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] relative px-5 font-roboto xs:pt-24 md:pt-32 mx-auto w-full flex flex-col items-center justify-center xs:pb-0 md:pb-32">
        <h1 className="lg:text-[5vw] md:text-[6vw] xs:text-[7vw] leading-[5.5vw] my-3 font-semibold tracking-wide">
          Contact
        </h1>
        <div>
          <img
            className="absolute xs:hidden md:block left-[20%] top-[30%]"
            src="/imgs/Hero/baner-1-1.png.png"
            alt=""
          />
          <img
            className="absolute xs:hidden md:block left-[5%] top-44"
            src="/imgs/Hero/baner-1-2.png.png"
            alt=""
          />
          <img
            className="absolute xs:hidden md:block right-[5%] top-32"
            src="/imgs/Hero/baner-1-3.png.png"
            alt=""
          />
        </div>
        <h3 className="md:text-[1.1vw] xs:text-[2.5vw] text-gray-500 font-bold ">
          <span>Home</span> / <span>Contact</span>
        </h3>
      </div>
    </div>
  );
};

export default ContactHero;
