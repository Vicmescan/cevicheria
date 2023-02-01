import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import MenuDishes from "../components/MenuDishes";
import MenuDrinks from "../components/MenuDrinks";
import Footer from "../components/Footer";
import "../styles/menu.css";
import ScrollUp from "..";

export default function Menu() {

  ScrollUp();

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="menu-background"></div>
      <br></br>
      <h2 className="menu-titles">{t("menu_title")}</h2>
      <MenuDishes />
      <hr></hr>
      <br></br>
      <h2 className="menu-titles"> {t("drink_title")} </h2>
      <MenuDrinks />
      <br></br>
      <Footer />
    </>
  );
}
