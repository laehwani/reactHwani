import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  const 증가버튼 = () => {
    setNumber(number + 1);
  };

  const 감소버튼 = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <Button onClick={증가버튼}>증가</Button>
      <Button onClick={감소버튼}>감소</Button>
    </div>
  );
}

export default App;
