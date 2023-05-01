import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth";
import Mainpage from "../pages/Mainpage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/main" element={<Mainpage />} />
    </Routes>
  );
}

export default MainRoutes;
