// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contactform from "./components/contactform/Contactform.jsx";
import { ThemeProvider } from "./hooks/ThemeContext";

import CookieConsent from "./components/CookieConsent/CookieConsent.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Routes>
        {/* Main Portfolio Route */}
        <Route path="/" element={<MainLayout />} />
        
        {/* Legal Pages Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        
        {/* 404 Not Found Route - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

// Main Layout Component (your existing structure)
function MainLayout() {
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
      
      {/* Cookie Consent Banner - Only shows on main layout */}
      <CookieConsent />
    </>
  );
}

export default App;
