import "./style/style.css";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <ProjectsList/>
    <Contact/>
  </div>
  )
};

export default App;