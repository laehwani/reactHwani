import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);

  // useEffect 사용시 자주 하는 실수
  useEffect(() => {
    console.log("코드 실행");
    // setNumber(number + 1);
    // 위의 코드처럼 절대 trigger 하는 값을 변경하면 안된다 주의!
  }, [number]);
  return <div></div>;
}

export default App;
