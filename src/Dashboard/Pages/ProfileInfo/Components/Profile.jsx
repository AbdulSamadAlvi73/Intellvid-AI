import React, { useState } from "react";
import BioData from "./BioData";
import Pricing from "./Pricing";

const Profile = () => {
  const [togglePricing, setTogglePricing] = useState(false);
  return (
    <div className="w-full text-white h-full lg:pt-[4vw] md:pt-[6vw] xs:pt-[15vw] flex items-center justify-center">
      <div className="lg:w-[45%] xs:w-[90%] h-[70%]">
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => setTogglePricing(false)}
            className={`lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold p-4 ${
              !togglePricing
                ? "text-theme-purple border-b  border-theme-purple"
                : "border-none"
            }`}
          >
            Profile Details
          </button>
          <button
            onClick={(e) => setTogglePricing(true)}
            className={`lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold p-4 ${
              togglePricing
                ? "text-theme-purple border-b  border-theme-purple"
                : "border-none"
            }`}
          >
            Pricing Plan
          </button>
        </div>
        {!togglePricing ? <BioData /> : <Pricing />}
      </div>
    </div>
  );
};

export default Profile;
