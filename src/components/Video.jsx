import React from "react";
import shareVideo from "../assets/share.mp4";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

function Video() {
  const { user, logout } = useAuthContext();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          objectFit: "cover",
        }}
      >
        <source src={shareVideo}></source>
      </video>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          color: "white",
          // textAlign: "center",
          padding: "1rem",
        }}
        className="homeContent container"
      >
        <div
          className="text___2xMgH"
          style={{ width: "30%", marginLeft: "70%", marginBottom: "10%" }}
        >
          <h1
            className="title___1A6wu"
            // style={{ fontSize: "4rem", marginBottom: "1rem" }}
          >
            Вдохновляй и вдохновляйся
          </h1>
          <h5
            className="description___3jusX"
            style={{ color: "black" }}
            // style={{ fontSize: "2rem", marginBottom: "3rem" }}
          >
            Бери и сохроняй, коментируй. Загружай и вдохновляй других
          </h5>
          {/* {user ? (
            <Button
              onClick={() => logout()}
              // color="black"
              sx={{ mt: 2, ml: 1 }}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={Link}
              to="/auth"
              // color="black"
              sx={{ mt: 2, ml: 1 }}
            >
              Login
            </Button>
          )} */}

          <Button
            component={Link}
            to="/auth"
            style={{
              width: "250px",
              height: "50px",
              backgroundColor: "white",
              color: "black",
              fontSize: "1.2rem",
            }}
            className="btn"
          >
            Начать
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Video;
