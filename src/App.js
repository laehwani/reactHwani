import { Button } from "@chakra-ui/react";

function App() {
  let firstB = () => {
    console.log("first");
  };
  return (
    <>
      {/*첫번째 버튼 클릭시 "first" 콘솔출력*/}
      <Button onClick={firstB}>Lorem.</Button>
      {/*두번째는 "second" 콘솔출력*/}
      <Button
        onClick={() => {
          console.log("second");
        }}
      >
        Sunt.?
      </Button>
    </>
  );
}

export default App;
