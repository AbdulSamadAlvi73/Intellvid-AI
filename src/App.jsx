import React, { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css"; // Flag Icon CSS ko import karein
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer";
import ScrollToTopButton from "./Component/ScrollToTopButton";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  // Initial state: check if dark mode is already saved in localStorage
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the stored theme in localStorage on component mount
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // Save the user's choice in localStorage
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
  console.log(darkMode);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/about"
          element={<About darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/pricing"
          element={<Pricing darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} toggleMode={toggleMode} />}
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
