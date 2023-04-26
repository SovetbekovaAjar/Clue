import React from "react";
import { Box, Container } from "@mui/material";
import "./home.css";
function HomePage() {
  return (
    <Box className="flowers">
      <div className="containerMine">
        <h1 className="homeH1">Просмотрите, сделайте, опробуйте и примерьте</h1>

        <img
          src="https://i.pinimg.com/564x/ff/df/0a/ffdf0aa0c05ef959dd4a7c0946f6f94c.jpg"
          alt="flowers"
        />
      </div>
    </Box>
  );
}

export default HomePage;
