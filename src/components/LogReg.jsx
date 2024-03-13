import React, {useState} from "react";

import styles from "./styles/LogReg.module.css"


export default function LogReg(props){
    const [mode, setMode] = useState(props.modeState);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordConfirmed, setPasswordConfirmed] = useState(false);

    const changeMode = () =>{
        if(mode === "Login"){
            setMode("Register");
        } else {
            setMode("Login");
        }
    }

    const handleEmailChange = (e) =>{
        const emailValue = e.target.value;
        setEmail(emailValue);
        setEmailValidated(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue));
    }



    return (
        <>
            <div className={styles.body}>
                <div className={styles.loginBlock}>
                    <div className={styles.optionAction}>{mode === "Login" ? "Login" : "Register"}</div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Username" className={styles.input} value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        {mode === "Register" && (<input type="text" placeholder="Email" className={styles.input} value={email} onChange={handleEmailChange}/>)}
                        <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        {mode === "Register" && (<input type="password" placeholder="Confirm Password" className={styles.input} value={confirmPassword}/>)}
                    </div>
                    <div className={styles.changeLog}>{mode === "Login" ? "New to SynthiArtEscape?" : "Already have an account?"}   
                    </div><div className={styles.changeFunction} onClick={()=>{changeMode()}}>{mode === "Login" ? "Register" : "Login"}</div>
                    <button className={styles.continueButton} disabled={!emailValidated} onClick={()=>{alert("bruh")}}>{mode === "Login" ? "Login" : "Register"}</button>
                </div>
            </div>
        </>
    )
}