import React from "react";
import i18n from "../i18n";
import Nav from "react-bootstrap/Nav";
import { Dropdown, NavItem, NavLink, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import logo from "../images/cevdarkfinal.png";
import "../styles/home.css";

const Header = () => {

  const forceUpdate = React.useState({})[1].bind(null, {}) // forceUpdate to render again after language change


  function changeLanguage(lang) {
    i18n.changeLanguage(`${lang}`);
    forceUpdate();
  }

  return (
    <Navbar className="header" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="justify-content-left ">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/">
                {i18n.t("home")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/menu">
                {i18n.t("menu")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/contact">
                {i18n.t("contact")}
              </Nav.Link>
            </Nav.Item>
            <Dropdown className="me-4" as={NavItem}>
              <Dropdown.Toggle as={NavLink}>
                <MdLanguage />
              </Dropdown.Toggle>
              <Dropdown.Menu className="nav-dropdown">
                <Dropdown.Item>
                  <a href="/de/" className="nav-dropdown-item" onClick={() => changeLanguage("de")}>Deutsch</a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/es/" className="nav-dropdown-item" onClick={() => changeLanguage("es")}>Español</a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/en/" className="nav-dropdown-item" onClick={() => changeLanguage("en")}>English</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
