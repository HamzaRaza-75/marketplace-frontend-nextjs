'use client'
import { motion } from "framer-motion";

const Slideup = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>

    );
};

export default Slideup;
