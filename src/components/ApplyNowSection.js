import React from "react";
import bgImage from '../assets/apply-bg.jpg'; // Corrected path to the image

function ApplyNowSection() {
  return (
    <section
      className="apply-now"
      id="apply"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="item p-4 bg-dark text-white rounded mb-3">
              <h3>APPLY FOR BACHELOR DEGREE</h3>
              <p>
                You are allowed to use this edu meeting CSS template for your
                school or university or business. You can feel free to modify or
                edit this layout.
              </p>
              <div className="btn btn-danger">
                <a href="#contact" className="text-white text-decoration-none">
                  Join Us Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyNowSection;
