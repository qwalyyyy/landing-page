import React, { useState } from 'react';
import './ProfilePage.scss';
import TelegramIcon from './images/telegram.png';

const ProfilePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="profile-page">
      <button onClick={toggleModal} className="auth-button">
        Зарегистрироваться/Войти через Telegram
        <img src={TelegramIcon} alt="Telegram" />
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Войти через Telegram</h2>
            <button className="telegram-button">
              <img src={TelegramIcon} alt="Telegram" />
              Войти
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
