import React from 'react';
import './userStyles.css/welcome.css';

const WelcomePage = () => {
  return (
    <section className="hero" id="welcome">
      <h1>Find Your Dream Job</h1>
      <p>
        Join our team and be part of something extraordinary. We're looking for talented individuals
        who are passionate about making a difference.
      </p>
      <button className="btn-primary">Apply Now</button>
    </section>
  );
};

export default WelcomePage;