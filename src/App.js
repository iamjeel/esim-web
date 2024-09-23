import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChooseNumber from './components/ChooseNumber';
import PlanSection from './components/PlanSection';
import LimitedAvailability from './components/LimitedAvailability';
import Footer from './components/Footer';

import './App.css'

const App = () => {

  const [showPlanSection, setShowPlanSection] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');


  return (
    <div>
      <Header />
      <HeroSection />
      <main className="container my-5">
      <LimitedAvailability />
        <ChooseNumber setShowPlanSection={setShowPlanSection} setSelectedNumber={setSelectedNumber} />
        {showPlanSection && <PlanSection selectedNumber={selectedNumber} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
