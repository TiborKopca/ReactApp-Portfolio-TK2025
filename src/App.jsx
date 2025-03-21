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
        <div class="container-header-text" id="nameboxContainer">
          <div class="namebox">
            <h1 class="name">Tibor Kopca</h1>
            <h2 class="profesion eng" lang="en">
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
