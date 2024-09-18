import React from 'react';
import Header from './components/Header';
import PlanCard from './components/PlanCard';
import Footer from './components/Footer';
import './App.css'; // Add your CSS styles

const plans = [
  {
    name: 'Basic Plan',
    description: 'Suitable for occasional travelers. 1GB of data.',
    price: '10',
    duration: '30 days',
    features: ['1GB Data', 'Unlimited Texts', '10 Minutes Talk Time']
  },
  {
    name: 'Standard Plan',
    description: 'Perfect for frequent travelers. 5GB of data.',
    price: '25',
    duration: '30 days',
    features: ['5GB Data', 'Unlimited Texts', '100 Minutes Talk Time']
  },
  {
    name: 'Premium Plan',
    description: 'For heavy users. 10GB of data.',
    price: '45',
    duration: '30 days',
    features: ['10GB Data', 'Unlimited Texts', 'Unlimited Talk Time']
  }
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="plans">
          <h2>Our Plans</h2>
          <div className="plan-container">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: support@esimcompany.com</p>
          <p>Phone: 1-800-123-4567</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
