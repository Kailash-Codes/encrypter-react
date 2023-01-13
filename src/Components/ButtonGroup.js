import React, { useState } from "react";
import Button from "./Button";

const ButtonGroup = (props) => {
  const [input1, setInput1] = useState("");
  function handleClick(e) {
    if (e.target.name === "encr") {
      setInput1(props.getOut(btoa(props.onclick())));
    } else if (e.target.name === "decr") {
      setInput1(props.getOut(atob(props.onclick())));
    }
  }
  return (
    <div className="d-flex  btn-group gap-2 mt-3 justify-content-center  mb-2">
      <Button className="btn fs-5 text-black btn-primary rounded-3" onClick={handleClick} btnName="Encrypt" name="encr" />
      <Button className="btn fs-5 text-black btn-primary rounded-3" btnName="Decrypt" onClick={handleClick} name="decr" />
    </div>
  );
};

export default ButtonGroup;
