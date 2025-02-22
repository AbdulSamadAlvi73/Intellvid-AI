import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CgArrowLongLeft } from "react-icons/cg";

const LargeCarousel = ({
  darkMode,
  largeCarouselContent,
  updateLargeCarouselContent,
}) => {
  console.log(largeCarouselContent.carousels);

  //   ============== large Carousel ================
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
      className={` ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto lg:pb-[8vw] xs:pb-[8vw] mx-auto w-full flex flex-col items-center justify-center">
        <h3 className="lg:text-[4vw] md:text-[5vw] xs:text-[6vw] text-center font-bold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[4.5vw]">
          {largeCarouselContent.MHP1} <br />
          {largeCarouselContent.MHP2 ? (
            <span className="gradient-text">{largeCarouselContent.MHP2}</span>
          ) : (
            ""
          )}
        </h3>
        <div className="relative md:py-[2vw] xs:py-[3vw] w-full h-[25vw]">
          <Swiper
            spaceBetween={20} // Slides ke beech ka gap
            slidesPerView={3.2} // Ek baar mein 3 slides dekhein
            onSlideChange={handleSlideChange} // Slide change hone par check karte hain
            grabCursor={true} // Enable drag feature
            centeredSlides={false}
            ref={swiperRef} // Reference to Swiper instance
            className="w-full h-[30vw] "
            breakpoints={{
              914: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
              300: {
                slidesPerView: 1.5,
              },
            }}
          >
            {largeCarouselContent.carousels
              ? largeCarouselContent.carousels.map((carousel) => {
                  console.log(carousel.name);
                  return (
                    <SwiperSlide
                      className={`w-full h-[30vw] md:rounded-2xl xs:rounded-md xs:p-[2vw] md:p-[1.5vw] ${
                        darkMode
                          ? "bg-slate-800 text-white"
                          : "bg-[#f5f5f5] text-black"
                      }`}
                    >
                      <div className="w-full h-full flex">
                        <div>
                          <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide">
                            {carousel.name}
                          </h3>
                          <p className="md:text-[1.2vw] xs:text-[2.2vw] tracking-wide xs:my-[1.2vw] md:my-3 text-gray-400">
                            {carousel.disc}
                          </p>
                        </div>
                        <div>
                          <h3
                            className={`lg:text-[8vw] p-[1.5vw] ${
                              darkMode ? "text-slate-700" : "text-gray-200"
                            } md:text-[6vw] xs:text-[4vw] lg:leading-[2.6vw] md:leading-[3.5vw] xs:leading-[4.5vw] font-bold tracking-wide`}
                          >
                            {carousel.id}
                          </h3>
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
  );
};

export default LargeCarousel;
