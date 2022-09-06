import "../style/style.css";
import Travel from "../img/about.jpg";
import React from 'react';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
            <img src={Travel} alt="Alexander Byun" className="a-img" />
        </div>
      </div>
      <div className="a-right">

      </div>
    </div>
  )
}

export default About
