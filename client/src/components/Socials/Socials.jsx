import React, { useEffect, useState } from "react";
// import axios from "axios";
import * as PropTypes from "prop-types";
import classNames from "classnames";

// import { getList } from './getList';
// import {
//   ReactComponent as SocialsIconIn
// } from "../../assets/icons/socials-in.svg";
// import {
//   ReactComponent as SocialsIconYt
// } from "../../assets/icons/socials-yt.svg";
// import {
//   ReactComponent as SocialsIconPt
// } from "../../assets/icons/socials-pt.svg";
// import {
//   ReactComponent as SocialsIconTw
// } from "../../assets/icons/socials-tw.svg";
// import {
//   ReactComponent as SocialsIconGm
// } from "../../assets/icons/socials-gm.svg";
// import {
//   ReactComponent as SocialsIconFb
// } from "../../assets/icons/socials-fb.svg";
import "./socials.scss";

const Socials = ({ size }) => {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const classes = classNames("socials-list", size);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(
        (result) => {
          setList(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
    

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else {
    return (
      <div className={classes}>
        {list.map(item => {
          const imgUrl = `./icons/${item.namecss}.jpg`;
          <a href={item.link}>
            <img src={imgUrl} />
          </a>;
        })}
        {/* <a href="/">
          <SocialsIconIn />
        </a>
        <a href="/">
          <SocialsIconYt />
        </a>
        <a href="/">
          <SocialsIconPt />
        </a>
        <a href="/">
          <SocialsIconTw />
        </a>
        <a href="/">
          <SocialsIconGm />
        </a>
        <a href="/">
          <SocialsIconFb />
        </a> */}
      </div>
    );
  }
};

Socials.propTypes = {
  size: PropTypes.string,
};

Socials.defaultProps = {
  size: "",
};

export default Socials;
