import React from "react";
import Reference1 from "./assets/images/reference-image-1.jpg";
import Reference2 from "./assets/images/reference-image-2.jpg";
import Reference3 from "./assets/images/reference-image-3.jpg";

function References() {
  return (
    <div className="section" id="reference">
      <div className="container cc-reference">
        <div className="h4 mb-4 text-center title">References</div>
        <div className="card" data-aos="zoom-in">
          <div
            className="carousel slide"
            id="cc-Indicators"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                className="active"
                data-target="#cc-Indicators"
                data-slide-to="0"
              ></li>
              <li data-target="#cc-Indicators" data-slide-to="1"></li>
              <li data-target="#cc-Indicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-2 col-md-3 cc-reference-header">
                    <img src={`${Reference1}`} alt="Reference1" />
                    <div className="h5 pt-2">Aiyana</div>
                    <p className="category">CEO / WEBM</p>
                  </div>
                  <div className="col-lg-10 col-md-9">
                    <p>
                      Habitasse venenatis commodo tempor eleifend arcu sociis
                      sollicitudin ante pulvinar ad, est porta cras erat
                      ullamcorper volutpat metus duis platea convallis, tortor
                      primis ac quisque etiam luctus nisl nullam fames. Ligula
                      purus suscipit tempus nascetur curabitur donec nam
                      ullamcorper, laoreet nullam mauris dui aptent facilisis
                      neque elementum ac, risus semper felis parturient
                      fringilla rhoncus eleifend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-2 col-md-3 cc-reference-header">
                    <img src={`${Reference2}`} alt="Reference2" />
                    <div className="h5 pt-2">Braiden</div>
                    <p className="category">CEO / Creativem</p>
                  </div>
                  <div className="col-lg-10 col-md-9">
                    <p>
                      Habitasse venenatis commodo tempor eleifend arcu sociis
                      sollicitudin ante pulvinar ad, est porta cras erat
                      ullamcorper volutpat metus duis platea convallis, tortor
                      primis ac quisque etiam luctus nisl nullam fames. Ligula
                      purus suscipit tempus nascetur curabitur donec nam
                      ullamcorper, laoreet nullam mauris dui aptent facilisis
                      neque elementum ac, risus semper felis parturient
                      fringilla rhoncus eleifend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-2 col-md-3 cc-reference-header">
                    <img src={`${Reference3}`} alt="Reference3" />
                    <div className="h5 pt-2">Alexander</div>
                    <p className="category">CEO / Webnote</p>
                  </div>
                  <div className="col-lg-10 col-md-9">
                    <p>
                      Habitasse venenatis commodo tempor eleifend arcu sociis
                      sollicitudin ante pulvinar ad, est porta cras erat
                      ullamcorper volutpat metus duis platea convallis, tortor
                      primis ac quisque etiam luctus nisl nullam fames. Ligula
                      purus suscipit tempus nascetur curabitur donec nam
                      ullamcorper, laoreet nullam mauris dui aptent facilisis
                      neque elementum ac, risus semper felis parturient
                      fringilla rhoncus eleifend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
