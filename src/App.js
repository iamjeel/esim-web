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
        <section id="choose-number">
          <h2>Choose Your 4-Digit Number</h2>
          <p>Pick any 4-digit number and enjoy the convenience of a personalized mobile experience. Choose now and be part of our exclusive launch phase!</p>
          <button>Choose Number</button>
        </section>
        <section id="subscription">
          <h2>Monthly Subscription</h2>
          <p>Our subscription plans are designed to offer you flexibility and value. Select the plan that suits you best and enjoy uninterrupted service.</p>
          <button>Subscribe Now</button>
        </section>
        <section id="limited-availability">
          <h2>Limited Availability</h2>
          <p>We are currently in our launch phase with only 1000 numbers available. Don't miss out on this exclusive opportunity!</p>
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
