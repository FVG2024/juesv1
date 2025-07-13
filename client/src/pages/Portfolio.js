import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Predictive Maintenance for Manufacturing',
      description: 'Developed a machine learning model to predict equipment failure, reducing downtime by 30% and saving the company €200,000 annually.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Personalized Recommendations for E-commerce',
      description: 'Built a recommendation engine that personalizes the shopping experience, leading to a 15% increase in conversion rates.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Automated Customer Support with Chatbots',
      description: 'Implemented an AI-powered chatbot to handle customer inquiries, improving response times by 80% and increasing customer satisfaction.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
