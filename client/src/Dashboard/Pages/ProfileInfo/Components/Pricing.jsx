import React, { useState } from "react";
import Planning from "../../../../Component/Planning";
import ManualPlanning from "./ManualPlanning";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
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
        planId : import.meta.env.VITE_STARTER_PLAN 
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
        planId : import.meta.env.VITE_PRO_PLAN ,
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
        planId : import.meta.env.VITE__PLAN_ENTERPRISE ,
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

  return (
    <div className="flex flex-col md:w-[120%] bg-[#282828] mt-4 rounded-xl">
      <div className="flex justify-center">
        <div className="md:my-[3vw] xs:my-6 rounded-full overflow-hidden relative mx-auto bg-slate-800 flex items-center justify-baseline">
          <div
            className={`w-1/2 h-[85%] ${
              !isYearly
                ? "md:translate-x-1.5 xs:translate-x-0.5"
                : "md:translate-x-[95%] xs:translate-x-[98%]"
            } rounded-full bg-theme-purple transition-all duration-500 absolute`}
          ></div>
          <h3
            onClick={() => setIsYearly(false)}
            className="lg:py-[0.7vw] md:py-[1vw] xs:py-[1.5vw] m-1 md:px-12 xs:px-8 lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] relative cursor-pointer text-white"
          >
            Monthly
          </h3>
          <h3
            onClick={() => setIsYearly(true)}
            className="lg:py-[0.7vw] md:py-[1vw] xs:py-[1.5vw] md:px-12 xs:px-8 lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] relative cursor-pointer text-white"
          >
            Yearly
          </h3>
        </div>
      </div>
      <div className="w-full h-full grid lg:place-items-end xs:grid-cols-1 xs:place-items-center lg:grid-cols-3 gap-5">
        {!isYearly
          ? pricingPlan.monthly.map((item, idx) => {
              return <ManualPlanning key={idx} item={item} py={5} px={4} />;
            })
          : pricingPlan.yearly.map((item, idx) => {
              return <ManualPlanning key={idx} item={item} />;
            })}
      </div>
    </div>
  );
};

export default Pricing;
