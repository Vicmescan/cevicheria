import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoadingPage from "../../routes/LoadingPage";
import Home from "../../routes/Home";
import Menu from "../../routes/Menu";
import Contact from "../../routes/Contact";
import Confirm from "../../routes/Confirm";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;