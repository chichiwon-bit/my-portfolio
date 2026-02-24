import * as React from 'react';
import HeroSection from '../components/landing/hero-section';
import AboutSection from '../components/landing/about-section';
import SkillSection from '../components/landing/skill-section';
import ProjectsSection from '../components/landing/projects-section';
import ContactSection from '../components/landing/contact-section';

/**
 * HomePage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <div style={{ backgroundColor: '#F2EDE4' }}>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
