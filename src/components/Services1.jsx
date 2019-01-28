import React from "react";

class Services1 extends React.Component {
  render() {
    return (
      <div>
        <div className="about-w3sec pt-5 py-lg-0 py-5" id="services">
          <div className="container pt-xl-5 pt-lg-3">
            <h3 className="title-w3 mb-sm-5 mb-4 text-bl text-center font-weight-bold">
              Our Services
            </h3>
            <div className="row">
              <div className="col-lg-4 text-right mt-4">
                <div className="abt-block">
                  <img src="images/web.gif" alt="" className="img-fluis" />
                  <h3 className="mt-2 mb-3">Web Development</h3>
                  <p>
				  We develop Creative Websites with Latest Technologies
                  </p>
                </div>
                <div className="abt-block mt-4 pr-xl-5">
                  <img src="images/gd1.png" alt="" className="img-fluis" />
                  <h3 className="mt-2 mb-3">Graphic Design</h3>
                  <p>
				  We design Creative ideas Product with remarkable skills.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 about-image mt-xl-0 mt-5">
                <img src="images/ser.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-4 mt-4">
                <div className="abt-block">
                  <img src="images/doc.png" alt="" className="img-fluis" />
                  <h3 className="mt-2 mb-3">Documentation</h3>
                  <p>
				  We will provide every services perfectly related to Documentation work.
                  </p>
                </div>
                <div className="abt-block mt-4 pl-xl-5">
                  <img src="images/U1.gif" alt="" className="img-fluis" />
                  <h3 className="mt-2 mb-3">UI Design</h3>
                  <p>
				  We design amazing and creative UI UX DESIGNS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services1;
