import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menuMobile.scss";
import Socials from "../Socials";
import CloseIcon from "../../assets/icons/close.svg";
import Copyright from "../Copyright";

const MenuMobile = () => {
  const [isOpenMenu, setisOpenMenu] = useState(true);

  const onCloseMenuMobile = () => {
    setisOpenMenu(false);
    onCloseMenuMobile();
  };

  return (
    <>
      {isOpenMenu ? (
        <div className="menu-mobile">
          <div className="menu-mobile__header">
            <Socials size="big" />
            <div className="modal__header-close">
              <CloseIcon onClick={onCloseMenuMobile} />
            </div>
          </div>
          <div className="menu-mobile__body">
            <div className="menu-mobile__body-container">
              <ul>
                <li>
                  <NavLink to="/contactsPage">О нас</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/contactsPage">О Luckshimi</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">Контакты</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">Отзывы</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contactsPage">Гарантия качества</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/contactsPage">Гарантия</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">Сертификат качества</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Сервисное обслуживание
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contactsPage">Оплата и доставка</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/contactsPage">
                        По Москве и Подмосковью
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">По России</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">Самовывоз</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contactsPage">Скидки и акции</NavLink>
                </li>
                <li>
                  <NavLink to="/contactsPage">О жемчуге</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/contactsPage">
                        Культивированный жемчуг
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Речной и морской жемчуг
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Классификация качества жемчуга
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Характеристики жемчуга
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Выбор ожерелья из жемчуга
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Как подобрать размер браслета
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">Уход за жемчугом</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Жемчуг разных размеров: фото на модели
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Как выбрать украшения для невесты
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Как носить жемчуг, варианты сочетани одежды с
                        украшениями из жемчуга
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactsPage">
                        Имитации жемчуга. Как отличить натуральный жемчуг от
                        искусственного?
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contactsPage">
                    Политика конфиденциальности
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactsPage">
                    Согласие на обработку персональных данных
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactsPage">Архив</NavLink>
                </li>
                <li>
                  <NavLink to="/contactsPage">Карта сайта</NavLink>
                </li>
                <li>
                  <NavLink to="/contactsPage">Контакты</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Copyright />
        </div>
      ) : null}
    </>
  );
};

export default MenuMobile;
