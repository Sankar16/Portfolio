import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/content";

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="section"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} 
      viewport={{ once: true }}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3>{project.name}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn">Source</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;