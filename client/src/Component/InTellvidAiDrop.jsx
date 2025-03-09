import React from "react";
import { Link } from "react-router-dom";

const InTellvidAiDrop = ({
  darkMode,
  hovered,
  onMouseEnter,
  onMouseLeave,
  toggleStudioOpen,
  toggleStudioLogin,
}) => {
  let intellvidLInks = [
    "AI Video Generator",
    "AI Image Generator",
    "Animation Maker",
    "Link to Video",
    "Movie Maker",
    "AI Video Meme Maker",
    "Tiktok Video Maker",
    "AI Clip Generator",
    "Youtube Shorts Generator",
    "AI Subtitle Generator",
    "Slide Show Maker",
  ];
  console.log();

  return (
    <div
      style={{ boxShadow: "0 0 10px #d9d9d9" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-[20vw] absolute overflow-y-auto translate-x-[6vw] ${
        hovered
          ? "opacity-100 z-[9999] pointer-events-auto translate-y-[97%]"
          : "opacity-0 z-10 pointer-events-none translate-y-[120%]"
      } bottom-0 p-5 rounded-xl ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-[1.1vw] py-[1.5vw]">Intellvid AI</h3>
      <div className="flex items-center gap-2">
        <div
          onClick={() => toggleStudioLogin()}
          className="py-[0.5vw] px-[0.9vw] border cursor-pointer border-theme-purple rounded-full"
        >
          AI Login
        </div>
        <div
          onClick={() => toggleStudioOpen()}
          className="py-[0.5vw] px-[0.9vw] border border-theme-purple bg-theme-purple rounded-full"
        >
          AI Sign up
        </div>
      </div>
      <div className=" flex mt-[1.3vw] flex-col">
        {intellvidLInks.map((link, idx) => {
          return (
            <Link
              to={`/${link.split(" ").join("-").toLowerCase()}`}
              className="text-[1vw] text-gray-400 py-[0.5vw] transition-all duration-300 hover:text-black"
              key={idx}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InTellvidAiDrop;
