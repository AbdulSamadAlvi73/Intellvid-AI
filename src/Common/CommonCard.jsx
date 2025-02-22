import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CommonCard = ({
  darkMode,
  updateCommonCardContent,
  commonCardContent,
}) => {
  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <>
          <h3 className="lg:text-[4vw] md:text-[5vw] xs:text-[6vw] text-center font-bold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[4.5vw]">
            {commonCardContent.MHP1} <br />
            {commonCardContent.MHP2 ? (
              <span className="gradient-text">{commonCardContent.MHP2}</span>
            ) : (
              ""
            )}
          </h3>
          <div className="flex flex-col xs:gap-[5vw] md:gap-[3vw] pt-12 w-full">
            {commonCardContent.cards
              ? commonCardContent.cards.map((items) => {
                  return (
                    <div
                      key={items.cardHeading}
                      className={` grid grid-cols-2 ${
                        darkMode
                          ? "bg-slate-800 text-white"
                          : "bg-[#f5f5f5] text-black"
                      } rounded-2xl overflow-hidden gap-[2vw] w-full`}
                    >
                      <div className="flex flex-col :h-[28vw] p-[1.5vw] justify-between">
                        <div>
                          <p className="lg:text-[2.5vw] lg:leading-[3vw] md:leading-[4vw] md:text-[3vw] xs:leading-[4.5vw] sm:text-[3.5vw] xs:text-[4vw] font-bold">
                            {items.cardHeading}
                          </p>
                          <p className="md:text-[1.4vw] xs:text-[2.5vw] tracking-wide xs:my-4 md:my-7 text-gray-400">
                            {items.cardDisc}
                          </p>
                        </div>
                        <div className="my-5">
                          <Link className="md:px-8 xs:px-4 md:py-[1.4vw] xs:py-1.5 lg:text-[1.4vw] md:text-[1.8vw] xs:text-[2.5vw] bg-blue-500 text-white  rounded-full">
                            {items.cardBtn}
                          </Link>
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <img
                          className="w-full object-cover h-full"
                          src={items.cardImg}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </>
      </div>
    </div>
  );
};

export default CommonCard;
