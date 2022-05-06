import React from 'react';
import './sales.scss';
import Title from "../Title";
import Item from "../Item";

let itemsData = [
    {
        id: 1,
        picture: "1.jpg",
        article: 1,
        name: "Кольцо Diana с жемчугом высшего класса",
        desc: "Эффектное кольцо DIANA с пресноводным жемчугом высшего класса выглядит роскошно. Такое шикарное, стильное кольцо станет ярким акцентом в вашем образе. Украшение сопровождается сертификатом качества и подарочной упаковкой.",
        price: 100000,
        sale: 25,
        category: "rings"
    },
    {
        id: 2,
        picture: "2.jpg",
        article: 2,
        name: "Тонкий браслет Classic из белого жемчуга 6-6,5 мм АА+",
        desc: "Тонкий браслет CLASSIC из жемчуга малого калибра понравится ценителям изящных украшений. Браслет собран из жемчуга с ярким блеском!",
        price: 200000,
        sale: 50,
        category: "bracelets"
    },
    {
        id: 3,
        picture: "3.jpg",
        article: 3,
        name: "Серьги-пусеты с белым жемчугом 9-9,5 мм",
        desc: "Лаконичные и изящные серьги-пусеты с белым жемчугом станут идеальным дополнением к романтичному или к классическому образу, сделав свою владелицу поистине неотразимой. Очарование нежности для необыкновенной девушки.",
        price: 300000,
        sale: 30,
        category: "earrings"
    }
];

let itemElements = itemsData
    .map( item => <Item
        id={item.id}
        picture={item.picture}
        article={item.article}
        name={item.name}
        desc={item.desc}
        price={item.price}
        sale={item.sale}
        category={item.category}
    /> );

function Sales() {
  return (
      <div className="sales">
        <div className="sales__header">
          <div className="sales__header-block">
            <Title className="title_sales" children="Популярное" />
            <div className="sales__header-block-arrows">
              <div className="arrow arrow_left"></div>
              <div className="arrow arrow_right"></div>
            </div>
          </div>
          <div className="sales__header-block-filter">
            <div className="sales__header-block-filter-item active">популярное</div>
            <div className="sales__header-block-filter-item">лидеры продаж</div>
            <div className="sales__header-block-filter-item">скидки</div>
          </div>
        </div>
        <div className="sales__list">
            { itemElements }
        </div>
      </div>
  )
}

export default Sales;
