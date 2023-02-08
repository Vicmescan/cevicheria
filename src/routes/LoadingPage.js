import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/cevdarkfinal.png";

const LoadingPage = () => {
  const navigate = useNavigate()

  setTimeout(() => {
      navigate('/home')
  }, 3000)

  return (
    <>
      <div className="loadingPage-background">
        <img className="loadingPage-Logo" src={logo} alt="logo" />
      </div>
    </>
  );
};

export default LoadingPage;
