import React from "react";
import { motion } from "framer-motion";
import { researchData } from "../data/content";

const Research = () => {
  return (
    <motion.section 
      id="research" 
      className="research-section"
      initial={{ opacity: 0, y: 80 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}  
      viewport={{ once: true }}
    >
      <h2 className="research-title">Research</h2>
      <div className="research-container">
        {researchData.map((research, index) => (
          <motion.div 
            key={index} 
            className="research-card"
            whileHover={{ scale: 1.05 }} // Subtle hover effect
          >
            <h3>{research.title}</h3>
            <p><strong>Published in:</strong> {research.publisher}</p>
            <p><strong>Date:</strong> {research.date}</p>
            <a href={research.link} target="_blank" rel="noopener noreferrer" className="btn">
              Read Paper
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Research;