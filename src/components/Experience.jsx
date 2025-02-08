import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/content";

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="experience-section"
      initial={{ opacity: 0, y: 80 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.5, ease: "easeOut" }}  
      viewport={{ once: true }}
    >
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <motion.div 
            key={index} 
            className="experience-card"
            whileHover={{ scale: 1.02 }} 
            transition={{ duration: 0.3 }}
          >
            <div className="experience-header">
              <img src={experience.image} alt={experience.company} className="company-logo"/>
              <h3>{experience.company}</h3>
            </div>
            <p className="experience-role">{experience.role}</p>
            <p className="experience-duration">{experience.duration}</p>
            <p className="experience-description">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;