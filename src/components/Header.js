import React from "react";
import Nav from "react-bootstrap/Nav";
import { Dropdown, NavItem, NavLink, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";
import logo from "../images/cevdarkfinal.png";
import "../styles/home.css";

const Header = () => {
  return (
    // <div className="header">

      <Navbar className="header" expand="md" sticky="top" >
        <Container>
          <Navbar.Brand as={Link} to="/" className="justify-content-left ">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
          <Nav.Item>
          <Nav.Link className="nav-link" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-1" as={Link} to="/menu">
            Menú
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" as={Link} to="/gallery">
            Galería
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" as={Link} to="/about">
            Nosotros
          </Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>
            <IoLanguage />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Español</Dropdown.Item>
            <Dropdown.Item>Deutsch</Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    /* </div> */
  );
};

export default Header;
