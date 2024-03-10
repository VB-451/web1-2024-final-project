import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./styles/NavBar.module.css";

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
            <Link to="/login"><Button color="primary">Log In</Button></Link>
            <Link to="/registration"><Button variant="contained" color="primary">Register</Button></Link>
            <Link to="/generate"><Button variant="contained" color="secondary">Generate</Button></Link>
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}
