import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Button = (props) => {
  return <button onClick={props.onClick} className={props.className} name={props.name}>{props.btnName}</button>;
};

export default Button;
