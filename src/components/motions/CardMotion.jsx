"use client";
import { motion } from "framer-motion";

export default function CardMotion({ children,i }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
        >{children}
        </motion.div>
    )
}
