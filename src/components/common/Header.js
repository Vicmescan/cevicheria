import React from "react";
import i18n from "../../i18n";
import Nav from "react-bootstrap/Nav";
import { Dropdown, NavItem, NavLink, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import logo from "../../images/cevdarkfinal.png";
import "../../styles/home.css";

const Header = () => {
  // forceUpdate to render again after language change avoiding problems and the need to refresh the page
  const forceUpdate = React.useState({})[1].bind(null, {}); 

  // function to change the language
  function changeLanguage(lang) {
    i18n.changeLanguage(`${lang}`);
    forceUpdate();
  }

  return (
    <Navbar className="header" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="justify-content-left ">
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
            <Dropdown className="me-4 d-inline-block " as={NavItem}>
              <Dropdown.Toggle as={NavLink}>
                <MdLanguage />
              </Dropdown.Toggle>
              <Dropdown.Menu className="nav-dropdown w-100">
                <Dropdown.Item
                  className="nav-dropdown-item"
                  onClick={() => changeLanguage("de")}
                >
                  Deutsch
                </Dropdown.Item>
                <Dropdown.Item
                  className="nav-dropdown-item"
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </Dropdown.Item>
                <Dropdown.Item
                  className="nav-dropdown-item"
                  onClick={() => changeLanguage("en")}
                >
                  English
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
