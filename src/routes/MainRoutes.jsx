import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth";

import MainPage from "../pages/MainPage";


function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default MainRoutes;

