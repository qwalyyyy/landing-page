import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.scss';
import VacancyBlock from './VacancyBlock';
import photo from './images/businessmeeeeen.svg'; // Path to your image

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="centered-content">
          {/* Add the text above the button */}
          <div className="text-block">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          {/* Use Link to navigate to TaskTimeline */}
          <Link to="/TaskTimeline" className="start-learning-button">Приступить к обучению</Link>
        </div>
        <img src={photo} alt="Фото" className="large-image" />
      </div>
      <VacancyBlock /> {/* Add the VacancyBlock component here, outside of the home-container */}
    </>
  );
}

export default Home;
