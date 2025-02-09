import React from "react";

const Libraries = () => {
  return (
    <div className="lg:w-[84vw] lg:pt-[4vw] md:pt-[6vw] xs:pt-[15vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto">
      <div className="w-full p-5 border-b flex justify-end  border-gray-300">
        <div className="flex items-center gap-3">
          <div
            className={`lg:py-[0.7vw] text-white xs:py-[1.4vw] md:px-[1.2vw] lg:text-[0.8vw]  md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] text-center rounded-md border border-gray-200 bg-white/20 outline-blue-600 cursor-pointer`}
          >
            Create New Vidoe
          </div>
          <div
            className={`lg:py-[0.7vw] flex items-center gap-1.5 text-white xs:py-[1.4vw] md:px-[1.2vw] lg:text-[0.8vw]  md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] text-center rounded-md border border-gray-200 bg-white/20 outline-blue-600 cursor-pointer`}
          >
            <span>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99966 2.13995C10.4892 2.13995 10.886 1.74311 10.886 1.25357C10.886 0.764035 10.4892 0.367188 9.99966 0.367188C9.51013 0.367188 9.11328 0.764035 9.11328 1.25357C9.11328 1.74311 9.51013 2.13995 9.99966 2.13995Z"
                  fill="white"
                />
                <path
                  d="M19.1129 4.68585C19.6025 4.68585 19.9993 4.289 19.9993 3.79947C19.9993 3.30993 19.6025 2.91309 19.1129 2.91309C18.6234 2.91309 18.2266 3.30993 18.2266 3.79947C18.2266 4.289 18.6234 4.68585 19.1129 4.68585Z"
                  fill="white"
                />
                <path
                  d="M0.886383 4.68585C1.37592 4.68585 1.77277 4.289 1.77277 3.79947C1.77277 3.30993 1.37592 2.91309 0.886383 2.91309C0.396847 2.91309 0 3.30993 0 3.79947C0 4.289 0.396847 4.68585 0.886383 4.68585Z"
                  fill="white"
                />
                <path
                  d="M17.4989 14.9126C17.4989 14.6626 17.2943 14.458 17.0443 14.458H3.40768C3.15767 14.458 2.95312 14.6626 2.95312 14.9126V16.9581C2.95312 17.2081 3.15767 17.4126 3.40768 17.4126H17.0443C17.2943 17.4126 17.4989 17.2081 17.4989 16.9581V14.9126Z"
                  fill="white"
                />
                <path
                  d="M0.592781 5.5717L2.59282 12.6173C2.68373 12.89 2.93374 13.0946 3.2292 13.0946H10.0021H16.775C17.0704 13.0946 17.3204 12.9128 17.4113 12.6173L19.4114 5.5717C19.4568 5.38988 19.2977 5.23079 19.1159 5.29897L13.3431 7.3672C13.2521 7.41265 13.1385 7.3672 13.0703 7.27629L10.1839 2.93528C10.093 2.79892 9.88844 2.79892 9.79753 2.93528L6.9111 7.25356C6.84292 7.34447 6.72928 7.38992 6.63837 7.34447L0.888242 5.29897C0.70642 5.23079 0.524598 5.38988 0.592781 5.5717Z"
                  fill="white"
                />
              </svg>
            </span>
            Upgrade
          </div>
        </div>
      </div>
      <div className="w-full mt-5 px-5">
        <h2 className="text-[1.5vw] font-bold">Library</h2>
        <div className="py-3 px-2 my-5 rounded bg-[#282828] w-full">
          <h3 className="lg:text-[0.9vw] xs:text-[2.4vw]">Today</h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 w-full gap-5">
          <div className="w-[20vw] h-[15vw] relative flex items-center justify-center bg-red-400">
            <div
              className={`bg-black/40 lg:w-[4vw]  md:w-[5vw] sm:w-[6vw] transition-all duration-700 xs:w-[7vw] absolute z-10 cursor-pointer rounded-full lg:h-[4vw] md:h-[5vw] sm:h-[6vw] xs:h-[7vw] flex items-center justify-center`}
            >
              <svg
                className="md:w-[1vw] xs:w-[3vw] md:h-[1vw] xs:h-[3vw]"
                viewBox="0 0 43 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 19.3038C44 21.6132 44 27.3867 40 29.6962L9.25 47.4497C5.25 49.7591 0.249998 46.8723 0.249998 42.2535L0.249999 6.74648C0.25 2.12768 5.25 -0.759077 9.25 1.55032L40 19.3038Z"
                  fill="white"
                />
              </svg>
            </div>
            <video
              loop
              muted
              src="/imgs/dashboard/New Best AI Video Generator - AI Movie - Text to Video AI.mp4"
              poster="/imgs/dashboard/videoGen.png"
              className="w-full h-full object-cover"
            >
              <source src="/imgs/dashboard/videoGen.png" type="" />
            </video>
          </div>
          <div className="w-[20vw] h-[15vw] relative flex items-center justify-center bg-red-400">
            <div
              className={`bg-black/40 lg:w-[4vw]  md:w-[5vw] sm:w-[6vw] transition-all duration-700 xs:w-[7vw] absolute z-10 cursor-pointer rounded-full lg:h-[4vw] md:h-[5vw] sm:h-[6vw] xs:h-[7vw] flex items-center justify-center`}
            >
              <svg
                className="md:w-[1vw] xs:w-[3vw] md:h-[1vw] xs:h-[3vw]"
                viewBox="0 0 43 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 19.3038C44 21.6132 44 27.3867 40 29.6962L9.25 47.4497C5.25 49.7591 0.249998 46.8723 0.249998 42.2535L0.249999 6.74648C0.25 2.12768 5.25 -0.759077 9.25 1.55032L40 19.3038Z"
                  fill="white"
                />
              </svg>
            </div>
            <video
              loop
              muted
              src="/imgs/dashboard/New Best AI Video Generator - AI Movie - Text to Video AI.mp4"
              poster="/imgs/dashboard/videoGen.png"
              className="w-full h-full object-cover"
            >
              <source src="/imgs/dashboard/videoGen.png" type="" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libraries;
