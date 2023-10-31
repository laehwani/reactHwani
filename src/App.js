function MyComp() {
  return (
    <div>
      <h1>흥민!</h1>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        color: "skyblue",
      }}
    >
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

export default App;
