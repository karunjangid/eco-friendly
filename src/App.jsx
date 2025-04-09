import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import CommunityChallenges from './pages/CommunityChallenge';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contacts';
import Merchandise from './pages/Merchandise';
import ProductCustomization from './pages/ProductCustomization';
import checkoutt from "./pages/Checkout"
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<CommunityChallenges />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/customize" element={<ProductCustomization/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
