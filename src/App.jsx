// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <section className="snap-container mt-header" id="About">
          <About></About>
        </section>
        <section className="snap-container mt-header" id="Skills">
          Skills
        </section>
        <section className="snap-container">
          <Parallax />
        </section>
        <section className="snap-container mt-header" id="Projects">
          Projects
        </section>

        <section className="snap-container mt-header" id="Contact">
          Contact
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
