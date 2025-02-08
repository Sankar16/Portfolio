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
                Hi, I'm <span className="highlight"> Sankar Raghuthaman</span>, an  
                <span className="highlight"> AI/ML Enthusiast</span> with a deep interest in   
                <span className="highlight"> Data Engineering</span> and  
                <span className="highlight"> Applied Machine Learning</span>.  
                I am passionate about developing intelligent systems that leverage  
                <span className="highlight"> Artificial Intelligence</span> to solve  
                real-world challenges in data-driven industries.
            </p>
            <p>
                My expertise lies in building scalable <span className="highlight"> AI models</span>,  
                optimizing <span className="highlight"> ETL pipelines</span>, and working with  
                <span className="highlight"> Big Data Technologies</span>.  
                Currently, I am expanding my knowledge in <span className="highlight"> Deep Learning</span>,  
                <span className="highlight"> Cloud Computing</span>, and  
                <span className="highlight"> MLOps</span> to drive automation and efficiency  
                in AI workflows.
            </p>
            <p>
                My goal is to bridge the gap between <span className="highlight">Data Science </span>  
                and <span className="highlight">Software Engineering</span>, creating AI-driven  
                solutions that are both innovative and production-ready.
            </p>
          </div>
      </div>
    </motion.section>
  );
};

export default About;