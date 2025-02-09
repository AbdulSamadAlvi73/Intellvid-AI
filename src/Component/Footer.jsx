import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  return (
    <>
      <div
        className={`${
          darkMode ? "bg-slate-800 text-white" : "bg-black text-white"
        }`}
      >
        <div className="md:max-w-[75vw] font-roboto tracking-wide text-center xs:py-10 md:py-32  mx-auto">
          <div>
            <h2 className="lg:text-[6vw] md:text-[7vw] xs:text-[8vw] xs:leading-[8.6vw] md:leading-[7.6vw] font-bold leading-[6.6vw]">
              Feature of video creation
            </h2>
            <h3 className="lg:text-[6vw] md:text-[7vw] xs:text-[8vw] mb-16 font-bold text-theme-purple">
              Intellvid AI
            </h3>
            <Link className="md:px-8 xs:px-4 md:py-6 xs:py-1.5 lg:text-[1.3vw] xs:text-[4.5vw] sm:text-[2.5vw] bg-blue-500 text-white  rounded-full">
              Get Started - It's Free
            </Link>
          </div>
        </div>
      </div>
      <div className={`footer text-white`}>
        <div className="md:max-w-[75vw] font-roboto px-5 tracking-wide xs:py-10 md:py-32 grid xs:grid-cols-1 md:grid-cols-2 place-items-center text-center lg:grid-cols-4 xs:gap-5 sm:gap-10 lg:gap-32 mx-auto">
          <div>
            <div className="flex items-center gap-3">
              <img
                className="w-[10px] h-[70px]"
                src="/imgs/Hero/Rectangle 13418.png"
                alt=""
              />
              <img
                className="w-[175px] h-[46px]"
                src="/imgs/Hero/logo.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-4 my-5">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaYoutube />
              </span>
            </div>
            <div className="mt-10">
              <h3 className="md:text-[1.1vw] xs:text-[2.5vw]">
                Intellivid 2025. All Rights <br /> Reserved.
              </h3>
            </div>
          </div>
          <div>
            <h2 className="md:text-[1.7vw] xs:text-[3.5vw] font-semibold mb-7">
              Products
            </h2>
            <ul className="flex flex-col gap-5 md:text-[1.1vw] xs:text-[2.5vw] tracking-wide">
              <li>
                <a href="#">AI Copywriting</a>
              </li>
              <li>
                <a href="#">AI Chatbot</a>
              </li>
              <li>
                <a href="#">AI Research</a>
              </li>
              <li>
                <a href="#">AI Videography</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-[1.7vw] xs:text-[3.5vw] font-semibold mb-7">
              Company
            </h2>
            <ul className="flex flex-col gap-5 md:text-[1.1vw] xs:text-[2.5vw] tracking-wide">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-[1.7vw] xs:text-[3.5vw] font-semibold mb-7">
              Support
            </h2>
            <ul className="flex flex-col gap-5 md:text-[1.1vw] xs:text-[2.5vw] tracking-wide">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Submit Feedback</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Reques Quote</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
