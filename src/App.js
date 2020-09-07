import React from "react";
import "./App.css";

import NavBar from "./NavBar.js";
import About from "./About.js";
import Experience from "./Experience.js";
import Education from "./Education.js";
import Skills from "./Skills.js";
import Languages from "./Languages.js";
import Interests from "./Interests.js";
import Awards from "./Awards.js";
import Particles from 'react-particles-js';
import particlesConfig from './assets/particlesConfig'


function App() {
  async function smoothScroll(section) {
    await new Promise(() => {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
      });
      console.log(document.getElementById(section));
    });
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          onClick={(section) => smoothScroll(section)} />
      </header>
      <main className="App-main" id="App-main">
        <Particles params={particlesConfig} />
        <section id="About">
          <About />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Languages">
          <Languages />
        </section>
        <section id="Interests">
          <Interests />
        </section>
        <section id="Awards">
          <Awards />
        </section>
      </main>
    </div>
  );
}

export default App;
