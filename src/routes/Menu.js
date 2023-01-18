import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dish from "../components/Dish";
import "../styles/menu.css";
import papas from "../images/menuImages/papas-a-la-huncaina.jpg"
import causa from "../images/menuImages/causa.jpeg"
import lentejas from "../images/menuImages/lentejas.jpeg"
import garbanzos from "../images/menuImages/garbanzos.jpeg"
import pulpo from "../images/menuImages/pulpo.jpeg"
import cevi1 from "../images/menuImages/cevi1.jpeg"
import cevi2 from "../images/menuImages/cevi2.jpeg"
import cevi3 from "../images/menuImages/cevi3.jpeg"

export default function Menu() {
  return (
    <>
      <Header />

      <div className="menu-background"></div>
      <h1 className="menu-title">Menú</h1>
      <Container className="menu-container">
        <Row>
          <Col md>
            <h3>Entrantes</h3>
            <Dish 
              title={"Papas a la Huancaina"}
              description={"La papa a la huancaína es un entrante típico de la gastronomía peruana que se ha difundido a diferentes regiones del Perú. "}
              image={papas}
              price={6.5}
              />
            <Dish 
              title={"Causa Limeña"}
              description={"La causa limeña es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={causa}
              price={16.5}
            />

            <hr></hr>
            <h3>Platos calientes</h3>
            <Dish
              title={"Lentejas estofadas con verduras"}
              description={"Las lentejas estofadas con verduras son un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={lentejas}
              price={8.5}
            />
            <Dish 
              title={"Garbanzos con langostinos"}
              description={"Los garbanzos con langostinos son un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={garbanzos}
              price={11}
            />
            <Dish 
              title={"Pulpo grillado con puerros"}
              description={"El pulpo grillado con puerros es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={pulpo}
              price={22}
            />
            <hr></hr>
            <h3>Ceviches</h3>
            <p>( Cada pedido viene acompañado de Canchitas )</p>
            <Dish 
              title={"Ceviche de Pescado"}
              description={"El ceviche de pescado es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={cevi1}
              price={14}
            />
            <Dish
              title={"Ceviche de Camarón"}
              description={"El ceviche de camarón es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={cevi2}
              price={16}
            />
            <Dish 
              title={"Ceviche Mixto"}
              description={"El ceviche mixto es un plato típico de la gastronomía peruana, que se originó en la ciudad de Lima. "}
              image={cevi3}
              price={18}
            />
          </Col>
          <Col md>
            <h3>Menú del día</h3>
            <p>(Lu-Vi 12h - 14h)</p>
            <Dish 
              title={"Teriyaki de atún con ajipanca"}
              price={9.5}
            />
            <Dish 
              title={"Sopa de pescado y mariscos"}
              price={8.5}
            />
            <Dish 
              title={"Salmorejo de tomate con jamón ibérico"}
              price={7.5}
            />
            <Dish
              title={"Ensalada de quinoa con aguacate"}
              price={6.5}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
