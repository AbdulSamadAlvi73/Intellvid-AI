import React, { useEffect, useRef, useState } from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import TextScripter from "./Component/TextScripter";

const TextToScript = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex h-screen bg-[#302f2f]">
        <DashboardLeft />
        <TextScripter />
      </div>
    </>
  );
};

export default TextToScript;
