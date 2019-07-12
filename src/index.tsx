import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import CounterButton from "./components/CounterButton";

ReactDOM.render(
  <div>
    <Hello name="Moto" /> <CounterButton />
  </div>,
  document.getElementById("app")
);
