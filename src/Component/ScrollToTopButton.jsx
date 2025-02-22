import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to show or hide button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-theme-purple text-white xs:p-1.5 md:p-[0.5vw] rounded-full shadow-lg"
        >
          <span className="md:text-[1.5vw] xs:text-xl rotate-90">
            <RiArrowDropDownLine />
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
