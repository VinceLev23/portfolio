import { motion } from "framer-motion";
import MediaTexte from "../components/Media&Texte";
import UpTransition from "../components/animation/UpTransition";

export default function Home() {
    return (
        <>
            <UpTransition>
                <MediaTexte />
            </UpTransition>
        </>
    )
}