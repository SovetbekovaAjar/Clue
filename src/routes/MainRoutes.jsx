import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth";
import AppNar from "../components/AppNar";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/main" element={<AppNar />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default MainRoutes;
