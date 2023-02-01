import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

const HomeQuote = () => {

  const { t } = useTranslation();

  return (
    <Container className="homeQuote d-none d-lg-block d-xl-block text-center ">
      <p className="fst-italic mb-3"> {t("home_quote")} </p>
    </Container>
  );
};

export default HomeQuote;
