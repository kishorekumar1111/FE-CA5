import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
  };
  const navLink = {
    textDecoration: 'none',
    width: '3.688rem',
    height: '1rem',
    margin: '1.125rem 2.563rem 0.688rem 0',
    fontFamily: 'Montserrat',
    fontSize: '0.813rem',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.9px',
    color: '#121212',
  };
  return (
    <nav id="navbar-container">
      <ul style={navStyle}>
        <li className="nav-link">
          <Link to="/" style={navLink}>BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/category" style={navLink} className="category">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
