import React from "react";
import * as PropTypes from "prop-types";
import { Button, Stack } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <div>
      <Button as="a" href={to} colorScheme="teal" variant="outline">
        {children}
      </Button>
    </div>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver 로 </MyLink>
      <MyLink to={"https://www.daum.net"}>daum 으로</MyLink>
    </>
  );
}

export default App;
