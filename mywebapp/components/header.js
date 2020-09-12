import headerStyle from "../styles/header.module.css";
import React from "react";
import Hamburger from './hamburgerMenu';

export default function Header() {
    return (
        <div className={`${headerStyle.bg} ${headerStyle.header}`}>
            <Hamburger pageWrapId={"page-wrap"} outerContainerId={"Header"}/>
        </div>
    );
}