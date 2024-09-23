import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section text-white text-center py-5" style={{  height: '60vh' }}>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="display-4 font-weight-bold">Decide Your Own Number</h1>
        <p className="lead">Customize your data plan and choose a unique 4-digit number</p>
        <a href="#choose-number" className="btn btn-teal btn-lg mt-3">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
