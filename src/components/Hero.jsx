import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Data Science",
  "Machine Learning",
  "Data Engineer",
  "Software Engineer"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 1500); // Adjust speed: Change text every 1.5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>Hi There! I am Sankar Raghuthaman</h1>
        <h2>
          <TextTransition springConfig={presets.gentle}>{TEXTS[index]}</TextTransition>
        </h2>
        <a href="#about"><button className="btn">About Me</button></a>
      </div>
    </section>
  );
};

export default Hero;