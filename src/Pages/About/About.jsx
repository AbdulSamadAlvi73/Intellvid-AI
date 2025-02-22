import React, { useEffect, useRef } from "react";
import AboutHero from "./Component/AboutHero";
import CompanyContent from "./Component/CompanyContent";
import Benefits from "./Component/Benefits";
import Testimonial from "./Component/Testimonial";
import MobileApp from "../../Component/MobileApp";
import FAQs from "../../Component/FAQs";
import MobileHeader from "../../Component/MobileHeader";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ScrollToTopButton from "../../Component/ScrollToTopButton";
import StudioSignup from "../../Component/StudioSignup";
import StudioLogin from "../../Component/StudioLogin";

const About = ({ darkMode, toggleMode }) => {
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
  return (
    <>
      <StudioSignup darkMode={darkMode} />
      <StudioLogin darkMode={darkMode} />
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <MobileHeader darkMode={darkMode} toggleMode={toggleMode} />
      <AboutHero targetSection={targetSection} darkMode={darkMode} />
      <CompanyContent darkMode={darkMode} />
      <Benefits darkMode={darkMode} />
      <Testimonial darkMode={darkMode} />
      <MobileApp darkMode={darkMode} />
      <FAQs darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default About;
