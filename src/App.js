import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return (
    <div>
      <Button onClick={{ executeClick }}>{children}</Button>
    </div>
  );
}

function App() {
  function sayHello() {
    console.log("hello");
  }
  function sayGreeting() {
    console.log("greeting");
  }
  return (
    <>
      <MyButton executeClick={sayHello}>hello</MyButton>
      <MyButton executeClick={sayGreeting}>greeting</MyButton>
    </>
  );
}

export default App;
