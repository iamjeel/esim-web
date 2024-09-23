import React, { useState } from 'react';

const ChooseNumber = ({ setShowPlanSection, setSelectedNumber }) => {
  const [nearestNumbers, setNearestNumbers] = useState([]);

  const generateNearestNumbers = () => {
    const digits = Array.from(document.querySelectorAll('.digit-input')).map(input => input.value || "0");
    const selectedNumber = parseInt(digits.join(''), 10);
    const newNearestNumbers = [selectedNumber, selectedNumber + 1, selectedNumber + 2, selectedNumber + 3, selectedNumber + 4];

    setNearestNumbers(newNearestNumbers);
  };

  const selectNumber = (number) => {
    setSelectedNumber(number);
  };

  return (
    <section id="choose-number" className="mb-5">
      <h2 className="text-center text-teal mb-4">Choose Your 4-Digit Number</h2>
      <p className="text-center">Pick any available 4-digit number and subscribe to our premium plan.</p>

      <div className="d-flex justify-content-center mb-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <input key={index} type="text" maxLength="1" className="form-control mx-2 text-center digit-input" style={{ width: '60px' }} />
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-teal" onClick={generateNearestNumbers}>Check Availability</button>
      </div>

      <div id="suggestions" className="mt-4">
        <h4 className="text-center text-teal">Top 5 Nearest Available Numbers</h4>
        <ul className="list-group text-center">
          {nearestNumbers.map((number, index) => (
            <li key={index} className="list-group-item list-group-item-action" onClick={() => selectNumber(number)}>
              {number}
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-lg btn-success" onClick={() => setShowPlanSection(true)}>Choose Plan</button>
      </div>
    </section>
  );
};

export default ChooseNumber;
