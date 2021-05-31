import Layout from "../components/layout";
import React from "react";
import styles from "../styles/aboutMe.module.css";


export default function Skills() {
    return (
        <Layout>
            <div className={styles.p}>
                <ul>
                   <li>
                       Java
                   </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        HTML/CSS (ReactJS, NextJS, Angular)
                    </li>
                    <li>
                        C#
                    </li>
                    <li>
                        SAFe Agile
                    </li>
                    <li>
                        SQL (mySQL)
                    </li>
                </ul>
            </div>
        </Layout>
    );
}