import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import PluginOpen from "./PluginOpen";
import LibraryOpen from "./LibraryOpen";
import { useContext } from "react";
import { UserDataContext } from "../../Context/UserContext";
const DashboardLeft = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isPluginOpen, setisPluginOpen] = useState(false);
  const [isLibraryOpen, setisLibraryOpen] = useState(false);
  const {user} = useContext(UserDataContext)
  const location = useLocation();
  useEffect(() => {
    const handleActiveLink = () => {
      let isActive = location.pathname === "/dashboard/library";
      if (isActive) {
        setisLibraryOpen(true);
      } else {
        setisLibraryOpen(false);
      }
    };
    handleActiveLink();
  }, []);

  let handleToggoleSidbar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  console.log(sideBarOpen);

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

    const getInitials = (name) => {
      if (!name || name.trim().length === 0) {
        return "?";
      }
      const nameParts = name.split(" ").filter((part) => part.trim().length > 0);
      const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
      return initials.join("");
    };
    const initials = getInitials(user.name);
     const backgroundColor = stringToColor(user.name)

  return (
    <div
      className={`lg:w-[16vw] z-40 lg:pt-[3vw] h-full sm:pt-[9vw] xs:pt-[11vw] items-center md:w-[6vw] sm:w-[8vw] xs:w-[16vw] ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-none h-full fixed xs:bg-[#111111] lg:bg-[#282828] text-white`}
    >
      <div className="lg:w-full flex flex-col py-5 it justify-between h-full relative">
        <div
          onClick={handleToggoleSidbar}
          className="lg:p-[1.5vw] md:p-[2.5vw] sm:p-[3.5vw] xs:p-[4.5vw] right-0 translate-x-full rounded-md bg-theme-purple absolute"
        >
          <svg
            className="absolute top-1/2 left-1/2 lg:w-[1.1vw] md:w-[2.1vw] sm:w-[3.1vw] xs:w-[4.1vw] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_418_1765)">
              <path
                d="M0.5 3.5C0.520833 2.9375 0.71875 2.46875 1.09375 2.09375C1.46875 1.71875 1.9375 1.52083 2.5 1.5H14.5C15.0625 1.52083 15.5312 1.71875 15.9062 2.09375C16.2812 2.46875 16.4792 2.9375 16.5 3.5V13.5C16.4792 14.0625 16.2812 14.5312 15.9062 14.9062C15.5312 15.2812 15.0625 15.4792 14.5 15.5H2.5C1.9375 15.4792 1.46875 15.2812 1.09375 14.9062C0.71875 14.5312 0.520833 14.0625 0.5 13.5V3.5ZM7.5 14H14.5C14.8125 13.9792 14.9792 13.8125 15 13.5V3.5C14.9792 3.1875 14.8125 3.02083 14.5 3H7.5V14ZM3.25 5H4.75C5.20833 4.95833 5.45833 4.70833 5.5 4.25C5.45833 3.79167 5.20833 3.54167 4.75 3.5H3.25C2.79167 3.54167 2.54167 3.79167 2.5 4.25C2.54167 4.70833 2.79167 4.95833 3.25 5ZM3.25 6.5C2.79167 6.54167 2.54167 6.79167 2.5 7.25C2.54167 7.70833 2.79167 7.95833 3.25 8H4.75C5.20833 7.95833 5.45833 7.70833 5.5 7.25C5.45833 6.79167 5.20833 6.54167 4.75 6.5H3.25ZM3.25 11H4.75C5.20833 10.9583 5.45833 10.7083 5.5 10.25C5.45833 9.79167 5.20833 9.54167 4.75 9.5H3.25C2.79167 9.54167 2.54167 9.79167 2.5 10.25C2.54167 10.7083 2.79167 10.9583 3.25 11Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_418_1765">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.5 16.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex xs:items-center flex-col lg:items-start lg:px-3">
          <NavLink
            to={"/dashboard/image-generator"}
            className={({ isActive }) =>
              isActive
                ? "bg-theme-purple flex items-center xs:justify-center lg:justify-normal rounded-xl gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
                : "flex items-center xs:justify-center lg:justify-normal gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
            }
          >
            <div className="lg:w-[2.2vw] md:w-[3.2vw] sm:w-[4.2vw] xs:w-[7vw] lg:h-[2.2vw] md:h-[3.2vw] sm:h-[4.2vw] xs:h-[7vw]">
              <img
                className="w-full h-full"
                src="/imgs/dashboard/dashbaordleft/image (4).png"
                alt=""
              />
            </div>
            <h3 className="lg:text-[0.9vw] lg:flex xs:hidden md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold">
              Image Generator
            </h3>
          </NavLink>
          <NavLink
            to={"/dashboard/video-generator"}
            className={({ isActive }) =>
              isActive
                ? "bg-theme-purple flex items-center xs:justify-center lg:justify-normal rounded-xl gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
                : "flex items-center xs:justify-center lg:justify-normal gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
            }
          >
            <div className="lg:w-[2.2vw] md:w-[3.2vw] sm:w-[4.2vw] xs:w-[7vw] lg:h-[2.2vw] md:h-[3.2vw] sm:h-[4.2vw] xs:h-[7vw]">
              <img
                className="w-full h-full"
                src="/imgs/dashboard/dashbaordleft/image (5).png"
                alt=""
              />
            </div>
            <h3 className="lg:text-[0.9vw] lg:flex xs:hidden md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold">
              Video Generator
            </h3>
          </NavLink>
          <NavLink
            to={"/dashboard/text-to-script"}
            className={({ isActive }) =>
              isActive
                ? "bg-theme-purple flex items-center xs:justify-center lg:justify-normal rounded-xl gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
                : "flex items-center xs:justify-center lg:justify-normal gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
            }
          >
            <div className="lg:w-[2.2vw] relative md:w-[3.2vw] sm:w-[4.2vw] xs:w-[7vw] lg:h-[2.2vw] md:h-[3.2vw] sm:h-[4.2vw] xs:h-[7vw]">
              <img
                className="w-full h-full"
                src="/imgs/dashboard/dashbaordleft/Rectangle 13571.png"
                alt=""
              />
              <svg
                className="absolute top-1/2 left-1/2 lg:w-[1.1vw] md:w-[2.1vw] sm:w-[3.1vw] xs:w-[5.1vw] -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.032 15.5702C14.0017 16.0792 14.0196 16.5066 13.9403 16.9162C13.8455 17.4042 13.3699 17.6933 12.7816 17.6933C10.3849 17.6949 7.98826 17.6941 5.59158 17.6941C4.30931 17.6941 3.02627 17.6964 1.744 17.6933C0.919459 17.6918 0.500583 17.2729 0.500583 16.4522C0.499806 11.3884 0.499806 6.32386 0.500583 1.26005C0.500583 0.414534 0.91635 0.000322233 1.76343 0.000322233C4.19896 -0.0004549 6.6345 0.000320621 9.07003 0.00109775C9.19593 0.00109775 9.3226 0.00109775 9.48191 0.00109775C9.48968 0.175953 9.50056 0.31506 9.50056 0.45339C9.50212 1.39916 9.4959 2.34416 9.5029 3.28993C9.50911 4.08727 9.93343 4.49837 10.7362 4.49992C11.8087 4.50225 12.8819 4.5007 14.0079 4.5007C14.0079 4.67167 14.0079 4.81 14.0079 4.94833C14.0079 5.97181 13.959 6.99763 14.0235 8.01645C14.0701 8.75473 13.6225 9.22334 13.2596 9.77355C13.2596 8.28067 13.2596 6.7878 13.2596 5.25374C12.383 5.25374 11.5444 5.25918 10.7059 5.25219C9.53709 5.24286 8.75762 4.45951 8.75452 3.29925C8.75296 2.7164 8.75452 2.13355 8.75452 1.5507C8.75452 1.30513 8.75452 1.06033 8.75452 0.750255C8.61541 0.750255 8.4934 0.750255 8.37061 0.750255C6.18143 0.750255 3.99147 0.749477 1.80228 0.751031C1.30647 0.751031 1.21632 0.841179 1.21632 1.34165C1.21555 6.34095 1.21555 11.3403 1.21632 16.3396C1.21632 16.8595 1.30103 16.9403 1.83026 16.941C5.43149 16.941 9.03351 16.941 12.6347 16.941C13.2098 16.941 13.2953 16.8882 13.251 16.3248C13.2075 15.7614 13.6714 15.8212 14.032 15.5702Z"
                  fill="white"
                />
                <path
                  d="M11.9607 15.7335C11.9032 15.1483 11.8457 14.6346 11.806 14.1201C11.7975 14.0137 11.8301 13.8878 11.8845 13.7937C13.0238 11.8113 14.1685 9.83268 15.3132 7.8541C15.3249 7.83389 15.3537 7.82224 15.398 7.78882C15.9653 8.11677 16.5427 8.45016 17.1527 8.80298C16.7665 9.47442 16.3896 10.1303 16.0111 10.7854C15.2806 12.0491 14.5416 13.308 13.8235 14.5786C13.6626 14.8638 13.4691 15.0643 13.1614 15.1856C12.7697 15.341 12.3928 15.5345 11.9607 15.7335Z"
                  fill="white"
                />
                <path
                  d="M11.9665 8.26221C11.9665 8.51167 11.9665 8.72616 11.9665 8.96629C8.82143 8.96629 5.69658 8.96629 2.54297 8.96629C2.54297 8.73781 2.54297 8.51244 2.54297 8.26221C5.67404 8.26221 8.80044 8.26221 11.9665 8.26221Z"
                  fill="white"
                />
                <path
                  d="M11.9605 10.2222C11.9605 10.4755 11.9605 10.69 11.9605 10.9224C8.81621 10.9224 5.69913 10.9224 2.54785 10.9224C2.54785 10.6978 2.54785 10.4747 2.54785 10.2222C5.67348 10.2222 8.80067 10.2222 11.9605 10.2222Z"
                  fill="white"
                />
                <path
                  d="M11.9187 12.1865C11.6202 12.8906 11.6202 12.8906 10.9434 12.8906C8.28789 12.8906 5.63321 12.8906 2.97774 12.8906C2.83786 12.8906 2.69798 12.8906 2.53711 12.8906C2.53711 12.6427 2.53711 12.4298 2.53711 12.1865C5.66119 12.1865 8.77594 12.1865 11.9187 12.1865Z"
                  fill="white"
                />
                <path
                  d="M13.4963 3.77564C12.664 3.77564 11.7898 3.79196 10.917 3.76787C10.5347 3.75699 10.2456 3.46168 10.2378 3.0941C10.2192 2.21904 10.2316 1.34399 10.2316 0.495361C11.318 1.58723 12.4037 2.67833 13.4963 3.77564Z"
                  fill="white"
                />
                <path
                  d="M8.27195 6.30762C8.27195 6.54931 8.27195 6.76535 8.27195 7.0016C6.35321 7.0016 4.4539 7.0016 2.53516 7.0016C2.53516 6.7638 2.53516 6.54853 2.53516 6.30762C4.43913 6.30762 6.33767 6.30762 8.27195 6.30762Z"
                  fill="white"
                />
                <path
                  d="M8.26496 14.8211C6.34311 14.8211 4.44846 14.8211 2.53516 14.8211C2.53516 14.5872 2.53516 14.375 2.53516 14.1411C4.45001 14.1411 6.34388 14.1411 8.26496 14.1411C8.26496 14.3618 8.26496 14.574 8.26496 14.8211Z"
                  fill="white"
                />
                <path
                  d="M15.7314 7.13135C15.9389 6.77309 16.1192 6.43349 16.3275 6.11253C16.5086 5.83354 16.779 5.77525 17.0712 5.92679C17.3572 6.07445 17.6339 6.24076 17.9066 6.41173C18.1794 6.58192 18.2424 6.85081 18.1165 7.12047C17.9478 7.47795 17.7271 7.81134 17.522 8.16882C16.9104 7.81367 16.3329 7.47951 15.7314 7.13135Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="lg:text-[0.9vw] lg:flex xs:hidden md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold">
              Text to script
            </h3>
          </NavLink>
          <NavLink
            to={"/dashboard/faceless-videos"}
            className={({ isActive }) =>
              isActive
                ? "bg-theme-purple flex items-center xs:justify-center lg:justify-normal rounded-xl gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
                : "flex items-center xs:justify-center lg:justify-normal gap-3 w-full p-3 transition-all duration-500 hover:bg-gray-500"
            }
          >
            <div className="lg:w-[2.2vw] relative md:w-[3.2vw] sm:w-[4.2vw] xs:w-[8vw] lg:h-[2.2vw] md:h-[3.2vw] sm:h-[4.2vw] xs:h-[8vw]">
              <img
                className="w-full h-full"
                src="/imgs/dashboard/dashbaordleft/Rectangle 13571 (1).png"
                alt=""
              />
              <img
                className="absolute top-1/2 left-1/2 lg:w-[1.1vw] md:w-[2.1vw] sm:w-[3.1vw] xs:w-[5.1vw] -translate-x-1/2 -translate-y-1/2"
                src="/imgs/dashboard/dashbaordleft/faceless 1.png"
                alt=""
              />
            </div>
            <h3 className="lg:text-[0.9vw] lg:flex xs:hidden md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw] font-semibold">
              Faceless videos
            </h3>
          </NavLink>
        </div>
        <PluginOpen
          isPluginOpen={isPluginOpen}
          setisPluginOpen={setisPluginOpen}
        />
        <LibraryOpen
          isLibraryOpen={isLibraryOpen}
          setIsLibraryOpen={setisLibraryOpen}
        />
        <div className="py-5 w-full lg:px-3 xs:p-2">
          <div
            className={`flex ${isLibraryOpen ? "z-20 relative" : ""} flex-col`}
          >
            <h3
              onClick={() => setisPluginOpen(true)}
              className="lg:text-[1vw] cursor-pointer py-4 lg:block xs:hidden text-gray-400  md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold"
            >
              Plugin
            </h3>
            <NavLink
              to={"/dashboard/library"}
              onClick={() => setisLibraryOpen(true)}
              className="lg:text-[1vw] cursor-pointer lg:block xs:hidden border-y border-gray-600 py-4 text-gray-400  md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold"
            >
              {isLibraryOpen ? "History" : "Library"}
            </NavLink>
          </div>
          <div className="w-full lg:bg-[#bd17bd] relative z-10 flex flex-col gap-6 rounded-xl mt-6 lg:p-3">
            <Link
              to={"/dashboard/profile-info"}
              className="lg:flex items-center text-white gap-2.5"
            >
              <div className="lg:w-[2.5vw] md:w-[3.5vw]">
              <div className="lg:w-[2.5vw] md:w-[4vw] sm:w-[6.5vw] xs:w-[8vw]">
       {user.avatar?    <img
            className="w-full h-full object-cover"
            src={user.avatar}
            alt=""
          />:<> 
          <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "bold",
        }}
    >
      {initials}
    </div>
          </>}
        </div>
              </div>
              <div className="ml-3 flex flex-col gap-0.5">
                <h3 className="text-[1.1vw] lg:block xs:hidden leading-[1.1vw]">
                 {user.name}
                </h3>
                <p className="text-gray-300 lg:block xs:hidden lg:text-[0.8vw] md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw]">
                  {user.email}
                </p>
              </div>
            </Link>
            <div>
             {user.subscriptionStatus==='trial'? <Link to={"/dashboard/profile-info"} className="lg:text-[1vw] border lg:block xs:hidden border-theme-purple p-4 rounded-xl md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">
                Upgrade To Pro
              </Link>:user.subscriptionStatus==='active'?<button  className="lg:text-[1vw] border lg:block xs:hidden border-theme-purple p-4 rounded-xl md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">See Your Subscription</button>:user.subscriptionStatus==='inactive'?<Link to={'/dashboard/profile-info'}  className="lg:text-[1vw] border lg:block xs:hidden border-theme-purple p-4 rounded-xl md:text-[2vw] sm:text-[3vw] xs:text-[4vw] font-semibold">Renew  subscription</Link>:""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
