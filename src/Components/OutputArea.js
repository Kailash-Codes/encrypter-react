import React from "react";
import GuideText from "./GuideText";

const OutputArea = (props) => {
    const out=props.output;
  return (
    <div className="mt-2">
      <GuideText text="Encrypted message is:" />
      <div className="border bg-light w-75 mx-auto rounded text-start px-1" style={{minHeight:"6rem"}}>
      <p style={{ color: "red",overflowWrap:"break-word"}}>{out}</p>
      </div>
    </div>
  );
};

export default OutputArea;
