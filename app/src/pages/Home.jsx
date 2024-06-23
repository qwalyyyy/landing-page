import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.scss';
import VacancyBlock from './VacancyBlock';
import photo from './images/businessmeeeeen.svg'; 

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="centered-content">
          
          <div className="text-block">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
         
          <Link to="/TaskTimeline" className="start-learning-button">Приступить к обучению</Link>
        </div>
        <img src={photo} alt="Фото" className="large-image" />
      </div>
      <VacancyBlock /> 
    </>
  );
}

export default Home;
