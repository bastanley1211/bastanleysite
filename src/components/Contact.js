import {
  Col,
  Container,
  Dropdown,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Input, Button } from "reactstrap";
import "../App.css";
import { useSpring, animated } from "react-spring";

function Contact() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <Container>
        <Row>
          <Col>
            <h1 className="main-h-one">Contact For Free Quote</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="p-3">
              <FormGroup>
                <FormLabel className="m-2" for="name">
                  Name
                </FormLabel>

                <Input name="name" id="name" required />
                <FormLabel className="m-2" for="company-name">
                  Company (Optional)
                </FormLabel>
                <Input name="company-name" id="company-name" />
                <FormLabel className="m-2" for="email">
                  Email
                </FormLabel>
                <Input name="email" id="email" />
                <FormLabel className="m-2" for="contact-service">
                  Service Needed
                </FormLabel>
                <Dropdown
                  className="m-2"
                  name="contact-service"
                  id="contact-service"
                >
                  <DropdownToggle variant="secondary" caret>
                    Select Here...
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Loan Signing</DropdownItem>
                    <DropdownItem>Mortgage</DropdownItem>
                    <DropdownItem>Mortgage</DropdownItem>
                    <DropdownItem>Mortgage</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <FormLabel className="m-2" for="contact-message">
                  Message
                </FormLabel>
                <Input
                  type="textarea"
                  name="contact-message"
                  id="contact-message"
                />
                <Button variant="secondary" className="m-2 mb-5">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
}

export default Contact;
