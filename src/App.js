import React from "react";
import { findAllByDisplayValue } from "@testing-library/react";

function MyComp({ to, someProp }) {
  someProp();
  return (
    <div>
      <div>
        <a href={to[0]}> link!!!</a>
      </div>
      <div>
        <button onClick={someProp}>버튼</button>
      </div>
    </div>
  );
}

function App() {
  function func1() {
    console.log("fun1 실행됨!!");
  }
  return (
    <>
      <MyComp to={["https://www.naver.com"]} someProp={func1}></MyComp>
    </>
  );
}

export default App;
