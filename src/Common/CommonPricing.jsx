import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const CommonPricing = ({ darkMode }) => {
  const increments = [60, 180, 300, 600, 900, 1200]; // 60s, 180s, 5min (300s), 10min (600s)

  let pricingData = {
    monthly: [
      {
        title: "Free",
        price: 0,
        btn: "Try for free",
        addOns: null,
        services: [
          "10 mms wko Al generation",
          "no, iStock",
          "no, Generative credits",
          "10 GB storage",
          "4 exports/wk with invideo logo",
          "2.5M+ standard media",
          "voice clones",
        ],
      },
      {
        title: "Plus",
        price: 25,
        btn: "Get Plus",
        addOns: {
          credits: 0,
          boosts: 50,
          iStocks: 80,
        },
        services: [
          "50 mins/mo of AI generation",
          "80/mo iStock",
          `0s Generative credits`,
          "100 GB storage",
          "Unlimited exports",
          "2 voice clones",
          "Upto 1 user",
        ],
      },
      {
        title: "Max",
        price: 80,
        btn: "Get Max",
        addOns: {
          credits: "180s",
          boosts: 200,
          iStocks: 320,
        },
        services: [
          "200 mins/mo of AI generation",
          "320/mo iStock",
          "180s Generative credits",
          "400 GB storage",
          "Unlimited exports",
          "5 voice clones",
          "Upto 1 user",
        ],
      },
      {
        lable: "Best Value",
        title: "Generative",
        price: 120,
        btn: "Get Generative",
        addOns: {
          credits: "15m",
          boosts: 50,
          iStocks: 80,
        },
        services: [
          "50 mins/mo of AI generation",
          "80/mo iStock",
          `0s Generative credits`,
          "100 GB storage",
          "Unlimited exports",
          "2 voice clones",
          "Upto 1 user",
        ],
      },
    ],
    yearly: [
      {
        title: "Free",
        price: 0,
        btn: "Try for free",
        addOns: null,
        services: [
          "10 mms wko Al generation",
          "no, iStock",
          "no, Generative credits",
          "10 GB storage",
          "4 exports/wk with invideo logo",
          "2.5M+ standard media",
          "voice clones",
        ],
      },
      {
        title: "Plus",
        price: 20,
        btn: "Get Plus",
        addOns: {
          credits: 0,
          boosts: 50,
          iStocks: 80,
        },
        services: [
          "50 mins/mo of AI generation",
          "80/mo iStock",
          `0s Generative credits`,
          "100 GB storage",
          "Unlimited exports",
          "2 voice clones",
          "Upto 1 user",
        ],
      },
      {
        title: "Max",
        price: 64,
        btn: "Get Max",
        addOns: {
          credits: "180s",
          boosts: 200,
          iStocks: 320,
        },
        services: [
          "200 mins/mo of AI generation",
          "320/mo iStock",
          "180s Generative credits",
          "400 GB storage",
          "Unlimited exports",
          "5 voice clones",
          "Upto 1 user",
        ],
      },
      {
        lable: "Best Value",
        title: "Generative",
        price: 96,
        btn: "Get Generative",
        addOns: {
          credits: "15m",
          boosts: 50,
          iStocks: 80,
        },
        services: [
          "50 mins/mo of AI generation",
          "80/mo iStock",
          `0s Generative credits`,
          "100 GB storage",
          "Unlimited exports",
          "2 voice clones",
          "Upto 1 user",
        ],
      },
    ],
  };
  console.log(pricingData);

  const [isYearly, setIsYearly] = useState(false);

  // const increaseTime = () => {
  //   setSeconds((prevSeconds) => prevSeconds + increments[0]); // Adds 60 seconds first
  //   increments.push(increments.shift()); // Cycle through the increments array
  // };

  // // Function to decrease time
  // const decreaseTime = () => {
  //   setSeconds((prevSeconds) => prevSeconds - increments[0]); // Subtract 60 seconds first
  //   increments.unshift(increments.pop()); // Reverse the order of increments
  // };
  return (
    <div
      className={` ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto pt-[5vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <h1 className="lg:text-[5.5vw] text-center md:text-[6vw] xs:text-[6.5vw] lg:leading-[5.5vw] md:leading-[6.5vw] xs:leading-[5.5vw] mt-3 font-bold tracking-wide">
          The right plans, <br />
          <span className="gradient-text">for the right price</span>
        </h1>
        <div className="flex justify-center">
          <div
            className={`md:my-[3vw] xs:my-8 rounded-full relative text-[17px] mx-auto ${
              darkMode ? "bg-slate-800 text-white" : "bg-[#f2f2f2] text-black"
            } text-black flex items-center justify-baseline`}
          >
            <div
              className={`w-1/2 h-full ${
                !isYearly
                  ? "md:translate-x-[0.08vw] xs:translate-x-0.5"
                  : "translate-x-[99%]"
              } z-10 transition-all duration-500 flex items-center justify-center absolute`}
            >
              <div
                className={`w-[96%] h-[85%] overflow-hidden flex items-center justify-center  z-10 rounded-full  ${
                  darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
                } absolute`}
              >
                <div
                  className={`w-[97%] h-[90%] z-10 rounded-full ${
                    darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
                  } absolute`}
                ></div>
                <div
                  className={`w-full h-full  ${
                    isYearly
                      ? "rotatingAnim block"
                      : `hidden ${
                          darkMode
                            ? "bg-slate-900 text-white"
                            : "bg-white text-black"
                        }`
                  }
                  } transition-all duration-500 absolute`}
                ></div>
              </div>
            </div>
            <h3
              onClick={() => setIsYearly(false)}
              className="md:py-[0.7vw] sm:py-2.5 z-20 font-semibold xs:py-1.5 m-1 md:px-12 xs:px-8 md:text-[1.1vw] xs:text-[2.5vw] relative cursor-pointer"
            >
              Monthly
            </h3>
            <h3
              onClick={() => setIsYearly(true)}
              className="md:py-[0.7vw] overflow-hidden font-semibold relative z-20 sm:py-2.5 xs:py-1.5 md:px-12 xs:px-8 md:text-[1.1vw] xs:text-[2.5vw] cursor-pointer"
            >
              Yearly <span className="pricingGardient">20% off</span>
            </h3>
          </div>
        </div>
        <div className="w-full py-10 grid md:gap-[1.2vw] xs:gap-[5vw] place-items-center md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4">
          {!isYearly
            ? pricingData.monthly
              ? pricingData.monthly.map((item, idx) => {
                  return (
                    <div
                      className={`md:rounded-2xl xs:rounded-lg md:w-full xs:w-[50%] xs:border md:border-2 overflow-hidden ${
                        darkMode
                          ? "border-slate-800"
                          : `${
                              item.lable
                                ? "border-theme-purple"
                                : "border-[#ededed]"
                            } `
                      } flex flex-col h-full`}
                    >
                      <div className="flex flex-col relative gap-[1.2vw] p-[1.2vw] w-full h-full justify-between">
                        {item.lable ? (
                          <div className="absolute bg-theme-purple md:top-[1.7vw] md:-right-[6vw] xs:top-[5vw] xs:-right-[15vw] lg:text-[1.2vw] md:text-[1.6vw] xs:text-[2.4vw] font-semibold text-white w-full text-center rotate-45 py-[0.3vw]">
                            {item.lable}
                          </div>
                        ) : (
                          ""
                        )}
                        <div>
                          <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                            {item.title}
                          </h3>
                          <div className="flex items-end gap-0.5">
                            <span className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                              {item.price}/
                            </span>
                            <span className="lg:text-[0.9vw] md:text-[1.4vw] xs:text-[2.1vw] text-gray-500 font-semibold">
                              month
                            </span>
                          </div>
                        </div>
                        {item.addOns ? (
                          <div
                            className={`my-[1vw] md:rounded-2xl xs:rounded-md xs:p-[1.7vw] md:p-[0.7vw] ${
                              darkMode
                                ? "bg-slate-800 text-white"
                                : "bg-[#ededed] text-black"
                            }`}
                          >
                            <h3 className="md:text-[1vw] xs:text-[2vw] tracking-wide xs:leading-[2.8vw] md:leading-[0.5vw] md:my-3">
                              Add ONS
                            </h3>
                            <h3 className="md:text-[0.9vw] xs:text-[2vw] tracking-wide md:my-3 text-gray-400">
                              1x Boost, 0s Generative
                            </h3>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="w-full flex flex-col text-center">
                          <Link
                            className={`md:px-8 xs:px-4 md:py-[0.8vw] xs:py-[0.9vw] lg:text-[1.1vw] md:text-[1.8vw] xs:text-[2vw] ${
                              idx === 0
                                ? `${
                                    darkMode
                                      ? "bg-slate-900"
                                      : "bg-black text-white"
                                  }`
                                : "bg-blue-500"
                            } text-white  rounded-full`}
                          >
                            {item.btn}
                          </Link>
                        </div>
                      </div>
                      <div
                        className={` p-[1.2vw] ${
                          darkMode
                            ? "bg-slate-800 text-white"
                            : "bg-[#ededed] text-black"
                        }`}
                      >
                        <ul className="w-full flex flex-col gap-[1.2vw]">
                          {item.services.map((list) => {
                            return (
                              <li
                                key={list}
                                className={`flex md:text-[0.9vw] sm:text-[1.5vw] xs:text-[2.1vw] ${
                                  list.startsWith("no") ? "text-gray-400" : ""
                                } items-center gap-[1.1vw]`}
                              >
                                {list.startsWith("no") ? (
                                  <RxCross2 />
                                ) : (
                                  <MdDone />
                                )}

                                {list.startsWith("no") ? list.slice(4) : list}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })
              : ""
            : pricingData.yearly
            ? pricingData.yearly.map((item, idx) => {
                return (
                  <div
                    className={`md:rounded-2xl md:w-full xs:w-[50%] xs:rounded-lg xs:border md:border-2 overflow-hidden ${
                      darkMode
                        ? "border-slate-800"
                        : `${
                            item.lable
                              ? "border-theme-purple"
                              : "border-[#ededed]"
                          } `
                    } flex flex-col h-full`}
                  >
                    <div className="flex flex-col relative gap-[1.2vw] p-[1.2vw] w-full h-full justify-between">
                      {item.lable ? (
                        <div className="absolute bg-theme-purple md:top-[1.7vw] md:-right-[6vw] xs:top-[5vw] xs:-right-[15vw] lg:text-[1.2vw] md:text-[1.6vw] xs:text-[2.4vw] font-semibold text-white w-full text-center rotate-45 py-[0.3vw]">
                          {item.lable}
                        </div>
                      ) : (
                        ""
                      )}
                      <div>
                        <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                          {item.title}
                        </h3>
                        <div className="flex items-end gap-0.5">
                          <span className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                            {item.price}/
                          </span>
                          <span className="lg:text-[0.9vw] md:text-[1.4vw] xs:text-[2.1vw] text-gray-500 font-semibold">
                            month
                          </span>
                        </div>
                      </div>
                      {item.addOns ? (
                        <div
                          className={`my-[1vw] md:rounded-2xl xs:rounded-md xs:p-[1.7vw] md:p-[0.7vw] ${
                            darkMode
                              ? "bg-slate-800 text-white"
                              : "bg-[#ededed] text-black"
                          }`}
                        >
                          <h3 className="md:text-[1vw] xs:text-[2vw] tracking-wide xs:leading-[2.8vw] md:leading-[0.5vw] md:my-3 ">
                            Add ONS
                          </h3>
                          <h3 className="md:text-[0.9vw] xs:text-[2vw] tracking-wide md:my-3 text-gray-400">
                            1x Boost, 0s Generative
                          </h3>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="w-full flex flex-col text-center">
                        <Link
                          className={`md:px-8 xs:px-4 md:py-[0.8vw] xs:py-[0.9vw] lg:text-[1.1vw] md:text-[1.8vw] xs:text-[2vw] ${
                            idx === 0
                              ? `${
                                  darkMode
                                    ? "bg-slate-900"
                                    : "bg-black text-white"
                                }`
                              : "bg-blue-500"
                          } text-white  rounded-full`}
                        >
                          {item.btn}
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`w-full p-[1.2vw] ${
                        darkMode
                          ? "bg-slate-800 text-white"
                          : "bg-[#ededed] text-black"
                      }`}
                    >
                      <ul className="w-full flex flex-col gap-[1.2vw]">
                        {item.services.map((list) => {
                          return (
                            <li
                              key={list}
                              className={`flex md:text-[0.9vw] sm:text-[1.5vw] xs:text-[2.1vw] ${
                                list.startsWith("no") ? "text-gray-400" : ""
                              } items-center gap-[1.1vw]`}
                            >
                              {list.startsWith("no") ? (
                                <RxCross2 />
                              ) : (
                                <MdDone />
                              )}

                              {list.startsWith("no") ? list.slice(4) : list}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default CommonPricing;
