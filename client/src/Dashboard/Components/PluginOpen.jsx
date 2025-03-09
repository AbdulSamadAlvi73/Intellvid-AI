import React from "react";
import { RxCross2 } from "react-icons/rx";

const PluginOpen = ({ isPluginOpen, setisPluginOpen }) => {
  return (
    <div
      className={`w-full transition-all overflow-hidden duration-500 ${
        isPluginOpen ? "max-h-[100vh] h-full" : "max-h-0"
      } bg-[#282828] absolute`}
    >
      <div className="w-full p-3 flex items-center justify-between">
        <h4 className="lg:text-[1.2vw] cursor-pointer lg:block xs:hidden py-2 md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">
          Plugins
        </h4>
        <span
          onClick={() => setisPluginOpen(false)}
          className="text-[1.5vw] cursor-pointer font-semibold"
        >
          <RxCross2 />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1 py-4 border-y border-gray-400">
          <img
            className="w-[2vw]"
            src="/imgs/dashboard/plugins/Speech To Text.png"
            alt=""
          />
          <div>
            <h4 className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]">
              Text to script
            </h4>
            <h3 className="lg:text-[0.8vw] md:text-[1.8vw] xs:text-[2.8vw]">
              create 10 secs Video Clip
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-1 py-4 border-b border-gray-400">
          <img
            className="w-[2vw]"
            src="/imgs/dashboard/plugins/Broken Image.png"
            alt=""
          />
          <div>
            <h4 className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]">
              Text to script
            </h4>
            <h3 className="lg:text-[0.8vw] md:text-[1.8vw] xs:text-[2.8vw]">
              create 10 secs Video Clip
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluginOpen;
