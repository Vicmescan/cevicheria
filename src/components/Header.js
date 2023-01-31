import React from "react";
import Nav from "react-bootstrap/Nav";
import { Dropdown, NavItem, NavLink, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import logo from "../images/cevdarkfinal.png";
import "../styles/home.css";

const Header = () => {
  return (
    <Navbar className="header" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="justify-content-left ">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav  >
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav-link"
                eventKey="link-1"
                as={Link}
                to="/menu"
              >
                Menú
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/gallery">
                Galería
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/about">
                Contacto
              </Nav.Link>
            </Nav.Item>
            <Dropdown className="me-4" as={NavItem} >
              <Dropdown.Toggle as={NavLink}>
                <MdLanguage />
              </Dropdown.Toggle>
              <Dropdown.Menu className="nav-dropdown" >
                <Dropdown.Item className="nav-dropdown-item" >Español</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" >Deutsch</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" >English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
