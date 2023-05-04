import React from "react";
import "./Footer.css";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

function Footer() {
  return (
    <Box className="homeFooter">
      <footer className="footer">
        <Box className="containerFooter">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h3>О нас</h3>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3>Контакты</h3>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3>Социальные сети</h3>
              <Box className="icons">
                <InstagramIcon />
                <TelegramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3>Установить приложение</h3>
              <Box className="icons">
                <AppleIcon style={{ marginTop: "5%", fontSize: "250%" }} />
                <h4 style={{ marginLeft: "10px" }}>загрузите в Aplle Store</h4>
              </Box>
              <Box className="icons">
                <GoogleIcon style={{ marginTop: "5%", fontSize: "250%" }} />
                <h4 style={{ marginLeft: "10px" }}>Доступно в Google Play</h4>
              </Box>

              {/* <img src={apple} alt="" /> */}
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </footer>
    </Box>
  );
}

export default Footer;
