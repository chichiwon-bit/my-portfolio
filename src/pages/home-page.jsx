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
    <div
      style={{
        backgroundImage: 'url(/bg-home.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 오버레이 */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
        <div className="container mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
