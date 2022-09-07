import "./style/style.css";
import Intro from "./components/Intro";
import About from "./components/About";
import PortfolioList from "./components/PortfolioList";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <PortfolioList/>
  </div>
  )
};

export default App;