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
      <div className=" App
      border App container rounded d-flex flex-column text-center border-primary justify-center">
        <Heading />
        <InputArea getInput={gettingInput} />
        <ButtonGroup onclick={getFromApp} getOut={gettingOutput} />
        <OutputArea output={out} />
      </div>
    </>
  );
};

export default App;
