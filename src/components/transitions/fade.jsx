'use client'

import { motion } from "framer-motion"


const Fade = ({ children , duration = 0.5  }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Initial state (invisible)
            animate={{ opacity: 1 }} // Animation state (visible)
            transition={{ duration : duration }} // Duration of the animation
        >
            {children}
        </motion.div>
    )
}

export default Fade