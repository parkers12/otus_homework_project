import React from 'react';
import './contactsPage.scss';
import Socials from "../../components/Socials";
import Title from "../../components/Title";
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as LetterIcon } from '../../assets/icons/letter.svg';

function ContactsPage() {
    return (
        <div className="contacts-page">
            <div className="contacts-page__title">
                <Title children="Контакты" className="title_main" />
            </div>
            <div className="contacts-page__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.946602683527!2d37.61805311625134!3d55.65513768052743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab33da48c6b25%3A0xc6eab11f4d7c1731!2z0JLQsNGA0YjQsNCy0YHQutC-0LUg0YguLCA4NSwg0JzQvtGB0LrQstCwLCAxMTc1NTY!5e0!3m2!1sru!2sru!4v1593982014367!5m2!1sru!2sru"
                    width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="contacts-page__content">
                <Title children="График работы" className="title_second" />
                <div className="contacts-page__content-block">
                    <p className="clock-icon">
                        <ClockIcon />
                        <span>Пн-Пт — с 10:00 до 20:00</span>
                    </p>
                    <p className="clock-icon">
                        <ClockIcon />
                        <span>Сб-Вс — выходной</span>
                    </p>
                </div>
                <Title children="Отдел по работе с покупателями" className="title_second" />
                <div className="contacts-page__content-block">
                    <p className="phone-icon">
                        <PhoneIcon />
                        <a href="tel:+74955324091">+7 (499) 391-68-56</a>
                    </p>
                    <p className="letter-icon">
                        <LetterIcon />
                        <a href="mailto:info@luckshimi.ru">info@luckshimi.ru</a>
                    </p>
                </div>
                <Title children="Отдел сервисного обслуживания" className="title_second" />
                <div className="contacts-page__content-block">
                    <p className="phone-icon">
                        <PhoneIcon />
                        <a href="tel:+74955324091">+7 (499) 391-68-56</a>
                    </p>
                    <p className="letter-icon">
                        <LetterIcon />
                        <a href="mailto:service@luckshimi.ru">service@luckshimi.ru</a>
                    </p>
                </div>
                <Title children="Отдел оптовых продаж" className="title_second" />
                <div className="contacts-page__content-block">
                    <p className="phone-icon">
                        <PhoneIcon />
                        <a href="tel:+74955324091">+7 (499) 391-68-56</a>
                    </p>
                    <p className="letter-icon">
                        <LetterIcon />
                        <a href="mailto:business@luckshimi.ru">business@luckshimi.ru</a>
                    </p>
                </div>
                <Title children="Напишите нам в whatsapp" className="title_second" />
                <div className="contacts-page__content-block">
                    <p className="whatsapp-icon">
                        <WhatsAppIcon />
                        <a href="whatsapp://send/?text=Hello&amp;phone=+79263555671&amp;abid=+79263555671">
                            Начать чат в whatsapp
                        </a>
                    </p>
                </div>
                <Title children="Присоединяйтесь к нам в соц сетях" className="title_second" />
                <div className="contacts-page__content-block">
                    <Socials />
                </div>
                <Title children="Реквизиты Продавца" className="title_second" />
                <div className="contacts-page__content-block">
                    <p>ИП Эмануилова Елена Васильевна</p>
                    <p>Юридический адрес: 117593, г. Москва, ул. Рокотова, 4/2 - 405</p>
                    <p>Фактический адрес: 117556, г. Москва, ул. Варшавское шоссе, д. 85, к. 1</p>
                    <p>ИНН 772864361827</p>
                    <p>ОГРНИП 314774614901187</p>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
