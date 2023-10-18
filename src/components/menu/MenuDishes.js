import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import MenuDishesDish from "./MenuDishesDish";
import "../../styles/menu.css";
import { Zoom } from "react-awesome-reveal";

export default function MenuDishes() {
  const { t } = useTranslation();

  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <Zoom direction="bottom" triggerOnce="true">
            <h3>{t("starters")}</h3>
          </Zoom>
          <MenuDishesDish title={t("papas")} price={8} />
          {/* <MenuDishesDish title={t("salmorejo")} price={"7/9"} />
          <MenuDishesDish title={t("pallares")} price={12} /> */}
          <MenuDishesDish title={t("ensalada")} price={12} />
          <MenuDishesDish title={t("tiradito")} price={14} />
          {/* <MenuDishesDish title={t("tigre")} price={12} /> */}
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3>{t("hot_dishes")} </h3>
          </Zoom>
          <MenuDishesDish title={t("locro")} price={8} />
          <MenuDishesDish title={t("queso")} price={10} />
          <MenuDishesDish title={t("sopa")} price={14} />
          <MenuDishesDish title={t("tataki")} price={16} />
          <MenuDishesDish title={t("pulpo")} price={29} />
        </Col>
        <hr className="d-md-none"></hr>
        <Col md>
          <Zoom  triggerOnce="true">
            <h3>CEVICHES</h3>
          </Zoom>
          <MenuDishesDish title={t("cevi_vegano")} price={14} />
          <MenuDishesDish title={t("cevi_pescado")} price={16} />
          <MenuDishesDish title={t("cevi_mixto")} price={18} />
          <MenuDishesDish title={t("cevi_pulpo")} price={20} />
          <MenuDishesDish title={t("cevi_nikkei")} price={20} />
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3>{t("desserts")}</h3>
          </Zoom>
          <MenuDishesDish title={t("suspiro")} price={6} />
          <MenuDishesDish title={t("sueño")} price={7} />
        </Col>
      </Row>
    </Container>
  );
}
