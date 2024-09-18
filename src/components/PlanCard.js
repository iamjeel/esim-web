import React from 'react';
import './PlanCard.css'; // Add your CSS styles

const PlanCard = ({ plan }) => {
  return (
    <div className="plan-card">
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      <p><strong>${plan.price}</strong> per {plan.duration}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Buy Now</button>
    </div>
  );
};

export default PlanCard;
