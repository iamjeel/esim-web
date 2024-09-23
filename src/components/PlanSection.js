import React, { useState } from 'react';
import QRCodeComponent from './QRCodeComponent';

const PlanSection = ({ selectedNumber }) => { // Accept selectedNumber as a prop
  const [submittedPlan, setSubmittedPlan] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleServiceChange = (event) => {
    const service = event.target.value;
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service); // Remove service if already selected
      } else {
        return [...prev, service]; // Add service if not selected
      }
    });
  };

  const handleSubmit = () => {
    // Construct the plan data for QR code
    const planData = `Data: ${sliderValue}GB, Services: ${selectedServices.join(', ')}`;
    setSubmittedPlan(planData);
    setShowQR(true); // Show QR Code
  };

  return (
    <section id="planSection" className="mb-5 p-4 border rounded shadow">
      <h2 className="text-center text-teal mb-4">Customize Your Plan</h2>

      <div className="text-center mb-4">
        <h4>Your Selected Number: <span className="font-weight-bold text-success">{selectedNumber}</span></h4>
      </div>

      <div className="text-center mb-4">
        <label htmlFor="dataSlider" className="form-label">Select Data Limit (GB):</label>
        <input
          type="range"
          id="dataSlider"
          className="form-range"
          min="10"
          max="150"
          step="10"
          value={sliderValue}
          onChange={handleSliderChange} // Use onChange to update state
        />
        <p>Selected Data: <span className="font-weight-bold">{sliderValue}GB</span></p>
      </div>

      <div className="mb-4">
        <h5 className="text-center text-teal">Choose Additional Services:</h5>
        {['Voicemail Service', 'Calling Service', 'Text Messaging', 'International Calling'].map((service, index) => (
          <div className="form-check" key={index}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              id={`service-${index}`} 
              value={service}
              checked={selectedServices.includes(service)} // Control checkbox based on state
              onChange={handleServiceChange} 
            />
            <label className="form-check-label" htmlFor={`service-${index}`}>{service}</label>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary" onClick={handleSubmit}>Submit Plan</button>
      </div>

      {/* Summary of selected options before QR Code */}
      {showQR && (
        <div className="text-center mt-4">
          <h5>Selected Plan Details:</h5>
          <p><strong>Your Selected Number:</strong> {selectedNumber}</p>
          <p><strong>Data Limit:</strong> {sliderValue}GB</p>
          <p><strong>Additional Services:</strong> {selectedServices.length > 0 ? selectedServices.join(', ') : 'None'}</p>
          
          <h5>Your Plan QR Code:</h5>
          <QRCodeComponent value={submittedPlan} />
        </div>
      )}
    </section>
  );
};

export default PlanSection;
