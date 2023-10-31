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
  const address = "seoul";
  const country = "korea";
  const phone = "0101111111";
  const age = 44;
  const randomNumber = Math.random();

  return (
    <div>
      <h1>번호 : {randomNumber}</h1>
      <h3>랜덤번호 : {Math.ceil(randomNumber * 10)}</h3>
      <p>
        주소 : {address}
        <br />
        나라 : {country}
        <br />
        번호 : {phone}
        <br />
        나이 : {age}
      </p>
    </div>
  );
}

export default App;
