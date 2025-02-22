import React from "react";
import { useState } from "react";
import { createContext } from "react";

const MyContext = createContext();

const ChangeContent = ({ children }) => {
  // ====================== Hero Sections ======================
  const [heroContent, setHeroContent] = useState({});

  const updateHeroContent = (newContent) => {
    setHeroContent(newContent);
  };

  // ====================== Card Sections ======================

  const [commonCardContent, setCommonCardContent] = useState({});

  const updateCommonCardContent = (newContent) => {
    setCommonCardContent(newContent);
  };

  // ====================== Mini Carousel ======================

  const [miniCarouselContent, setMiniCarouselContent] = useState({});

  const miniUpdateCarouselContent = (newContent) => {
    setMiniCarouselContent(newContent);
  };

  // ====================== Mini Carousel ======================

  const [largeCarouselContent, setLargeCarouselContent] = useState({});

  const updateLargeCarouselContent = (newContent) => {
    setLargeCarouselContent(newContent);
  };

  return (
    <MyContext.Provider
      value={{
        heroContent,
        updateHeroContent,
        commonCardContent,
        updateCommonCardContent,
        miniCarouselContent,
        miniUpdateCarouselContent,
        largeCarouselContent,
        updateLargeCarouselContent,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { ChangeContent, MyContext };
