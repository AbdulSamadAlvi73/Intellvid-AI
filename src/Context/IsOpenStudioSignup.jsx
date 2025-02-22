import React, { createContext, useContext, useState } from "react";

const StudioSignupContext = createContext();

export const StudioSignupProvider = ({ children }) => {
  const [isStudioSignupOpen, setStudioSignupOpen] = useState(false);

  const toggleStudioOpen = () => {
    setStudioSignupOpen(!isStudioSignupOpen);
  };

  return (
    <StudioSignupContext.Provider
      value={{ isStudioSignupOpen, toggleStudioOpen }}
    >
      {children}
    </StudioSignupContext.Provider>
  );
};

export const useStudioSignup = () => useContext(StudioSignupContext);
