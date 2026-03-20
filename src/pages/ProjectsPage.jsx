import SectionHeader from '../components/ui/SectionHeader.jsx';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import projects from '../content/projects.js';

export default function ProjectsPage() {
  return (
    <section className="section page-offset">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          description="A curated set of work across machine learning, LLM systems, experimentation, and data workflows."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
