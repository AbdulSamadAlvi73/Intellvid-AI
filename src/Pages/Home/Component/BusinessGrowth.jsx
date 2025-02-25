import React from "react";

const BusinessGrowth = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] px-5 font-roboto lg:pb-[8vw] xs:pb-[5vw] mx-auto w-full flex flex-col items-center justify-center">
        <h3 className="lg:text-[4vw] md:text-[5vw] xs:text-[6vw] text-center font-bold md:leading-[5.6vw] xs:leading-[7.6vw] lg:leading-[4.5vw]">
          Grow you Social Media
          <br />
          <span className="gradient-text">
            Presence FAST….with the power of INTELLIVID
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
                Amplify Your Influence with Intellivid
              </p>
              <p className=" lg:py-[1.4vw] xs:py-[2.1vw] tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                For influencers and content creators, maintaining a consistent
                posting schedule across multiple social media platforms can be
                overwhelming. Intellivid is here to simplify your content
                creation process:
              </p>
              <ul className="list-disc list-inside  gap-[1.3vw]">
                <img
                  className="lg:w-[20vw] xs:w-full lg:float-right lg:h-[20vw] object-cover mr-4"
                  src="/imgs/AnimationMaker/Business_Animation_02_9f539bd6e0.webp"
                  alt=""
                />
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] sm:mt-[1.5vw] lg:pb-[1.3vw] xs:pb-[1.8vw] xs:mt-[2vw]">
                  <span className="font-bold">
                    Lightning-Fast Video Generation:
                  </span>{" "}
                  With our AI-powered service, you can produce high-quality,
                  shareable videos in an instant. Say goodbye to long editing
                  sessions and hello to a streamlined workflow that keeps your
                  content fresh and relevant.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-semibold">Stay Ahead of Trends:</span>{" "}
                  The digital landscape is constantly evolving, and so are your
                  audience's expectations. Intellivid allows you to quickly
                  adapt to new trends and topics, ensuring that your content is
                  always timely and engaging.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-semibold">
                    Cross-Platform Compatibility:
                  </span>{" "}
                  Whether you’re posting on Instagram, TikTok, YouTube, or any
                  other platform, our videos are optimized for each channel.
                  This versatility enables you to maintain a cohesive brand
                  presence across all your platforms.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-bold">Boost Your Creativity:</span> With
                  the time saved on video production, you can focus on what
                  truly matters—creating compelling content that showcases your
                  personality and brand. Intellivid frees you to experiment with
                  new ideas and formats, enhancing your creative output.
                </li>
                <li className=" tracking-wide xs:text-[2.5vw] lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] lg:pb-[1.3vw] xs:pb-[1.8vw] sm:mt-[1.5vw] xs:mt-[2vw]">
                  <span className="font-bold">Grow Your Audience:</span>{" "}
                  Consistency is key in building your online presence, and with
                  Intellivid, you can keep your audience engaged with regular,
                  high-quality video content. As you captivate viewers, watch
                  your follower count soar
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

export default BusinessGrowth;
