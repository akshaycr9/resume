import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  function navigateTo(e) {
    console.log("navigatedqq");
  }

  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
          color-on-scroll="400"
        >
          <div className="container">
            <div className="navbar-translate">
              <button
                className="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <Router>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      onClick={(e) => navigateTo(e)}
                      className="nav-link smooth-scroll"
                      to="/"
                      href="#about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link smooth-scroll"
                      to="/"
                      href="#skill"
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link smooth-scroll"
                      to="/"
                      href="#portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link smooth-scroll"
                      to="/"
                      href="#experience"
                    >
                      Experience
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link smooth-scroll"
                      to="/"
                      href="#contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Router>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
