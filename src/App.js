import { MyComp } from "./Comp/MyComp";
import { MyBox } from "./Comp/MyBox";
import "./style/style1.module.css";
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
