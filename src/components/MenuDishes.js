import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuDishesDish from "./MenuDishesDish";
import "../styles/menu.css";
import papas from "../images/menuImages/dishesImages/papas-a-la-huncaina.jpg";
import lentejasCamote from "../images/menuImages/dishesImages/lentejasCamote.jpeg";
import tataki from "../images/menuImages/dishesImages/tataki.jpeg";
import lecheTigre from "../images/menuImages/dishesImages/lecheTigre.jpeg";
import locro from "../images/menuImages/dishesImages/locro.jpeg";
import sopaPescao from "../images/menuImages/dishesImages/sopaPescao.jpg";
import pulpo from "../images/menuImages/dishesImages/pulpo.jpg";
import cevi1 from "../images/menuImages/dishesImages/cevi1.jpeg";
import cevi2 from "../images/menuImages/dishesImages/cevi2.jpeg";
import cevi3 from "../images/menuImages/dishesImages/cevi3.jpeg";
import suspiro from "../images/menuImages/dishesImages/suspiro.jpeg";
import sueño from "../images/menuImages/dishesImages/sueño.jpeg";

export default function MenuDishes() {
  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <h3>Entrantes</h3>
          <MenuDishesDish
            title={"Papas a la Huancaina"}
            description={
              "La papa a la huancaína es un entrante típico de la gastronomía peruana que se ha difundido a diferentes regiones del Perú. "
            }
            image={papas}
            price={7}
          />
          <MenuDishesDish
            title={
              "Ensalada de lentejas con higos, vinagreta y crema de camotes"
            }
            description={
              "Esta sopa de lentejas con camote es perfecta para le temporada de frío. Muy “llenadora” y con el dulzor del camote y el higo"
            }
            image={lentejasCamote}
            price={12}
          />
          <MenuDishesDish
            title={
              "Tataki de atún con papas Grilladas, cebolla encurtida, y crema de ajipanca"
            }
            image={tataki}
            price={14}
          />
          <MenuDishesDish
            title={"Leche de tigre con pescado y marisco"}
            image={lecheTigre}
            price={12}
          />

          <hr></hr>
          <h3>Platos calientes</h3>
          <MenuDishesDish
            title={"Locro de zapallo con semillas de calabaza"}
            description={
              "Las lentejas estofadas con verduras son un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={locro}
            price={7}
          />
          <MenuDishesDish
            title={"Sopa de pescado y mariscos"}
            image={sopaPescao}
            price={12}
          />
          <MenuDishesDish
            title={"Pulpo grillado con puré de apionabo, setas y espinaca"}
            description={
              "El pulpo grillado con puerros es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={pulpo}
            price={23}
          />
        </Col>
        <hr className="d-md-none"></hr>
        <Col md>
          <h3>Ceviches</h3>
          <p>( Cada pedido viene acompañado de Canchitas )</p>
          <MenuDishesDish
            title={"Ceviche Vegano ( Con verduras y frutas de temporada)"}
            description={
              "El ceviche mixto es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={cevi3}
            price={13}
          />
          <MenuDishesDish
            title={"Ceviche de Pescado"}
            description={
              "El ceviche de pescado es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={cevi1}
            price={15}
          />
          <MenuDishesDish
            title={"Ceviche Mixto ( Con pescado, camarón y calamar) "}
            description={
              "El ceviche mixto es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={cevi3}
            price={17}
          />
          <MenuDishesDish
            title={"Ceviche de Pulpo y pescado"}
            description={
              "El ceviche de camarón es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={cevi2}
            price={19}
          />
          <MenuDishesDish
            title={"Ceviche Nikkei de atún y algas nori"}
            description={
              "El ceviche mixto es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "
            }
            image={cevi3}
            price={19}
          />
          <hr></hr>
          <h3>Postres</h3>
          <MenuDishesDish
            title={"Suspiro a la limeña ( crema de toffee con merengue )"}
            image={suspiro}
            price={6}
          />
          <MenuDishesDish
            title={
              "Sueño de maracuyá ( crema de marcuyá, crumble y merengue ) "
            }
            image={sueño}
            price={7}
          />
        </Col>
      </Row>
    </Container>
  );
}
