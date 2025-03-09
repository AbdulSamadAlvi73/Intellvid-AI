import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const PlatForm = ({
  allPlatform,
  platForm,
  setPlatform,
  setIsPlatformOpen,
  isPlatformOpen,
}) => {
  let handlePlatformSelect = (item) => {
    setPlatform(item);
  };
  return (
    <div
      className={`w-full ${
        isPlatformOpen ? "h-full" : "h-0"
      } flex items-end  bg-black/70 absolute bottom-0 left-0 z-10`}
    >
      <div
        className={`w-full ${
          isPlatformOpen ? "max-h-1/2 overflow-auto" : "max-h-0 overflow-hidden"
        } bg-[#282828] rounded-t-3xl allScrollBaarNone`}
      >
        <div className="w-full flex justify-between items-center p-8">
          <h3 className="lg:text-[1.1vw] md:text-[2.1vw] xs:text-[4.1vw] font-semibold">
            Time Duration
          </h3>
          <span
            onClick={() => setIsPlatformOpen(false)}
            className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4.5vw] cursor-pointer font-semibold"
          >
            <RxCross2 />
          </span>
        </div>
        <ul className="w-full flex flex-col">
          {allPlatform.map((item) => {
            let isSelected = platForm.includes(item);
            return (
              <li
                onClick={() => handlePlatformSelect(item)}
                className="lg:p-[1.1vw] md:p-[1.5vw] xs:p-[2vw] w-full cursor-pointer transition-all duration-300 hover:bg-white/20 border-b border-gray-600 lg:text-[1vw] md:text-[1.4vw] xs:text-[2.4vw]"
              >
                {isSelected ? (
                  <span className="flex w-full items-center justify-between">
                    {item} <MdOutlineDone />
                  </span>
                ) : (
                  item
                )}
              </li>
            );
          })}
        </ul>
        <div className="p-5  flex w-full gap-3 items-center">
          <button
            onClick={() => {
              setIsPlatformOpen(false);
              setPlatform("3 Minutes");
            }}
            className="py-[0.6vw] px-8 rounded-lg lg:text-[1vw] md:text-[2.3vw] xs:text-[3.6vw] border border-gray-200"
          >
            Cencil
          </button>
          <button
            onClick={() => setIsPlatformOpen(false)}
            className="py-[0.6vw] px-8 rounded-lg lg:text-[1vw] md:text-[2.3vw] xs:text-[3.6vw] videoGradient"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatForm;
