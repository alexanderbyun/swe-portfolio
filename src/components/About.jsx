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
        A great deal has happened over these past 13 formative years. My years in accounting taught me punctuality and the ability to thrive under tight schedules and deadlines. My time in IT consisted of overseeing companies' entire computer networks and solving problems up and down the company hierarchy, which honed my problem-solving and communication skills to find root causes of issues and provide lasting solutions and guidance to users.
        <br/><br/>
        Now, with an intensive full-time software engineering bootcamp course under my belt, I strive to synergize my varied experiences to bring a unique perspective to the table. With lifelong values of bringing the best out of my teammates and peers and leaving things better than I found them, I aim to create creative digital solutions to solve problems and streamline workflows.
        </p>
      </div>

    </div>
  )
}

export default About
