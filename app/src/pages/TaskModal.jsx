import React, { useState } from 'react';
import './TaskModal.scss';

const TaskModal = ({ isOpen, onClose, task }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !task) return null;

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {isSubmitted ? (
          <div className="thank-you-message">
            <p>Спасибо за ответ. Наши HR его проверят и в скором времени вам откроется доступ к следующему этапу.</p>
            <button className="continue-button" onClick={handleContinue}>Продолжить</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-icon">&#9997;</div>
              <h2>{task.title}</h2>
            </div>
            <p>{task.description}</p>
            <textarea placeholder="Ваш ответ:" />
            <button className="submit-button" onClick={onSubmit}>Отправить</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskModal;
