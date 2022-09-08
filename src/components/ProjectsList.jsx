import "../style/style.css";
import Projects from "./Projects";
import {projects} from "../data"
import React from 'react';

const ProjectsList = () => {
  return (
    <div className="pl">
        
        <div className="pl-text">
            <h1 className="pl-title">Portfolio</h1>
            <p className="pl-desc">Please see below the projects I have been a part of.</p>
        </div>
        <div className="pl-list">
           {projects.map((item) => (
            <Projects key={item.id} img={item.img} link={item.link} /> 
           ))}
        </div>
    </div>
  )
}

export default ProjectsList