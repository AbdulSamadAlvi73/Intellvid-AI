import React from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import VideoScripter from "../VideoGenerator/Components/VideoScripter";
import ImageScripter from "./Components/ImageScripter";

const ImageGenerator = () => {
  return (
    <>
      <DashboardHeader />
      <div className=" min-h-screen bg-[#302f2f]">
        <DashboardLeft />
        <ImageScripter />
      </div>
    </>
  );
};

export default ImageGenerator;
