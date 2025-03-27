// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contactform from "./components/contactform/Contactform.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="snap-container mt-header" id="About">
          <About />
        </section>
        <section className="snap-container mt-header" id="Skills">
          <Skills />
        </section>
        <section className="snap-container" id="Projects">
          <Parallax />
        </section>

        <Projects />

        <Contactform />
      </main>
      <Footer />
    </>
  );
}

export default App;
