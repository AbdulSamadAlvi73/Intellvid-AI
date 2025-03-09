import React from "react";
import { RxCross2 } from "react-icons/rx";

const LibraryOpen = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <div
      className={`w-full transition-all overflow-hidden duration-500 ${
        isLibraryOpen ? "max-h-[100vh] h-full" : "max-h-0"
      } bg-[#282828] absolute`}
    >
      <div className="w-full p-3 flex items-center justify-between">
        <h4 className="lg:text-[1.2vw] cursor-pointer lg:block xs:hidden py-2 md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">
          Library
        </h4>
        <span
          onClick={() => setIsLibraryOpen(false)}
          className="text-[1.5vw] cursor-pointer font-semibold"
        >
          <RxCross2 />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 px-3">
          <p className="lg:text-[0.7vw] md:text-[1.5vw] xs:text-[2vw]">
            Thu, 2 Jan 2025
          </p>
          <div className="p-4 bg-white/30 border border-gray-400 rounded-md">
            <p className="lg:text-[1vw] cursor-pointer   md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">
              Generating.... v30 .created at: 0045
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryOpen;
