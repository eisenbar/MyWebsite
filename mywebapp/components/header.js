import style from "../styles/header.module.css";
import React from "react";

export default function Header() {
    return (
        <div className={`${style.bg} ${style.header}`}>
            I am the header
        </div>
    );
}