import React, { useEffect, useRef } from "react";
import ContactHero from "./Component/ContactHero";
import ContactInfo from "./Component/ContactInfo";
import ContactForm from "./Component/ContactForm";
import MobileHeader from "../../Component/MobileHeader";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ScrollToTopButton from "../../Component/ScrollToTopButton";
import StudioSignup from "../../Component/StudioSignup";
import StudioLogin from "../../Component/StudioLogin";

const Contact = ({ darkMode, toggleMode }) => {
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
      <ContactHero targetSection={targetSection} darkMode={darkMode} />
      <ContactInfo darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Contact;
