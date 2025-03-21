import React, { useState, useRef } from "react";
import ScripterButton from "../../../Components/ScripterButton";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import axios from 'axios'
import {toast} from 'react-toastify'
const TextScripter = () => {
  const [userScript, setuserScript] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      if (direction === "left") {
        containerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  let handleSendScript =async (e) => {
    e.preventDefault();
try {
  
  const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/text-to-script/generate`,{script:userScript},{withCredentials:true})
  // console.log(response.data.result);
  
   if(response.status===200){
setShowMessage(true)
     setAiMessage(response.data.result)
   }
   
   // if (userScript) {
   //   setShowMessage(true);


     //   setTimeout(() => {
   //     setAiMessage(
   //       "The ancient tree swayed gently in the breeze, its leaves rustling like whispers from another time. Beneath its towering branches, a small fox darted through the underbrush, its bright eyes glinting in the fading sunlight. The forest, alive with sounds of distant birds and the soft hum of insects, seemed to hold secrets known only to the earth and sky. Somewhere, deep within the woods, an old path wound through the thicket, leading to places forgotten by all but the wind."
   //     );
   //   }, 2000);
   // }

} catch (error) {
  toast.error(error.response.data.message,{position:"top-right"})
}
  };

  return (
    <div className="lg:w-[40vw] md:w-[93vw] sm:w-[90vw] xs:w-[100vw] h-full xs:ml-auto lg:mx-auto bg-[#282828] overflow-y-hidden">
      <div className="w-full h-full flex items-end">
        <div className="border-t border-gray-500 w-full">
          {showMessage ? (
            // <div className="flex my-5 py-8 px-5 bg-[#1b1b1c] items-start text-white xs:gap-0.5 md:gap-2.5">
            //   <div className="lg:w-[3.5vw] md:w-[4vw] sm:w-[6.5vw] xs:w-[8vw]">
            //     <img
            //       className="w-full h-full object-cover"
            //       src="/imgs/dashboard/image (3).png"
            //       alt=""
            //     />
            //   </div>
            //   <div className="flex w-full flex-col gap-0.5">
            //     <h3 className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[3.4vw] xs:leading-[3.4vw] lg:leading-[1.1vw]">
            //       Zain Abro
            //     </h3>
            //     <p className="text-gray-300 lg:text-[0.8vw] xs:text-[2.4vw]">
            //       {userScript}
            //     </p>
            //   </div>
            // </div>
            <></>
          ) : (
            <div className="mt-20"></div>
          )}
          {aiMessage ? (
            <div className="flex my-5 py-8 px-5 bg-[#1b1b1c] items-start text-white xs:gap-0.5 md:gap-2.5">
              <div className="lg:w-[3.5vw] flex items-center justify-center relative md:w-[4vw] sm:w-[6.5vw] xs:w-[8vw]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="6"
                    fill="url(#paint0_linear_418_1108)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_418_1108"
                      x1="20"
                      y1="0"
                      x2="20"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BD17BD" />
                      <stop offset="1" stop-color="#D05BFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="absolute w-[0.7vw] h-[2.5vw]"
                  viewBox="0 0 5 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="5" height="28" rx="2.5" fill="white" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-0.5">
                <h3 className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[3.4vw] xs:leading-[3.4vw] lg:leading-[1.1vw]">
                  Intellivid AI
                </h3>
                <p className="text-gray-300 lg:text-[0.8vw] xs:text-[2.4vw]">
                  {aiMessage}
                </p>
                <div className="flex justify-end py-3 ">
                  {/* <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient">
                    Regenerate
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="relative">
            <div
              onClick={() => handleScroll("left")}
              className="bg-[#1f1f1f] shadow-xl lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] lg:p-[1.1vw] md:p-[2.1vw] sm:p-[3.1vw] xs:p-[4.1vw] rounded-full text-white text-[1.2vw] absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            >
              <MdArrowBackIosNew />
            </div>
            <div
              id="button-container"
              ref={containerRef}
              className="w-full flex items-center gap-5 overflow-x-auto whitespace-nowrap scroll-smooth pl-12 pr-12" // Added padding to prevent overflow
            >
              {[
                "Create AI Explainer",
                "Create Animated Film",
                "Create Scripted Video",
                "Education Series",
                "Education Series",
                "Education Series",
                "Education Series",
              ].map((items, index) => (
                <ScripterButton key={index} flexNoWrap={true} text={items} />
              ))}
            </div>
            <div
              onClick={() => handleScroll("right")}
              className="bg-[#1f1f1f] shadow-xl lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] lg:p-[1.1vw] md:p-[2.1vw] sm:p-[3.1vw] xs:p-[4.1vw] rounded-full text-white text-[1.2vw] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            >
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="w-full p-5 bg-[#1f1f1f] mt-5">
            <form
              onSubmit={handleSendScript}
              className="w-full px-4 border-2 border-theme-purple flex items-center gap-2 rounded-lg text-white"
            >
              <svg
                className="lg:w-[1.1vw] md:w-[2.1vw] sm:w-[3.1vw] xs:w-[4.1vw]"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 0.209717C7 0.23055 5.65625 0.595134 4.46875 1.30347C3.26042 2.0118 2.30208 2.97013 1.59375 4.17847C0.885417 5.36597 0.520833 6.70972 0.5 8.20972C0.520833 9.70972 0.885417 11.0535 1.59375 12.241C2.30208 13.4493 3.26042 14.4076 4.46875 15.116C5.65625 15.8243 7 16.1889 8.5 16.2097C10 16.1889 11.3438 15.8243 12.5312 15.116C13.7396 14.4076 14.6979 13.4493 15.4062 12.241C16.1146 11.0535 16.4792 9.70972 16.5 8.20972C16.4792 6.70972 16.1146 5.36597 15.4062 4.17847C14.6979 2.97013 13.7396 2.0118 12.5312 1.30347C11.3438 0.595134 10 0.23055 8.5 0.209717ZM14.125 4.95972H8.34375L10.125 1.92847C10.9792 2.15763 11.75 2.53263 12.4375 3.05347C13.125 3.5743 13.6875 4.20972 14.125 4.95972ZM10.5312 8.20972L9.5 9.95972H7.5L6.46875 8.20972L7.5 6.45972H9.5L10.5312 8.20972ZM8.5 1.70972L5.625 6.70972L3.84375 3.67847C4.44792 3.05347 5.14583 2.5743 5.9375 2.24097C6.72917 1.8868 7.58333 1.70972 8.5 1.70972ZM2.875 4.95972L5.75 9.95972H2.25C2.08333 9.39722 2 8.81388 2 8.20972C2.02083 7.02222 2.3125 5.93888 2.875 4.95972ZM2.875 11.4597H8.65625L6.875 14.491C6.02083 14.2618 5.25 13.8868 4.5625 13.366C3.875 12.8451 3.3125 12.2097 2.875 11.4597ZM8.5 14.7097L11.375 9.70972L13.1562 12.741C12.5521 13.366 11.8542 13.8451 11.0625 14.1785C10.2708 14.5326 9.41667 14.7097 8.5 14.7097ZM14.0938 11.4597L11.25 6.45972H14.75C14.9167 7.02222 15 7.60555 15 8.20972C15 9.39722 14.6979 10.4806 14.0938 11.4597Z"
                  fill="#BCC3D7"
                />
              </svg>
              <input
                type="search"
                value={userScript}
                onChange={(e) => setuserScript(e.target.value)}
                className="md:py-3 xs:py-2 outline-none w-full"
                placeholder="Send a message..."
                name=""
                id=""
              />
              <svg
                className="lg:w-[1.1vw] md:w-[3.1vw] sm:w-[4.1vw] xs:w-[5.7vw]"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.15788 4.00172H8.34188V5.13772H5.15788V8.43372H4.00588V5.13772H0.821875V4.00172H4.00588V0.689716H5.15788V4.00172Z"
                  fill="#BCC3D7"
                />
              </svg>
              <svg
                className="lg:w-[1.1vw] md:w-[3.1vw] sm:w-[5.1vw] xs:w-[7.7vw]"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0.209717C10.0417 0.251384 9.79167 0.490967 9.75 0.928467V15.4597C9.79167 15.9181 10.0312 16.1681 10.4688 16.2097C10.6771 16.2097 10.8542 16.1368 11 15.991C11.1667 15.8451 11.25 15.6681 11.25 15.4597V0.928467C11.2083 0.490967 10.9583 0.251384 10.5 0.209717ZM7.5 3.20972C7.04167 3.25138 6.79167 3.49097 6.75 3.92847V12.4285C6.79167 12.9076 7.03125 13.1681 7.46875 13.2097C7.67708 13.2097 7.85417 13.1368 8 12.991C8.16667 12.8451 8.25 12.6681 8.25 12.4597V3.92847C8.20833 3.49097 7.95833 3.25138 7.5 3.20972ZM13.5 4.20972C13.0417 4.25138 12.7917 4.49097 12.75 4.92847V11.4285C12.7917 11.9076 13.0312 12.1681 13.4688 12.2097C13.6771 12.2097 13.8542 12.1368 14 11.991C14.1667 11.8451 14.25 11.6681 14.25 11.4597V4.92847C14.2083 4.49097 13.9583 4.25138 13.5 4.20972ZM16.5 2.20972C16.0417 2.25138 15.7917 2.49097 15.75 2.92847V13.4597C15.7917 13.9181 16.0312 14.1681 16.4688 14.2097C16.9479 14.1681 17.2083 13.9181 17.25 13.4597V2.92847C17.2083 2.49097 16.9583 2.25138 16.5 2.20972ZM4.5 6.20972C4.04167 6.25138 3.79167 6.49097 3.75 6.92847V9.45972C3.79167 9.91805 4.03125 10.1681 4.46875 10.2097C4.67708 10.2097 4.85417 10.1368 5 9.99097C5.16667 9.84513 5.25 9.66805 5.25 9.45972V6.92847C5.20833 6.49097 4.95833 6.25138 4.5 6.20972ZM1.5 7.20972C1.04167 7.25138 0.791667 7.49097 0.75 7.92847V8.45972C0.791667 8.91805 1.03125 9.16805 1.46875 9.20972C1.67708 9.20972 1.85417 9.1368 2 8.99097C2.16667 8.84513 2.25 8.66805 2.25 8.45972V7.92847C2.20833 7.49097 1.95833 7.25138 1.5 7.20972ZM19.5 7.20972C19.0417 7.25138 18.7917 7.49097 18.75 7.92847V8.45972C18.7917 8.91805 19.0417 9.16805 19.5 9.20972C19.9583 9.16805 20.2083 8.92847 20.25 8.49097V7.92847C20.2083 7.49097 19.9583 7.25138 19.5 7.20972Z"
                  fill="#BCC3D7"
                />
              </svg>
              <button>
                <svg
                  className="lg:w-[1.1vw] md:w-[3.1vw] sm:w-[5.1vw] xs:w-[7.7vw] cursor-pointer"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_418_1706)">
                    <path
                      d="M16.4688 8.17847C16.448 8.61597 16.2501 8.92847 15.8751 9.11597L1.90634 15.116C1.76051 15.1785 1.62509 15.2097 1.50009 15.2097C1.22926 15.2097 0.989672 15.1056 0.781339 14.8972C0.489672 14.5431 0.427172 14.1681 0.593839 13.7722L2.90634 9.14722L10.4688 8.20972L2.90634 7.27222L0.593839 2.64722C0.427172 2.23055 0.489672 1.85555 0.781339 1.52222C1.09384 1.20972 1.46884 1.1368 1.90634 1.30347L15.9063 7.30347C16.2813 7.49097 16.4688 7.78263 16.4688 8.17847Z"
                      fill="#BCC3D7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_418_1706">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.5 16.2097)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextScripter;
