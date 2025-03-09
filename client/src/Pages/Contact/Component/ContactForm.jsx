import React from "react";

const ContactForm = ({ darkMode }) => {
  return (
    <div
      className={` ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] relative px-5  font-roboto xs:pt-24 mx-auto w-full xs:flex flex-col lg:grid gap-20 grid-cols-3 place-content-center place-items-center xs:pb-10 md:py-32">
        <div className="flex gap-5 flex-col items-center w-full">
          <h3 className="md:text-[2.5vw] md:leading-[3.5vw] xs:text-[4.5vw] xs:leading-[5.5vw] sm:text-[3.5vw] pb-5 font-semibold tracking-wide">
            Have any questions for us?
          </h3>
          <div className="lg:w-[20vw] md:w-[30vw] sm:w-[40vw] xs:w-[50vw] relative">
            <img
              className="w-full h-full object-cover "
              src="/imgs/Contact/BACKGROUND.png"
              alt=""
            />
            <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src="/imgs/Contact/OBJECTS.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2 w-full">
          <form
            action=""
            method="post"
            className="flex flex-col xs:gap-3 md:gap-[2vw]"
          >
            <div className="flex items-center xs:gap-3 md:gap-[2vw] w-full">
              <input
                type="text"
                className={`lg:py-[0.9vw] md:py-[1.5vw] xs:py-[2vw] px-3 rounded-md placeholder:text-gray-500 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] w-full  xs:border md:border-2 border-gray-300 ${
                  darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
                }`}
                placeholder="Your Name"
              />
              <input
                type="email"
                className={`lg:py-[0.9vw] md:py-[1.5vw] xs:py-[2vw] px-3 rounded-md placeholder:text-gray-500 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] w-full  xs:border md:border-2 border-gray-300 ${
                  darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
                }`}
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              className={`lg:py-[0.9vw] md:py-[1.5vw] xs:py-[2vw] px-3 rounded-md placeholder:text-gray-500 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] w-ful xs:border md:border-2 border-gray-300 ${
                darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
              }`}
              placeholder="Subject"
            />
            <textarea
              type="email"
              className={`lg:py-[0.9vw] md:py-[1.5vw] xs:py-[2vw] px-3 rounded-md placeholder:text-gray-500 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] w-ful xs:border md:border-2 border-gray-300 ${
                darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
              }`}
              placeholder="Your Email"
              rows={5}
            ></textarea>
            <div>
              <button
                className={`lg:py-[0.9vw] md:py-[1.5vw] xs:py-[2vw] rounded-md tracking-wide md:text-[1.1vw] xs:text-[2.5vw] px-6 bg-theme-purple border text-white`}
              >
                Contact Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
