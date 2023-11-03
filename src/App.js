import React from "react";
import { Card, CardBody, Center } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <div>
      <Center>
        <Card color={color} bg={bg}>
          <CardBody>{children}</CardBody>
        </Card>
      </Center>
    </div>
  );
}

function App() {
  return (
    <>
      <MyBox color={"orange"} bg={"skyblue"}>
        연습중
      </MyBox>
      <MyBox color={"red"} bg={"skyblue"}>
        카드카드카드
      </MyBox>
      <MyBox color={"brown"} bg={"skyblue"}>
        카드카드카드카드카드카드
      </MyBox>
    </>
  );
}

export default App;
