import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contacts from "./Components/Contacts";
import AnimatedCursor from "react-animated-cursor";
import MiniPro from "./Components/MiniPro";
import Carousal from "./Components/Carousal";
// import Part from "./Components/Part";
function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      {/* <Part /> */}
      {/* <Carousal /> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <MiniPro />
      <Github />
      <Contacts />
    </div>
  );
}

export default App;
