import React from "react";
import { Box, Center, Circle } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Center bg={"red"} h={"200px"}>
        <Box w={"100px"} h={"100px"} bg={"blue"}>
          Lorem ipsum.
        </Box>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </div>
  );
}

export default App;
