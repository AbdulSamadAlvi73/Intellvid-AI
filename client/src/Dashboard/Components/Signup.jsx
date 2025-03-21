import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleSign from "../../Component/GoogleSign";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setloading] = useState(false)

  const userData = {
    name,
    email,
    password,
    confirmpassword
  };


  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setloading(true)
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/signup`,
        userData, 
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.info("Verifcation code is sent to your email", { position: "top-right" });
        navigate("/dashboard/auth/verify-email");
        setemail("");
        setpassword("");
        setconfirmpassword("");
        setname("");
      }
    } catch (err) {
      toast.error(
        err.response.data.extraDetails
          ? err.response.data.extraDetails
          : err.response.data.message,
        { position: "top-right" }
      );
    }
    finally{
      setloading(false)
    }
  };
  return (
    <div className="w-full relative xs:flex items-center justify-center lg:grid text-white grid-cols-2 place-items-center bg-[#302f2f] min-h-screen">
      <div className="w-full md:h-full xs:h-screen">
        <img
          className="h-full w-full object-cover"
          src="/imgs/dashboard/2150688379.png"
          alt=""
        />
      </div>
      <div className="md:p-9 xs:w-[90%] lg:w-fit lg:m-0 xs:p-4 flex xs:absolute lg:relative flex-col gap-3 items-center justify-center bg-[#282828] rounded-xl">
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
        <h2 className="lg:text-[2.3vw] md:text-[3.3vw] xs:text-[4.6vw] py-3 font-bold text-center tracking-wide">
          Wellcome To Intellevid AI
        </h2>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center justify-center gap-8 bg-white/20 lg:py-[1vw] xs:py-[2vw]  rounded-full">
            <span>
              <svg
                className="lg:w-[1.5vw] md:w-[2.5vw] sm:w-[3.5vw] xs:w-[4.6vw]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0001 12.474C23.0001 11.5511 22.9252 10.8776 22.7632 10.1792H12.2246V14.3447H18.4105C18.2858 15.3799 17.6124 16.9388 16.1157 17.9864L16.0948 18.1258L19.4269 20.7072L19.6577 20.7302C21.7778 18.7721 23.0001 15.8912 23.0001 12.474Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2245 23.4489C15.2551 23.4489 17.7993 22.4511 19.6576 20.73L16.1156 17.9862C15.1678 18.6472 13.8957 19.1087 12.2245 19.1087C9.25627 19.1087 6.73701 17.1507 5.83897 14.4443L5.70734 14.4555L2.24258 17.1369L2.19727 17.2629C4.04305 20.9295 7.83444 23.4489 12.2245 23.4489Z"
                  fill="#34A853"
                />
                <path
                  d="M5.83895 14.4444C5.602 13.746 5.46486 12.9976 5.46486 12.2244C5.46486 11.4511 5.602 10.7029 5.82649 10.0045L5.82021 9.85571L2.31203 7.13123L2.19725 7.18582C1.43651 8.70738 1 10.416 1 12.2244C1 14.0328 1.43651 15.7414 2.19725 17.2629L5.83895 14.4444Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2245 5.34011C14.3322 5.34011 15.7539 6.25053 16.5646 7.01136L19.7324 3.91837C17.7869 2.10998 15.2551 1 12.2245 1C7.83444 1 4.04305 3.51925 2.19727 7.18589L5.8265 10.0045C6.73701 7.29818 9.25627 5.34011 12.2245 5.34011Z"
                  fill="#EB4335"
                />
              </svg>
            </span>
          <GoogleSign/>
          </div>
          <div className="w-full flex items-center justify-center gap-8 bg-white/20 lg:py-[1vw] xs:py-[2vw]  rounded-full">
            <span>
              <svg
                className="lg:w-[1.5vw] md:w-[2.5vw] sm:w-[3.5vw] xs:w-[4.6vw]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1271_1006)">
                  <path
                    d="M16.7729 0.0120105C16.7219 -0.0449895 14.8844 0.0345106 13.2854 1.77001C11.6864 3.50401 11.9324 5.49301 11.9684 5.54401C12.0044 5.59501 14.2484 5.67451 15.6809 3.65701C17.1134 1.63951 16.8239 0.0705105 16.7729 0.0120105ZM21.7439 17.6115C21.6719 17.4675 18.2564 15.7605 18.5744 12.4785C18.8924 9.19501 21.0869 8.29501 21.1214 8.19751C21.1559 8.10001 20.2259 7.01251 19.2404 6.46201C18.5168 6.07389 17.716 5.85152 16.8959 5.81101C16.7339 5.80651 16.1714 5.66851 15.0149 5.98501C14.2529 6.19351 12.5354 6.86851 12.0629 6.89551C11.5889 6.92251 10.1789 6.11251 8.66239 5.89801C7.69189 5.71051 6.66289 6.09451 5.92639 6.39001C5.19139 6.68401 3.79339 7.52101 2.81539 9.74551C1.83739 11.9685 2.34889 15.4905 2.71489 16.5855C3.08089 17.679 3.65239 19.4715 4.62439 20.7795C5.48839 22.2555 6.63439 23.28 7.11289 23.628C7.59139 23.976 8.94139 24.207 9.87739 23.7285C10.6304 23.2665 11.9894 23.001 12.5264 23.0205C13.0619 23.04 14.1179 23.2515 15.1994 23.829C16.0559 24.1245 16.8659 24.0015 17.6774 23.6715C18.4889 23.34 19.6634 22.083 21.0344 19.5345C21.5549 18.3495 21.7919 17.709 21.7439 17.6115Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1271_1006">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h3 className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]">
              Continue with Google
            </h3>
          </div>
          <form onSubmit={SubmitHandler} className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter your name"
                id=""
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter your email"
                id=""
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter your password"
                id=""
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]"
              >
                Confirm Password
              </label>
              <input
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                type="password"
                className="w-full lg:py-[1vw] lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] xs:py-[2vw] px-2 border-2 border-gray-600 rounded-xl"
                name=""
                placeholder="Enter your confirm password"
                id=""
              required
              />
            </div>
            {/* <input
              type="submit"
              className="lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full mt-7"
              value="Continue with Email"
            /> */}
             {loading?(<>
              <div className=" px-10 py-2 rounded-full flex items-center justify-center videoGradient ">
                 <div className="lg:w-10 lg:h-10 md:w-10 md:h-10  xs:w-6 xs:h-6 border-4 border-gray-300 border-t-indigo-700 rounded-full animate-spin"></div>
               </div>
             </>):(<>
              <button  
              className="cursor-pointer lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full mt-7"
         
         >Continue with Email</button>
             </>)}
          </form>
          <div>
            <p className="lg:text-[1.2vw] text-center md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]">
              Already have an account?{" "}
              <Link to={"/dashboard/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
