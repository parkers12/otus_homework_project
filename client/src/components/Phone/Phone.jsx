import React from "react";
import "./phone.scss";
import Button from "../Button";

function Phone() {
  const onOpenCall = () => {
    this.props.onOpenCall();
    // console.log(this.props);
  };

  return (
    <div className="phone">
      <span>+7 (499) 391-68-56</span>
      <Button className="button_call" onClick={onOpenCall}>
        заказать звонок
      </Button>
    </div>
  );
}

export default Phone;
