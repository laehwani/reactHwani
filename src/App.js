import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭</Button>;
}
// 부모와 자식 간의 연결 기능만 해준다
function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("원래 메세지");

  return (
    <div>
      <SomeComp onClick={() => setMessage("다른 메세지!!")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;
