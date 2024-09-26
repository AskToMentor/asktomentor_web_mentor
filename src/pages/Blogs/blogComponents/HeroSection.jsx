import React from 'react';
import heroImage from '@/assets/blogimage.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={heroImage} alt="Background" className="hero-bg" />
        <h1>Empower Your Learning Journey</h1>
        <p>Unlock the potential within you with mentorship stories, tips, and guidance from experienced professionals.</p>
      </div>
    </section>
  );
};

export default HeroSection;
