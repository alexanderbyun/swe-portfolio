import "./style/style.css";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";

const App = () => {
  return (
  <div>
    <Toggle/>
    <Intro/>
    <About/>
    <ProjectsList/>
    <Contact/>
  </div>
  )
};

export default App;