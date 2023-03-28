import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../styles/confirm.css";

const Confirm = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();


  /* ¡¡¡¡¡ CAMBIAR LA DIRECCIÓN DE ABAJO CUANDO SE DESPLIEGUE !!!!! */
    setTimeout(() => {
      navigation("/contact");
    }, 5000);

  return (
    <>
      <div className="confirm-background">
        <h1>
          {t("confirmation_Message")}{" "}
          <Spinner animation="grow" variant="light" />{" "}
        </h1>
      </div>
    </>
  );
};

export default Confirm;
