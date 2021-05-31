import Layout from "../components/layout";
import React from "react";
import styles from "../styles/aboutMe.module.css";

export default function Experience() {
    return (
        <Layout>
            <div className={styles.p}>
                <p>Meijer Backend Web Developer 			Since 2019</p>

                <p>Meijer is a midwest supermarket chain operating over 250 stores across 6 different states</p>

                <ul>
                    <li>
                        Coordinated with lead architects leveraging data analytics, to improve performance and scalability of existing production code leading to a 300% increase in API response time
                    </li>
                    <li>
                        Collaborated with multiple solution driven teams to deploy an API layer that now supports over 10,000 online orders a day
                    </li>
                    <li>
                        Successfully displayed communication skills that resulted in the responsibility of leading daily code review sessions
                    </li>
                    <li>
                        Proven-track record of innovative problem solving that led to the inclusion of handling top priority release issues and an increase in salary
                    </li>
                    <li>
                        Leveraged SAP and Microsoft Azure cloud based products to implement a continuous deployment model using multiple developer and tester environments
                    </li>
                    <li>
                        Programmed software in a startup environment that has now grown to over 300+ co-workers
                    </li>
                </ul>
            </div>
        </Layout>
    );
}