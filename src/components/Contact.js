import { Dropdown } from "react-bootstrap";
import { Form, FormGroup, Label } from "reactstrap";
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
      <div className="container-fluid">
        <div className="col-12 mt-1 mb-4">
          <div className="row mx-auto">
            <div className="col">
              <h1 className="main-h-one">Contact For Free Quote</h1>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col">
              <Form className="p-3">
                <FormGroup>
                  <Label className="m-2" for="name">
                    Name
                  </Label>

                  <Input name="name" id="name" required />
                  <Label className="m-2" for="company-name">
                    Company (Optional)
                  </Label>
                  <Input name="company-name" id="company-name" />
                  <Label className="m-2" for="email">
                    Email
                  </Label>
                  <Input name="email" id="email" />
                  <Label className="m-2" for="contact-service">
                    Service Needed
                  </Label>
                  <Dropdown
                    className="m-2"
                    name="contact-service"
                    id="contact-service"
                  >
                    <DropdownToggle variant="secondary" caret>
                      Select Here...
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Web Development Services</DropdownItem>
                      <DropdownItem>Notary Services</DropdownItem>
                      <DropdownItem>Music Services</DropdownItem>
                      <DropdownItem>Writing Services</DropdownItem>
                      <DropdownItem>Other Question</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Label className="m-2" for="contact-message">
                    Message
                  </Label>
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
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Contact;
