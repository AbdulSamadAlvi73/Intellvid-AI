import React from "react";
import { Link } from "react-router-dom";

const StudioDropDown = ({ darkMode, hovered, onMouseEnter, onMouseLeave }) => {
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
    "Voice Over Generator",
    "Slide Show Maker",
  ];

  return (
    <div
      style={{ boxShadow: "0 0 10px #d9d9d9" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-[35vw] absolute translate-x-[15vw] ${
        hovered
          ? "opacity-100 z-[9999] flex gap-[4vw] pointer-events-auto translate-y-[97%]"
          : "opacity-0 pointer-events-none translate-y-[120%]"
      } bottom-0 p-5 rounded-xl ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h3 className="text-[1.1vw] py-[1.5vw]">Intellvid Studio</h3>
        <div className="flex items-center gap-2">
          <div className="py-[0.5vw] px-[0.9vw] border border-theme-purple rounded-full">
            AI Login
          </div>
          <div className="py-[0.5vw] px-[0.9vw] border border-theme-purple bg-theme-purple rounded-full">
            AI Sign up
          </div>
        </div>
        <div className="mt-[1.3vw] flex flex-col">
          {intellvidLInks.map((link, idx) => {
            return (
              <Link
                className="text-[1vw] text-gray-400 py-[0.7vw] transition-all duration-300 hover:text-black"
                key={idx}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-[1.1vw] py-[1.5vw]">Templates</h3>
        <div className="mt-[1.3vw] flex flex-col">
          {intellvidLInks.map((link, idx) => {
            return (
              <Link
                className="text-[1vw] text-gray-400 py-[0.7vw] transition-all duration-300 hover:text-black"
                key={idx}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudioDropDown;
