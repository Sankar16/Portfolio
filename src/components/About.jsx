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
          I’m an <span class="highlight">AI/ML enthusiast</span> with a deep passion for 
          <span class="highlight">Data Science</span>, <span class="highlight">Data Engineering</span>, 
          and <span class="highlight">Machine Learning</span>. I specialize in developing scalable 
          <span class="highlight">machine learning models</span>, designing robust 
          <span class="highlight">ETL pipelines</span>, and working with 
          <span class="highlight">big data technologies</span> to drive impactful solutions. 
          My experience lies in building intelligent systems that utilize 
          <span class="highlight">Artificial Intelligence</span> to solve real-world, data-driven problems. 
          Currently, I’m expanding my expertise in <span class="highlight">MLOps</span>, 
          <span class="highlight">automation</span>, and <span class="highlight">AI infrastructure</span> 
          to streamline and scale data workflows effectively. With a strong foundation in 
          <span class="highlight">Data Science</span> and <span class="highlight">Software Engineering</span>, 
          I am focused on delivering production-ready solutions that create measurable impact and drive innovation across industries.
        </p>
          </div>
      </div>
    </motion.section>
  );
};

export default About;