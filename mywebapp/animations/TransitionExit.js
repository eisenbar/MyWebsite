import { motion } from "framer-motion";
import React from "react";

export const TransitionExit = (props, router) => {
    return (
        <motion.div key={router.route}  initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 100
            },
        }}>
            {props}
      </motion.div>
    );
}