import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ApplyNowSection.css"; 
import bgImage from '../assets/apply-bg.jpg'; 

const ApplyNowSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="row">
        
          <div className="col-md-6 mb-4">
            <div className="box bg-dark text-white p-4 rounded">
              <h3 className="mb-3">APPLY FOR BACHELOR DEGREE</h3>
              <p>
                You are allowed to use this edu meeting CSS template for your
                school or university or business. You can feel free to modify
                or edit this layout.
              </p>
              <button className="btn btn-danger">JOIN US NOW!</button>
            </div>
          </div>

         
          <div className="col-md-6 mb-4">
            <div className="box bg-dark text-white p-4 rounded">
              <h3 className="mb-3">APPLY FOR BACHELOR DEGREE</h3>
              <p>
                You are not allowed to redistribute the template ZIP file on
                any other template website. Please contact us for more
                information.
              </p>
              <button className="btn btn-warning">JOIN US NOW!</button>
            </div>
          </div>

         
          <div className="col-md-6 offset-md-3">
            <div className="info-section bg-white text-dark p-4 rounded">
              <h4 className="text-warning mb-3">About Edu Meeting HTML Template</h4>
              <p>
                If you want to get the latest collection of HTML CSS templates
                for your websites, you may visit <a href="#">Too CSS website</a>. If
                you need a working contact form script, please visit our <a
                  href="#"
                >contact page</a>.
              </p>
              <ul className="list-unstyled">
                <li className="py-2 border-bottom">HTML CSS Bootstrap Layout</li>
                <li className="py-2 border-bottom">Please tell your friends</li>
                <li className="py-2">Share this to your colleagues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowSection;
