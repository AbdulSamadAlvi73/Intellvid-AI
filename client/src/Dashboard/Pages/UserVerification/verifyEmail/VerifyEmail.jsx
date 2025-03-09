import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderSpinner from '../../../Components/LoaderSpinner';

const VerifyEmail = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate()
  const inputRefs = useRef([]);
  const [loading, setloading] = useState(false)

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
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleSubmit = async ()=>{
    try {
      const  otpvalue = otp.join("")
setloading(true)
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/api/user/verify`,
            {otp:otpvalue}, // Send data as an object
            {
              withCredentials: true, // Include credentials (cookies, authorization headers)
            }
          );
        if(response.status==200){
toast.success(response.data.message,{position:"top-right"})
navigate('/dashboard/text-to-script')
        }
    } catch (error) {
   toast.error(error.response.data.message,{position:"top-right"})
    }
    finally{
      setloading(false)
    }

  }
  const ResendOtp = async()=>{
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/resend-otp`,{},{
        withCredentials: true
      })
      if(response.status==200){
        toast.info(response.data.message , {position:"top-right"})
      }
      
    } catch (error) {
      toast.error(error.response.data.message,{position:"top-right"})
    }
    finally{
    
    }
    }
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold'>Enter your Email verification code here</h1>
        <div className='flex space-x-4 mt-3'>
          {[0, 1, 2, 3].map((index) => (
            <input
              type='text'
              key={index}
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className='w-20 h-20 rounded-lg bg-gray-200 text-3xl font-bold text-center no-spinner'
            />
          ))}
        </div>
        <div className='flex items-center space-x-4 mt-6'>
         {loading? <button className='px-2 py-2 bg-white text-black outline rounded-lg cursor-pointer'><LoaderSpinner/></button>
:<> <button onClick={handleSubmit} className='px-2 py-2 bg-white text-black outline rounded-lg cursor-pointer'>Submit</button>
</>}
                   <button onClick={ResendOtp} className='px-2 py-2 bg-black text-white rounded-lg cursor-pointer'>Resend OTP</button>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;