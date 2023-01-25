import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuDrinksWine from "./MenuDrinksWine";
import MenuDrinksDrink from "./MenuDrinksDrink";
import estrella from "../images/menuImages/drinksImages/estrella.jpg";
import rothaus from "../images/menuImages/drinksImages/rothaus.png";
import lammsbräu from "../images/menuImages/drinksImages/lammsbräu.jpg";
import eichhofener from "../images/menuImages/drinksImages/eichhofener.jpg";

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
          <MenuDrinksDrink
            title="Estrella Damm"
            image={estrella}
            size="0.33cl"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Rothaus Tannenzäpfle"
            image={rothaus}
            size="0.33cl"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Lammsbräu sin alcohol"
            image={lammsbräu}
            size="0.33cl"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Eichhofener Helles"
            image={eichhofener}
            size="0.50cl"
            price="4.50"
          />
          <br className="d-md-none" ></br>
        </Col>
        <hr className="d-md-none"></hr>
        <Col>
          <h3>Longdrinks</h3>
          <br></br>
          <MenuDrinksDrink title="Gin Tonic" additives="3" image="" price="9" />
          <MenuDrinksDrink
            title="Aperol Spritz"
            additives="3"
            image=""
            price="9"
          />
          <MenuDrinksDrink
            title="Campari Spritz"
            additives="3"
            image=""
            price="9"
          />
          <hr></hr>
          <h3>Refrescos</h3>
          <br></br>
          <MenuDrinksDrink
            title="Proviant Orangenlimo"
            image=""
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Proviant Zitronenlimo & Ingwer"
            image=""
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Proviant Cola"
            additives="1"
            image=""
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Manzana/Naranja/Piña/Ruibarbo/Soda"
            image=""
            size="0.33"
            price="3.50"
          />
          <hr></hr>
          <h3>Agua</h3>
          <p>( Con o sin gas )</p>
          <br></br>
          <MenuDrinksDrink
            title="Viva con Agua"
            image=""
            size="0.33"
            price="3"
          />
          <MenuDrinksDrink
            title="Viva con Agua"
            image=""
            size="0.75"
            price="6"
          />
          <hr></hr>
          <h3>Café y Té</h3>
          <br></br>
          <MenuDrinksDrink
            title="Café solo/doble"
            additives="1"
            image=""
            price="1.50€/2.50"
          />
          <MenuDrinksDrink title="Cortado" additives="1" image="" price="2" />
          <MenuDrinksDrink title="Descafeinado" image="" price="2" />
          <MenuDrinksDrink title="Diversos tés" image="" price="2" />
          <hr></hr>
          <h3>Cócteles con Pisco</h3>
          <br></br>
          <MenuDrinksDrink
            title="Pisco Sour"
            additives="2"
            image=""
            price="10"
          />
          <MenuDrinksDrink
            title="Pisco Maracuyá"
            additives="2"
            image=""
            price="10"
          />
          <MenuDrinksDrink
            title="Pineapple Pisco"
            additives="2"
            image=""
            price="10"
          />
          <MenuDrinksDrink
            title="Chilcano de Pisco"
            additives="2"
            image=""
            price="10"
          />
          <hr></hr>
          <Row>
            <p>Aditivos</p>
            <Col>
              <p>1. Cafeína</p>
              <p>2. Clara de huevo</p>
            </Col>
            <Col>
              <p>3. Colorante</p>
              <p>4. Sulfitos</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuDrinks;
