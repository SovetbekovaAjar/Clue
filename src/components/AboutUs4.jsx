import { Box } from "@mui/material";
import React from "react";

function AboutUs4() {
  return (
    <Box className="flowers">
      <div className="containerMin">
        <img
          style={{
            // marginLeft: "39%",
            float: "left",
            objectFit: "cover",
            height: "",
            width: "100%",
            // marginBottom: "10%",
          }}
          src="https://i.pinimg.com/564x/74/e4/f2/74e4f2ac8e4d0d3cb4065baa969484b4.jpg"
          alt="flowers"
        />
        <div
          className="aboutH1"
          style={{
            maxWidth: "800px",
            marginLeft: "150px",
            marginBottom: "500px",
          }}
        >
          <div
            className="text___2xMgH"
            data-aos="fade-up"
            style={{ marginBottom: "500px", width: "400px" }}
          >
            <h1 className="title___1A6wu">Сохраняйте понравившиеся идеи</h1>
            <h5 className="description___3jusX">
              Сохраняйте понравившиеся идеи, чтобы вернуться к ним в будущем.
            </h5>
          </div>
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
