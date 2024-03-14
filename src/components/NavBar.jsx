import React from "react";
import { useState, useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  
  let users = JSON.parse(localStorage.getItem("users")) || [{username:null}];
  let logged = JSON.parse(localStorage.getItem("logged")) || {loggedIn: false, currentUserID: null};
  const currentUser = users.find((user) => user.uid === logged.currentUserID) || {username: null};

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mode, setMode] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(logged.loggedIn)
  
  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  
  const logOut = () =>{
    setLoggedIn(false);
    localStorage.setItem("logged", JSON.stringify({loggedIn:false, currentUserID: null}));
    window.location.reload();
  }

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
          <div className={styles.navBarFinal}>
            {!loggedIn && (<Button color="primary" onClick={()=>{setMode("Login"); toggleLoginModal()}}>Log In</Button>)}
            {!loggedIn && (<Button variant="contained" color="primary" onClick={()=>{setMode("Register"); toggleLoginModal()}}>Register</Button>)}
            {loggedIn && (<div className={styles.username}>{currentUser.username}</div>)} 
            {loggedIn && (<Button color="primary" onClick={logOut}>Log Out</Button>)}
            {loggedIn && (<Link to="/generate"><Button variant="contained" color="secondary">Generate</Button></Link>)}
          </div>
        </div>
      </div>
      <Modal isOpen={isLoginOpen} onClose={toggleLoginModal}>
        <LogReg modeState={mode} />
      </Modal>
    </ThemeProvider>
  );
}