import SectionHeader from '../ui/SectionHeader.jsx';
import SkillGroup from '../ui/SkillGroup.jsx';
import skills from '../../content/skills.js';

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills"
          description="A mix of machine learning, AI application development, and data workflow engineering."
        />
        <div className="project-grid">
          {skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
