import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const CompanyContent = ({ darkMode }) => {
  return (
    <div
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-[75vw] relative px-5 font-roboto mx-auto w-full flex flex-col items-center justify-center md:pb-32">
        <h2 className="lg:text-[4vw] xs:pt-5 md:py-10 text-center md:text-[5vw] xs:text-[5vw] xs:leading-[6.5vw] md:leading-[4.2vw] lg:leading-[4.5vw] mt-3 font-bold tracking-wide">
          Every Company Is A Content <br /> Company
        </h2>
        <div className="grid lg:grid-cols-2 w-full place-items-center xs:py-9 md:py-16">
          <div>
            <h2 className="lg:text-[3vw] md:text-[4vw] xs:text-[5vw] font-semibold md:leading-[4.6vw] xs:leading-[5.6vw] lg:leading-[3.5vw]">
              Generate months of social media content in minutes
            </h2>
            <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide xs:my-4 md:my-7 text-gray-400">
              Explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account
              of the system, and expound the actual teachings of the great
              explorer of the truth, the master-builder of human happiness.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <svg
                  className="lg:w-8 md:w-4 sm:w-6 xs:w-[7vw] lg:mt-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.08984C8.85417 2.08984 7.77344 2.30469 6.75781 2.73438C5.74219 3.17708 4.85677 3.77604 4.10156 4.53125C3.34635 5.28646 2.75391 6.16536 2.32422 7.16797C1.88151 8.18359 1.66016 9.26432 1.66016 10.4102C1.66016 11.569 1.88151 12.6497 2.32422 13.6523C2.75391 14.668 3.34635 15.5534 4.10156 16.3086C4.85677 17.0638 5.74219 17.6562 6.75781 18.0859C7.77344 18.5286 8.85417 18.75 10 18.75C11.1458 18.75 12.2266 18.5286 13.2422 18.0859C14.2578 17.6562 15.1432 17.0638 15.8984 16.3086C16.6536 15.5534 17.2461 14.668 17.6758 13.6523C18.1185 12.6497 18.3398 11.569 18.3398 10.4102C18.3398 9.26432 18.1185 8.18359 17.6758 7.16797C17.2331 6.16536 16.6374 5.28646 15.8887 4.53125C15.14 3.77604 14.2578 3.17708 13.2422 2.73438C12.2266 2.30469 11.1458 2.08984 10 2.08984ZM13.9453 8.47656L9.35547 13.4766C9.29036 13.5677 9.20247 13.6361 9.0918 13.6816C8.98112 13.7272 8.86719 13.75 8.75 13.75C8.63281 13.75 8.51888 13.7272 8.4082 13.6816C8.29753 13.6361 8.20964 13.5677 8.14453 13.4766L6.05469 11.2109C5.98958 11.1328 5.9375 11.0449 5.89844 10.9473C5.85938 10.8496 5.83984 10.7487 5.83984 10.6445C5.83984 10.4102 5.92122 10.2116 6.08398 10.0488C6.24674 9.88607 6.4388 9.80469 6.66016 9.80469C6.79036 9.80469 6.90755 9.83073 7.01172 9.88281C7.11589 9.9349 7.20703 10 7.28516 10.0781L8.75 11.6797L12.7148 7.34375C12.793 7.26562 12.8841 7.20378 12.9883 7.1582C13.0924 7.11263 13.2096 7.08984 13.3398 7.08984C13.5612 7.08984 13.7533 7.17122 13.916 7.33398C14.0788 7.49675 14.1602 7.6888 14.1602 7.91016C14.1602 8.02734 14.1406 8.13151 14.1016 8.22266C14.0625 8.3138 14.0104 8.39844 13.9453 8.47656Z"
                    fill="#55B59E"
                  />
                </svg>
                <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide text-gray-400">
                  Analyze your business cost easily with group transaction
                  thorugh tagging feature.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <svg
                  className="lg:w-8 md:w-4 sm:w-6 xs:w-[7vw] lg:mt-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.08984C8.85417 2.08984 7.77344 2.30469 6.75781 2.73438C5.74219 3.17708 4.85677 3.77604 4.10156 4.53125C3.34635 5.28646 2.75391 6.16536 2.32422 7.16797C1.88151 8.18359 1.66016 9.26432 1.66016 10.4102C1.66016 11.569 1.88151 12.6497 2.32422 13.6523C2.75391 14.668 3.34635 15.5534 4.10156 16.3086C4.85677 17.0638 5.74219 17.6562 6.75781 18.0859C7.77344 18.5286 8.85417 18.75 10 18.75C11.1458 18.75 12.2266 18.5286 13.2422 18.0859C14.2578 17.6562 15.1432 17.0638 15.8984 16.3086C16.6536 15.5534 17.2461 14.668 17.6758 13.6523C18.1185 12.6497 18.3398 11.569 18.3398 10.4102C18.3398 9.26432 18.1185 8.18359 17.6758 7.16797C17.2331 6.16536 16.6374 5.28646 15.8887 4.53125C15.14 3.77604 14.2578 3.17708 13.2422 2.73438C12.2266 2.30469 11.1458 2.08984 10 2.08984ZM13.9453 8.47656L9.35547 13.4766C9.29036 13.5677 9.20247 13.6361 9.0918 13.6816C8.98112 13.7272 8.86719 13.75 8.75 13.75C8.63281 13.75 8.51888 13.7272 8.4082 13.6816C8.29753 13.6361 8.20964 13.5677 8.14453 13.4766L6.05469 11.2109C5.98958 11.1328 5.9375 11.0449 5.89844 10.9473C5.85938 10.8496 5.83984 10.7487 5.83984 10.6445C5.83984 10.4102 5.92122 10.2116 6.08398 10.0488C6.24674 9.88607 6.4388 9.80469 6.66016 9.80469C6.79036 9.80469 6.90755 9.83073 7.01172 9.88281C7.11589 9.9349 7.20703 10 7.28516 10.0781L8.75 11.6797L12.7148 7.34375C12.793 7.26562 12.8841 7.20378 12.9883 7.1582C13.0924 7.11263 13.2096 7.08984 13.3398 7.08984C13.5612 7.08984 13.7533 7.17122 13.916 7.33398C14.0788 7.49675 14.1602 7.6888 14.1602 7.91016C14.1602 8.02734 14.1406 8.13151 14.1016 8.22266C14.0625 8.3138 14.0104 8.39844 13.9453 8.47656Z"
                    fill="#55B59E"
                  />
                </svg>
                <p className="md:text-[1.1vw] xs:text-[2.5vw] tracking-wide text-gray-400">
                  Analyze your business cost easily with group transaction
                  thorugh tagging feature.
                </p>
              </div>
            </div>
            <Link className="md:py-[0.9vw] xs:px-1.5 bg-[#3f3eed] w-fit md:px-[1.8vw] mt-8 flex items-center gap-2.5 xs:py-1.5 text-center xs:text-[3.5vw] md:text-[1.1vw] text-white rounded-[0.5vw] ">
              Start Free Trial Today
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div>
            <img
              className="w-full"
              src="/imgs/AboutPage/about-1024x866.png.png"
              alt=""
            />
          </div>
        </div>
        <div className="py-10 w-full">
          <h3 className="lg:text-[2.8vw] md:text-[2.8vw] xs:text-[4.8vw] sm:text-[3.8vw] text-center pb-5 font-semibold tracking-wide">
            Who uses our product
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-10 w-full justify-between">
            <img
              className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
              src="/imgs/Team/brand-1-1.png.png"
              alt=""
            />
            <img
              className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
              src="/imgs/Team/brand-1-2.png.png"
              alt=""
            />
            <img
              className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
              src="/imgs/Team/brand-1-3.png.png"
              alt=""
            />
            <img
              className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
              src="/imgs/Team/brand-1-4.png.png"
              alt=""
            />
            <img
              className="xl:w-[10vw] sm:w-[13vw] xs:w-[17vw]"
              src="/imgs/Team/brand-1-5.png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyContent;
