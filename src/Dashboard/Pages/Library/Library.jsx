import React from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardLeft from "../../Components/DashboardLeft";
import Libraries from "./Components/Libraries";

const Library = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex h-screen bg-[#302f2f]">
        <DashboardLeft />
        <Libraries/>
      </div>
    </>
  );
};

export default Library;
