import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { SignInThree } from "./components/SignInThree";
import Welcome from "./components/Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<SignInThree />} />
      <Route exact path="signUp" element={<Welcome />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
