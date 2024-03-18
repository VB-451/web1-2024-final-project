import React from "react";

import styles from "./styles/Generate.module.css"

import NavBar from "../components/NavBar"

export default function Generate(){
    let logged = JSON.parse(localStorage.getItem("logged")) || {loggedIn: false, currentUserID: null};
    
    if(!logged.loggedIn){
        window.location.assign("/");
    }

    const artStyles = [
        {name: "None", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Pixel Art", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Synthwave", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Logo", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Cyberpunk", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Abstract", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Polygon", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Realistic", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Ink", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Gothic", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Fantasy", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
        {name: "Dark Fantasy", src: "https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square.png?fit=600%2C600&ssl=1"},
    ]

    let artStylesDivs = artStyles.map(style => (
        <div className={styles.artstyle}>
            <img src={style.src} className={styles.styleImg} alt="" />
            <div className={styles.artStyleName}>{style.name}</div>
        </div>
    ))

    return (
        <>
            <NavBar />
            <div className={styles.main}>
                <div className={styles.choice}>
                    <div className={styles.promptLable}>Enter your prompt</div>
                    <input type="text" className={styles.promptInput} placeholder="Type anything you want"/>
                    <div className={styles.stylesLable}>Choose your Art Style</div>
                    <div className={styles.styles}>
                            {artStylesDivs}
                    </div>
                </div>
                <div className={styles.generation}>

                </div>
            </div>
        </>
        
    )
}