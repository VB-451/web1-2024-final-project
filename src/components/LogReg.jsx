import React, {useState} from "react";

import styles from "./styles/LogReg.module.css"

import TextField from '@mui/material/TextField';

export default function LogReg(props){
    const [mode, setMode] = useState("Login");
    

    const inputStyles={
        textColor: "white"
    }
    return (
        <>
            <div className={styles.body}>
                <div className={styles.loginBlock}>
                    {/* <div className={styles.modeSelect}>
                        <div className={`${styles.modeOption} ${mode === "Login" && styles.selected}`} onClick={()=>{setMode("Login")}}>Login</div>
                        <div className={`${styles.modeOption} ${mode === "Register" && styles.selected}`} onClick={()=>{setMode("Register")}}>Register</div>
                    </div> */}
                    <div className={styles.optionAction}>{mode === "Login" ? "Login" : "Register"}</div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Username" className={styles.input}/>
                        {mode === "Register" && (<input type="text" placeholder="Email" className={styles.input}/>)}
                        <input type="password" placeholder="Password" className={styles.input}/>
                        {mode === "Register" && (<input type="password" placeholder="Confirm Password" className={styles.input}/>)}
                    </div>
                    <div className={styles.changeLog}>{mode === "Login" ? "New to SynthiArtEscape?" : "Already have an account?"}
                        <div className={styles.changeFunction}>{mode === "Login" ? "Register" : "Login"}</div>
                    </div>
                    <button className={styles.continueButton}>{mode === "Login" ? "Login" : "Register"}</button>
                </div>
            </div>
        </>
    )
}