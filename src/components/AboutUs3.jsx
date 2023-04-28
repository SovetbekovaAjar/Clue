import React from "react";
import { Box, Container } from "@mui/material";
import "../components/aboutUs3.css";
import Button from "@mui/material/Button";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function AboutUs3() {
  const { user, logout } = useAuthContext();
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
        {user ? (
          <Button onClick={() => logout()} color="inherit">
            Logout
          </Button>
        ) : (
          <Button component={Link} to="/auth" color="inherit">
            Login
          </Button>
        )}

        <img
          style={{
            marginLeft: "20%",
            objectFit: "cover",
            height: "600px",
            width: "600px",
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
