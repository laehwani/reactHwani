import { address, MyBox, MyContainer, MyElem, person } from "./MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <div>
      <MyBox />
      <MyElem />
      <MyContainer />
    </div>
  );
}

export default App;
