import React, { useRef, useState } from "react";
import ScripterButton from "../../../Components/ScripterButton";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

import Duration from "./Duration";
import PlatForm from "./PlatForm";
import About from "./About";
import axios from "axios";
import { toast } from "react-toastify";
const ImageScripter = () => {
  let language = [
    {
      name: "English",
      flag: "fi fi-us",
    },
    {
      name: "Mandarin Chinese",
      flag: "fi fi-cn",
    },
    {
      name: "Hindi",
      flag: "fi fi-in",
    },
    {
      name: "Arabic",
      flag: "fi fi-sa",
    },
    {
      name: "Spanish",
      flag: "fi fi-es",
    },
    {
      name: "Russian",
      flag: "fi fi-ru",
    },
    {
      name: "Portuguese",
      flag: "fi fi-pt",
    },
    {
      name: "France",
      flag: "fi fi-fr",
    },
    {
      name: "Urdu",
      flag: "fi fi-pk",
    },
    {
      name: "Bengali",
      flag: "fi fi-bd",
    },
    {
      name: "German",
      flag: "fi fi-de",
    },
    {
      name: "Japanese",
      flag: "fi fi-jp",
    },
    {
      name: "Korean",
      flag: "fi fi-kr",
    },
    {
      name: "Indonesian",
      flag: "fi fi-id",
    },
    {
      name: "Swahili",
      flag: "fi fi-ke",
    },
  ];
  let allDuration = [
    "1 Minute",
    "2 Minute",
    "3 Minute",
    "4 Minute",
    "5 Minute",
    "6 Minute",
    "7 Minute",
    "8 Minute",
    "9 Minute",
    "10 Minute",
    "11 Minute",
    "12 Minute",
  ];
  let allPlatform = [
    "Youtube",
    "Facebook",
    "Instagram",
    "TikTok",
    "Twitter",
    "LinkedIn",
  ];

  // const [isGendBrandOpen, setIsGendBrandOpen] = useState(false);

  const [isImageShow, setisImageShow] = useState(false);
  // const [duration, setDuration] = useState("3 Minutes");
  // const [isDurationOpen, setIsDurationOpen] = useState(false);
  // const [plateForm, setPlateForm] = useState("Youtube");
  // const [isPlateFormOpen, setIsPlateFormOpen] = useState(false);
  // const [isAboutOpen, setIsAboutOpen] = useState(false);

  // const [ageSelect, setageSelect] = useState([]);
  // const [selectLanguage, setselectLanguage] = useState([]);
  // const [selectGender, setselectGender] = useState([]);
  const [prompt, setprompt] = useState("");
  const [loading, setloading] = useState(false);
  const [image, setimage] = useState("");
  // const videoRef = useRef(null)
  // let selectHandleGender = (item) => {
  //   if (selectGender.includes(item)) {
  //     setselectGender(selectGender.filter((i) => i !== item));
  //   } else {
  //     setselectGender([item]);
  //   }
  // };

  // let handleSelectLang = (item) => {
  //   setselectLanguage((prevSelectedLang) => {
  //     if (prevSelectedLang.includes(item)) {
  //       return prevSelectedLang.filter((lang) => lang !== item);
  //     } else {
  //       return [...prevSelectedLang, item];
  //     }
  //   });
  // };

  // let selectAgeHandle = (item) => {
  //   if (ageSelect.includes(item)) {
  //     setageSelect(ageSelect.filter((i) => i !== item));
  //   } else {
  //     setageSelect([...ageSelect, item]);
  //   }
  // };
  let handleSubmitQuery = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/image/generate`,
        { prompt: prompt },
        {
          withCredentials: true,
        }
      );

      if (response.status==200) {
        setimage(response.data.imageUrl);
     setisImageShow(true)
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, { position: "top-right" });
    } finally {
      setloading(false);
    }
  };
  // React Component
  const handleDownload = async () => {
    const imageUrl = image
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/image/download`,
        { imageUrl }, // Use `imageUrl` instead of `imgUrl`
        {
          responseType: 'blob', // Handle binary response
          withCredentials: true,
        }
      );
  
      // Create a downloadable link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = image.split('/').pop() || 'image.jpg';
      document.body.appendChild(link);
      link.click();
      // Cleanup
      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (err) {
      console.error('Download failed:', err);
      toast.error('Failed to download image');
    }
  };
  return (
    <>
      {isImageShow ? (
        <div className="lg:w-[50vw] pt-[3vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto lg:mx-auto">
          <div className="w-full xs:h-[40%] p-1 my-5 rounded-xl md:h-[50%] lg:h-[60%] flex border border-gray-400 items-center justify-center relative">
            <img className="w-full h-full" src={image} alt="" />
          </div>

          {/* Share & Download Buttons */}
          <div className="flex justify-end">
            <div className="flex gap-6">
              <button className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[3.4vw] bg-white-50 border border-gray-500">
                Share
              </button>
              <button onClick={handleDownload} className="py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[3.4vw] videoGradient">
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:w-[50vw] min-h-screen pt-[3vw] md:w-[93vw] text-white sm:w-[90vw] xs:w-[100vw] xs:ml-auto lg:mx-auto relative ">
          <form
            onSubmit={handleSubmitQuery}
            className="p-8 m-8 rounded-xl bg-[#282828]"
          >{loading && <div className="absolute top-35 flex items-center justify-center"><p className="md:text-[12px] lg:text-[13px] sm:text-[8px] xs:text-[7px]">Generating....</p>
            <div className="rounded-lg flex items-center justify-center">
    <div className="w-4 h-4 border-3 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
          </div>}
            <textarea
              className="w-full h-[30vh] resize-none outline-none lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]"
              placeholder="Text to image"
              name=""
              id=""
              value={prompt}
              onChange={(e) => setprompt(e.target.value)}
              required
            >
              {" "}
            </textarea>
            
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
                  type="submit"
                  className="cursor-pointer py-2 px-5 rounded-lg lg:text-[0.8vw] xs:text-[2.4vw] videoGradient"
                >
                  Generate a image
                </button>
              )}
            </div>
          </form>
          {/* <div
            id="GenBrand"
            className={`w-full ${
              !isGendBrandOpen
                ? "max-h-0 overflow-x-hidden"
                : "overflow-auto max-h-full"
            } absolute top-0 left-0 bg-[#282828]`}
          >
            <div
              style={{ width: "auto" }}
              className="relative  h-full lg:pt-[4vw] md:pt-[10vw] xs:pt-[15vw] md:w-[93vw] px-[2.5vw]"
            >
              <Duration
                duration={duration}
                isDurationOpen={isDurationOpen}
                setDuration={setDuration}
                allDuration={allDuration}
                setIsDurationOpen={setIsDurationOpen}
              />
              <PlatForm
                platForm={plateForm}
                isPlatformOpen={isPlateFormOpen}
                setIsPlatformOpen={setIsPlateFormOpen}
                setPlatform={setPlateForm}
                allPlatform={allPlatform}
              />
              <About
                isAboutOpen={isAboutOpen}
                setIsAboutOpen={setIsAboutOpen}
              />

              <div className="flex items-center justify-between w-full">
                <h3 className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4.8vw] font-semibold">
                  Generative Brand Story
                </h3>
                <span
                  onClick={() => setIsGendBrandOpen(false)}
                  className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4.5vw] cursor-pointer font-semibold"
                >
                  <RxCross2 />
                </span>
              </div>
              <p className="lg:text-[0.9vw] xs:text-[2.6vw] pb-8">
                Crafting timeless style, empowering individuality, celebrating
                authentic self-expression.
              </p>
              <div className="w-full flex gap-2 items-center">
                <button
                  onClick={() => setIsDurationOpen(true)}
                  className="py-2 px-5 rounded-xl flex items-center gap-1.5 lg:text-[0.9vw] xs:text-[3.4vw] videoGradient"
                >
                  {duration}
                  <span className=" lg:text-[1.5vw] xs:text-[4.4vw] ">
                    <RiArrowDropDownLine />
                  </span>
                </button>
                <button
                  onClick={() => setIsPlateFormOpen(true)}
                  className="py-2 px-5 rounded-xl flex items-center gap-1.5 lg:text-[0.9vw] xs:text-[3.4vw] videoGradient"
                >
                  {plateForm}
                  <span className=" lg:text-[1.5vw] xs:text-[4.4vw] ">
                    <RiArrowDropDownLine />
                  </span>
                </button>
                <button
                  onClick={() => setIsAboutOpen(true)}
                  className="py-2 px-5 rounded-xl flex items-center gap-1.5 lg:text-[0.9vw] xs:text-[3.4vw] videoGradient"
                >
                  About
                  <span className=" lg:text-[1.5vw] xs:text-[4.4vw] ">
                    <RiArrowDropDownLine />
                  </span>
                </button>
              </div>
              <div className="my-8 flex flex-col items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="lg:py-[0.8vw] px-3 md:py-[1vw] bg-white/20 outline-none xs:py-[1.1vw] border border-gray-200 xs:rounded-md md:rounded-xl w-full"
                />
                <textarea
                  placeholder="Enter your phone number"
                  className="lg:py-[0.8vw] resize lg:h-[12vw] bg-white/20 outline-none md:h-[20vw] sm:h-[30vw] xs:h-[40vw] px-3 md:py-[1vw] xs:py-[1.1vw] border-1 border-gray-200 xs:rounded-md md:rounded-xl w-full"
                ></textarea>
              </div>
              <div className="flex w-full flex-wrap items-center gap-4">
                {language.map((item) => {
                  let isSelected = selectLanguage.includes(item.name);
                  return (
                    <button
                      onClick={() => handleSelectLang(item.name)}
                      className={`py-2 px-5 ${
                        isSelected
                          ? "border border-theme-purple"
                          : "border-none"
                      } rounded-lg flex items-center gap-1.5 lg:text-[0.8vw] xs:text-[2.4vw] bg-white/20`}
                    >
                      {item.name}
                      <span className={item.flag}></span>
                    </button>
                  );
                })}
              </div>
              <div className="md:my-10 xs:my-5">
                <h3 className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.4vw] font-semibold ">
                  Age Groups
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  {["All Age Groups", "Young", "Middle-Aged", "Kid", "Old"].map(
                    (items) => {
                      let isSelected = ageSelect.includes(items);
                      return (
                        <button
                          onClick={() => selectAgeHandle(items)}
                          className={`py-2 px-5 rounded-lg ${
                            isSelected
                              ? "border border-theme-purple"
                              : "border-none"
                          } flex items-center gap-1.5 lg:text-[0.8vw] xs:text-[2.4vw] bg-white/20`}
                        >
                          {items}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
              <div>
                <h3 className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.4vw] font-semibold ">
                  Gender
                </h3>
                <div className="flex items-center gap-3 mt-5">
                  {["Male", "Female"].map((items) => {
                    let isSelected = selectGender.includes(items);
                    return (
                      <button
                        onClick={() => selectHandleGender(items)}
                        className={`py-2 px-5 ${
                          isSelected
                            ? "border border-theme-purple"
                            : "border-none"
                        } rounded-lg flex items-center gap-1.5 lg:text-[0.8vw] xs:text-[2.4vw] bg-white/20`}
                      >
                        {items === "Male" ? `${items} 👨` : `${items} 👩`}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="my-5 pb-5 flex items-center gap-5">
                <button
                  onClick={() => setIsGendBrandOpen(false)}
                  className="py-2 xs:px-4 md:px-8 rounded-lg flex items-center gap-1.5 lg:text-[1.2vw] xs:text-[3.4vw] border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsGendBrandOpen(false)}
                  className="py-2 xs:px-4 md:px-8 rounded-lg flex items-center gap-1.5 lg:text-[1.2vw] xs:text-[3.4vw] bg-theme-purple"
                >
                  Apply
                </button>
              </div>
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
                  setIsGendBrandOpen={setIsGendBrandOpen}
                  width={"w-full"}
                  isLastTwo={isLastTwo}
                  text={items}
                />
              );
            })}
          </div> */}
        </div>
      )}
    </>
  );
};

export default ImageScripter;
