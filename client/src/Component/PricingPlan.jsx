import React, { useState } from "react";
import { Link } from "react-router-dom";
import Planning from "./Planning";

let pricingPlan = {
  monthly: [
    {
      type: "Starter",
      price: 19,
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
      planId: import.meta.env.VITE_STARTER_PLAN
    },
    {
      type: "Pro",
      price: 29,
      label: "Most Popular",
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
      planId:import.meta.env.VITE_PRO_PLAN
    },
    {
      type: "Enterprise",
      price: 39,
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
      planId: import.meta.env.VITE_ENTERPRISE_PLAN
    },
  ],
  yearly: [
    {
      type: "Starter",
      price: 45,
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
    },
    {
      type: "Pro",
      price: 85,
      label: "Most Popular",
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
    },
    {
      type: "Enterprise",
      price: 120,
      services: [
        "Access 70+ use-cases",
        "Generate 20k Characters",
        "90+ copywriting tools",
        "Build In Plagiarism Checker",
        "29+ Languages",
      ],
    },
  ],
};

const PricingPlan = ({ darkMode }) => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] mx-auto xs:py-8 md:pt-[5vw]">
        <h2 className="text-theme-purple xs:text-[4.5vw] md:text-[1.3vw] text-center">
          Pricing Plane
        </h2>
        <h3 className="lg:text-[3.4vw] md:text-[5vw] xs:text-[6vw] xs:py-2 md:py-[1.5vw] text-center font-semibold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[3.5vw]">
          Scrikingly Powerful, yet <br />{" "}
          <span className="Unbeliveably relative z-20">Unbeliveably</span>{" "}
          Affordable
        </h3>
        <div className="flex justify-center">
          <div className="md:my-[4vw] xs:my-[6vw] rounded-full overflow-hidden relative mx-auto bg-slate-800 flex items-center justify-baseline">
            <div
              className={`w-1/2 h-[85%] ${
                !isYearly
                  ? "md:translate-x-1.5 xs:translate-x-0.5"
                  : "md:translate-x-[95%] xs:translate-x-[98%]"
              } rounded-full bg-theme-purple transition-all duration-500 absolute`}
            ></div>
            <h3
              onClick={() => setIsYearly(false)}
              className="md:py-[1vw] sm:py-[1.5vw] xs:py-[2vw] m-1 md:px-12 xs:px-8 md:text-[1.1vw] xs:text-[2.5vw] relative cursor-pointer text-white"
            >
              Monthly
            </h3>
            <h3
              onClick={() => setIsYearly(true)}
              className="md:py-4 sm:py-2.5 xs:py-1.5 md:px-12 xs:px-8 md:text-[1.1vw] xs:text-[2.5vw] relative cursor-pointer text-white"
            >
              Yearly
            </h3>
          </div>
        </div>
        <div className="w-full h-full grid lg:place-items-end xs:grid-cols-1 xs:place-items-center lg:grid-cols-3 gap-5">
          {!isYearly
            ? pricingPlan.monthly.map((item, idx) => {
                return <Planning key={idx} darkMode={darkMode} item={item} />;
              })
            : pricingPlan.yearly.map((item, idx) => {
                return <Planning key={idx} darkMode={darkMode} item={item} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
