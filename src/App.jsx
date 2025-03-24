// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Header from "./components/header/Header.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <section className="snap-container hero">
        <div className="hero__IDwrapper" id="nameboxContainer">
          <div className="namebox">
            <h1 className="name">Tibor Kopca</h1>
            <h2 className="profesion eng" lang="en">
              Web Developer
            </h2>
          </div>
        </div>
      </section>
      <section className="snap-container">Skills</section>
      <section className="snap-container">Parralax</section>
      <section className="snap-container">Projects</section>
      <section className="snap-container">About</section>
      <section className="snap-container">Contact</section>
    </>
  );
}

export default App;
