import React from "react";
import InputArea from "./Components/InputArea";
import OutputArea from "./Components/OutputArea";
import ButtonGroup from "./Components/ButtonGroup";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Heading from "./Components/Heading";
const App = () => {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");
  function gettingInput(input) {
    setInp(input);
  }
  
  function getFromApp() {
    return inp;
  }
  function gettingOutput(output) {
    setOut(output);

  }
  return (
    <>
      <div
        className="border pb-3 App container rounded d-flex flex-column text-center justify-content-center"
        style={{
          width: "50vw",
          background: "#6480bb",
          boxShadow:
            "5px 4px 8px rgba(0, 0, 0, 0.9), -5px -4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Heading />
        <InputArea getInput={gettingInput} />
        <ButtonGroup onclick={getFromApp} getOut={gettingOutput} />
        <OutputArea output={out} />
      </div>
    </>
  );
};

export default App;
