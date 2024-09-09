import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Header";
import Contact from "./component/Contact";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS on route change
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="about" element={<About theme={theme} />} />
        <Route path="contact" element={<Contact theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;