import React from "react";
import { Link } from "react-router-dom";

const Planning = ({ darkMode, item }) => {
  return (
    <div
      className={`lg:w-full ${
        item.label ? "border overflow-hidden border-theme-purple" : ""
      }  rounded-xl ${
        darkMode ? "bg-slate-800 text-white" : "bg-[#efefef] text-black"
      }`}
    >
      <div className="text-center bg-theme-purple">
        {item.label ? (
          <h2 className="md:py-4 xs:py-1.5 md:text-[1.5vw] xs:text-[4.5vw] sm:text-[2.9vw] font-semibold uppercase text-white">
            {item.label}
          </h2>
        ) : (
          ""
        )}
      </div>
      <div className="md:py-20 xs:py-8 xs:px-5 md:px-10 flex flex-col gap-2 w-full">
        <h2 className=" md:text-[1.5vw] xs:text-[4.5vw] sm:text-[2.9vw] font-bold">
          {item.type}
        </h2>
        <div className="flex items-end xs:pb-5 md:pb-10 border-b-2 border-gray-300">
          <price className="lg:text-[4vw] md:text-[5vw] xs:text-[7.5vw] sm:text-[6vw] text-theme-purple font-semibold">
            ${item.price}/
          </price>
          <span className="md:text-[1.3vw] xs:text-[4.5vw] sm:text-[2.7vw] font-bold">
            Monthly
          </span>
        </div>
        <div className="md:py-5 xs:py-3 flex flex-col">
          {item.services.map((service) => {
            return (
              <div className="flex items-center gap-3">
                <img
                  className="md:w-[24px] md:h-[24px] xs:w-[15px] xs:h-[15px]"
                  src="/imgs/Content/tick 1.png"
                  alt=""
                />
                <p className="xs:text-[3.5vw] md:text-[19px] xs:py-1.5 md:py-3 font-semibold">
                  {service}
                </p>
              </div>
            );
          })}
        </div>
        <Link className="md:py-3 xs:py-1.5 w-full text-center xs:text-[3.5vw] md:text-[19px] text-white rounded-md videoGradient">
          Start Free Trial Today
        </Link>
      </div>
    </div>
  );
};

export default Planning;
