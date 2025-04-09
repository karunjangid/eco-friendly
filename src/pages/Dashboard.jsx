import React from 'react';
import EcoImpactTracker from '../pages/EcoImpactTracker';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Your Dashboard</h2>
      <p>Track your subscriptions and see your eco-impact in real-time.</p>
      {/* Include the EcoImpactTracker here */}
      <EcoImpactTracker />
    </div>
  );
};

export default Dashboard;
