import React from "react";
import { RxCross2 } from "react-icons/rx";

const About = ({ setIsAboutOpen, isAboutOpen }) => {
  return (
    <div
      className={`w-full ${
        isAboutOpen ? "h-full" : "h-0"
      } flex items-end  bg-black/70 absolute bottom-0 left-0 z-10`}
    >
      <div
        className={`w-full ${
          isAboutOpen ? "max-h-1/2 overflow-auto" : "max-h-0 overflow-hidden"
        } bg-[#282828] rounded-t-3xl allScrollBaarNone`}
      >
        <div className="w-full flex justify-between items-center p-8">
          <h3 className="lg:text-[1.1vw] md:text-[2.1vw] xs:text-[4.1vw] font-semibold">
            About
          </h3>
          <span
            onClick={() => setIsAboutOpen(false)}
            className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4.5vw] cursor-pointer font-semibold"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="w-full p-5">
          <h4>
            Welcome to Invillid – your ultimate AI-powered video creation
            platform! At Invillid, we simplify video creation for everyone, from
            content creators to businesses. With just a few clicks, our
            intuitive AI transforms your ideas into professional-quality videos.
            Why Choose Invillid?
          </h4>
          <ul className="p-5 flex flex-col list-disc">
            <li>
              Simple: No technical skills needed – just upload your ideas.
            </li>
            <li>
              Customizable: Add text, images, music, and more to match your
              style.
            </li>
            <li>Fast: Create stunning videos in minutes.</li>
            <li>Innovative: Powered by cutting-edge AI technology</li>
          </ul>
          <p>
            Join Invillid and turn your ideas into captivating videos
            effortlessly!{" "}
          </p>
        </div>
        <div className="p-5  flex w-full gap-3 items-center">
          <button
            onClick={() => {
              setIsAboutOpen(false);
            }}
            className="py-[0.6vw] px-8 rounded-lg lg:text-[1vw] md:text-[2.3vw] xs:text-[3.6vw] border border-gray-200"
          >
            Cencil
          </button>
          <button
            onClick={() => setIsAboutOpen(false)}
            className="py-[0.6vw] px-8 rounded-lg lg:text-[1vw] md:text-[2.3vw] xs:text-[3.6vw] videoGradient"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
