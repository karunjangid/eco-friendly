import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/customization.css';

const ProductCustomization = () => {
  const location = useLocation(); // Access state passed from navigate
  const navigate = useNavigate(); // Hook for navigation
  const { category, frequency, plan } = location.state || {}; // Destructure user selections

  const [products, setProducts] = useState([]); // Products based on user choices
  const [box, setBox] = useState([]); // Items added to the box

  // Suggest products based on user selections
  useEffect(() => {
    const productSuggestions = {
      "Home Essentials": ["Reusable Bags", "Glass Storage Containers", "Natural Cleaning Solutions"],
      "Personal Care": ["Bamboo Toothbrush", "Eco-Friendly Facewash", "Refillable Shampoo Bottles"],
      "Reusable Items": ["Steel Water Bottle", "Silicone Food Bags", "Multi-Use Cloth"],
      "Energy Gadgets": ["Solar Lantern", "Rechargeable Batteries", "Solar Chargers"],
    };
    setProducts(productSuggestions[category] || []);
  }, [category]);

  // Add product to the box
  const addToBox = (product) => {
    if (!box.includes(product)) {
      setBox([...box, product]);
    }
  };

  // Navigate to checkout page
  const proceedToCheckout = () => {
    navigate('/checkout', { state: { box, category, frequency, plan } }); // Pass box contents and details
  };

  return (
    <div className="customization-container">
      <h2>Customize Your Monthly Kit</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Frequency:</strong> {frequency}</p>
      <p><strong>Plan:</strong> {plan}</p>

      <h3>Suggested Products</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <p>{product}</p>
            <button onClick={() => addToBox(product)}>Add to Box</button>
          </div>
        ))}
      </div>

      <h3>Your Box</h3>
      <div className="box-list">
        {box.length > 0 ? (
          box.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>Your box is empty. Add items to your box.</p>
        )}
      </div>

      <button className="checkout-button" onClick={proceedToCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductCustomization;
