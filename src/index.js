import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/error-page";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";


// this function is used to scroll up the page when the user clicks on a link
export default function ScrollUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu title="Menu Cevichería " />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);
