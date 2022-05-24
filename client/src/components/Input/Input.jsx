import React from "react";
import "./input.scss";
import * as PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ text, className, disabled, active, ...attrs }) => {
  const classes = classNames("input-group", className, { active });

  return (
    <div {...attrs} className={classes} disable={disabled}>
      <label className="input-group__label">{text}</label>
      <div className="input-group__block">
        <div className="input-group__prepend">
          <span className="input-group__prepend-text"></span>
        </div>
        <input
          type="text"
          className="input-group__field"
          placeholder={text}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
  active: PropTypes.bool,
};

Input.defaultProps = {
  text: "",
  className: undefined,
  disable: false,
  active: false,
};

export default Input;
