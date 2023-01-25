import React from "react";
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
      <br></br>
      <h1 className="menu-titles">Menú</h1>
      <MenuDishes />
      <hr></hr>
      <br></br>
      <h1 className="menu-titles">Bebidas</h1>
      <MenuDrinks />
      <br></br>
      <Footer />
    </>
  );
}
