import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const GenerateFaceless = ({ videoUrl ,setIsVideoContentShow}) => {
     const videoRef = useRef(null);
      const progressBarRef = useRef(null);
      const buttonRef = useRef(null);
      const [isVideoPlay, setisVideoPlay] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0);
      const [isDragging, setIsDragging] = useState(false);
      let handlePlayVideo = async () => {
        const video = videoRef.current;
        console.log("hello");
    
        
        if (video) {
          if (isVideoPlay) {
            await video.pause();
            setisVideoPlay(false);
          } else {
            await video.play();
            setisVideoPlay(true);
          }
        }
        console.log(isplay);
      };
      console.log(videoRef.current);
    
      // Video ki current time aur duration track karna
      const handleTimeUpdate = () => {
        if (videoRef.current) {
          console.log(videoRef.current);
    
          setCurrentTime(videoRef.current.currentTime);
        } else {
          console.log("video not found");
        }
      };
    
      const handleLoadedMetadata = () => {
        if (videoRef.current) {
          setDuration(videoRef.current.duration);
        }
      };
    
      useEffect(() => {
        const video = videoRef.current;
        if (video) {
          video.addEventListener("timeupdate", handleTimeUpdate);
          video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
          return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
          };
        }
      }, []);
    
      // Progress bar ki width calculate karna
      const progress = (currentTime / duration) * 100;
    
      // Video ko drag karte waqt current time update karna
      const handleMouseDown = (e) => {
        setIsDragging(true);
        handleProgressDrag(e);
      };
    
      const handleMouseMove = (e) => {
        if (isDragging) {
          handleProgressDrag(e);
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      let showingPauseButton = () => {
        buttonRef.current.classList.remove("opacity-0", "scale-0");
        buttonRef.current.classList.add("opacity-100", "scale-100");
      };
    
      const handleProgressDrag = (e) => {
        if (progressBarRef.current) {
          const progressBar = progressBarRef.current;
          const progressBarRect = progressBar.getBoundingClientRect();
          const offsetX = e.clientX - progressBarRect.left;
          const newProgress = Math.min(
            Math.max(offsetX / progressBarRect.width, 0),
            1
          );
          const newTime = newProgress * duration;
          setCurrentTime(newTime);
          if (videoRef.current) {
            videoRef.current.currentTime = newTime;
          }
        }
      };
    
      // console.log(progress);
    
      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
      };
      const handleDownloadVideo = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/video/download`,
            {
              withCredentials: true,
              responseType: 'blob', 
            }
          );
      

          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const url = window.URL.createObjectURL(blob);
          const filename = 'output.mp4';
      
        
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
      

          link.remove();
          window.URL.revokeObjectURL(url);
        } catch (err) {
          console.error("Download error:", err);
        }
      };
  return (
   <>
       <div className="lg:w-[50vw] pt-[3vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto lg:mx-auto h-full ">
      <div className="w-full h-[60%] flex items-center justify-center relative">
        <div
          onClick={handlePlayVideo}
          ref={buttonRef}
          className={`bg-black/40 lg:w-[6vw] ${
            isVideoPlay ? "scale-0 opacity-0 " : "scale-100 opacity-100"
          } md:w-[7vw] sm:w-[8vw] transition-all duration-700 xs:w-[9vw] absolute z-10 cursor-pointer rounded-full lg:h-[6vw] md:h-[7vw] sm:h-[8vw] xs:h-[9vw] flex items-center justify-center`}
        >
          <svg
            className="md:w-[2vw] xs:w-[5vw] md:h-[2vw] xs:h-[5vw]"
            viewBox="0 0 43 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 19.3038C44 21.6132 44 27.3867 40 29.6962L9.25 47.4497C5.25 49.7591 0.249998 46.8723 0.249998 42.2535L0.249999 6.74648C0.25 2.12768 5.25 -0.759077 9.25 1.55032L40 19.3038Z"
              fill="white"
            />
          </svg>
        </div>
        <video
          ref={videoRef}
          onMouseEnter={showingPauseButton}
          loop

          src={videoUrl}
          // poster="/imgs/dashboard/videoGen.png"
          className="w-full h-full object-cover"
        >
          <source src="/imgs/dashboard/videoGen.png" type="" />
        </video>
      </div>
      <div className="py-8 px-5 flex flex-col gap-4">
        <div
          ref={progressBarRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseDown={handleMouseDown}
          className="w-full h-2 flex bg-gray-500 rounded-lg"
        >
          <div
            className={`h-full relative  bg-theme-purple`}
            style={{ width: `${progress}%` }}
          >
            <svg
              className="absolute right-0 -translate-y-1/2 top-1/2"
              width="5"
              height="33"
              viewBox="0 0 5 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="5"
                height="33"
                rx="2.5"
                fill="url(#paint0_linear_509_1435)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_509_1435"
                  x1="2.5"
                  y1="0"
                  x2="2.5"
                  y2="33"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BD17BD" />
                  <stop offset="1" stop-color="#D05BFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {isDragging && (
            <div
              className="h-full relative bg-theme-purple"
              style={{ left: `${progress}%` }}
            ></div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p>00:{formatTime(currentTime)}</p>
          <p>00:{formatTime(duration)}</p>
        </div>
      </div>
      {/* Share & Download Buttons */}
      <div className="flex justify-end">
        <div className="flex gap-6">
          <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[3.4vw] bg-white-50 border border-gray-500">
            Share
          </button>
          <button onClick={()=>setIsVideoContentShow(false)} className="cursor-pointer py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[3.4vw] bg-white-50 border border-gray-500">
            Close
          </button>
          <button
            onClick={() => handleDownloadVideo(videoUrl)}
            className="cursor-pointer py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[3.4vw] videoGradient"
          >
            Download
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default GenerateFaceless