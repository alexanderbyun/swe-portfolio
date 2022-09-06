import "../style/style.css";
import Photo from "../img/profile.png";

const Intro = () => {
  return (
  
  <div className="i">
      
    <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hi! My name is</h2>
            <h1 className="i-name">Alexander Byun,</h1>
            <h2 className="i-intro">but feel free to call me Alex.</h2>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Full Stack Web Developer</div>
                    <div className="i-title-item">Software Engineer</div>
                    <div className="i-title-item">Grillmaster</div>
                    {/* <div className="i-title-item">Sneakerhead</div> */}
                </div>
            </div>
            <div className="i-description">
                <p>
                    I always strive to leave things better than I found them. With a background in accounting and IT, my passion is in utilizing my varied perspectives to create the digital tools needed to solve problems and streamline workflows.
                </p>
            </div>
        </div>
    </div>

    <div className="i-right">
        <div className="i-bg"></div>
        <img src={Photo} alt="Alexander Byun" className="i-img" />
    </div>


  </div>

  )
}

export default Intro;