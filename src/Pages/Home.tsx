import MediaTexte from "../components/Media&Texte";
import UpTransition from "../components/animation/UpTransition";
import Header from "../components/Header";
import React from "react";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";

export default function Home() {
    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);

    return (
        <>
            <UpTransition>
                <Header title={textes.homeTitre} />
                <MediaTexte />
            </UpTransition>
        </>
    )
}

