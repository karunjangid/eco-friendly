import React from 'react';
import { motion } from 'framer-motion';
import Globe from './Globe';
import '../styles/home.css';
import handbag from "../assets/handbag.png";
import products from "../assets/products.png";
import toothbrush from "../assets/toothbrush.png";

const Home = () => {
  return (
    <>
      {/* Mission Section */}
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="mission">
          <h1>EcoBloom</h1>
          <p>Making Sustainability Simple.</p>
          <p>Join us in creating a greener tomorrow with curated eco-friendly essentials.</p>
        </section>
      </motion.div>

      {/* 3D Globe Section */}
      <section className="globe-section">
        <h2>Our Global Impact</h2>
        <div className="globe-container">
          <Globe />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={handbag} alt="Reusable Bag" />
            <p>Reusable Bags</p>
          </div>
          <div className="product-card">
            <img src={toothbrush} alt="Bamboo Toothbrush" />
            <p>Bamboo Toothbrush</p>
          </div>
          <div className="product-card">
            <img src={products} alt="Solar Gadget" />
            <p>Gadgets & Products</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
