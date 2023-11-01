import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import shoes from "./img/shoes.jpg";
import * as PropTypes from "prop-types";

function MyComp(props) {
  console.log("My가 받은 props", props);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

MyComp.propTypes = { title: PropTypes.string };

function App() {
  return (
    <>
      <h1
        className="note"
        style={{ background: "skyblue", color: "white" }}
        title="제목 요소"
      >
        Lorem volo.
      </h1>
      <p title="문단 요소">Hwan</p>
      <MyComp title="내 컴포넌트" name={"흥민"} />
      <MyComp title="I am 컴포넌트에요" name={"강인"} />
    </>
  );
}

export default App;
