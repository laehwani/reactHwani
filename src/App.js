import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function MyComp1() {
  return (
    <Box>
      <Button>텍스트 바꾸기!</Button>
    </Box>
  );
}

function MyComp2() {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <MyComp1></MyComp1>
      {/*MyComp1에 있는 버튼이 클릭되면*/}
      <MyComp2 message={message}></MyComp2>
      {/*MyCom2에 있는 text가 바뀌게*/}
    </div>
  );
}

export default App;
