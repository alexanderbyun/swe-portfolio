import "../style/style.css";
import React from 'react';

const Projects = ({img, link, tech}) => {
  return (
    <div className="p">

      <div className="p-window">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>

      </div>

      <div className="p-tech">
        <p>{tech}</p>
      </div>

    </div>
  )
}

export default Projects