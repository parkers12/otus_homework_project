import React from "react";
import "./item.scss";

const Item = ({ id, picture, article, name, desc, price, sale, category }) => {
  const finPrice = price - (price * sale) / 100;

  return (
    <div className="item">
      <div className="item__photo">
        <img src={picture} alt="" />
      </div>
      <div className="item__text">
        <div className="item__text-article">Артикул {article}</div>
        <div className="item__text-desc">{name}</div>
        <div className="item__text-price">
          <div className="item__text-price-top">
            <div className="item__text-price-old">{price}</div>
            <div className="item__text-price-sale">-{sale}%</div>
          </div>
          <div className="item__text-price-new">{finPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
