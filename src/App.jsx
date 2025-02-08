import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Restoring the Original Navbar */}
        <nav>
        <div className="nav-container">
          <div className="nav-left">
            <h1>Sankar Raghuthaman</h1>
          </div>
          <ul className="nav-right">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#research">Research</a></li>
            
          </ul>
        </div>
      </nav>

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;