import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import MenuDishes from "../components/MenuDishes";
import MenuDrinks from "../components/MenuDrinks";
import Footer from "../components/Footer";
import "../styles/menu.css";

export default function Menu() {
  return (
    <>
      <Header />

      <div className="menu-background"></div>
      <h1 className="menu-title">Menú</h1>
      <Container className="menu-container">
        <MenuDishes />
        <hr></hr>
        <MenuDrinks />
      </Container>
      <Footer />
    </>
  );
}
