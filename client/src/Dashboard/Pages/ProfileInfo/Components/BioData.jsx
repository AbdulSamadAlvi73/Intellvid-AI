import React, { useState } from "react";
import DataForm from "./DataForm";
import UpdatePassword from "./UpdatePassword";

const BioData = () => {
  const [toggleForms, settoggleForms] = useState("profile");
  return (
    <div className="w-full h-full my-5 p-5 bg-[#282828] rounded-xl">
      <div className="mt-5 flex items-center w-full border-b border-gray-400/20 gap-1.5">
        <button
          onClick={() => settoggleForms("profile")}
          className={`lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold p-4  ${
            toggleForms === "profile"
              ? "text-theme-purple border-b  border-theme-purple"
              : "border-none"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => settoggleForms("password")}
          className={`lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold p-4  ${
            toggleForms === "password"
              ? "text-theme-purple border-b  border-theme-purple"
              : "border-none"
          } `}
        >
          Password
        </button>
      </div>
      {toggleForms === "profile" ? <DataForm /> : <UpdatePassword />}
    </div>
  );
};

export default BioData;
