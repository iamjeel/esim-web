import React from 'react';
import './Header.css'; // Add your CSS styles

const Header = () => {
  return (
    <header className="header">
      <h1>eSIM Company</h1>
      <nav>
        <ul>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
