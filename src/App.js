import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  function handleBtnClick() {
    // text 라는 state 값 변경
    setText("앗녕😎😎😎😎");
  }

  return (
    <div>
      <Button onClick={handleBtnClick}>상태변경</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
