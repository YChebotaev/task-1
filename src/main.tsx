import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CalendarPage } from "./pages/CalendarPage";
import { ButtonPage } from "./pages/ButtonPage";
import { FormPage } from "./pages/FormPage";
import "./index.css";

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/calendar" />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: '/form',
    element: <FormPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
