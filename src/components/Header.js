import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal text-white text-center py-4">
      <h1>ESIM Card Company</h1>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Choose Number</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
