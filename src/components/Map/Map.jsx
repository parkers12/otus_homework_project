import React from "react";
import "./map.scss";

function Map() {
  return (
    <div className="map">
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
      <div className="map__wrapper">
        <div className="map__contacts">
          <div className="title title_map">Контакты</div>
          <div className="map__contacts-list">
            <div className="
              map__contacts-list-item
              map__contacts-list-item_phone">
              +7 (499) 391-68-56
            </div>
            <div className="
              map__contacts-list-item
              map__contacts-list-item_marker">
              117556, г. Москва, ул. Варшавское шоссе, д. 85
            </div>
            <div className="
              map__contacts-list-item
              map__contacts-list-item_letter">
              info@luckshimi.ru
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
