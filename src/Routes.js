import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<DashboardPage />} />
        <Route path="/cards" element={<h1>CARDS PAGE</h1>} />
        <Route path="/product" element={<h1>PRODUCT PAGE</h1>} />
        <Route path="/wear" element={<h1>WEAR PAGE</h1>} />
        <Route path="/games" element={<h1>GAMES PAGE</h1>} />
        <Route path="/settings" element={<h1>SETTINGS PAGE</h1>} />
        <Route path="/games" element={<h1>GAMES PAGE</h1>} />
      </Route>
    </Routes>
  );
}

export default RoutesPage;
