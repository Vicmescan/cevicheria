import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

const HomeQuote = () => {
  const { t } = useTranslation();

  const items = t("home_quote").split("\n");

  return (
    <>
      <div className="homeQuote-background"></div>
      <Container className="homeQuote text-center">
        <div>
          {items.map((item, index) => (
            <p key={index} >{item}</p>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomeQuote;
