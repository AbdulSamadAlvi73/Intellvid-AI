import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Testimonial = ({ darkMode }) => {
  let testmonial = [
    {
      start: {
        fill: [<FaStar />, <FaStar />, <FaStar />],
        withOutFill: [<CiStar />, <CiStar />, <CiStar />],
      },
      title: "It Gave Me Back Quality Time To Spend w Friends & Family...",
      disc: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      img: "/imgs/AboutPage/testimonial/sm-d.jpg.png",
      name: "Fleix Everard",
      designation: "HR, Blue Soft Sol",
    },
    {
      start: {
        fill: [<FaStar />, <FaStar />, <FaStar />],
        withOutFill: [<CiStar />, <CiStar />, <CiStar />],
      },
      title: "A year of organic marketing in about 30 minutes",
      disc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      img: "/imgs/AboutPage/testimonial/sm-e.jpg.png",
      name: "Booris Elbert",
      designation: "Green Tech",
    },
    {
      start: {
        fill: [<FaStar />, <FaStar />, <FaStar />],
        withOutFill: [<CiStar />, <CiStar />, <CiStar />],
      },
      title: "Just wanna shout out the whole team for this amazing tool",
      disc: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      img: "/imgs/AboutPage/testimonial/sm-g.jpg.png",
      name: "Ivor Herbert",
      designation: "Manager, Airlines",
    },
  ];
  return (
    <div
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] relative px-5 font-roboto mx-auto w-full flex flex-col justify-center md:py-32">
        <h3 className="text-theme-purple xs:text-[4.5vw] md:text-[1.3vw] uppercase text-center">
          Testimonials
        </h3>
        <h3 className="md:text-[2.8vw] md:leading-[3.4vw] xs:text-[4.8vw] xs:leading-[5.8vw] sm:text-[3.8vw] text-center pb-5 font-semibold tracking-wide">
          CopyGen is rated 4.9/5 stars in <br /> over 2,000 reviews
        </h3>
        <div className="py-10 grid lg:grid-cols-3 gap-[1.2vw]">
          {testmonial.map((items, idx) => {
            return (
              <div
                key={idx}
                className={`md:p-[1.4vw] xs:p-5 rounded-xl flex flex-col gap-4 ${
                  darkMode ? "bg-slate-800" : "bg-white"
                }`}
                style={{
                  boxShadow: `0 0 20px ${darkMode ? "#d05bff" : "#dbdbdb"}`,
                }}
              >
                <div className="flex items-center text-yellow-500 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[3.1vw] xs:text-[4.1vw]  gap-1.5">
                  {items.start.fill.map((star) => star)}
                  {items.start.withOutFill.map((star) => star)}
                </div>
                <h3 className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[3.3vw] xs:text-[4.3vw] font-bold">
                  {items.title}
                </h3>
                <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide text-gray-400">
                  {items.disc}
                </p>
                <div className="flex mt-3 items-center gap-2.5">
                  <div className="lg:w-[3vw] md:w-[4vw] sm:w-[5vw] xs:w-[6vw] overflow-hidden rounded-full lg:h-[3vw] md:h-[4vw] sm:h-[5vw] xs:h-[6vw]">
                    <img
                      className="w-full h-full object-cover"
                      src={items.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="lg:text-[1.3vw] md:text-[2.3vw] leading-4 sm:text-[3.3vw] xs:text-[4.3vw] font-bold">
                      {items.name}
                    </h3>
                    <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide text-gray-400">
                      {items.designation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
