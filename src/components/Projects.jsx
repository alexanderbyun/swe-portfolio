import "../style/style.css";
import React from 'react';

const Projects = ({img, link, tech, focus}) => {
  return (
    <div className="p">

      <div className="p-window">
        <div className="p-browser">
          <div className="p-nav">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>

      </div>

      <div className="p-tech">
        <br/>
        <p>{tech}</p>
        <br/>
        <p>Focus: {focus}</p>
        <br/>
      </div>

    </div>
  )
}

export default Projects