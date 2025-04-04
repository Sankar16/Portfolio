import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.png";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial={{ opacity: 0, y: 80 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}  
      viewport={{ once: true }}
    >
      <div className="about-container">
        {/* Left Side - Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Sankar Raghuthaman" />
        </div>

        {/* Right Side - About Text */}
        <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm <span className="highlight">Sankar Raghuthaman</span>, an aspiring  
          <span className="highlight">AI/ML professional</span> with a strong passion for  
          <span className="highlight">Data Science</span> and   
          <span className="highlight"> Data Engineering</span>.  
          I’m driven by the mission to build intelligent systems that harness  
          <span className="highlight"> Artificial Intelligence</span> to solve real-world problems across data-centric industries.
        </p>
        <p>
          I specialize in developing scalable <span className="highlight">machine learning models</span>,  
          designing efficient <span className="highlight">ETL pipelines</span>, and working with  
          <span className="highlight">big data technologies</span> to extract meaningful insights.  
          I'm currently deepening my expertise in <span className="highlight">MLOps</span>,  
          <span className="highlight"> automation</span>, and  
          <span className="highlight"> AI infrastructure</span> to streamline and scale data workflows.
        </p>
        <p>
          My long-term goal is to bridge the gap between  
          <span className="highlight"> Data Science</span> and  
          <span className="highlight"> Software Engineering</span>, delivering production-ready,  
          AI-powered solutions that drive innovation and measurable impact.
        </p>
          </div>
      </div>
    </motion.section>
  );
};

export default About;