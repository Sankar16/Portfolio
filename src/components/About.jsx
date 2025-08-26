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
          Hi, I’m <span class="highlight">Sankar Raghuthaman</span>, an <span class="highlight">AI/ML enthusiast</span> with a strong passion for <span class="highlight">Data Science</span> and <span class="highlight">Data Engineering</span>. I specialize in creating <span class="highlight">machine learning models</span>, building <span class="highlight">data pipelines</span>, and leveraging <span class="highlight">cloud technologies</span> to solve complex problems and deliver actionable insights.
        </p>
        <p>
          I am committed to using <span class="highlight">AI</span> and <span class="highlight">machine learning</span> to create scalable solutions that drive innovation, optimize processes, and empower data-driven decision-making. My goal is to bridge the gap between cutting-edge technology and real-world business needs, delivering impactful solutions that make a difference.
        </p>
          </div>
      </div>
    </motion.section>
  );
};

export default About;