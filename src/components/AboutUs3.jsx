import React from "react";
import { Box, Container } from "@mui/material";
import "../components/aboutUs.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AboutUs3() {
  return (
    <Box className="flowers">
      <div className="containerMine" style={{ height: "750px" }}>
        <div
          data-aos="fade-up"
          className="text___2xMgH"
          style={{ width: "30%", marginLeft: "10%", marginBottom: "10%" }}
        >
          <h1 className="title___1A6wu" style={{ marginLeft: "5%" }}>
            Найдите идею
          </h1>
          <h5 className="description___3jusX">
            Что еще вы хотите опробовать? Придумайте запрос на интересующую
            тему, и посмотрите результаты
          </h5>
          <Button component={Link} to="/main" variant="contained" size="small">
            Посмотреть
          </Button>
        </div>

        <img
          style={{
            marginLeft: "20%",
            objectFit: "cover",
            height: "100%",
            width: "40%",
            marginBottom: "100px",
          }}
          src="https://i.pinimg.com/564x/3b/64/18/3b641879cc0f90067d63ac49c1e3290a.jpg"
          alt="flowers"
        />
      </div>
    </Box>
  );
}

export default AboutUs3;
