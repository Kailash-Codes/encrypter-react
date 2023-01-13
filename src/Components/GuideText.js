import React from "react";
const GuideText = (props) => {
  return (
    <p
      className="w-100 mx-auto text-start"
      style={{ fontSize: "20px", fontWeight: "500" }}
    >
      {props.text}
    </p>
  );
};

export default GuideText;
