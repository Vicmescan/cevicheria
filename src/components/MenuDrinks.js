import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuDrinksWine from "./MenuDrinksWine";

const MenuDrinks = () => {
  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <h3>Vino Blanco</h3>
          <br></br>
          <MenuDrinksWine
            title="Vino Verde Messias, Portugal"
            image="https://www.lavanguardia.com/files/image_948_531/uploads/2019/09/11/5d7a0b1b5cafe.jpeg"
            description="Vino blanco de la D.O. Rueda"
            price={[5.5, 5.5, 19]}
          />
          <MenuDrinksWine
            title="Vino Sanzo Rueda Verdejo, España"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Oveja Blanca, Moscatel, España"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Maria Sanzo, Albariño, España"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[5, 8, 27]}
          />
          <MenuDrinksWine
            title="Saint-Peyre, Picpoul de Pinet, Francia"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Cautiou Cava Brut Imperial, España"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[5, "---", 29]}
          />
          <h3>Vino Tinto</h3>
          <br></br>
          <MenuDrinksWine
            title="Lacrimus Rex. Garnacha y Graciano, España"
            image=""
            description="Vino blanco de la D.O. Rueda"
            price={[4, 7, 23]}
          />
          <h3>Cerveza</h3>
          <br></br>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MenuDrinks;
