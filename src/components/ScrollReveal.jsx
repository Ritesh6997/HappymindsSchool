import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, width = "100%" }) {
    return (
        <div style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
}
