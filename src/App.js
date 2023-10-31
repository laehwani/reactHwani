function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold",
    fontSize: "70px",
    textAlign: "center",
  };
  return (
    <>
      {/* style 속성은 객체로 주어야 함.
       */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
    </>
  );
}
export default App;
