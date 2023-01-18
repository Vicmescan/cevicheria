import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/menu.css";

export default function Menu() {
  return (
    <>
      <Header />
      <div className="menu-container">
        <h1>Menu</h1>
      </div>
      <Footer />
    </>
  );
}
