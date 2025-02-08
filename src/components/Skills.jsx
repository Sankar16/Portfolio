import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/content";

const Skills = () => {
  return (
    <motion.section 
        id="skills" 
        className="section"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} 
        viewport={{ once: true }}
    >
      {/* Enhanced Title */}
      <div className="skills-title-container">
        <h2 className="skills-title">My <span>Skills</span></h2>
        <div className="title-underline"></div>
      </div>

 
      {/* Skills Grid */}
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          >
            <img src={skill.logo} alt={skill.name} className="skill-logo"/>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};


export default Skills;