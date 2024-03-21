import React, {useState} from "react";

import styles from "./styles/Generate.module.css"

import NavBar from "../components/NavBar"

export default function Generate(){
    let logged = JSON.parse(localStorage.getItem("logged")) || {loggedIn: false, currentUserID: null};
    
    if(!logged.loggedIn){
        window.location.assign("/");
    }

    const artStyles = [
        {name: "None", src: "https://cdn-icons-png.flaticon.com/512/665/665111.png"},
        {name: "Pixel Art", src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/128997216/original/4e7003bccf5c42fbe73baa1760558b2709909238/create-cute-and-unique-square-pixel-art-drawings-for-you.png"},
        {name: "Synthwave", src: "https://4kwallpapers.com/images/wallpapers/retrowave-synthwave-vaporwave-digital-art-neon-art-purple-2560x2560-5592.jpg"},
        {name: "Logo", src: "https://i.pinimg.com/564x/dd/e1/f8/dde1f8581ef3fe918df9b9ebebac1487.jpg"},
        {name: "Cyberpunk", src: "https://cdn.openart.ai/stable_diffusion/eceb14636e92426145120aed78444b8a560d4622_2000x2000.webp"},
        {name: "Abstract", src: "https://ik.imagekit.io/theartling/prod/original_images/Screenshot_2019-05-22_at_6.05.10_PM.png?tr=w-825,h-600,c-at_max,bg-FFFFFF"},
        {name: "Polygon", src: "https://static.vecteezy.com/system/resources/previews/000/694/584/original/square-rainbow-polygonal-mosaic-background-vector.jpg"},
        {name: "Oil", src: "https://i.etsystatic.com/5533122/r/il/ba3c98/1133472276/il_fullxfull.1133472276_a01i.jpg"},
        {name: "Ink", src: "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ1OC1uLTA3LWJsYWNrYW5kd2hpdGVfMV8wLmpwZw.jpg"},
        {name: "Gothic", src: "https://i.pinimg.com/736x/04/95/26/0495268ff432ce69afa46fa10b3a3a51.jpg"},
        {name: "Fantasy", src: "https://storage.googleapis.com/pai-images/10ac108383e445269f1fa15dc19f53d6.jpeg"},
        {name: "Dark Fantasy", src: "https://images.nightcafe.studio/jobs/1lw0IkvQKknG4Be9Pu12/1lw0IkvQKknG4Be9Pu12--1--f7ewf.jpg?tr=w-1600,c-at_max"},
    ]

    const [selectedStyle, setSelectedStyle] = useState("None");

    const handleStyleClick = (styleName) => {
        setSelectedStyle(styleName);
    };

    let artStylesDivs = artStyles.map((style, index) => (
        <li className={`${styles.artstyle} ${selectedStyle === style.name ? styles.styleSelected : ""}`} onClick={() => handleStyleClick(style.name)}>
            <img src={style.src} className={styles.styleImg} alt="" />
            <div className={styles.artStyleName}>{style.name}</div>
        </li>
    ));

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
                    <div className={styles.generateLocation}></div>
                </div>
            </div>
        </>
        
    )
}