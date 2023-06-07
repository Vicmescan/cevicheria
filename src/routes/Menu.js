import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/common/Header";
import MenuDishes from "../components/menu/MenuDishes";
import MenuDrinks from "../components/menu/MenuDrinks";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";
import "../styles/menu.css";
import ScrollUp from "..";

export default function Menu() {
  ScrollUp();

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <motion.div
        className="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0 }}
      >
        <div className="menu-background"></div>
        <br></br>
        <h1 className="text-decoration-underline mb-5 text-center ">
          {t("menu_title")}
        </h1>
        <MenuDishes />
        <hr></hr>
        <br></br>
        <h1 className="text-decoration-underline mb-5 text-center ">
          {" "}
          {t("drink_title")}{" "}
        </h1>
        <MenuDrinks />
        <br></br>
        <Footer />
      </motion.div>
    </>
  );
}
