import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>AI Integration</h2>
          <p>
            We help you integrate AI-powered solutions into your existing workflows and systems, automating tasks and improving efficiency.
          </p>
        </div>
        <div className="service-item">
          <h2>Machine Learning Models</h2>
          <p>
            We build custom machine learning models to solve your specific business problems, from predicting customer churn to detecting fraud.
          </p>
        </div>
        <div className="service-item">
          <h2>Data Analysis</h2>
          <p>
            We help you make sense of your data, uncovering valuable insights that can inform your business strategy and drive growth.
          </p>
        </div>
        <div className="service-item">
          <h2>AI Consulting</h2>
          <p>
            We provide expert advice and guidance on how to leverage AI to achieve your business goals, from developing an AI strategy to implementing specific solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
