import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return (
    <div>
      <Button onClick={{ executeClick }}>{children}</Button>
    </div>
  );
}

function App() {
  console.log("hello");
  return (
    <>
      <MyButton executeClick={"hello"}></MyButton>
      <MyButton executeClick={"greetiong"}></MyButton>
    </>
  );
}

export default App;
