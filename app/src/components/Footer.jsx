// Footer.js
import React from 'react';
import './Footer.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; ЦирюльникЪ. Все права защищены</p>
        <div className="icons">
          <a href="https://vk.com/feed" className="icon-link">
            <FontAwesomeIcon icon={faVk} className="icon" />
          </a>
          <a href="https://telegram.me" className="icon-link">
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
