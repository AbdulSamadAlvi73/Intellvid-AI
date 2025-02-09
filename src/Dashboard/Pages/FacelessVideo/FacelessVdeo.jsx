import React from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import FaceScripter from "./Components/FaceScripter";

const FacelessVdeo = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex h-screen bg-[#302f2f]">
        <DashboardLeft />
        <FaceScripter />
      </div>
    </>
  );
};

export default FacelessVdeo;
