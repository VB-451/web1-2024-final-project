import React, {useState} from "react";

import styles from "./styles/LogReg.module.css"


export default function LogReg(props){
    const [mode, setMode] = useState(props.modeState);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);
    const [failedRegister, setFailedRegister] = useState(false);
    
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordConfirmed, setPasswordConfirmed] = useState(false);

    let buttonDisabled = true;

    if((!emailValidated || !passwordConfirmed || !username) && mode === "Register"){
        buttonDisabled = true;
    } else if((!username || !password) && mode === "Login"){
        buttonDisabled = true;
    } else{
        buttonDisabled = false;
    }

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

    const handlePasswordConfirm = (e) =>{
        const passwordConfirmedValue = e.target.value;
        setConfirmPassword(passwordConfirmedValue);
        if (password !== "") {
            setPasswordConfirmed(password === passwordConfirmedValue);
        }
    }

    class User {
        constructor(id, username, email, password) {
            this.uid = id;
            this.username = username;
            this.email = email;
            this.password = password;
            this.works = [];
        }
    }

    let users = JSON.parse(localStorage.getItem("users")) || [new User(0)];
    let logged = {loggedIn: false, currentUserID: null};

    const register = () => {
        setFailedRegister(false);
        for (let user of users) {
            if (username === user.username || email === user.email ) {
                setTimeout(()=>{setFailedRegister(true)}, 1500)
                return 0;
            }
        }
        users.push(new User(users.length, username, email, password));
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged", JSON.stringify({loggedIn:true, currentUserID: users.length-1}));
        window.location.assign("/profile/0");
    }

    const login = () =>{
        setFailedLogin(false);
        for (let user of users) {
            if ((username === user.username || username === user.email) && password === user.password) {
                logged.loggedIn = true;
                logged.currentUserID = user.uid;
                localStorage.setItem("logged", JSON.stringify(logged));
                window.location.assign("/profile/0");
            }
        }
        setTimeout(() => {
            setFailedLogin(true);
        }, 1500);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (!buttonDisabled){
                mode === "Login" ? login() : register();
            }
        }
    }


    return (
        <>
            <div className={styles.body}>
                <div className={styles.loginBlock}>
                    <div className={styles.optionAction}>{mode === "Login" ? "Login" : "Register"}</div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder={mode === "Login" ? "Username or Email" : "Username"} className={styles.input} value={username} onChange={(e)=>{setUsername(e.target.value)}} onKeyDown={handleKeyDown}/>
                        {mode === "Register" && (<input type="email" placeholder="Email" className={styles.input} value={email} onChange={handleEmailChange} onKeyDown={handleKeyDown}/>)}
                        <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}} onKeyDown={handleKeyDown}/>
                        {mode === "Register" && (<input type="password" placeholder="Confirm Password" className={styles.input} value={confirmPassword} onChange={handlePasswordConfirm} onKeyDown={handleKeyDown}/> )}
                    </div>
                    {mode === "Login" && failedLogin && (<div className={styles.errorlogin}>Invalid login or password</div>)}
                    {mode === "Register" && failedRegister && (<div className={styles.errorlogin}>User already exists</div>)}
                    <div className={styles.changeLog}>{mode === "Login" ? "New to SynthiArtEscape?" : "Already have an account?"}</div>
                    <div className={styles.changeFunction} onClick={()=>{changeMode()}}>{mode === "Login" ? "Register" : "Login"}</div>
                    <button id="nextButton" className={styles.continueButton} disabled={buttonDisabled}
                            onClick={mode === "Login" ? login : register}>{mode === "Login" ? "Login" : "Register"}
                    </button>
                </div>
            </div>
        </>
    )
}