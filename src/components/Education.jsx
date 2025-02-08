import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/content";

const Education = () => {
  return (
    <motion.section 
      id="education" 
      className="education-section"
      initial={{ opacity: 0, y: 80 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.5, ease: "easeOut" }}  
      viewport={{ once: true }}
    >
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((education, index) => (
          <motion.div 
            key={index} 
            className="education-card"
            whileHover={{ scale: 1.02 }} 
            transition={{ duration: 0.3 }}
          >
            <div className="education-header">
              <img 
                src={education.image} 
                alt={education.university} 
                className="university-logo"
                onError={(e) => e.target.style.display = 'none'} // Hide image if not loading
              />
              <h3>{education.university}</h3>
            </div>
            <p className="education-course">{education.course}</p>
            <p className="education-duration">{education.duration}</p>
            <p className="education-description">{education.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;