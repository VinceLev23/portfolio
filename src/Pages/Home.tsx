import { motion } from "framer-motion";
import MediaTexte from "../components/Media&Texte";
import UpTransition from "../components/animation/UpTransition";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <UpTransition>
                <Header title="Développeur Front-End" />
                <MediaTexte />
            </UpTransition>
        </>
    )
}