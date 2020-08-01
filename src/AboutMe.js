import React from "react";

function AboutMe() {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About Me</div>
                <p>
                  Hello! I am Akshay Thadani, Full Stack Developer, Manchester
                  United Fan and Music Lover.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Age:</strong>
                  </div>
                  <div className="col-sm-8">29</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">akshay.thadani@gmail.com</div>
                </div>
                {/* <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+1718-111-0011</div>
                </div> */}
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">Indore, India</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">English, Hindi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
