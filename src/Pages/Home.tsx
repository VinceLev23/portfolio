import { motion } from "framer-motion";
import MediaTexte from "../components/Media&Texte";

export default function Home() {
    return (
        <>
            <motion.div
                exit={{ opacity: 0, y: 21 }}
                initial={{ opacity: 0, y: 21 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <MediaTexte />
            </motion.div>
        </>
    )
}