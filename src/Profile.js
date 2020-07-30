import React from "react";
import ProfileBackgroundImage from "./assets/images/profile-background.jpg";
import Anthony from "./assets/images/anthony.jpg";

function Profile() {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            style={{ backgroundImage: `url(${ProfileBackgroundImage})` }}
          ></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="google.com">
                  <img src={`${Anthony}`} alt="Akshay" />
                </a>
              </div>
              <div className="h2 title">Akshay Thadani</div>
              <p className="category text-white">
                Full Stack Developer (Web and Mobile)
              </p>
              <a
                className="btn btn-primary smooth-scroll mr-2"
                href="#contact"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Hire Me
              </a>
              <a
                className="btn btn-primary"
                href="google.com" // Needs to be changed
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.facebook.com/akshaycr9/"
                  rel="tooltip noopener noreferrer"
                  title="Follow me on Facebook"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://twitter.com/AkshayThadani"
                  rel="tooltip noopener noreferrer"
                  title="Follow me on Twitter"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.instagram.com/akshaycr9/"
                  rel="tooltip noopener noreferrer"
                  title="Follow me on Instagram"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
