import React from "react";
import "./news.scss";
import Button from "../Button";

function News() {
  return (
    <div className="news">
      <div className="news__wrapper">
        <div className="news__wrapper-block">
          <div className="title title_news">Новинки 2022</div>
          <div className="news__list">
            <div className="news__list-item">
              Цепочка из желтого золота с белой морской жемчужиной 9,5-10 мм
            </div>
            <div className="news__list-item">
              Серьги из серебра с белыми речными жемчужинами 11-11,5 мм
            </div>
          </div>
        </div>
        <div className="news__wrapper-button">
          <Button className="button_coral">Купить</Button>
        </div>
      </div>
    </div>
  );
}

export default News;
