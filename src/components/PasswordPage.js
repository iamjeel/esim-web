// PasswordPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const PasswordPage = ({ onAccessGranted }) => {
    const [password, setPassword] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'aakIndustries') { // Replace with your actual password
            setAccessGranted(true);
            onAccessGranted(); // Call the function to grant access
        } else {
            alert('Incorrect password!');
        }
    };

    return (
        <div className="password-page d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#e0f7fa' }}>
            {!accessGranted ? (
                <form onSubmit={handlePasswordSubmit} className="bg-white p-4 rounded shadow">
                    <h2 className="text-center mb-4">Please Enter the Password</h2>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-teal btn-lg w-100">Submit</button>
                </form>
            ) : (
                <div className="text-center">Access Granted!</div>
            )}
        </div>
    );
};

export default PasswordPage;
