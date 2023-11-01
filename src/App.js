import MyBox, { team, person } from "./MyBox";

function App() {
  return (
    <div>
      <MyBox />
      {/*<MyContainer/>*/}
      <h1>{person}</h1>
      <h1>{team}</h1>
    </div>
  );
}

export default App;
