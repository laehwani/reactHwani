import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function InputChange(e) {
    setNumber1(Number(e.target.value));
  }
  function InputPlus(e) {
    setNumber2(Number(e.target.value));
  }

  let result = number1 + number2;
  return (
    <div>
      <Input type="number" onChange={InputChange}></Input> +
      <Input type="number" onChange={InputPlus}></Input>={result}
    </div>
  );
}

export default App;
