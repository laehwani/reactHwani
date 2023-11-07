import { Button, Text } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

function CComp() {
  // 3. context 사용하기 : useContext(Context);

  const message = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function BComp() {
  return <CComp />;
}

function Acomp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccomp에 전달 하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기 :
  // <...Context.Provider value={...}></Context.Provider>
  // 3. tree안에서 context 사용 하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지")}>메시지 바꾸기</Button>
      <MessageContext.Provider value={message}>
        <Acomp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. Context 만들기
// context 이름은 대문자로 시작하고 ...Context로 지어 주는게 관습이다
// 보통 디폴트 값으로 null을 많이 넣어준다
const MessageContext = createContext(null);

export default App;
