import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home'
import Menu from "./routes/Menu";
import Gallery from "./routes/Gallery";
import About from "./routes/About";
import ErrorPage from "./routes/error-page";
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

