// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 이벤트 핸들러 메소드
  // event 객체를 매개값으로 넣어줌
  function handleClick(event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.type);
  }
  return (
    <div>
      <Button colorScheme="orange" onClick={handleClick}>
        버튼1
      </Button>
      <Button colorScheme="blue" onClick={handleClick}>
        버튼2
      </Button>
    </div>
  );
}

export default App;
