import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuDrinksWine from "./MenuDrinksWine";
import MenuDrinksDrink from "./MenuDrinksDrink";
import { t } from "i18next";
import { Zoom } from "react-awesome-reveal";

const MenuDrinks = () => {
  return (
    <Container className="menu-container">
      <Row>
        <Col md>
          <Zoom  triggerOnce="true">
            <h3> {t("white_wine")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksWine
            title="Vino Verde Messias, Portugal"
            price={[3.5, 5.5, 19]}
          />
          <MenuDrinksWine
            title="Vino Sanzo Rueda Verdejo, España"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Oveja Blanca, Moscatel, España"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Maria Sanzo, Albariño, España"
            price={[5, 8, 27]}
          />
          <MenuDrinksWine
            title="Saint-Peyre, Picpoul de Pinet, Francia"
            price={[4, 7, 23]}
          />
          <MenuDrinksWine
            title="Cautiu Cava Brut Imperial, España"
            price={[5, "---", 29]}
            no02={true}
          />
          <Zoom  triggerOnce="true">
            <h3> {t("red_wine")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksWine
            title="Lacrimus Rex. Garnacha y Graciano, España"
            price={[4, 7, 23]}
          />
          <Zoom  triggerOnce="true">
            <h3> {t("beer")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksDrink title="Estrella Damm" size="0.33" price="3.50" />
          <MenuDrinksDrink
            title="Rothaus Tannenzäpfle"
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink title={t("no_alcohol")} size="0.33" price="3.50" />
          <MenuDrinksDrink
            title="Eichhofener Helles"
            size="0.50"
            price="4.50"
          />
          <br className="d-md-none"></br>
        </Col>
        <hr className="d-md-none"></hr>
        <Col>
          <Zoom  triggerOnce="true">
            <h3> {t("long_drinks")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksDrink title="Gin Tonic" additives="3" price="9" />
          <MenuDrinksDrink title="Aperol Spritz" additives="3" price="9" />
          <MenuDrinksDrink title="Campari Spritz" additives="3" price="9" />
          <hr></hr>
          <Zoom  triggerOnce="true">
          <h3> {t("soft_drinks")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksDrink
            title="Fritz Honigmelone"
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Fritz Zitrone"
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink
            title="Solicola"
            additives="1"
            size="0.33"
            price="3.50"
          />
          <MenuDrinksDrink title={t("juices")} size="0.33" price="3.50" />
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3> {t("water")} </h3>
          </Zoom>
          {/* <p>( {t("gas")} )</p> */}
          <br></br>
          <MenuDrinksDrink title={t("gas")} size="0.33" price="3" />
          <MenuDrinksDrink title={t("gas")} size="0.75" price="6" />
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3> {t("coffee")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksDrink
            title="Café solo/doble"
            additives="1"
            size="2€"
            price="3"
          />
          <MenuDrinksDrink title="Cortado" additives="1" price="2" />
          <MenuDrinksDrink title="Descafeinado" price="2" />
          <MenuDrinksDrink title={t("tee")} price="2" />
          <hr></hr>
          <Zoom  triggerOnce="true">
            <h3> {t("cocktails")} </h3>
          </Zoom>
          <br></br>
          <MenuDrinksDrink title="Pisco Sour" additives="2" price="10" />
          <MenuDrinksDrink title="Pisco Maracuyá" additives="2" price="10" />
          <MenuDrinksDrink title="Pineapple Pisco" additives="2" price="10" />
          <MenuDrinksDrink title="Chilcano de Pisco" additives="2" price="10" />
          <hr></hr>
          <Row>
            <p> {t("additives")} </p>
            <Col>
              <p>1. {t("caffeine")} </p>
              <p>2. {t("eggwhite")} </p>
            </Col>
            <Col>
              <p>3. {t("colouring")} </p>
              <p>4. {t("sulphites")} </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuDrinks;
