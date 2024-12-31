import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import PopularServices from './components/PopularServices/PopularServices';
import Features from './components/Features/Features';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <PopularServices />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;