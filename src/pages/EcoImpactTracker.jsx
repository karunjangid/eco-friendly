import React from 'react';
import '../styles/ecoimpacttracker.css';

const EcoImpactTracker = () => {
  return (
    <div className="tracker">
      <h2>Your Eco-Impact</h2>
      <div className="tracker-stats">
        <div className="stat">
          <h3>1,500+</h3>
          <p>Single-Use Plastics Avoided</p>
        </div>
        <div className="stat">
          <h3>500kg+</h3>
          <p>Carbon Emissions Reduced</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Community Challenges Completed</p>
        </div>
      </div>
    </div>
  );
};

export default EcoImpactTracker;
