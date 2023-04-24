import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import { Fade } from "react-awesome-reveal";

const HomeQuote = () => {
  const { t } = useTranslation();

  const items = t("home_quote").split("\n");

  return (
      <div className="homeQuote-background">
        <Fade delay={500}>
          <div className="homeQuote-background-overlay">
            <Container className="homeQuote text-center">
              <div>
                {items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </Container>
          </div>
        </Fade>
      </div>
  );
};

export default HomeQuote;
