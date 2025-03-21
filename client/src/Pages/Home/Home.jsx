import React, { useContext, useEffect, useRef } from "react";
import Hero from "./Component/Hero";
import Content from "./Component/Content";
import Team from "./Component/Team";
import MobileApp from "../../Component/MobileApp";
import FAQs from "../../Component/FAQs";
import PricingPlan from "../../Component/PricingPlan";
import Header from "../../Component/Header";
import MobileHeader from "../../Component/MobileHeader";
import ScrollToTopButton from "../../Component/ScrollToTopButton";
import Footer from "../../Component/Footer";
import SocialMediaBenefits from "./Component/SocialMediaBenefits";
import BusinessGrowth from "./Component/BusinessGrowth";
import StudioSignup from "../../Component/StudioSignup";
import StudioLogin from "../../Component/StudioLogin";
import { UserDataContext } from "../../Context/UserContext";

const Home = ({ darkMode, toggleMode }) => {
  const targetSection = useRef(null);
// const {user} = useContext(UserDataContext)
  useEffect(() => {
    // Function to scroll to the target section

    const handleScrollToSection = () => {
      // console.log(user);
      
      targetSection.current?.scrollIntoView({
        behavior: "smooth", // Smooth scroll effect
        block: "start", // Scroll to the top of the target
      });
    };
    handleScrollToSection();
  }, []);
  return (
    <>
    <StudioSignup darkMode={darkMode} />
      <StudioLogin darkMode={darkMode} />
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <MobileHeader darkMode={darkMode} toggleMode={toggleMode} />
      <Hero targetSection={targetSection} darkMode={darkMode} />
      <SocialMediaBenefits darkMode={darkMode} />
      <BusinessGrowth darkMode={darkMode} />
      <Content darkMode={darkMode} />
      <Team darkMode={darkMode} />
      <PricingPlan darkMode={darkMode} />
      <MobileApp darkMode={darkMode} />
      <FAQs darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Home;
