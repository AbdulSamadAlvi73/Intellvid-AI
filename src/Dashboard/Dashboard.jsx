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
const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/text-to-script" element={<TextToScript />} />
        <Route path="/video-generator" element={<VideoGenerator />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/faceless-videos" element={<FacelessVdeo />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile-info" element={<ProfileInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Dashboard;
