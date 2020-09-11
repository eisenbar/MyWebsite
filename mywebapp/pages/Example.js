import * as React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";
import styles from '../styles/exampleStyle.module.css';
import Layout from "../components/layout";

export default function Example() {
    const boxVariants = {
        checked: {scale: 1, background: "rgba(255, 255, 255, 1)"},
        unchecked: {scale: 0.8, background: "rgba(255, 255, 255 ,0.5)"}
    };

    const checkVariants = {
        checked: {pathLength: 0.9},
        unchecked: {pathLength: 0}
    };

    const [isChecked, setIsChecked] = React.useState(true);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    return (
        <Layout>
            <div className={styles.body}>
                <motion.div
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 30,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        cursor: "pointer"
                    }}
                    variants={boxVariants}
                    initial={"checked"}
                    animate={isChecked ? "checked" : "unchecked"}
                    transition={{type: "spring", stiffness: 300, damping: 20}}
                    onTap={() => setIsChecked(!isChecked)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                        <motion.path
                            d="M38 74.707l24.647 24.646L116.5 45.5"
                            fill="transparent"
                            strokeWidth="20"
                            stroke="#A0D"
                            strokeLinecap="round"
                            variants={checkVariants}
                            style={{pathLength: pathLength, opacity: opacity}}
                        />
                    </svg>
                </motion.div>
            </div>
        </Layout>
    );
}
