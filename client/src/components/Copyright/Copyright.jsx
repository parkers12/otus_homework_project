import React from "react";
import "./copyright.scss";

function Copyright() {
  return (
    <div className="copyright">
      <a href="/">LUCKSHIMI</a>, 2012 — {new Date().getFullYear()}
    </div>
  );
}

export default Copyright;
