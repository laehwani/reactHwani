import { Box, Image } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <div>
      <Box w={"480px"}>
        <Image src={"https://bit.ly/dan-abramov"}></Image>
        <Image src={"https://bit.ly/dan-abramov"} boxSize="150px"></Image>
        <Image src={"https://bit.ly/dan-abramov"} borderRadius={"100%"}></Image>
      </Box>
    </div>
  );
}

export default App;
