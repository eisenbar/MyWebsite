import style from "../styles/footer.module.css";
import React from "react";

export default function Footer() {
    return (
      <div className={`${style.bg} ${style.footer}`}>
          I am the footer
      </div>
    );
}