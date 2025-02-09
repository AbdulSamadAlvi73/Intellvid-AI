import React from "react";

const UpdatePassword = () => {
  return (
    <form className="w-full flex flex-col gap-5 mt-5">
      <div className="flex w-full flex-col gap-1.5">
        <label
          className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
          htmlFor=""
        >
          Current Password
        </label>
        <input
          type="password"
          placeholder="*** ***"
          className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <label
          className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
          htmlFor=""
        >
          Password
        </label>
        <input
          type="password"
          placeholder="*** ***"
          className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <label
          className="lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold"
          htmlFor=""
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="*** ***"
          className="lg:py-[0.8vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-2 border-gray-400/20 xs:rounded-md md:rounded-xl w-full"
        />
      </div>
      <div>
        <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient">
          Update Password
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
