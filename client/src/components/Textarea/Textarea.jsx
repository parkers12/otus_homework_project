import React from "react";
import "./textarea.scss";
import * as PropTypes from "prop-types";
import classNames from "classnames";

const Textarea = ({ children, className, disabled, active, ...attrs }) => {
  const classes = classNames("textarea-group", className, { active });

  return (
    <div {...attrs} className={classes} disable={disabled}>
      <label className="textarea-group__label">{children}</label>
      <textarea
        type="text"
        className="textarea-group__field"
        placeholder={children}
      ></textarea>
    </div>
  );
};

Textarea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
  active: PropTypes.bool,
};

Textarea.defaultProps = {
  children: "",
  className: undefined,
  disable: false,
  active: false,
};

export default Textarea;
