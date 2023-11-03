import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태(state) 가 변경(이전 state 와 달라짐) 되면
  // Component 를 다시 그린다. 이것을 're render' 라고 한다.
  // state : react 가 관리하는 component 의 값.

  // state 를 얻는 방법
  // UseState();
  // UseState 는 배열을 리턴한다.
  // index 0 : 현재상태(state),

  // const [message, setMessage] = useState("");
  const [message, setMessage] = useState("");
  let text = "초기 메세지";

  function handleInputChange(e) {
    text = e.target.value;
    console.log("text", text);
  }
  function handleBtnClick(e) {
    setMessage("바뀐 상태");
  }
  return (
    <div>
      <Input onChange={handleInputChange}></Input>
      <p>{text}</p>
      <Button onClick={handleBtnClick}>상태 바꾸기</Button>
      <Button onClick={() => setMessage("")}>빈 문자열로 바꾸기</Button>
      <p>{message}</p>
    </div>
  );
}

export default App;
