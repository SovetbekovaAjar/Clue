import React from "react";
import { Box, Container } from "@mui/material";
import "../components/aboutUs.css";
import Button from "@mui/material/Button";

function AboutUs2() {
  return (
    <Box className="flowers">
      <div className="containerMine">
        <div className="homeH1">
          <h1>Просмотрите, сделайте, опробуйте и примерьте</h1>
          <h5>
            В Clueless вы можете находить для себя новые увлечения и идеи со
            всего мира.
          </h5>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: "35%" }}
          >
            Посмотреть
          </Button>
        </div>

        <img
          style={{
            marginLeft: "14%",
            objectFit: "cover",
            height: "600px",
            width: "600px",
            marginBottom: "100px",
          }}
          src="https://i.pinimg.com/564x/69/87/a2/6987a267c5206a33ea638be4c2d596b3.jpg"
          alt="flowers"
        />
      </div>
    </Box>
  );
}

export default AboutUs2;
