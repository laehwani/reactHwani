import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Nav, Row } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item xs={8} md={8}>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <SearchBar />
    </Nav>
  );
}

export default App;
