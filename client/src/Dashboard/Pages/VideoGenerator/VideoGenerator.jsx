import React, { useRef, useState } from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import TextScripter from "../TextToScript/Component/TextScripter";
import VideoScripter from "./Components/VideoScripter";

const VideoGenerator = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex h-screen bg-[#302f2f]">
        <DashboardLeft />
        <VideoScripter />
      </div>
    </>
  );
};

export default VideoGenerator;
