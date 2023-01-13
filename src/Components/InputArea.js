import React from "react";
import GuideText from "./GuideText";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const InputArea = (props) => {
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    props.getInput(newValue);
  }
  return (
    <div>
      <GuideText text="Enter message:" />
      <div style={{ height: "6rem" }}>
        <textarea
          className="w-100 box h-100 text-area rounded px-1 form-control bg-light"
          type="text"
          style={{ fontSize: "14px" }}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputArea;
