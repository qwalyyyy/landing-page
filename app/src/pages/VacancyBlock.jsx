// VacancyBlock.jsx
import React, { useState } from 'react';
import './VacancyBlock.scss';
import CitySelector from './CitySelector';

const vacancies = [
  { title: 'Женский парикмахер', location: 'Советский проспект, 2а' },
  { title: 'Мужской парикмахер', location: 'Советский проспект, 2а' },
  { title: 'Администратор', location: 'Советский проспект, 2а' },
  { title: 'Промоутер', location: 'Советский проспект, 2а' },
  { title: 'Мастер маникюра', location: 'Советский проспект, 2а' },
];

const VacancyBlock = () => {
  const [selectedCity, setSelectedCity] = useState('kaliningrad');

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  return (
    <div className="vacancies-container">
      <h1>ВАКАНСИИ</h1>
      <p>Актуальные вакансии в салонах ЦирюльникЪ</p>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <CitySelector selectedCity={selectedCity} onChange={handleCityChange} />
      </div>
      <div className="vacancy-cards">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy-card" key={index}>
            <h2>{vacancy.title}</h2>
            <p>{vacancy.location}</p>
            <button className="learn-button">Пройти обучение</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacancyBlock;
