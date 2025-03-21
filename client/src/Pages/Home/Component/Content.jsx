import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Content = ({ darkMode }) => {
  return (
    <div
      className={`bg-colored font-roboto bg-center ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] mx-auto xs:py-[5vw] md:pb-[2vw] px-5 flex flex-col">
        <div className="w-full h-full grid md:gap-4 lg:gap-[6vw] xs:pb-[5vw] md:pb-[7vw] xs:grid-cols-1 lg:grid-cols-2">
          <div className="w-full">
            <img
              className="w-full object-cover perspective-distant rounded-2xl"
              src="/imgs/Content/image (1).png"
              alt=""
            />
          </div>
          <div className="py-5">
            <h2 className="lg:text-[3vw] md:text-[3.8vw] xs:text-[4.5vw] tracking-wide xs:leading-[6.8vw] lg:leading-[3.5vw] md:leading-[4vw] font-semibold">
              Create Videos in Minutes Not Hour
            </h2>
            <p className="font-semibold tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] xs:mt-[2vw]">
              In just seconds, our AI will generate stunning video content that
              you can easily copy, paste, and publish. Craft creative and clear
              messages in 25+ languages.
            </p>
            <div className="flex flex-col lg:gap-[1.4vw] xs:gap-[2.5vw] lg:my-[2.5vw] md:my-[3.5vw] sm:my-[4.3vw] xs:my-[5.5vw]">
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  Effortlessly create and test multiple video variations.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  Produce keyword-rich, plagiarism-free content.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  No matter your language, our AI helps you create compelling
                  videos with ease.
                </p>
              </div>
            </div>
            <Link className="md:py-[1.3vw] xs:py-[3vw] gap-1 rounded-md bg-theme-purple mr-auto text-white lg:text-[1.1vw] md:text-[1.7vw] sm:text-[2.1vw] xs:text-[2.5vw] tracking-wide xs:px-[3vw] md:px-[1.5vw]">
              Try For Free
            </Link>
          </div>
        </div>
        {/* <div className="w-full h-full xs:flex flex-col-reverse lg:grid md:gap-4 lg:gap-[6vw] xs:pb-16 md:pb-32 xs:grid-cols-1 lg:grid-cols-2">
          <div className="py-5">
            <h2 className="lg:text-[3vw] md:text-[3.8vw] xs:text-[4.5vw] tracking-wide xs:leading-[6.8vw] lg:leading-[3.5vw] md:leading-[4vw] font-semibold">
              Create Videos in Minutes Not Hour
            </h2>
            <p className="font-semibold tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] xs:mt-[2vw]">
              In just seconds, our AI will generate stunning video content that
              you can easily copy, paste, and publish. Craft creative and clear
              messages in 25+ languages.
            </p>
            <div className="flex flex-col lg:gap-[1.4vw] xs:gap-[2.5vw] lg:my-[2.5vw] md:my-[3.5vw] sm:my-[4.3vw] xs:my-[5.5vw]">
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  Effortlessly create and test multiple video variations.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  Produce keyword-rich, plagiarism-free content.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:p-[0.5vw] md:p-[1vw] sm:p-[1.5vw]  rounded-full bg-theme-purple/30">
                  <img
                    className="lg:w-[1.2vw] md:w-[2.2vw] sm:w-[3.2vw] xs:w-4.5vw] "
                    src="/imgs/Content/tick 1.png"
                    alt=""
                  />
                </div>
                <p className="xs:text-[2.5vw] lg:text-[1.2vw] md:text-[1.7vw] tracking-wide">
                  No matter your language, our AI helps you create compelling
                  videos with ease.
                </p>
              </div>
            </div>
            <Link className="md:py-4 xs:py-2.5 gap-1 rounded-md bg-theme-purple mr-auto text-white lg:text-[1.1vw] md:text-[1.7vw] sm:text-[2.1vw] xs:text-[2.5vw] tracking-wide xs:px-3 md:px-6">
              Try For Free
            </Link>
          </div>
          <div className="w-full">
            <img
              className="w-full object-cover rounded-2xl"
              src="/imgs/Content/image (2).png"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
