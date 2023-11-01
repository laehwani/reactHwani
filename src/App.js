import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { MyHeader } from "./Comp/MyHeader";
import { MyComp } from "./Comp/MyComp";
import { MyElem } from "./Comp/MyElem";

function App() {
  return (
    <div>
      <MyHeader />
      <MyComp />
      <MyComp />
      <MyElem />
    </div>
  );
}

export default App;
