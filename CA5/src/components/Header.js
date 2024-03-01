import React from 'react';
import NavLinks from './NavLinks';
import image from './userImage.png';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '1.438rem 6.188rem 1.688rem 4.85rem',
    backgroundColor: '#fff',
    border: 'solid 1px #e8e8e8',
  };

  const headerTitleStyle = {
    width: '15rem',
    height: '2.313rem',
    margin: '0.375rem 2.538rem 0.125rem 0',
    fontFamily: 'Montserrat',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lingHeight: 'normal',
    letterSpacing: 'normal',
    color: '#0290ff',
  };
  return (
    <header style={headerStyle}>
      <h1 style={headerTitleStyle}>Bookstore CMS</h1>
      <NavLinks />
      <div className="user-logo">
        <img className="logo" src={image} alt="userImage" />
      </div>
    </header>
  );
};

export default Header;
