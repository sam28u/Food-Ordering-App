import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import { KeywordProvider } from './components/KeywordContext';

export default function App() {
  return (
    <div >
      <KeywordProvider>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
        </Router>
      </KeywordProvider>
    </div>
  );
}