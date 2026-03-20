import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection.jsx';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import EducationSection from '../components/sections/EducationSection.jsx';
import ResearchSection from '../components/sections/ResearchSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const id = location.hash;
    const timer = window.setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ResearchSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
