import '../styles/global.css'
import React from 'react';
import { motion } from 'framer-motion';

function App({ Component, pageProps, router }) {
    return (
        <div className="bg">
        <motion.div key={router.route}  initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
        }} >
            <Component {...pageProps} />
        </motion.div>
        </div>
    )
}

export default App;