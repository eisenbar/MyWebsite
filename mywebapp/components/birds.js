import style from "../styles/bird.module.css";
import React from "react";


export default function Birds({home}) {
    return (
        <div className={style.container}>
            <div className={`${style.birdContainer} ${style.birdContainerOne}`}>
                <div className={`${style.bird} ${style.birdOne}`}/>
            </div>

            <div className={`${style.birdContainer} ${style.birdContainerTwo}`}>
                <div className={`${style.bird} ${style.birdTwo}`}/>
            </div>

            <div className={`${style.birdContainer} ${style.birdContainerTwo}`}>
                <div className={`${style.bird} ${style.birdTwo}`}/>
            </div>
            <div className={`${style.birdContainer} ${style.birdContainerThree}`}>
                <div className={`${style.bird} ${style.birdThree}`}/>
            </div>
            <div className={`${style.birdContainer} ${style.birdContainerFour}`}>
                <div className={`${style.bird} ${style.birdFour}`}/>
            </div>

        </div>
    );
}