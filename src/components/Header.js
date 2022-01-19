import "../App.css";
import { Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
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

function Header() {
  return (
    <>
      <div className="header container-fluid"></div>
      <Navbar bg="faded" expand={false} style={{ listStyle: "none" }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "black" }}>
            <h1>
              <FontAwesomeIcon
                icon={faPaintBrush}
                style={{
                  color: "rgb(201, 84, 6)",
                  fontFamily:
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}
              />{" "}
              Bethany Stanley: Web Experience Engineer
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            autoFocus
            keyboard
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Form className="d-flex m-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light">
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  style={{
                    color: "rgb(201, 84, 6)",
                    fontSize: "1.2em",
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                  }}
                />
              </Button>
            </Form>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1" navbar>
                <NavItem>
                  <Link className="navbar-link" to="/">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navbar-link" to="/about">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navbar-link" to="/contact">
                    Contact
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navbar-link" to="/contact">
                    Blog{" "}
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      style={{
                        color: "rgb(201, 84, 6)",
                        fontSize: ".75em",
                        fontWeight: "light",
                        fontFamily:
                          "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                      }}
                    />
                  </Link>
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
