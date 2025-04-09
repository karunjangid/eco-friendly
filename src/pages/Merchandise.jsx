import React from 'react';
import stybag from "../assets/stybag.png";
import bottles from "../assets/bottles.png";
import '../styles/merchandise.css';

const Merchandise = () => {
  return (
    <div className="merchandise">
      <h2>EcoBloom Merchandise</h2>
      <div className="merch-grid">
        <div className="merch-item">
          <img src={stybag} alt="Eco-Friendly Bag" className="merch-image" />
          <p className="merch-title">Eco-Friendly Reusable Bag</p>
          <p className="price">₹299</p>
        </div>
        <div className="merch-item">
          <img src={bottles} alt="Reusable Bottle" className="merch-image" />
          <p className="merch-title">EcoBloom Stainless Steel Bottle</p>
          <p className="price">₹499</p>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
