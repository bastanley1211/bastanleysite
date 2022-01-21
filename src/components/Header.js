import "../App.css";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import {
  Offcanvas,
  Container,
  Navbar,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="header container-fluid"></div>
      <Navbar bg="faded" expand={false} style={{ listStyle: "none" }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "black" }}>
            <h1 style={{ fontFamily: "'Satisfy', cursive", fontSize: "2em" }}>
              Bethany Stanley
            </h1>
            {/* <h2 className="small">Web, Notary, Music, and Writing Services</h2> */}
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            autoFocus
            keyboard
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Form
              className="d-flex m-3"
              style={{
                fontFamily:
                  "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              }}
            >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                variant="light"
                style={{ backgroundColor: "rgb(235, 196, 99)" }}
                onClick={handleClose}
              >
                Search
              </Button>
            </Form>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1" navbar>
                <NavItem>
                  <Link className="navbar-link" to="/" onClick={handleClose}>
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="navbar-link"
                    to="/about"
                    onClick={handleClose}
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem className="navbar-link p-0">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      style={{
                        paddingLeft: ".5em",
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "rgba(0, 0, 0, 0.781)",
                      }}
                      nav
                      caret
                    >
                      Services
                    </DropdownToggle>
                    <DropdownMenu
                      style={{ border: "0", background: "transparent" }}
                    >
                      <DropdownItem>
                        <a
                          href="https://dev.bethanystanley.co"
                          className="external-link"
                          onClick={handleClose}
                        >
                          Web Services
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://notary.bethanystanley.co"
                          className="external-link"
                          onClick={handleClose}
                        >
                          Notary
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://music.bethanystanley.co"
                          className="external-link"
                          onClick={handleClose}
                        >
                          Music
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://writer.bethanystanley.co"
                          className="external-link"
                          onClick={handleClose}
                        >
                          Writing
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <Link
                    className="navbar-link"
                    to="/contact"
                    onClick={handleClose}
                  >
                    Contact
                  </Link>
                </NavItem>
                <NavItem>
                  <a
                    className="navbar-link"
                    href="https://blog.bethanystanley.co"
                    onClick={handleClose}
                  >
                    Blog{" "}
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      style={{
                        color: "rgb(235, 196, 99)",
                        fontSize: ".75em",
                        fontWeight: "light",
                        fontFamily:
                          "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                      }}
                    />
                  </a>
                </NavItem>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
