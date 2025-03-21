import React, { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css"; // Flag Icon CSS ko import karein
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer";
import ScrollToTopButton from "./Component/ScrollToTopButton";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Dashboard/Dashboard";
import AIVideoGen from "./Pages/AI_Video_Gen/AIVideoGen";
import AIImageGen from "./Pages/AI_Image_Gen/AIImageGen";
import AnimationMaker from "./Pages/Animation_Maker/AnimationMaker";
import LinkToVideo from "./Pages/LinkToVideo/LinkToVideo";
import MovieMaker from "./Pages/MovieMaker/MovieMaker";
import MemeMaker from "./Pages/MemeMaker/MemeMaker";
import TikTokVideoGen from "./Pages/TiktokVideoGen/TikTokVideoGen";
import AIClipGen from "./Pages/AIClipGen/AIClipGen";
import YoutubeShortsGen from "./Pages/YoutubeShortsGen/YoutubeShortsGen";
import AISubtitleGen from "./Pages/AISubtitleGen/AISubtitleGen";
import SlideShowGen from "./Pages/SlideShowGenareted/SlideShowGen";
import StudioLogin from "./Component/StudioLogin";
import { ToastContainer } from "react-toastify";
import UserContext from "./Context/UserContext";

function App() {
  // Initial state: check if dark mode is already saved in localStorage
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the stored theme in localStorage on component mount
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // Save the user's choice in localStorage
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <ToastContainer />
      <UserContext>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/help"
          element={<About darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/pricing"
          element={<Pricing darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/ai-video-generator"
          element={<AIVideoGen darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/ai-image-generator"
          element={<AIImageGen darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/animation-maker"
          element={
            <AnimationMaker darkMode={darkMode} toggleMode={toggleMode} />
          }
        />
        <Route
          path="/link-to-video"
          element={<LinkToVideo darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/movie-maker"
          element={<MovieMaker darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/ai-video-meme-maker"
          element={<MemeMaker darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/tiktok-video-maker"
          element={
            <TikTokVideoGen darkMode={darkMode} toggleMode={toggleMode} />
          }
        />
        <Route
          path="/ai-clip-generator"
          element={<AIClipGen darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/youtube-shorts-generator"
          element={
            <YoutubeShortsGen darkMode={darkMode} toggleMode={toggleMode} />
          }
        />
        <Route
          path="/ai-subtitle-generator"
          element={
            <AISubtitleGen darkMode={darkMode} toggleMode={toggleMode} />
          }
        />
        <Route
          path="/slide-show-maker"
          element={<SlideShowGen darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      </UserContext>
    </>
  );
}

export default App;
