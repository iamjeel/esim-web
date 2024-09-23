// PlanSection.js
import React, { useState } from 'react';
import QRCodeComponent from './QRCodeComponent';

const PlanSection = () => {
  const [submittedPlan, setSubmittedPlan] = useState('');
  const [showQR, setShowQR] = useState(false);

  const updateDataValue = () => {
    const sliderValue = document.getElementById('dataSlider').value;
    document.getElementById('dataValue').textContent = `${sliderValue}GB`;
  };

  const handleSubmit = () => {
    // Get the selected data value
    const sliderValue = document.getElementById('dataSlider').value;
    
    // Get selected services
    const selectedServices = [];
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedServices.push(checkbox.nextSibling.textContent.trim());
      }
    });

    // Construct the plan data for QR code
    const planData = `Data: ${sliderValue}GB, Services: ${selectedServices.join(', ')}`;
    setSubmittedPlan(planData);
    setShowQR(true); // Show QR Code
  };

  return (
    <section id="planSection" className="mb-5 p-4 border rounded shadow">
      <h2 className="text-center text-teal mb-4">Customize Your Plan</h2>

      <div className="text-center mb-4">
        <h4>Your Selected Number: <span id="selectedNumberDisplay" className="font-weight-bold text-success"></span></h4>
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
          defaultValue="50"
          onInput={updateDataValue}
        />
        <p>Selected Data: <span id="dataValue" className="font-weight-bold">50GB</span></p>
      </div>

      <div className="mb-4">
        <h5 className="text-center text-teal">Choose Additional Services:</h5>
        {['Voicemail Service', 'Calling Service', 'Text Messaging', 'International Calling'].map((service, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" type="checkbox" id={`service-${index}`} />
            <label className="form-check-label" htmlFor={`service-${index}`}>{service}</label>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary" onClick={handleSubmit}>Submit Plan</button>
      </div>

      {/* Conditionally render QR Code after plan submission */}
      {showQR && (
        <div className="text-center mt-4">
          <h5>Your Plan QR Code:</h5>
          <QRCodeComponent value={submittedPlan} />
        </div>
      )}
    </section>
  );
};

export default PlanSection;
