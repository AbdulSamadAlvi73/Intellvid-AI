import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CgArrowLongLeft } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const MiniCarousel = ({ darkMode, miniCarouselContent }) => {
  // ================= Carousel Logic Here =====================

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const swiperRef = useRef(null); // Swiper instance ke liye reference

  const handleSlideChange = (swiper) => {
    // Check if carousel is at the start (left)
    setIsAtStart(swiper.isBeginning);

    // Check if carousel is at the end (right)
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <h3 className="lg:text-[4vw] md:text-[5vw] xs:text-[6vw] text-center font-bold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[4.5vw]">
          {miniCarouselContent.mainHeading1} <br />
          {miniCarouselContent.mainHeading2 ? (
            <span className="gradient-text">
              {miniCarouselContent.mainHeading2}
            </span>
          ) : (
            ""
          )}
        </h3>
        <div
          className={`md:rounded-3xl xs:rounded-md ${
            darkMode ? "bg-slate-800 text-white" : "bg-[#f2f2f2] text-black"
          } mt-[2vw] p-[2vw] gap-[2vw] grid w-full xs:grid-cols-1 lg:grid-cols-2`}
        >
          <div className="flex flex-col gap-[0.5vw]">
            {miniCarouselContent.card
              ? miniCarouselContent.card.map((item) => {
                  return (
                    <div className="flex gap-[2vw]">
                      <div>
                        <span>{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                          {item.cardH}
                        </h3>
                        <p className="md:text-[1.2vw] xs:text-[2.2vw] tracking-wide xs:my-4 md:my-3 text-gray-400">
                          {item.cardP}
                        </p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="relative">
            <Swiper
              spaceBetween={20} // Slides ke beech ka gap
              slidesPerView={1.5} // Ek baar mein 3 slides dekhein
              onSlideChange={handleSlideChange} // Slide change hone par check karte hain
              grabCursor={true} // Enable drag feature
              centeredSlides={true} // Centered slide view
              ref={swiperRef} // Reference to Swiper instance
              className="w-full h-full"
            >
              {miniCarouselContent.carouselData
                ? miniCarouselContent.carouselData.map((item) => {
                    return (
                      <SwiperSlide
                        className={`w-full h-full rounded-2xl p-[1.5vw] ${
                          darkMode
                            ? "bg-slate-900 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-between py-5 gap-[1vw]">
                          <div className="flex flex-col gap-[0.7vw] items-center">
                            <div className="w-[5vw] h-[5vw] flex items-center justify-center overflow-hidden bg-red-400 rounded-full">
                              {item.img ? (
                                <img
                                  className="w-full h-full object-cover"
                                  src={item.img}
                                  alt=""
                                />
                              ) : (
                                <span className="text-[2.5vw] font-bold text-white">
                                  P
                                </span>
                              )}
                            </div>
                            <h4 className="lg:text-[2.5vw] text-center md:text-[2.7vw] xs:text-[3.2vw] lg:leading-[2.6vw] md:leading-[3vw] xs:leading-[3.7vw] mt-3 font-bold tracking-wide">
                              {item.carouselHeading}
                            </h4>
                            <p className="md:text-[1.2vw] xs:text-[2.2vw] tracking-wide xs:my-4 md:my-3 text-gray-400">
                              {item.name}
                            </p>
                          </div>
                          <div>
                            <h3 className="lg:text-[0.7vw] text-center md:text-[1vw] sm:text-[1.5vw] xs:text-[1.7vw]">
                              Capterra
                            </h3>
                            {item.stars === 5 ? (
                              <div className="flex lg:text-[0.8vw] md:text-[1.4vw] xs:text-[1.8vw] items-center gap-[0.3vw]">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                : ""}
            </Swiper>

            {/* Left Button */}
            <button
              className={`absolute z-20 transition-all duration-300 text-[1.8vw] left-0 top-1/2 transform -translate-y-1/2 ${
                isAtStart ? "opacity-0 scale-0" : "opacity-100 scale-100"
              } bg-black text-white rounded-full`}
              onClick={() => swiperRef.current.swiper.slidePrev()} // Use swiper instance to go to the previous slide
            >
              <span className="w-full flex mx-auto py-[0.6vw] px-[2vw]  h-full">
                <CgArrowLongLeft />
              </span>
            </button>

            {/* Right Button */}
            <button
              className={`absolute transition-all duration-300 text-[1.8vw] z-20 right-0 top-1/2 transform -translate-y-1/2 ${
                isAtEnd ? "opacity-0 scale-0" : "opacity-100 scale-100"
              } bg-black text-white rounded-full`}
              onClick={() => swiperRef.current.swiper.slideNext()} // Use swiper instance to go to the next slide
            >
              <span className="w-full flex rotate-180 mx-auto py-[0.6vw] px-[2vw]  h-full">
                <CgArrowLongLeft />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCarousel;
