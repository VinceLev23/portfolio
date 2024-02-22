import { motion } from "framer-motion";

export default function UpTransition({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                exit={{ opacity: 0, y: 21 }}
                initial={{ opacity: 0, y: 21 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </>
    )
}