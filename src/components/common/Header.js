import React from "react";
import i18n from "../../i18n";
import { Link, useLocation } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import {
  Dropdown,
  NavItem,
  Nav,
  NavLink,
  Navbar,
  Container,
} from "react-bootstrap";
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

  // get the current location to underline the current page
  const location = useLocation();

  return (
    <Navbar className="header fluid" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="justify-content-left ">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/home">
                {location.pathname === "/home" ? (
                  <span style={{ textDecoration: "underline" }}>
                    {i18n.t("home")}
                  </span>
                ) : (
                  i18n.t("home")
                )}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/menu">
                {location.pathname === "/menu" ? (
                  <span style={{ textDecoration: "underline" }}>
                    {i18n.t("menu")}
                  </span>
                ) : (
                  i18n.t("menu")
                )}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" as={Link} to="/contact">
                {location.pathname === "/contact" ? (
                  <span style={{ textDecoration: "underline" }}>
                    {i18n.t("contact")}
                  </span>
                ) : (
                  i18n.t("contact")
                )}
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
