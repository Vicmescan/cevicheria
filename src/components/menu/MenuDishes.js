import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import MenuDishesDish from "./MenuDishesDish";
import "../../styles/menu.css";

export default function MenuDishes() {
  const { t } = useTranslation();

  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <h3>{t("starters")}</h3>
          <MenuDishesDish title={t("papas")} price={7} />
          <MenuDishesDish title={t("lentejas")} price={12} />
          <MenuDishesDish title={t("tataki")} price={14} />
          <MenuDishesDish title={t("tigre")} price={12} />
          <hr></hr>
          <h3>{t("hot_dishes")} </h3>
          <MenuDishesDish title={t("locro")} price={7} />
          <MenuDishesDish title={t("sopa")} price={12} />
          <MenuDishesDish title={t("pulpo")} price={23} />
        </Col>
        <hr className="d-md-none"></hr>
        <Col md>
          <h3>CEVICHES</h3>
          <MenuDishesDish title={t("cevi_vegano")} price={13} />
          <MenuDishesDish title={t("cevi_pescado")} price={15} />
          <MenuDishesDish title={t("cevi_mixto")} price={17} />
          <MenuDishesDish title={t("cevi_pulpo")} price={19} />
          <MenuDishesDish title={t("cevi_nikkei")} price={19} />
          <hr></hr>
          <h3>{t("desserts")}</h3>
          <MenuDishesDish title={t("suspiro")} price={6} />
          <MenuDishesDish title={t("sueño")} price={7} />
        </Col>
      </Row>
    </Container>
  );
}
