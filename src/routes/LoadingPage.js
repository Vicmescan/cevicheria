import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/cevdarkfinal.png";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 3000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="loadingPage-background">
        <img className="loadingPage-Logo" src={logo} alt="logo" />
      </div>
    </motion.div>
  );
};

export default LoadingPage;
