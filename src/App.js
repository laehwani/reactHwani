// import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return (
    <div>
      <Button onClick={executeClick}>{children}</Button>
    </div>
  );
}

function App() {
  function func1() {
    console.log("안녕");
  }
  let func2 = () => {
    console.log("안녀엉");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("펑션안녀엉");
        }}
      >
        Button3
      </MyComp>
      <MyComp
        executeClick={() => {
          console.log("펑션안녀어어어엉");
        }}
      >
        Button4
      </MyComp>
    </div>
  );
}

export default App;
