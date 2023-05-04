import React from "react";
import { Box, Container, Grid } from "@mui/material";
import "../components/aboutUs.css";
import Button from "@mui/material/Button";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function AboutUs2() {
  // const { user, logout } = useAuthContext();
  return (
    <Box className="flowers">
      <div className="containerMine" style={{ height: "750px" }}>
        <div
          data-aos="fade-up"
          className="text___2xMgH"
          style={{ width: "30%", marginLeft: "10%", marginBottom: "10%" }}
        >
          <h1 className="title___1A6wu" style={{ marginLeft: "5%" }}>
            Просмотрите, сделайте, опробуйте и примерьте
          </h1>
          <h5 className="description___3jusX">
            В Clueless вы можете находить для себя новые увлечения и идеи со
            всего мира.
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
            // marginBottom: "100px",
          }}
          src="https://i.pinimg.com/564x/1f/91/12/1f91126e346e8e856794a2289964788c.jpg"
          alt="flowers"
        />
      </div>
    </Box>
  );
}

export default AboutUs2;
