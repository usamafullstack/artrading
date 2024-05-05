import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/Routes";

import "./index.css";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <MainRoutes />
    </BrowserRouter>
  </>
);
