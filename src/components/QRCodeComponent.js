// QRCodeComponent.js
import React, { useEffect, useRef } from 'react';
import QRious from 'qrious';

const QRCodeComponent = ({ value }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    if (value) {
      const qr = new QRious({
        element: qrCodeRef.current,
        value: value, // Data to be encoded in QR code
        size: 200, // Size of QR code
      });
    }
  }, [value]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Your number is reserved for next 3 hours!!</h1>
      <p>Scan the code to activate your e-sim on our App!</p>
      <canvas ref={qrCodeRef}></canvas>
    </div>
  );
};

export default QRCodeComponent;
