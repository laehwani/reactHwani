import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>텍스트 바꾸기!</Button>
    </Box>
  );
}

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("Hello");

  function handleButtonClick() {
    setMessage("안녕하세여");
  }

  return (
    <div>
      <MyComp1 onClick={handleButtonClick}></MyComp1>
      {/*MyComp1에 있는 버튼이 클릭되면*/}
      <MyComp2 message={message}></MyComp2>
      {/*MyCom2에 있는 text가 바뀌게*/}
    </div>
  );
}

export default App;
