import React from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import ImageScripter from "../ImageGenerator/Components/ImageScripter";
import Profile from "./Components/Profile";

const ProfileInfo = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex min-h-screen bg-[#302f2f]">
        <DashboardLeft />
        <Profile />
      </div>
    </>
  );
};

export default ProfileInfo;
