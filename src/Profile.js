import React from "react";
import ProfileBackgroundImage from "./assets/images/profile-background.jpg";
import Akshay from "./assets/images/akshay_profile_image.png";
import Resume from "./assets/akshay_resume.pdf";

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
                  <img src={`${Akshay}`} alt="Akshay" />
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
                Contact Me
              </a>
              <a
                className="btn btn-primary"
                href={Resume}
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
                target="_blank"
                rel="noopener noreferrer"
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
