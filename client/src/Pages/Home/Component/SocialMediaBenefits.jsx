import React from "react";
import { Link } from "react-router-dom";

const SocialMediaBenefits = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <h3 className="lg:text-[4vw] md:text-[5vw] xs:text-[6vw] text-center font-bold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[4.5vw]">
          Welcome to Intellivid: Empowering
          <br />
          <span className="gradient-text">
            Small Businesses and Influencers
          </span>
        </h3>
        <div className="flex flex-col xs:gap-[5vw] md:gap-[3vw] pt-12 w-full">
          <div
            className={`${
              darkMode ? "bg-slate-800 text-white" : "bg-[#f5f5f5] text-black"
            } rounded-2xl overflow-hidden gap-[2vw] w-full`}
          >
            <div className=" p-[1.5vw] justify-between">
              <p className="lg:text-[2.5vw] lg:leading-[3vw] md:leading-[4vw] md:text-[3vw] xs:leading-[4.5vw] sm:text-[3.5vw] xs:text-[4vw] font-bold">
                Unlock Your Business Potential with Intellivid
              </p>
              <p className=" lg:py-[1.4vw] xs:py-[2.1vw] tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                In today’s fast-paced digital landscape, small businesses need
                innovative solutions to stand out and grow. At Intellivid, we
                understand the unique challenges you face and are here to help
                you thrive. Our cutting-edge service harnesses the power of
                artificial intelligence to transform your video marketing
                strategy, offering you a multitude of benefits:
              </p>
              <ul className="list-disc list-inside  gap-[1.3vw]">
                <img
                  className="lg:w-[20vw] xs:w-full lg:float-right lg:h-[20vw] object-cover mr-4"
                  src="/imgs/AnimationMaker/Animator_content_creator_a3c7c1a44c.webp"
                  alt=""
                />
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] lg:pb-[1.3vw] xs:pb-[1.8vw] xs:mt-[2vw]">
                  <span className="font-bold">Cost-Effective Marketing:</span>{" "}
                  With Intellivid, you can create high-quality videos without
                  the need for expensive equipment or a professional film crew.
                  Our AI technology generates engaging video content quickly and
                  affordably, allowing you to allocate your budget to other
                  critical areas of your business.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-bold">Time Efficiency:</span> As a small
                  business owner, your time is precious. Intellivid enables you
                  to produce videos in minutes, not hours. This rapid turnaround
                  means you can focus on what you do best—running your
                  business—while we handle your video content needs.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-bold">Enhanced Engagement:</span> Video
                  content is proven to capture attention and drive engagement
                  like no other medium. With Intellivid, you can create visually
                  stunning videos that resonate with your audience, helping you
                  to foster deeper connections and build a loyal customer base.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-semibold">
                    Versatile Content Creation:
                  </span>{" "}
                  From product showcases to customer testimonials, promotional
                  campaigns to educational content, Intellivid empowers you to
                  create a diverse range of videos tailored to your business
                  objectives. Our platform makes it easy to adapt your messaging
                  for different social media platforms, ensuring your content is
                  always relevant and engaging.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-bold">Data-Driven Insights:</span> Our
                  AI technology not only creates videos but also analyzes their
                  performance. Gain valuable insights into what works best for
                  your audience and refine your strategy for maximum impact.
                </li>
              </ul>
            </div>
            {/* This clears the float, ensuring the text starts below the image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBenefits;
