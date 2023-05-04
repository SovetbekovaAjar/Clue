import { Box } from "@mui/material";
import React from "react";

function AboutUs4() {
  return (
    <Box className="flowers">
      <div className="containerMin">
        <img
          style={{
            marginRight: "20%",
            objectFit: "cover",
            height: "600px",
            width: "600px",
            marginBottom: "100px",
          }}
          src="https://i.pinimg.com/564x/74/e4/f2/74e4f2ac8e4d0d3cb4065baa969484b4.jpg"
          alt="flowers"
        />
        <div className="aboutH1">
          <h1>Сохраняйте понравившиеся идеи</h1>
          <h5>
            Сохраняйте понравившиеся идеи, чтобы вернуться к ним в будущем.
          </h5>
          {/* <Button
            variant="contained"
            size="small"
            style={{ marginLeft: "35%" }}
          >
            Посмотреть
          </Button> */}
        </div>
      </div>
    </Box>
  );
}

export default AboutUs4;
