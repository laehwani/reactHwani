function MyComp2() {
  let name = "화니";
  let age = 33;
  return (
    <div>
      <h1>Hwani React</h1>
      <h2>드개재~</h2>
      <p>
        Hello {name}
        <br />
        {age} 입니다!
        <br />
        {age * 2}double 스코어!
        <br />
        {name + "선수입니다!"}
      </p>
    </div>
  );
}

function App() {
  // jsx 에서 태그 사용시 꼭 종료태그를 작성해야 함.
  // 빈 요소이면 시작태그에서 종료
  return (
    <div>
      <h1>hello react</h1>
      <h2>hi react</h2>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

function MyComp() {
  return <h1>HI COMPONENT</h1>;
}

export default App;
