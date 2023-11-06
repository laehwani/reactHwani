import React, { useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);

  if (number > 5) {
    const [text, setText] = useState("");
  }
  // 위에 코드는 에러가 뜬다.
  // useState (hook) 이 조건문안에 들어갔기 때문이다.

  return <div></div>;
}

export default App;
