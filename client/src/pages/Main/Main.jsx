import React from "react";

import "./main.scss";
import Slider from "../../components/Slider";
import Sales from "../../components/Sales";
import News from "../../components/News";
import About from "../../components/About";
import Feedback from "../../components/Feedback";
import Map from "../../components/Map";

function MainPage() {
  return (
    <>
      <Slider />
      <Sales />
      <News />
      <About />
      <Feedback />
      <Map />
    </>
  );
}

export default MainPage;
