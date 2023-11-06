import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div>
      <Box>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></Input>
      </Box>
      <Box>
        <Input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        ></Input>
      </Box>
      <Text>
        {userName}의 email은 {userEmail} 입니다😎😎😎😎
      </Text>
    </div>
  );
}

export default App;
