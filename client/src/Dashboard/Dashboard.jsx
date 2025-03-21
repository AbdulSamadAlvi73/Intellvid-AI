import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TextToScript from "./Pages/TextToScript/TextToScript";
import VideoGenerator from "./Pages/VideoGenerator/VideoGenerator";
import ImageGenerator from "./Pages/ImageGenerator/ImageGenerator";
import FacelessVdeo from "./Pages/FacelessVideo/FacelessVdeo";
import ProfileInfo from "./Pages/ProfileInfo/ProfileInfo";
import Library from "./Pages/Library/Library";
import UserWrapper from "../Component/UserWrapper";
import VerifyEmail from "./Pages/UserVerification/verifyEmail/VerifyEmail";
import Forgetpass from "./Pages/UserVerification/ForgetPassword/Forgetpass";
import Resetpass from "./Pages/UserVerification/ForgetPassword/Resetpass";
import Success from "./Pages/Payment/Success";
const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/text-to-script" element={<UserWrapper><TextToScript /></UserWrapper>} />
        <Route path="/video-generator" element={<UserWrapper><VideoGenerator /></UserWrapper>} />
        <Route path="/image-generator" element={<UserWrapper><ImageGenerator /></UserWrapper>} />
        <Route path="/faceless-videos" element={<UserWrapper><FacelessVdeo /></UserWrapper>} />
        <Route path="/library" element={<UserWrapper><Library /></UserWrapper>} />
        <Route path="/profile-info" element={<UserWrapper><ProfileInfo /></UserWrapper>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/verify-email" element={<UserWrapper><VerifyEmail/></UserWrapper>} />
      <Route path='/auth/forgetpassword' element={<Forgetpass/>}/>
      <Route path='/payment/success' element={<Success/>}/>


      </Routes>
    </>
  );
};

export default Dashboard;
