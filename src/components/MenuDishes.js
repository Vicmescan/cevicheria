import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuDishesDish from "./MenuDishesDish";
import "../styles/menu.css";

export default function MenuDishes() {
  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <h3>Entrantes</h3>
          <MenuDishesDish
            title={"Papas a la Huancaina"}
            price={7}
          />
          <MenuDishesDish
            title={
              "Ensalada de lentejas con higos, vinagreta y crema de camotes"
            }
            price={12}
          />
          <MenuDishesDish
            title={
              "Tataki de atún con papas Grilladas, cebolla encurtida, y crema de ajipanca"
            }
            price={14}
          />
          <MenuDishesDish
            title={"Leche de tigre con pescado y marisco"}
            price={12}
          />

          <hr></hr>
          <h3>Platos calientes</h3>
          <MenuDishesDish
            title={"Locro de zapallo con semillas de calabaza"}
            price={7}
          />
          <MenuDishesDish
            title={"Sopa de pescado y mariscos"}
            price={12}
          />
          <MenuDishesDish
            title={"Pulpo grillado con puré de apionabo, setas y espinaca"}
            price={23}
          />
        </Col>
        <hr className="d-md-none"></hr>
        <Col md>
          <h3>Ceviches</h3>
          <p>( Cada pedido viene acompañado de Canchitas )</p>
          <MenuDishesDish
            title={"Ceviche Vegano ( Con verduras y frutas de temporada)"}
            price={13}
          />
          <MenuDishesDish
            title={"Ceviche de Pescado"}
            price={15}
          />
          <MenuDishesDish
            title={"Ceviche Mixto ( Con pescado, camarón y calamar) "}
            price={17}
          />
          <MenuDishesDish
            title={"Ceviche de Pulpo y pescado"}
            price={19}
          />
          <MenuDishesDish
            title={"Ceviche Nikkei de atún y algas nori"}
            price={19}
          />
          <hr></hr>
          <h3>Postres</h3>
          <MenuDishesDish
            title={"Suspiro a la limeña ( crema de toffee con merengue )"}
            price={6}
          />
          <MenuDishesDish
            title={
              "Sueño de maracuyá ( crema de marcuyá, crumble y merengue ) "
            }
            price={7}
          />
        </Col>
      </Row>
    </Container>
  );
}
