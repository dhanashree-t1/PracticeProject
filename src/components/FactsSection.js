import React from "react";
import "./FactsSection.css";
import bgImage from '../assets/facts-bg.jpg';
import videoImage from '../assets/video.jpg';

const FactsSection = () => {
  return (
    <div
      className="facts-section text-light py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-lg-6 col-md-6 mb-4">
            <h2 className="mb-4">A Few Facts About Our University</h2>
            <div className="facts-grid">
              <div className="fact-box">
                <h3>94%</h3>
                <p>Succeeded Students</p>
              </div>
              <div className="fact-box">
                <h3>2345</h3>
                <p>New Students</p>
              </div>
              <div className="fact-box">
                <h3>126</h3>
                <p>Current Teachers</p>
              </div>
              <div className="fact-box">
                <h3>32</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>

         
          <div className="col-lg-6 col-md-6 text-center">
            <div className="video-box">
              <img
                src={videoImage}
                alt="Video"
                className="img-fluid rounded shadow"
              />
              <button className="play-btn">
                <i className="bi bi-play-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
