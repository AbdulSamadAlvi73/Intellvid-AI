import React from "react";
import ScripterButton from "../../../Components/ScripterButton";

const FaceScripter = () => {
  return (
    <div className="lg:w-[50vw] pt-[3vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto lg:mx-auto h-fit ">
      <div className="p-8 m-8 rounded-xl bg-[#282828]">
        <textarea
          className="w-full h-[30vh] resize-none outline-none lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]"
          placeholder="Text to video"
          name=""
          id=""
        ></textarea>
        <div className="flex justify-between w-full items-center">
          <p className=" text-gray-500 lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]">
            0/320000
          </p>
          <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient">
            Generate a Video
          </button>
        </div>
      </div>
      <div className="px-8 grid md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-4 gap-4 place-items-center items-center">
        {[
          "Create AI Shorts",
          "Create AI Explainer",
          "Create Animated Film",
          "Create Scripted Video",
          "Educational Series",
          "Interactive Videos",
        ].map((items, idx) => {
          const isLastTwo = idx >= 4;
          return (
            <ScripterButton
              key={idx}
              idx={idx}
              width={"w-full"}
              isLastTwo={isLastTwo}
              text={items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaceScripter;
