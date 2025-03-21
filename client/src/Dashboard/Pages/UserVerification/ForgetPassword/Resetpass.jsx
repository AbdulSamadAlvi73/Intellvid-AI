import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderSpinner from "../../../Components/LoaderSpinner";

const Resetpass = ({email}) => {
  // const [email, setemail] = useState("");
  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setloading] = useState(false);
  const resetPasswordData = {
    email,
    otp,
    password,
    confirmpassword,
  };
  const navigate = useNavigate();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/resetpassword`,
        resetPasswordData,
        {
          withCredentials: true,
        }
      );
      if (response.status == 200) {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/dashboard/login");
      }
    } catch (err) {
         toast.error(
              err.response.data.extraDetails
                ,
              { position: "top-right" }
            );
    } finally {
      setloading(false);
    }
  };
  return (
    <>
       <div className="w-full relative xs:flex items-center justify-center lg:grid text-white grid-cols-2 place-items-center bg-[#302f2f] min-h-screen">
        <div className="w-full h-full">
          <img
             className="h-full w-full object-cover"
            src="/imgs/dashboard/2150688379.png"
            alt=""
          />
        </div>
        <div className="md:p-9 xs:w-[90%] lg:w-fit xs:p-4 flex xs:absolute lg:relative flex-col gap-3 items-center justify-center bg-[#282828] rounded-xl">
         <div className="w-full h-full">
<img className="w-full h-full object-cover" src="/imgs/Hero/logo.png" alt="img" 

/>
         </div>
          {/* <h2 className="lg:text-[2.3vw] md:text-[3.3vw] xs:text-[4.6vw] py-3 font-bold text-center tracking-wide">
            Enter your email to reset password
          </h2> */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-2 py-4">
              <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Email
              </label>
              <input
               value={email}
              readOnly
               
                type="email"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter your email"
                id=""
              />
   <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                OTP
              </label>
              <input
               value={otp}
               onChange={(e)=>setotp(e.target.value)}
               
                type="number"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter 4 digit OTP"
                id=""
              />
   <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Password
              </label>
              <input
               value={password}
               onChange={(e)=>setpassword(e.target.value)}
               
                type="password"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter password"
                id=""
              />
   <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Confirm Password
              </label>
              <input
               
               value={confirmpassword}
               onChange={(e)=>setconfirmpassword(e.target.value)}
                type="password"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Confirm password"
                id=""
              />

{loading ? (
                <div className="flex justify-center items-center  lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full mt-7">
<div className=" px-5 py-2 rounded-lg flex items-center justify-center videoGradient ">
      <div className="lg:w-10 lg:h-10 md:w-10 md:h-10  xs:w-6 xs:h-6 border-4 border-gray-300 border-t-indigo-700 rounded-full animate-spin"></div>
      
    </div>
                </div>
              ) : (
                <button onClick={SubmitHandler} className="cursor-pointer lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full mt-7">
                  Reset Password
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpass;
