import React, { useRef } from "react";

const ScripterButton = ({
  text,
  idx,
  isLastTwo,
  width,
  flexNoWrap,
  setIsGendBrandOpen,
}) => {
  return (
    <div
      onClick={() => setIsGendBrandOpen(true)}
      key={idx}
      className={`lg:py-[0.7vw] text-white ${width ? width : ""} ${
        isLastTwo ? "lg:col-span-2 " : ""
      } xs:py-[1.4vw] md:px-[1.2vw] lg:text-[0.8vw]  md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] text-center ${
        flexNoWrap ? "flex-none" : ""
      } rounded-md border border-gray-200 bg-white/20 outline-blue-600 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default ScripterButton;
