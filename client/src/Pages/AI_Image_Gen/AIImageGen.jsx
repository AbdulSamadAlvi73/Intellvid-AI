import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../Context/ChangeContent";
import Header from "../../Component/Header";
import MobileHeader from "../../Component/MobileHeader";
import IntellvidCommonHero from "../../Common/IntellvidCommonHero";
import CommonCard from "../../Common/CommonCard";
import MiniCarousel from "../../Common/MiniCarousel";
import CommonPricing from "../../Common/CommonPricing";
import LargeCarousel from "../../Common/LargeCarousel";
import FAQs from "../../Component/FAQs";
import Footer from "../../Component/Footer";
import StudioSignup from "../../Component/StudioSignup";
import StudioLogin from "../../Component/StudioLogin";

const AIImageGen = ({ darkMode, toggleMode }) => {
  const targetSection = useRef(null);

  useEffect(() => {
    // Function to scroll to the target section
    const handleScrollToSection = () => {
      targetSection.current?.scrollIntoView({
        behavior: "smooth", // Smooth scroll effect
        block: "start", // Scroll to the top of the target
      });
    };
    handleScrollToSection();
  }, []);

  //   Using Content Change Context
  const {
    heroContent,
    updateHeroContent,
    commonCardContent,
    updateCommonCardContent,
    miniCarouselContent,
    miniUpdateCarouselContent,
    largeCarouselContent,
    updateLargeCarouselContent,
  } = useContext(MyContext);

  // Video intellvidHeroContent Hero Section
  let intellvidHeroContent = {
    headingPart1: "AI",
    headingPart2: "Image Generator",
    disc: "Create AI images using our AI Image Generator. Prompt invideo AI and turn your idea into an image.",
    button: "Get started for free",
    creditText: "No credit card required",
    img: "/imgs/OnlineImageEditor/Simplified_Editor_UI_97243bed68.webp",
  };
  useEffect(() => {
    const changeData = () => {
      heroContent ? updateHeroContent(intellvidHeroContent) : "";
    };
    changeData();
  }, []);

  // Common Card Data is here
  let cardData = {
    MHP1: "Make AI generated images",
    MHP2: "with text prompts",
    cards: [
      {
        cardHeading: "Instant AI images, crafted for creators",
        cardDisc:
          "Use invideo AI to generate stunning images for your blogs, YouTube, Instagram, Facebook, and more.",
        cardBtn: "Generate AI Image",
        cardImg: "/imgs/OnlineImageEditor/imageEditorCard2.webp",
      },
      {
        cardHeading: "Text to image AI for marketers",
        cardDisc:
          "Our AI text-to-image tool makes it easy to create marketing visuals by turning text prompts into professional-quality images.",
        cardBtn: "Generate AI Image",
        cardImg: "/imgs/OnlineImageEditor/imageEditorCard1.webp",
      },
    ],
  };
  useEffect(() => {
    const ChangeData = () => {
      updateCommonCardContent(cardData);
    };
    ChangeData();
  }, []);

  // Mini Carousel Content Here

  let miniCarouselData = {
    mainHeading1: "AI photo generator",
    mainHeading2: null,
    card: [
      {
        cardH: "Save time with AI images",
        cardP:
          "Instant visuals with invideo AI—skip the manual design and let AI handle it. Focus on what truly drives your business.",
        icon: (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"
          >
            <path
              d="M15 8C15.5523 8 16 8.44772 16 9V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H15C14.4477 18 14 17.5523 14 17V9C14 8.44772 14.4477 8 15 8Z"
              fill="#8437BD"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
              fill="#8437BD"
            ></path>
          </svg>
        ),
      },
      {
        cardH: "Superior quality generative images",
        cardP:
          "Experience the superior quality of AI visuals with invideo AI. Our advanced AI delivers sharper, more detailed images—outperforming other AI models.",
        icon: (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.26 5.32739C8.44953 5.11888 8.71823 5 9 5H23C23.2818 5 23.5505 5.11888 23.74 5.32739L28.74 10.8283C29.0748 11.1966 29.0877 11.7551 28.7704 12.1385L16.7704 26.6378C16.5804 26.8674 16.298 27.0002 16 27.0002C15.702 27.0002 15.4196 26.8674 15.2296 26.6378L3.22962 12.1385C2.91228 11.7551 2.92523 11.1966 3.26001 10.8283L8.26 5.32739ZM8.62607 7.89813L9.57238 10.5009H6.2603L8.62607 7.89813ZM6.12569 12.5009H10.2871L13.2595 21.1205L6.12569 12.5009ZM18.7405 21.1205L25.8743 12.5009H21.7129L18.7405 21.1205ZM22.4276 10.5009H25.7397L23.3739 7.89813L22.4276 10.5009ZM21.5724 7H18.2603L20.6261 9.60279L21.5724 7ZM18.7397 10.5009L16 7.48674L13.2603 10.5009H18.7397ZM12.4026 12.5009H19.5974L16 22.9328L12.4026 12.5009ZM11.3739 9.60279L13.7397 7H10.4276L11.3739 9.60279Z"
              fill="#DC2D83"
            ></path>
          </svg>
        ),
      },
      {
        cardH: "Generate images with text prompts",
        cardP:
          "Simply enter text prompts, and the invideo AI generates images to match your vision. No design skills are needed, making image creation fast and accessible for everyone.",
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5198 15.1748C19.7795 14.9151 20.1316 14.7692 20.4989 14.7692H22.6154C23.3801 14.7692 24 15.3891 24 16.1538V22.6154C24 23.3801 23.3801 24 22.6154 24H12C11.4902 24 11.0769 23.5867 11.0769 23.0769C11.0769 22.5671 11.4902 22.1538 12 22.1538H14.7692V20.4989C14.7692 20.1316 14.9151 19.7795 15.1748 19.5198L19.5198 15.1748ZM16.6154 22.1538H22.1538V16.6154H20.69L16.6154 20.69V22.1538Z"
              fill="#00A0F5"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.6923 4.99774L12.9231 7.76697V9.7715L16.1538 13.0023L19.9253 9.23077L15.6923 4.99774ZM14.8484 14.3077L11.3473 17.8088C10.9868 18.1693 10.9868 18.7538 11.3473 19.1143C11.7078 19.4747 12.2922 19.4747 12.6527 19.1143L21.5571 10.2098C22.0979 9.66911 22.0979 8.79242 21.5571 8.2517L16.6714 3.36595C16.1307 2.82523 15.254 2.82522 14.7132 3.36595L11.4825 6.59672C11.2228 6.85639 11.0769 7.20857 11.0769 7.57579V9.96267C11.0769 10.3299 11.2228 10.6821 11.4825 10.9417L14.8484 14.3077Z"
              fill="#00A0F5"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.38461C0 0.619912 0.619915 0 1.38462 0H7.84616C8.61086 0 9.23077 0.619914 9.23077 1.38462V22.6154C9.23077 23.3801 8.61086 24 7.84615 24H1.38461C0.619912 24 0 23.3801 0 22.6154V1.38461ZM1.84615 1.84615V22.1538H7.38462V1.84615H1.84615Z"
              fill="#00A0F5"
            ></path>
            <path
              d="M6 19.3846C6 20.1493 5.38009 20.7692 4.61538 20.7692C3.85068 20.7692 3.23077 20.1493 3.23077 19.3846C3.23077 18.6199 3.85068 18 4.61538 18C5.38009 18 6 18.6199 6 19.3846Z"
              fill="#00A0F5"
            ></path>
          </svg>
        ),
      },
    ],
    carouselData: [
      {
        img: "/imgs/miniCarousel/AnkushC.png",
        carouselHeading: '"Possibly the best tool for video making"',
        name: "Ankush C.",
        stars: 5,
      },
      {
        img: "/imgs/miniCarousel/FionaW.png",
        carouselHeading: '"The best for social media"',
        name: "Gayane Y.",
        stars: 5,
      },
      {
        carouselHeading: '"Create video like a pro"',
        name: "Fausto P.",
        stars: 5,
      },
      {
        carouselHeading: '"Amazing product and world beating service"',
        name: "Jonathon C. J.",
        stars: 0,
      },
      {
        carouselHeading: '"Must-have marketing tool"',
        name: "Deb McDiarmid",
        stars: 5,
      },
      {
        img: "/imgs/miniCarousel/GayaneY.png",
        carouselHeading: '"A Fun & Easy Video Creation Software"',
        name: "Ankush C.",
        stars: "5",
      },
      {
        img: "/imgs/miniCarousel/HoangPhan.png",
        carouselHeading: '"Possibly the best tool for video making"',
        name: "Ankush C.",
        stars: 5,
      },
    ],
  };

  useEffect(() => {
    const updateCarouselUpdate = () => {
      miniUpdateCarouselContent(miniCarouselData);
    };
    updateCarouselUpdate();
  }, []);

  return (
    <>
      <StudioSignup darkMode={darkMode} />
      <StudioLogin darkMode={darkMode} />
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <MobileHeader darkMode={darkMode} toggleMode={toggleMode} />
      <IntellvidCommonHero
        darkMode={darkMode}
        targetSection={targetSection}
        heroContent={heroContent}
      />
      <CommonCard
        darkMode={darkMode}
        updateCommonCardContent={updateCommonCardContent}
        commonCardContent={commonCardContent}
      />
      <MiniCarousel
        darkMode={darkMode}
        miniCarouselContent={miniCarouselContent}
      />
      <CommonPricing darkMode={darkMode} />
      <FAQs darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default AIImageGen;
