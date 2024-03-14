import React from "react";
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./styles/NavBar.module.css";
import Modal from "./Modal"
import LogReg from "./LogReg"

import { Link } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: "#90F99D",
    },
    secondary: {
        main: "#06CCFD",
    }
  },
});

export default function NavBar() {
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mode, setMode] = useState("Login");
  
  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.navbody}>
        <div className={styles.logoplusname}>
          <img className={styles.logo} src="/img/logo.png" alt="" />
          <div className={styles.logoname}>SynthiArtScape</div>
        </div>
        <div className={styles.navOptions}>
          <div className={styles.navOption}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.navOption}>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className={styles.navOption}>
            <Link to="/profile/0">Profile</Link>
          </div>
        </div>
        <div className="buttons">
          <Stack direction="row" spacing={2}>
            <Button color="primary" onClick={()=>{setMode("Login"); toggleLoginModal()}}>Log In</Button>
            <Button variant="contained" color="primary" onClick={()=>{setMode("Register"); toggleLoginModal()}}>Register</Button>
            <Link to="/generate"><Button variant="contained" color="secondary" >Generate</Button></Link>
          </Stack>
        </div>
      </div>
      <Modal isOpen={isLoginOpen} onClose={toggleLoginModal}>
        <LogReg modeState={mode} />
      </Modal>
    </ThemeProvider>
  );
}