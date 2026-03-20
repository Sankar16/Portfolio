import SectionHeader from '../ui/SectionHeader.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import projects from '../../content/projects.js';
import Button from '../ui/Button.jsx';

export default function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A curated set of projects across machine learning, AI systems, and data workflow engineering."
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="section-action-row">
          <Button to="/projects" variant="secondary">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
