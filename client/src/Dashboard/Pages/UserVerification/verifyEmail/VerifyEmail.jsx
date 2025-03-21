import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderSpinner from "../../../Components/LoaderSpinner";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [loading, setloading] = useState(false)
  const [resendloading, setresendloading] = useState(false);

  const handleChange = (index, event) => {
    const { value } = event.target;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) return;

    // Update the OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move focus to the previous input on backspace
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleSubmit = async () => {
    try {
      const otpvalue = otp.join("");
      setloading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/verify`,
        { otp: otpvalue }, // Send data as an object
        {
          withCredentials: true, // Include credentials (cookies, authorization headers)
        }
      );
      if (response.status == 200) {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/dashboard/text-to-script");
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-right" });
    } finally {
      setloading(false);
    }
  };
  const ResendOtp = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/resend-otp`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status == 200) {
        toast.info(response.data.message, { position: "top-right" });
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-right" });
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative xs:flex items-center justify-center lg:grid text-white grid-cols-2 place-items-center bg-[#302f2f] min-h-screen">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src="/imgs/dashboard/2150688379.png"
            alt=""
          />
        </div>
        <div className="md:p-9 xs:w-[90%] lg:w-fit xs:p-4 flex xs:absolute lg:relative flex-col gap-3 items-center justify-center bg-[#282828] rounded-xl">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="/imgs/Hero/logo.png"
              alt="img"
            />
          </div>
          <h2 className="lg:text-[2.3vw] md:text-[3.3vw] xs:text-[4.6vw] py-3 font-bold text-center tracking-wide">
            Enter your verifcation code
          </h2>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col justify-center items-center gap-2 py-2">
              <div className="flex space-x-4 mt-3">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    type="text"
                    key={index}
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-20 h-20 rounded-lg text-black bg-gray-200 text-3xl font-bold text-center no-spinner"
                  />
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-6">
                {loading ? (
                 <div className=" px-10 py-2 rounded-full flex items-center justify-center videoGradient ">
                 <div className="lg:w-10 lg:h-10 md:w-10 md:h-10  xs:w-6 xs:h-6 border-4 border-gray-300 border-t-indigo-700 rounded-full animate-spin"></div>
               </div>
                ) : (
                  <>
                    {" "}
                    <button
                      onClick={handleSubmit}
                      className="cursor-pointer w-40 lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full"
                    >
                      Submit
                    </button>
                  </>
                )}

                {resendloading ? (
                  <>
                    <div className="">
                      <div className=" px-10 py-2  flex items-center justify-center videoGradient rounded-full ">
                        <div className="lg:w-10 lg:h-10 md:w-10 md:h-10  xs:w-6 xs:h-6 border-4 border-gray-300 border-t-indigo-700 rounded-full animate-spin"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={ResendOtp}
                      className="cursor-pointer w-40 lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full "
                    >
                      Resend OTP
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
