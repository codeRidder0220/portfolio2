import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;