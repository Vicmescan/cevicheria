import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/confirm.css";

const Confirm = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  setTimeout(() => {
    navigation("/contact");
  }, 5000);

  return (
    <>
      <motion.div
        className="confirm-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <h1>
          {t("confirmation_Message")}{" "}
          <Spinner animation="grow" variant="light" />{" "}
        </h1>
      </motion.div>
    </>
  );
};

export default Confirm;
