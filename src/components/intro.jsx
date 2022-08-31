import "../style/style.css";

const Intro = () => {
  return (
  
  <div className="i">
      
    <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Alexander Byun.</h1>
          <h2 className="i-intro">But please call me Alex.</h2>
          <br />
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Grillmaster</div>
              <div className="i-title-item">Sneakerhead</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
    </div>

    <div className="i-right">

    </div>


  </div>

  )
}

export default Intro;