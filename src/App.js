import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import shoes from "./img/shoes.jpg";
function BasicExample() {
  return (
    <div
      style={{ width: 1000, textAlign: "center", margin: "auto", padding: 10 }}
    >
      <MainBackground />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control placeholder="이름을 입력해주세요" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control placeholder="이메일 주소를 입력해주세요" />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">전화번호</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>상세주소</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>검색</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>추가 문구</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <OutlineTypesExample />
      <BasicExample1 />
    </div>
  );
}
function OutlineTypesExample() {
  return (
    <>
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      {/*<Button variant="outline-warning">Warning</Button>{" "}*/}
      {/*<Button variant="outline-danger">Danger</Button>{" "}*/}
      <Button variant="outline-info">Info</Button>{" "}
      {/*<Button variant="outline-light">Light</Button>{" "}*/}
      {/*<Button variant="outline-dark">Dark</Button>*/}
    </>
  );
}
function BasicExample1() {
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
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function MainBackground() {
  return (
    <div
      style={{
        width: 2500,
        height: 500,
        backgroundImage: `url(${shoes})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "brightness(100%)",
        padding: 1,
        textAlign: "center",
        position: "relative",
      }}
    ></div>
  );
}
export default BasicExample;
