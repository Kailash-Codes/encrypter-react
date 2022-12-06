import React from "react";
const GuideText = (props) => {
  return (
    <p
      className="w-75 mx-auto text-start"
      style={{ fontSize: "20px", fontWeight: "500" }}
    >
      {props.text}
    </p>
  );
};

export default GuideText;
