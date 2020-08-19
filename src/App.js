import React, { useEffect } from "react";

import AOS from "aos";

import Navbar from "./Navbar";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Education from "./Education";
import References from "./References";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-content">
        <Profile />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
        <References />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
