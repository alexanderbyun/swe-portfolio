import "../style/style.css";
import Photo from "../img/about.jpg";
import React from 'react';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Photo} alt="Alexander Byun" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1>About</h1>
      </div>
    </div>
  )
}

export default About
