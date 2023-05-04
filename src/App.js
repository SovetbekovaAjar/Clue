import React, { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import { useAuthContext } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    checkAuth();
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return <MainRoutes />;
}

export default App;
