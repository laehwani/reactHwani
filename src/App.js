import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  function plusBtnClick() {
    setNumber(number + 1);
  }
  function minusBtnClick() {
    setNumber(number - 1);
  }
  return (
    <div>
      <input type="number" value={number} />
      <Box>
        <Button onClick={plusBtnClick}></Button>
        <Button onClick={minusBtnClick}></Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </div>
  );
}

export default App;
