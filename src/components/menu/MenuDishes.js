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
          <MenuDishesDish title={t("yuca")} price={13} />
          <MenuDishesDish title={t("beluga")} price={14} />
          <MenuDishesDish title={t("tiradito")} price={17} />
          {/* <MenuDishesDish title={t("tigre")} price={12} /> */}
          {/* <MenuDishesDish title={t("choros")} price={12} /> */}
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3>{t("hot_dishes")} </h3>
          </Zoom>
          {/* <MenuDishesDish title={t("locro")} price={8} /> */}
          {/* <MenuDishesDish title={t("queso")} price={10} /> */}
          {/* <MenuDishesDish title={t("sopa")} price={14} /> */}
          <MenuDishesDish title={t("tataki")} price={18} />
          <MenuDishesDish title={t("pisto")} price={17} />
          {/* <MenuDishesDish title={t("encebollado")} price={17} /> */}
          {/* <MenuDishesDish title={t("atun")} price={19} /> */}
          <MenuDishesDish title={t("pulpo")} price={29} />
        </Col>
        <hr className="d-md-none"></hr>
        <Col md>
          <Zoom  triggerOnce="true">
            <h3>CEVICHES</h3>
          </Zoom>
          <MenuDishesDish title={t("cevi_vegano")} price={15} />
          <MenuDishesDish title={t("cevi_pescado")} price={17} />
          <MenuDishesDish title={t("cevi_mixto")} price={19} />
          <MenuDishesDish title={t("cevi_pulpo")} price={21} />
          <MenuDishesDish title={t("cevi_nikkei")} price={21} />
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3>{t("desserts")}</h3>
          </Zoom>
          <MenuDishesDish title={t("suspiro")} price={7} />
          <MenuDishesDish title={t("sueño")} price={7} />
          <MenuDishesDish title={t("tarta")} price={8} />
        </Col>
      </Row>
    </Container>
  );
}
