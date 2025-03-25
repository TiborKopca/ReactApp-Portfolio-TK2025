import { useEffect } from "react";
import "./parallax.scss";

const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
    //   const scrollTop = window.scrollY;

      // Adjust these values to control the parallax speed
    //   document.querySelector(".parallax__text").style.transform = `translateY(${scrollTop * 0.08}px)`;
    //   document.querySelector(".mountains").style.transform = `translateY(${scrollTop * 0.05}px)`;
    //   document.querySelector(".planets").style.transform = `translateY(${scrollTop * 0.7}px)`;
    //   document.querySelector(".stars").style.transform = `translateY(${scrollTop * 0.009}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax">
      <h2 className="parallax__text">What I do?</h2>

      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
