import React, { useState } from "react";
import ScripterButton from "../../../Components/ScripterButton";
import axios from "axios";
import { toast } from "react-toastify";
import GeneratedVideo from "../../VideoGenerator/Components/GeneratedVideo";
import GenerateFaceless from "../../../Components/GenerateFaceless";

const FaceScripter = () => {
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isVideoContentShow, setIsVideoContentShow] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!script) {
        toast.error("Write Something!", { position: "top-right" });
        return;
      }
  
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/facelessvideo/generate`,
        { script },
        { responseType: "blob", withCredentials: true } // Request as Blob (video)
      );
  
      if (response.status === 200) {
        const videoBlob = new Blob([response.data], { type: "video/mp4" });
        const videoObjectUrl = URL.createObjectURL(videoBlob);
  
        setVideoUrl(videoObjectUrl);
        toast.success("Generated Successfully", { position: "top-right" });
  
        // Reset States
        setScript("");
        setIsVideoContentShow(true);
      }
    } catch (err) {
      // Check if the error response is a Blob and convert to JSON
      if (err.response && err.response.data instanceof Blob) {
        const errorText = await err.response.data.text();
        const errorData = JSON.parse(errorText);
        toast.error(errorData.message, {
          position: "top-right",
        });
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        });
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
    {isVideoContentShow ?( <GenerateFaceless setIsVideoContentShow={setIsVideoContentShow} videoUrl = {videoUrl} />):(
<div className="lg:w-[50vw] pt-[3vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto lg:mx-auto h-fit ">
<div className="p-8 m-8 rounded-xl bg-[#282828]">
{loading && <div className="absolute top-35 flex items-center justify-center"><p className="md:text-[12px] lg:text-[13px] sm:text-[8px] xs:text-[7px]">Generating....</p>
      <div className="rounded-lg flex items-center justify-center">
<div className="w-4 h-4 border-3 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
</div>
    </div>}
  <textarea
    className="w-full h-[30vh] resize-none outline-none lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]"
    placeholder="Text to video"
    name=""
    id=""
    value={script}
    onChange={(e)=>setScript(e.target.value)}
  ></textarea>
  <div className="flex justify-between w-full items-center">
    <p className=" text-gray-500 lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]">
      0/320000
    </p>
    {loading ? (
                             <div className="bg-gray-400 px-5 py-2 rounded-lg flex items-center justify-center videoGradient ">
<div className="w-5 h-5 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
</div>
         
        ) : (
          <button
          onClick={handleSubmit}
            type="submit"
            className="cursor-pointer py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient"
          > 
            Generate a Faceless Video
          </button>
        )}
  </div>
</div>
<div className="px-8 grid md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-4 gap-4 place-items-center items-center">
  {[
    "Create AI Shorts",
    "Create AI Explainer",
    "Create Animated Film",
    "Create Scripted Video",
    "Educational Series",
    "Interactive Videos",
  ].map((items, idx) => {
    const isLastTwo = idx >= 4;
    return (
      <ScripterButton
        key={idx}
        idx={idx}
        width={"w-full"}
        isLastTwo={isLastTwo}
        text={items}
      />
    );
  })}
</div>

</div>
    )}
    
    </>
    
  );
};

export default FaceScripter;
