import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import CounterButton from "./components/CounterButton";
import NumberPicker from "./components/NumberPicker";

ReactDOM.render(
  <div>
    <Hello name="Moto" /> <NumberPicker />
  </div>,
  document.getElementById("app")
);
