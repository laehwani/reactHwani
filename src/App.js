import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import shoes from "./img/shoes.jpg";
import * as PropTypes from "prop-types";

function MyComp(style, text) {
  return (
    <div>
      <p>{text}</p>
      <p>{text}</p>
    </div>
  );
}

MyComp.propTypes = {
  address: PropTypes.string,
  value: PropTypes.string,
};

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
