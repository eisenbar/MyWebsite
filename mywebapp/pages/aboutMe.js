import Layout from "../components/layout";
import React from "react";
import styles from "../styles/aboutMe.module.css";


export default function AboutMe() {
    return (
        <Layout>
            <div className={styles.p}>
                <p>Starting in 2016, my life changed with "A Book on C". My nights no longer consisted of
                video games and Hot Fries, but now consisted of Eclipse, Null Pointer Exceptions, Memory Leaks, and
                Hot Fries. I was a Freshman at Grand Valley State University and just beginning my programming
                career. Fast forward 4 years I am now a web-developer for Meijer with a passion for full-stack
                development.</p><br/>
                <p>Through an internship and eventually full time position at Meijer I have gotten the opportunity to
                gain an appreciation for Shipt delivery fulfillment, Meijer promo code implementation, and the
                    {' '}<a href="/adventures">outdoors</a>!
                Check out my experiences page to learn more of what I have done over the years
                    {' '}<a href="/experience">here</a>!
                </p><br/>
                <p>I am an avid hiker, puzzler, and programmer. Thank you for checking out my page and explore around
                    to see what I am all about :)
                </p>
            </div>
        </Layout>
    );
}