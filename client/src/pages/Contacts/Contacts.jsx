import React from "react";

import "./contacts.scss";
import Socials from "../../components/Socials";
import Title from "../../components/Title";
import WhatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import ClockIcon from "../../assets/images/icons/clock.svg";
import PhoneIcon from "../../assets/images/icons/phone.svg";
import LetterIcon from "../../assets/images/icons/letter.svg";

function ContactsPage() {
  const tel =
    "whatsapp://send/?text=Hello&amp;phone=+79263555671&amp;abid=+79263555671";

  return (
    <div className="contacts-page">
      <div className="contacts-page__title">
        <Title className="title_main">Контакты</Title>
      </div>
      <div className="contacts-page__map">
        <iframe
          // eslint-disable-next-line max-len
          src="https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.946602683527!2d37.61805311625134!3d55.65513768052743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab33da48c6b25%3A0xc6eab11f4d7c1731!2z0JLQsNGA0YjQsNCy0YHQutC-0LUg0YguLCA4NSwg0JzQvtGB0LrQstCwLCAxMTc1NTY!5e0!3m2!1sru!2sru!4v1593982014367!5m2!1sru!2sru"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="contacts-page__content">
        <Title className="title_second">График работы</Title>
        <div className="contacts-page__content-block">
          <p className="clock-icon">
            <ClockIcon />
            <img src="../../assets/images/icons/clock.svg" />
            <span>Пн-Пт — с 10:00 до 20:00</span>
          </p>
          <p className="clock-icon">
            <ClockIcon />
            <img src="../../assets/images/icons/clock.svg" />
            <span>Сб-Вс — выходной</span>
          </p>
        </div>
        <Title className="title_second">Отдел по работе с покупателями</Title>
        <div className="contacts-page__content-block">
          <p className="phone-icon">
            <PhoneIcon />
            <img src="../../assets/images/icons/phone.svg" />
            <a href="tel:+74955324091">+7 (499) 391-68-56</a>
          </p>
          <p className="letter-icon">
            <LetterIcon />
            <img src="../../assets/images/icons/letter.svg" />
            <a href="mailto:info@luckshimi.ru">info@luckshimi.ru</a>
          </p>
        </div>
        <Title className="title_second">Отдел сервисного обслуживания</Title>
        <div className="contacts-page__content-block">
          <p className="phone-icon">
            <PhoneIcon />
            <img src="../../assets/images/icons/phone.svg" />
            <a href="tel:+74955324091">+7 (499) 391-68-56</a>
          </p>
          <p className="letter-icon">
            <LetterIcon />
            <img src="../../assets/images/icons/letter.svg" />
            <a href="mailto:service@luckshimi.ru">service@luckshimi.ru</a>
          </p>
        </div>
        <Title className="title_second">Отдел оптовых продаж</Title>
        <div className="contacts-page__content-block">
          <p className="phone-icon">
            <PhoneIcon />
            <img src="../../assets/images/icons/phone.svg" />
            <a href="tel:+74955324091">+7 (499) 391-68-56</a>
          </p>
          <p className="letter-icon">
            <LetterIcon />
            <img src="../../assets/images/icons/letter.svg" />
            <a href="mailto:business@luckshimi.ru">business@luckshimi.ru</a>
          </p>
        </div>
        <Title className="title_second">Напишите нам в whatsapp</Title>
        <div className="contacts-page__content-block">
          <p className="whatsapp-icon">
            <WhatsAppIcon />
            <img src="../../assets/images/icons/whatsapp.svg" />
            <a href={tel}>Начать чат в whatsapp</a>
          </p>
        </div>
        <Title className="title_second">
          Присоединяйтесь к нам в соц сетях
        </Title>
        <div className="contacts-page__content-block">
          <Socials />
        </div>
        <Title className="title_second">Реквизиты Продавца</Title>
        <div className="contacts-page__content-block">
          <p>ИП Эмануилова Елена Васильевна</p>
          <p>Юридический адрес: 117593, г. Москва, ул. Рокотова, 4/2 - 405</p>
          <p>
            Фактический адрес: 117556, г. Москва, ул. Варшавское шоссе, д. 85,
            к. 1
          </p>
          <p>ИНН 772864361827</p>
          <p>ОГРНИП 314774614901187</p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
