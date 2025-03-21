import React from "react";
import { Link } from "react-router-dom";

const StudioDropMobile = ({ dropdownOpen }) => {
  let studioDrop = [
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
      className={`w-full border-b border-gray-500 overflow-hidden transition-all duration-300 ${
        dropdownOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <div className="w-full h-full p-5 flex text-gray-300 flex-col gap-[1.4vw]">
        {studioDrop.map((link, idx) => {
          return (
            <Link key={idx} to={`/${link.split(" ").join("-").toLowerCase()}`}>
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StudioDropMobile;
