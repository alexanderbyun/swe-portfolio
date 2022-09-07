import "../style/style.css";
import Projects from "./Projects";
import React from 'react';

const PortfolioList = () => {
  return (
    <div className="pl">
        
        <div className="pl-text">
            <h1 className="pl-title">Portfolio</h1>
            <p className="pl-desc">Please see below the projects I have been a part of.</p>
        </div>
        <div className="pl-list">
           <Projects /> 
           <Projects /> 
           <Projects /> 
           <Projects /> 
           <Projects /> 
           <Projects /> 
        </div>
    </div>
  )
}

export default PortfolioList