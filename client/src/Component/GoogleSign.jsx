import React from 'react'
import {auth,provider} from  '../../utils/firebase'
import { signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const GoogleSign = () => {
    const navigate = useNavigate()
 const signInwithGoogle = async()=>{
try{
    const response =await signInWithPopup(auth,provider)
const user = response.user
// console.log(user);

const  googleUser = {
    name:user.displayName,
    email:user.email,
    avatar:user.photoURL,
    googleId: user.uid
}
const apires = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/api/user/googleAuth`,
    googleUser,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include cookies in the request
    }
  );
if(apires.status===200){
    toast.success("Log in Sucessfuly", { position: "top-right" });
    navigate("/dashboard/text-to-script");
}
}
catch(err){
    console.log(err);
    
    // toast.error(
    //         err.response.data.extraDetails
    //           ? err.response.data.extraDetails
    //           : err.response.data.message,
    //         { position: "top-right" }
    //       );
}
}
 return (
<>
<button onClick={signInwithGoogle} className="cursor-pointer lg:text-[1vw]  md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw]">
              Continue with Google
            </button>
</>
)
}

export default GoogleSign