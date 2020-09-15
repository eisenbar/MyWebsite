import React from "react";
import  hamStyles from "../styles/hamburger.module.css";
import {bubble as Menu} from 'react-burger-menu';

const menuItem = hamStyles.menuItem;

export default function Hamburger({props}) {

    return(
     <Menu {...props}>
         <a id="home" className={menuItem} href="/">Home</a>
         <a id="about" className={menuItem} href="/aboutMe">About Me</a>
         <a id="skills" className={menuItem} href="/skills">Skills</a>
         <a id="experience" className={menuItem} href="/experience">Experience</a>
         <a id="adventures" className={menuItem} href="/adventures">Adventures</a>
     </Menu>
    );
}

/*
class Example extends React.Component {
 showSettings (event) {
   event.preventDefault();
   .
   .
   .
 }
 render () {
   // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
   return (
     <Menu>
       <a id="home" className="menu-item" href="/">Home</a>
       <a id="about" className="menu-item" href="/about">About</a>
       <a id="contact" className="menu-item" href="/contact">Contact</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
     </Menu>
   );
 }
}
 */