function App() {
  // jsx 에서 태그 사용시 꼭 종료태그를 작성해야 함.
  // 빈 요소이면 시작태그에서 종료
  return (
    <div>
      <h1>hello react</h1>
      <h2>hi react</h2>
      <MyComp />
    </div>
  );
}

function MyComp() {
  return <h1>HI COMPONENT</h1>;
}

export default App;
