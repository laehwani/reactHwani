import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터 : The function with your Effect's logic = 부작용이 있는 함수
  // 두번째 파라미터 : 첫째 파라미터를 실행시키는 값의 배열
  //                만약, 빈 배열이면 첫 랜더링 때만 실행됨
  useEffect(() => {
    console.log("effect 함수 실행됨");
  }, [number, text]);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>버튼</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
    </div>
  );
}

export default App;
