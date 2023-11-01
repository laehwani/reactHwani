import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import shoes from "./img/shoes.jpg";
import * as PropTypes from "prop-types";

function MyComp({ value, address }) {
  return (
    <div>
      <h1>
        {value}는 {address}에 산다
      </h1>
    </div>
  );
}

MyComp.propTypes = {
  address: PropTypes.string,
  value: PropTypes.string,
};

function App() {
  return (
    <>
      <MyComp value={"화니"} address={"신촌"} />
    </>
  );
}

export default App;
