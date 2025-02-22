import React, { createContext, useContext, useState } from "react";

const StudioLoginContext = createContext();

export const IsOpenStudioLogin = ({ children }) => {
  const [isStudioLoginOpen, setIsStudioLoginOpen] = useState(false);

  const toggleStudioLogin = () => {
    setIsStudioLoginOpen(!isStudioLoginOpen);
  };

  return (
    <StudioLoginContext.Provider
      value={{ isStudioLoginOpen, toggleStudioLogin }}
    >
      {children}
    </StudioLoginContext.Provider>
  );
};

export const useStudioLogin = () => useContext(StudioLoginContext);
