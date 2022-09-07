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
        <br/>
        <p>
        Hi there! My interest in coding started in my senior year of high school, where I took a web design class that mainly covered HTML and CSS. I had a great time then, but that was all the way back in 2009.
        <br/><br/>
        Over these past 13 formative years, wherever I went, I found great satisfaction is leaving things better than I found them. Whether it was changing the lightbulbs to be the same color temperature, or streamlining a company's workflow for critial processes, I always try to find a way to leave a positive impact.
        </p>
      </div>

    </div>
  )
}

export default About
