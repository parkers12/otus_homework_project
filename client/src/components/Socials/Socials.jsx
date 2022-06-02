import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";

import { getIcon } from "../../fetchList";
import "./socials.scss";

const Socials = ({ size }) => {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const classes = classNames("socials-list", size);

  useEffect(() => {
    getIcon()
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
          const imgUrl = `/icons/${item.name}.svg`;
          return (
            <a href={item.link}>
              <img src={imgUrl} class={item.class} />
            </a>
          );
        })}
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
