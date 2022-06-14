import React from "react";
import "./footer.scss";
import Copyright from "../Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__category">
        <div className="footer__category-col">
          <div className="title title_footer">Категории</div>
          <div className="footer__category-col-list">
            <div className="footer__category-col-list-item">
              Кольца с жемчугом
            </div>
            <div className="footer__category-col-list-item">
              Серьги с жемчугом
            </div>
            <div className="footer__category-col-list-item">
              Браслеты из жемчуга
            </div>
            <div className="footer__category-col-list-item">
              Подвески с жемчугом
            </div>
            <div className="footer__category-col-list-item">
              Жемчужные ожерелья
            </div>
            <div className="footer__category-col-list-item">
              Комплекты из жемчуга
            </div>
          </div>
        </div>
        <div className="footer__category-col">
          <div className="title title_footer">Информация</div>
          <div className="footer__category-col-list">
            <div className="footer__category-col-list-item">О нас</div>
            <div className="footer__category-col-list-item">Жемчуг</div>
            <div className="footer__category-col-list-item">Качество</div>
            <div className="footer__category-col-list-item">
              Оплата и доставка
            </div>
            <div className="footer__category-col-list-item">Скидки и акции</div>
            <div className="footer__category-col-list-item">
              Политика конфиденциальности
            </div>
            <div className="footer__category-col-list-item">
              Согласие на обработку персональных данных
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
