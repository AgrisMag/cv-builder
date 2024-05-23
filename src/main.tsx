import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <h1>Home</h1>, errorElement: <h1>404</h1> },
  { path: "/about", element: <h1>About</h1> },
  { path: "/contact", element: <h1>Contact</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
