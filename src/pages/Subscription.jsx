import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/subscription.css';

const Subscription = () => {
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('');
  const [plan, setPlan] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!plan || !category || !frequency) {
      alert('Please select all fields to proceed.');
      return;
    }
    // Navigate to customization page
    navigate('/customize', {
      state: { category, frequency, plan }, // Pass selected values as state
    });
  };

  return (
    <div className="subscription-form">
      <h2>Customize Your Subscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Home Essentials">Home Essentials</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Reusable Items">Reusable Items</option>
            <option value="Energy Gadgets">Energy Gadgets</option>
          </select>
        </label>
        <label>
          Frequency:
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </label>
        <fieldset>
          <legend>Select Plan</legend>
          <label>
            <input
              type="radio"
              value="Basic"
              name="plan"
              onChange={(e) => setPlan(e.target.value)}
            />
            Basic - ₹199/month
          </label>
          <label>
            <input
              type="radio"
              value="Classic"
              name="plan"
              onChange={(e) => setPlan(e.target.value)}
            />
            Classic - ₹399/month
          </label>
          <label>
            <input
              type="radio"
              value="Premium"
              name="plan"
              onChange={(e) => setPlan(e.target.value)}
            />
            Premium - ₹599/month
          </label>
        </fieldset>
        <button type="submit">Subscribe Now</button>
      </form>
    </div>
  );
};

export default Subscription;
