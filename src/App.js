import { MyComp } from "./Comp/MyComp";
import { MyBox } from "./Comp/MyBox";
import "../src/style/style1.css";
import { MyContainer } from "./Comp/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
