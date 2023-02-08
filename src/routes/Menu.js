import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/common/Header";
import MenuDishes from "../components/menu/MenuDishes";
import MenuDrinks from "../components/menu/MenuDrinks";
import Footer from "../components/common/Footer";
import "../styles/menu.css";
import ScrollUp from "..";

export default function Menu() {

  ScrollUp();

  const { t } = useTranslation();

  return (
    <div className="menu" >
      <Header />
      <div className="menu-background"></div>
      <br></br>
      <h2 className="text-decoration-underline mb-5 text-center ">{t("menu_title")}</h2>
      <MenuDishes />
      <hr></hr>
      <br></br>
      <h2 className="text-decoration-underline mb-5 text-center "> {t("drink_title")} </h2>
      <MenuDrinks />
      <br></br>
      <Footer />
    </div>
  );
}
