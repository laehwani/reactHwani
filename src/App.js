import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

function App(props) {
  // event bubbling 을 알아보자
  function handleClick(e) {
    // stopPropagation 는 event bubbling 을 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }
  return (
    <div>
      <Center
        onClick={handleClick}
        className="outerBox"
        w={"200px"}
        h={"200px"}
        bg={"gold"}
      >
        <Center
          onClick={handleClick}
          className="innerBox"
          w={"100px"}
          h={"100px"}
          bg={"blue"}
        >
          <Button className="btn" onClick={handleClick} colorScheme="yellow">
            버튼
          </Button>
        </Center>
      </Center>
    </div>
  );
}

export default App;
