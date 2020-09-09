import { motion } from "framer-motion";
import React from "react";

export const TitleLoadFade = (props) => {
    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            }
        }}>
            {props.title}
        </motion.div>
    );
}