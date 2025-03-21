import React from "react";

const DataForm = () => {
  return (
    <form method="post" className="w-full flex flex-col gap-5 mt-5">
      <div className="flex flex-wrap w-full items-center gap-5">
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
            htmlFor=""
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
          />
        </div>
        <div className="flex  w-full flex-col gap-1.5">
          <label
            className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
            htmlFor=""
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center gap-5">
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
            htmlFor=""
          >
            User name
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
            htmlFor=""
          >
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
          />
        </div>
      </div>
      <div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
            htmlFor=""
          >
            Bio
          </label>
          <textarea
            placeholder="Enter your phone number"
            className="lg:py-[0.8vw] resize lg:h-[12vw] md:h-[20vw] sm:h-[30vw] xs:h-[40vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
          ></textarea>
        </div>
      </div>
      <div>
        <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient">
          Update Info
        </button>
      </div>
    </form>
  );
};

export default DataForm;
