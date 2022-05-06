import React from 'react';
import './feedback.scss';

function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        <div className="feedback__header">
        <div className="title title_feedback">Отзывы <span>покупателей</span></div>
        <div className="feedback__header-arrows">
          <div className="arrow arrow_left"></div>
          <div className="arrow arrow_right"></div>
        </div>
      </div>
        <div className="feedback__body">
          <div className="feedback__body-block">
            <div className="feedback__body-block-icon"></div>
            <div className="feedback__body-block-text">
              <div className="feedback__body-block-text-name">
                Анна Алексеева<span>, 29.06.2020</span>
              </div>
              <div className="feedback__body-block-text-comment">
                Ассортимент изделий из жемчуга, по -моему мнению, самый большой в Москве. Единственное, этот магазин специализируется только на жемчуге (пресноводный, морской). Хорошие девушки-консультанты. Оплатить можно и картой и наличными. Выбрала бусы из пресноводного жемчуга. Ношу с удовольствием.
              </div>
            </div>
          </div>
          <div className="feedback__body-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback;
