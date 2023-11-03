import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick() {
    console.log("바깥 상자 클릭함");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭함");
  }
  function handleBtnClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭함");
  }
  return (
    <>
      <Center
        onClick={handleOuterBoxClick}
        h={"200px"}
        w={"200px"}
        bg={"skyblue"}
      >
        <Center
          onClick={handleInnerBoxClick}
          h={"100px"}
          w={"100px"}
          bg={"coral"}
        >
          <Button onClick={handleBtnClick} bg={"peachpuff"}>
            버튼
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
