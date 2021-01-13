import React from "react";
import Fibre from "./Components/Background/Fibre";
import AboutMe from "./Components/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Fibre />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
