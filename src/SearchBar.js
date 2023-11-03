import { Col, Form, Nav, Row } from "react-bootstrap";
import { Button } from "@chakra-ui/react";

export function SearchBar() {
  return (
    <Nav>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <Button colorScheme="teal" variant="outline" mr="200px">
        Button
      </Button>
    </Nav>
  );
}
