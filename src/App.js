import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태 변경할 수 있음.
  // 상태가 같은지 아닌지 판단해서 re-render 결정한다, 객체는 참조값을 사용한다.
  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObject() {
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);
    // 객체인 상태의 state 는 위의 코드처럼 사용하면 안된다. 아래처럼 복사해서 써야한다.
    const newNumberObject = { ...numberObject };
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObject}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
