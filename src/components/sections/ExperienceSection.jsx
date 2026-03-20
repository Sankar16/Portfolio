import SectionHeader from '../ui/SectionHeader.jsx';
import ExperienceCard from '../ui/ExperienceCard.jsx';
import experience from '../../content/experience.js';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section section-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Work"
          title="Experience"
          description="Work across production ML systems, applied research, and data-intensive workflows."
        />
        <div className="stack-grid">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
