import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserContext";
import {toast} from 'react-toastify'
import axios from 'axios'
const DashboardHeader = () => {
  const { user } = useContext(UserDataContext)
const navigate = useNavigate()


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
    const handleLogout = async()=>{
try{
const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/logout`,{},{
  withCredentials:true
})
if(response.status==200){
  toast.success('You are Logout',{position:'top-right'})
  navigate('/dashboard/login')
}
}catch(err){
console.log(err);
}
    }
  return (

    <div className="w-full z-50 flex bg-[#282828] border-b px-4 border-gray-600 py-2 justify-between fixed top-0 left-0 items-center">
      <div className="flex items-center gap-2">
       
        <img
          className="lg:w-[0.2vw] md:w-[1.2vw] sm:w-[0.8vw] xs:w-[1.2vw] lg:h-[2vw] md:h-[3vw] sm:h-[5vw]"
          src="/imgs/Hero/Rectangle 13418.png"
          alt=""
        />
        <img
          className="lg:w-[8vw] md:w-[10vw] sm:w-[12vw] xs:w-[15vw] lg:h-[2.5vw] md:h-[4.5vw] sm:h-[5.5vw] xs:h-[6.5vw]"
          src="/imgs/Hero/logo.png"
          alt=""
        />
      <button className="cursor-pointer text-white" onClick={handleLogout}>logout</button>

      </div>
      <div className="lg:flex xs:hidden items-center text-white gap-[47px] lg:text-[0.9vw] md:text-[1.9vw] sm:text-[2.9vw] xs:text-[2.9vw] font-semibold">
        {["Home", "About", "Pages", "Pricing", "Contact"].map((link, idx) => {
          return (
            <Link key={idx} to={`/${idx === 0 ? "" : link.toLowerCase()}`}>
              {link}
            </Link>
          );
        })}
      </div>
      <Link
        to={"/dashboard/profile-info"}
        className="flex items-center text-white xs:gap-0.5 md:gap-2.5"
      >
        <div className="lg:w-[2.5vw] md:w-[4vw] sm:w-[6.5vw] xs:w-[8vw]">
       {user.avatar?    <img
            className="w-full h-full object-cover rounded-lg"
            src={user.avatar}
            alt="avatar"
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
        <div className="ml-3 flex flex-col gap-0.5">
          <h3 className=" lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[3.4vw] xs:leading-[3.4vw] lg:leading-[1.1vw]">
            {user.name}
          </h3>
          <p className="text-gray-300 lg:text-[0.8vw] xs:text-[2.4vw]">
            {user.email}
          </p>

        </div>
      </Link>
    </div>
  );
};

export default DashboardHeader;
