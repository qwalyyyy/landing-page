import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.scss';
import MenuIcon from './images/menu-icon.svg';
import ProfileIcon from './images/profile-icon.svg';
import HomeIcon from './images/home-icon.svg';

const Header = () => {
  const location = useLocation();
  const isVacanciesPage = location.pathname === '/TaskTimeline';

  return (
    <header className="header">
      <Link to="/" className="menu-button">
        <img src={MenuIcon} alt="Menu" />
      </Link>
      <div className="spacer"></div>
      {isVacanciesPage && (
        <Link to="/" className="home-button">
          <img src={HomeIcon} alt="Home" />
        </Link>
      )}
      <Link to="/profile" className="profile-button">
        <img src={ProfileIcon} alt="Profile" />
      </Link>
    </header>
  );
};

export default Header;
