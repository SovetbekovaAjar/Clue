import React from "react";
import shareVideo from "../assets/share.mp4";
function Video() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        bottom: "0",
        objectFit: "cover",
      }}
    >
      <video autoPlay loop muted>
        <source
          style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          src={shareVideo}
        ></source>
      </video>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
        className="homeContent container"
      >
        <button
          style={{
            bottom: "20px",
            width: "250px",
            height: "35px",
            color: "black",
            fontSize: "18px",
          }}
          className="btn"
        >
          Начать
        </button>
      </div>
    </div>
  );
}

export default Video;