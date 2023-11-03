// import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "@chakra-ui/react";

// 함수명 작성 관습
// handle 이벤트명
function App() {
  function handleClickBtn1() {
    console.log("버튼버튼");
  }

  function handleClickBtn2() {
    console.log("두번째버튼버튼");
  }

  function handleButtonClick(number) {
    console.log(number + "번째 버튼 클릭됨");
  }

  return (
    <div>
      <Button onClick={handleClickBtn1}>첫번째버튼</Button>
      <Button onClick={handleClickBtn2}>두번쨰버튼</Button>
      <Button onClick={() => handleButtonClick(3)}>세번쨰버튼</Button>
      <Button onClick={() => handleButtonClick(4)}>네번쨰버튼</Button>
    </div>
  );
}
export default App;
