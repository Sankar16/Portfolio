import SectionHeader from '../ui/SectionHeader.jsx';
import EducationCard from '../ui/EducationCard.jsx';
import education from '../../content/education.js';

export default function EducationSection() {
  return (
    <section id="education" className="section section-soft">
      <div className="container">
        <SectionHeader eyebrow="Academic Background" title="Education" />
        <div className="education-grid">
          {education.map((item) => (
            <EducationCard key={`${item.school}-${item.degree}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
