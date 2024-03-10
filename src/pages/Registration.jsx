import React from "react";

import styles from "./styles/Registration.module.css"

import NavBar from "../components/NavBar"


export default function Registration(){
    let logged = JSON.parse(localStorage.getItem('logged'));
    return(
        <>
            <NavBar />
            <div className="loginComponent">
                
            </div>
        </>
    )
    
}