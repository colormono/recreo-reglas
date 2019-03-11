import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="app-header">
    <div className="header-logo">
      <Link to="/">REGLAS DEL RECREO</Link>
    </div>
  </header>
);

export default Header;
