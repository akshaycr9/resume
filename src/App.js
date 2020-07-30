import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/aos/dist/aos.css";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "./assets/js/popper.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.3.2.1.min.js";

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
