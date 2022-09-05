import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { NotFoundPage } from "./pages/notFound/notFound";
import { SalesPage } from "./pages/sales";
import "./fonts/public-sans-regular.woff";
import "./fonts/public-sans-regular.woff2";
import "./fonts/public-sans-bold.woff";
import "./fonts/public-sans-bold.woff2";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
