import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [메세지, set메세지] = useState("");
  const [obj, setObj] = useState({ 메세지: "" });

  function 객체메세지변경(e) {
    // const newobj = {...obj};
    // newobj.메세지 = e.target.value;
    // setObj(newobj);
    setObj({ ...obj, 메세지: e.target.value });
  }

  return (
    <div>
      <Box>
        <Input
          value={메세지}
          onChange={(e) => set메세지(e.target.value)}
        ></Input>
        <Text>{메세지}</Text>
      </Box>
      <Box>
        <Input value={obj.메세지} onChange={객체메세지변경}></Input>
        <Text>{obj.메세지}</Text>
      </Box>
    </div>
  );
}

export default App;
