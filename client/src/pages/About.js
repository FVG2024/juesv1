import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Our Mission</h1>
        <p>
          Our mission is to democratize AI and make it accessible to small and medium-sized businesses in Spain. We believe that AI has the power to transform industries, and we are passionate about helping our clients unlock that potential.
        </p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Jules</h3>
            <p>AI Strategy</p>
          </div>
          <div className="team-member">
            <h3>Jane Doe</h3>
            <p>Machine Learning Engineer</p>
          </div>
          <div className="team-member">
            <h3>John Smith</h3>
            <p>Data Scientist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
