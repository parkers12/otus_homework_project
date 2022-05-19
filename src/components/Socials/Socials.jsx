import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import {
  ReactComponent as SocialsIconIn
} from "../../assets/icons/socials-in.svg";
import {
  ReactComponent as SocialsIconYt
} from "../../assets/icons/socials-yt.svg";
import {
  ReactComponent as SocialsIconPt
} from "../../assets/icons/socials-pt.svg";
import {
  ReactComponent as SocialsIconTw
} from "../../assets/icons/socials-tw.svg";
import {
  ReactComponent as SocialsIconGm
} from "../../assets/icons/socials-gm.svg";
import {
  ReactComponent as SocialsIconFb
} from "../../assets/icons/socials-fb.svg";
import "./socials.scss";

const Socials = ({ size }) => {
  const classes = classNames("socials-list", size);

  return (
    <div className={classes}>
      <a href="/">
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
      </a>
    </div>
  );
};

Socials.propTypes = {
  size: PropTypes.string,
};

Socials.defaultProps = {
  size: "",
};

export default Socials;
